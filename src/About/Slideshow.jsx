import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './about.css';
import data from './data.js';

function Slideshow() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
    });
    const [selected, setSelected] = useState(0);
    const [snaps, setSnaps] = useState([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    );

    useEffect(() => {
        if (!emblaApi) return undefined;
        const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
        setSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="slideshow-container">
            <div className="embla" ref={emblaRef}>
                <div className="embla-track">
                    {data.map((el) => (
                        <div className="embla-slide" key={el.img}>
                            <img
                                src={el.img}
                                alt={el.text || 'Ferdinand Clovis'}
                                loading="lazy"
                                className="embla-slide-img"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="slideshow-arrow slideshow-arrow-prev"
                aria-label="Previous slide"
                onClick={scrollPrev}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                type="button"
                className="slideshow-arrow slideshow-arrow-next"
                aria-label="Next slide"
                onClick={scrollNext}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <ul className="embla-dots">
                {snaps.map((_, idx) => (
                    /* eslint-disable-next-line react/no-array-index-key */
                    <li key={idx}>
                        <button
                            type="button"
                            className={`embla-dot ${idx === selected ? 'is-selected' : ''}`}
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => scrollTo(idx)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Slideshow;
