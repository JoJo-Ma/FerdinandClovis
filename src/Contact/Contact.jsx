import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

import emailjsCreds from './emailjsCreds.js';
import './contact.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = ({
    name,
    email,
    message,
}) => {
    const errors = {};
    if (!name.trim()) errors.name = 'Please enter your name.';
    else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

    if (!email.trim()) errors.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email.';

    if (!message.trim()) errors.message = 'Please enter a message.';
    else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

    return errors;
};

const initialValues = {
    name: '',
    email: '',
    message: '',
    website: '',
};

function Field({
    name,
    label,
    type = 'text',
    value,
    onChange,
    onBlur,
    error,
    multiline,
}) {
    const hasValue = value && value.length > 0;
    const className = `field-input ${hasValue ? 'has-value' : ''} ${error ? 'has-error' : ''}`;
    const ariaDescribedBy = error ? `${name}-error` : undefined;
    const inputAutoComplete = name === 'email' ? 'email' : 'off';
    const inputId = `field-${name}`;

    return (
        <div className={`field ${multiline ? 'field--multiline' : ''}`}>
            {multiline ? (
                <textarea
                    id={inputId}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    rows="4"
                    aria-invalid={!!error}
                    aria-describedby={ariaDescribedBy}
                    autoComplete={inputAutoComplete}
                    className={className}
                />
            ) : (
                <input
                    id={inputId}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={!!error}
                    aria-describedby={ariaDescribedBy}
                    autoComplete={inputAutoComplete}
                    className={className}
                />
            )}
            <label htmlFor={inputId} className="field-label">{label}</label>
            <span className="field-line" aria-hidden="true" />
            <AnimatePresence>
                {error && (
                    <motion.span
                        id={`${name}-error`}
                        className="field-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                    >
                        {error}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
}

function Contact() {
    const formRef = useRef(null);
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    useEffect(() => {
        if (status !== 'sent' && status !== 'error') return undefined;
        const t = setTimeout(() => {
            if (status === 'sent') {
                setValues(initialValues);
                setTouched({});
                setErrors({});
            }
            setStatus('idle');
        }, 5000);
        return () => clearTimeout(t);
    }, [status]);

    const liveErrors = validate(values);
    const isValid = Object.keys(liveErrors).length === 0;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
        if (touched[name] && errors[name]) {
            setErrors((prev) => {
                const next = validate({ ...values, [name]: value });
                return { ...prev, [name]: next[name] };
            });
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((t) => ({ ...t, [name]: true }));
        setErrors(validate(values));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        setTouched({ name: true, email: true, message: true });
        if (Object.keys(found).length > 0) return;
        if (values.website.trim().length > 0) {
            // honeypot — silently no-op
            setStatus('sent');
            return;
        }

        setStatus('sending');
        emailjs.sendForm(
            emailjsCreds.serviceId,
            emailjsCreds.templateId,
            formRef.current,
            emailjsCreds.userId,
        ).then(
            () => setStatus('sent'),
            () => setStatus('error'),
        );
    };

    const visibleError = (name) => (touched[name] || status !== 'idle' ? errors[name] : undefined);

    return (
        <section id="contact" className="contact-section">
            <div className="contact-grid">
                <div className="contact-aside">
                    <h1 className="contact-headline">Get in touch!</h1>
                </div>

                <div className="contact-form-wrap">
                    <AnimatePresence mode="wait">
                        {status === 'sent' ? (
                            <motion.div
                                key="sent"
                                className="contact-success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="contact-success-mark">✓</span>
                                <p className="contact-success-body">Sent!</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                ref={formRef}
                                className="contact-form"
                                noValidate
                                onSubmit={handleSubmit}
                                exit={{
                                    opacity: 0,
                                    y: -16,
                                    transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
                                }}
                            >
                                <input
                                    type="text"
                                    name="website"
                                    value={values.website}
                                    onChange={handleChange}
                                    tabIndex="-1"
                                    autoComplete="off"
                                    className="honeypot"
                                    aria-hidden="true"
                                />

                                <Field
                                    name="name"
                                    label="Your name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={visibleError('name')}
                                />

                                <Field
                                    name="email"
                                    label="Email address"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={visibleError('email')}
                                />

                                <Field
                                    name="message"
                                    label="Message"
                                    multiline
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={visibleError('message')}
                                />

                                <div className="contact-actions">
                                    <button
                                        type="submit"
                                        className="contact-submit"
                                        disabled={!isValid || status === 'sending'}
                                    >
                                        <span className="contact-submit-label">
                                            {status === 'sending' ? 'Sending…' : 'Send'}
                                        </span>
                                        <span className="contact-submit-arrow" aria-hidden="true">→</span>
                                    </button>
                                    {status === 'error' && (
                                        <span className="contact-error-msg">Error! :(</span>
                                    )}
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Contact;
