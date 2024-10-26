import { getStadiums, postStadium, deleteStadium, putStadium } from "./api.js";

let sort = false;
let stadiums = [];

let id = 1;

document.searchStadium = function() {
    let numberDefinedName = 0;
    const searchName = document.getElementById('search-name').value.trim();
    const stadiums = Array.from(document.getElementsByClassName('stadium-box'));

    stadiums.forEach((stadium) => {
        const currentName = stadium.querySelector('h2').textContent.trim();
        if (currentName.includes(searchName)) {
            stadium.style.display = 'flex';
            numberDefinedName += 1;
        } else {
            stadium.style.display = 'none';
        }
    });

    if (numberDefinedName === 0) {
        alert("Element si not find");
    }
} 


document.clearSearch = function() {
    document.getElementById('search-name').value = '';
    const stadiums = document.querySelectorAll('.stadium-box');
    stadiums.forEach(stadium => {
        stadium.style.display = 'flex';
    })
}


document.countAudience = function() {
    const stadiums = Array.from(document.getElementsByClassName('stadium-box'));

    const sum = stadiums.reduce((acc, stadium) => {
        acc += parseFloat(stadium.querySelector('p').textContent.replace("audience: ", ""));
        return acc;
    }, 0);

    const resultCount = document.getElementById('result-count');
    resultCount.textContent = "Total: " + sum;
}


document.startSort = function() {
    const button = document.getElementById('sort');

    if (sort) {
        sort = false;
        button.style.background = '#ffffff';
    } else {
        sort = true;
        button.style.background = 'rgb(96, 180, 146)'
        console.log("1123");
        sortElements();
    }
}


function sortElements() {
    const container = document.getElementById('container-stadiums');
    const items = Array.from(container.getElementsByClassName('stadium-box'));

    items.sort((a, b) => {
        const powerA = parseInt(a.querySelectorAll('p')[1].textContent.replace('lighting power: ', '').replace(' suites', ''));
        const powerB = parseInt(b.querySelectorAll('p')[1].textContent.replace('lighting power: ', '').replace(' suites', ''));
        return powerA - powerB;
    });

    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
}


document.addElement = function() {
    const inputName = document.getElementById("name-create").value;
    const inputNumberOfAudience = document.getElementById("numberOfAudience-create").value;
    const inputLightingPower = document.getElementById("lightingPower-create").value;

    if (inputNumberOfAudience == "" || inputName == "" || inputLightingPower == "") {
        alert("Not all data is entered");

    } else {
        postStadium({
            "name": inputName,
            "audience": inputNumberOfAudience,
            "lighting_power": inputLightingPower,
        }).then(refetchAllStadiums);

        renderItemsList(stadiums);

        document.getElementById("numberOfAudience-create").value = "";
        document.getElementById("name-create").value = "";
        document.getElementById("lightingPower-create").value = "";

        if (sort) {
            sortElements();
        }
    }
}

document.clearInputCreate = function() {
    document.getElementById('name-create').value = "";
    document.getElementById('numberOfAudience-create').value = "";
    document.getElementById('lightingPower-create').value = "";
}


document.clearInputEdit = function() {
    document.getElementById("name-edit").value = "";
    document.getElementById("numberOfAudience-edit").value = "";
    document.getElementById("lightingPower-edit").value = ""
}


document.navigateTo =  function(pageId, menuItemId) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(menuItem => {
        menuItem.classList.remove('open');
    });
    const a = document.getElementById(menuItemId);
    a.classList.add('open');

    const pages = document.querySelectorAll('.container__page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const currentPage = document.getElementById(pageId);
    currentPage.style.display = 'flex';
}

/*------------------------*/

const renderItemsList = (items) => {
    const container = document.getElementById('container-stadiums');

    container.innerHTML = '';

    for (const item of items) {

        const newElement = document.createElement('div');
        newElement.classList.add('stadium-box');

        newElement.setAttribute('data-name', item.name);

        newElement.innerHTML = `
            <h2>${item.name}</h2>
            <p>audience: ${item.audience}</p>
            <p>lighting power: ${item.lighting_power} suites</p>
            <div class="stadium-buttons">
                <button class="edit-button">Edit</button>
                <button class="remove-button">Remove</button>
            </div>
        `
        
        newElement.querySelector('.remove-button').onclick = function() {
            container.removeChild(newElement);
            deleteStadium(item.id).then(refetchStadiums);
        }
        
        newElement.querySelector('.edit-button').onclick = function() {
            document.navigateTo('edit-page', 'menu-edit');
            document.getElementById("name-edit").value = item.name;
            document.getElementById("numberOfAudience-edit").value = item.audience;
            document.getElementById("lightingPower-edit").value = item.lighting_power;

            document.getElementById('edit-button-page').onclick = function() {
                const newName = document.getElementById("name-edit").value;
                const newNumberOfAudience = document.getElementById("numberOfAudience-edit").value;
                const newLightingPower = document.getElementById("lightingPower-edit").value;

                putStadium(item.id, {
                    "name": newName,
                    "audience": newNumberOfAudience,
                    "lighting_power": newLightingPower
                }).then(refetchStadiums);
            
                const stadiumBox = document.querySelector(`.stadium-box[data-name="${item.name}"]`);

                if (stadiumBox) {
                    stadiumBox.querySelector('h2').innerText = newName
                    stadiumBox.querySelectorAll('p')[0].textContent = `audience: ${newNumberOfAudience}`;
                    stadiumBox.querySelectorAll('p')[1].textContent = `${newLightingPower} suites`

                    stadiumBox.setAttribute('data-name', newName);
                }
            
                document.getElementById("name-edit").value = "";
                document.getElementById("numberOfAudience-edit").value = "";
                document.getElementById("lightingPower-edit").value = "";
            }
        }

        container.appendChild(newElement);
    }
}


const refetchStadiums = async() => {
    const allStadiums = await getStadiums();

    stadiums = allStadiums.stadiums;
    console.log(stadiums[0]);

    renderItemsList(stadiums);
}


refetchStadiums();
