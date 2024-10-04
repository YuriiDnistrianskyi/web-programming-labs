let sort = false;

function searchStadium() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    const stadiums = document.querySelectorAll('.stadium-box');

    stadiums.forEach(stadium => {
        stadium.classList.remove('no-element');
    })

    stadiums.forEach(stadium => {
        let stadiumName = stadium.querySelector('h2').textContent.toLowerCase();

        if (!stadiumName.includes(searchName)) {
            stadium.classList.add('no-element');
        }
    });
}

function clearSearch() {
    document.getElementById('search-name').value = '';
}

function countAudience() {
    let sum = 0;
    const stadiums = document.querySelectorAll('.stadium-box');

    stadiums.forEach(stadium => {
        let newText = stadium.querySelector('p').textContent;
        let newNumber = parseInt(newText.replace(/\D/g, ''));

        if (!isNaN(newNumber)){
            sum += newNumber;
        }
    })

    const resultCount = document.getElementById('result-count');
    resultCount.textContent = "Total: " + sum;
}

function addElement() {
    const container = document.getElementById("container-stadiums");
    const inputNumberOfAudience = document.getElementById("numberOfAudience").value;
    const inputName = document.getElementById("name").value;
    const inputLightingPower = document.getElementById("lightingPower").value;

    const newElement = document.createElement('div');
    newElement.classList.add('stadium-box');

    const textName = document.createElement('h2');
    textName.textContent = inputName;

    const textNumberOfAudience = document.createElement('p');
    textNumberOfAudience.textContent = "audience: " + inputNumberOfAudience;

    const textLightingPower = document.createElement('p');
    textLightingPower.textContent = "lighting power: " + inputLightingPower + " suites";

    const buttonsElement = document.createElement('div');
    buttonsElement.classList.add('stadium-buttons');

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = "Remove";
    buttonRemove.onclick = function() {
        container.removeChild(newElement);
    }

    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = "Edit";
    buttonEdit.onclick = function() {
        buttonEdit.textContent = "Edit Ok";
    }

    buttonsElement.appendChild(buttonEdit);
    buttonsElement.appendChild(buttonRemove);

    newElement.appendChild(textName);
    newElement.appendChild(textNumberOfAudience);
    newElement.appendChild(textLightingPower);
    newElement.appendChild(buttonsElement);

    container.appendChild(newElement);

    document.getElementById("numberOfAudience").value = "";
    document.getElementById("name").value = "";
    document.getElementById("lightingPower").value = "";

    if (sort) {
        sortElements();
    }
}

function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("numberOfAudience").value = "";
    document.getElementById("lightingPower").value = "";
}

function startSort() {
    const box = document.getElementById('sort');

    if (sort) {
        sort = false;
        box.classList.remove('active')
    } else {
        sort = true;
        box.classList.add('active');
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
