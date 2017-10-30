import {play, pause, reset, getHighlightedMusher} from './map';
import {musherResults} from './assets/Iditarod_2017';

const toggleMenu = e => {
    const nameContainer = document.getElementById('name-container');
    if (nameContainer.className === 'menu-open') {
        nameContainer.className = 'menu-closed';
    } else {
        nameContainer.className = 'menu-open';
    }
};

const toggleAbout = e => {
    const container = document.getElementById('about-container');
    if (container.className === 'menu-open') {
        container.className = 'menu-closed';
    } else {
        container.className = 'menu-open';
    }
};

const createMusherListElement = results => {
    const list = document.getElementById('name-list');
    for (let i = 0; i < results.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${i + 1}: ${results[i].name}`;
        listItem.dataset.name = results[i].name;
        listItem.className = 'list-item';
        list.appendChild(listItem);
    }

    list.addEventListener('click', getHighlightedMusher);
};

createMusherListElement(musherResults);

const aboutBtn = document.getElementById('about-btn');
const menuBtn = document.getElementById('menu-btn');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
aboutBtn.addEventListener('click', toggleAbout);
menuBtn.addEventListener('click', toggleMenu);
playBtn.addEventListener('click', play);
stopBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
