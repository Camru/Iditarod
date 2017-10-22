import {musherResults} from './assets/Iditarod_2017';

createMusherListElement(musherResults);

function createMusherListElement (results) {
    const list = document.getElementById('name-list');
    const listItemClass = 'list-item';
    for (let i = 0; i < results.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = results[i].name;
        listItem.className = listItemClass;
        list.appendChild(listItem);
    }

    list.addEventListener('mouseover', function (e) {
        if (e.target.className === listItemClass) {
            console.log(e.target.innerHTML); // (camden)
        };
    }, false);
}