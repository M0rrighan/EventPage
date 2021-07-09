const speakers = [
  {
    name: 'Pinco Pallino',
    role: 'experienced oenologists',
    info: `Expert in markets and enology, he is one of the most authoritative 
          voices on "authentic or natural" wine, a theme to which he has also 
          dedicated a book`,
    pictureUrl: './img/enologo1.jpg',
  },
  {
    name: 'Grozda Belovinsky',
    role: 'experienced wine maker',
    info: `She denies using a recipe but her wines undoubtedly have her strong fingerprint. 
          She supports the hyperselection of grapes, also through optical sorters, 
          to vinify only absolutely ripe grapes.`,
    pictureUrl: './img/enologo2.jpg',
  },
  {
    name: 'Risto Lozarski',
    role: 'experienced oenologists',
    info: `He is an expert who loves a contemporary style of wine based on elegance, 
          the containment of alcohol and the use of wood.`,
    pictureUrl: './img/enologo3.jpg',
  },
  {
    name: 'Acino Buongustaia',
    role: 'sommelier',
    info: `He has created a very special wine list, which leads guests to discover bottles
           that are not at all obvious, coming from both Italy and the rest of the world..`,
    pictureUrl: './img/enologo4.jpg',
  },
];

function createSpeakerCard(speakerDataObj) {
  const htmlTxt = `<li class="speakerCard">
                    <div class="speakerPicture">
                      <div class="pictureHolder">
                        <img 
                        class="picture"
                        src="${speakerDataObj.pictureUrl}" 
                        alt="Picture of: ${speakerDataObj.name} - ${speakerDataObj.role}">
                      </div>          
                    </div>
                    <div class="speakerData">
                      <div class="speakerName">${speakerDataObj.name}</div>
                      <div class="speakerRole">${speakerDataObj.role}</div>
                      <p class="separatorSmall"></p>
                      <div class="speakerInfo">${speakerDataObj.info}
                      </div>
                    </div>
                  </li>`;
  return htmlTxt;
}

const parentElmnt = document.querySelector('.speakersContent');

function populate() {
  for (let i = 0; i < speakers.length; i += 1) {
    parentElmnt.innerHTML += createSpeakerCard(speakers[i]);
  }
}
parentElmnt.onload = populate();
