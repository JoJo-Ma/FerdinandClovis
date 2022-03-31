const mappingLink = [
  {
    front: cardImages.youtubeFront,
    back: cardImages.hkBack,
    ref: "https://youtu.be/-gXScXUrzOE",
    caption: 'Ferdinand Magician, HK 2017'
  },
  {
    front: cardImages.youtubeFront,
    back: cardImages.parisBack,
    ref: "https://youtu.be/6mZIkBIsTjs",
    caption: '24 hours in Paris (2018)'
  },
  {
    front: cardImages.youtubeFront,
    back: cardImages.trophyBack,
    ref: "https://youtu.be/_M_KOaLFxJ0",
    caption: 'GRAND PRIX VIE HONG KONG'
  },
  {
    front: cardImages.scmpFront,
    back: cardImages.journalBack,
    ref: "https://www.scmp.com/sport/outdoor/article/3120195/reverse-hong-kong-trail-unsupported-record-set-magician-showing-trick",
    caption: 'Reverse Hong Kong Trail unsupported record set by magician'
  },
  {
    front: cardImages.petitjournalFront,
    back: cardImages.journalBack,
    ref: "https://lepetitjournal.com/hong-kong/ferdinand-banquier-le-jour-et-magicien-la-nuit-279609",
    caption: 'Ferdinand: banquier le jour et magicien la nuit'
  },
  {
    front: cardImages.clockenflapFront,
    back: cardImages.journalBack,
    ref: "https://www.clockenflap.com/content/ferdinand",
    caption: 'Clockenflap introduction'
  },
  {
    front: cardImages.zoomFront,
    back: cardImages.camBack,
    ref: "https://us02web.zoom.us/rec/share/zf4uyEGXUhL8-TAQbtkcdWPka0Nr5KdqN4LlcS8OzdQSWsplBerkBJ47hrKz07zn.9Opv-Pwagt3yc2Bf",
    caption: 'Webinar on trail running'
  },
]

let countCard = 7

function addCardToFlexBox(index) {
  document.getElementById("card-deck").innerHTML += `
  <div class="child-portfolio-videos new-item">
    <img class="child-portfolio-videos-front card" src=${mappingLink[index].back} alt="Ferdinand Clovis">
    <img class="child-portfolio-videos-back card" src=${mappingLink[index].front} alt="Backside of Flexbox playing card">
    <a href=${mappingLink[index].ref} rel="noopener noreferrer" target="_blank" class="child-portfolio-textblock">${mappingLink[index].caption}</a>
  </div>
  `
  const id = 'pick-a-card-child'+(index+1)
  console.log(id)
  const selectedCard = document.getElementById(id)
  selectedCard.style.display = "none"

  countCard -= 1;
  if(countCard === 0) {
    document.getElementsByClassName("pick-a-card")[0].style.display ="none"
  }
}

function hoveredCard(){

}
