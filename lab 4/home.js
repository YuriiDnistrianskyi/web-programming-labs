let sort = false;


function searchStadium() {
    let numberDefinedName = 0;
    const searchName = document.getElementById('search-name').value;
    const stadiums = Array.from(document.getElementsByClassName('stadium-box'));

    stadiums.forEach((stadium) => {
        const currentName = stadium.querySelector('h2').textContent;
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


function clearSearch() {
    document.getElementById('search-name').value = '';
    const stadiums = document.querySelectorAll('.stadium-box');
    stadiums.forEach(stadium => {
        stadium.style.display = 'flex';
    })
}


function countAudience() {
    const stadiums = Array.from(document.getElementsByClassName('stadium-box'));

    const sum = stadiums.reduce((acc, stadium) => {
        acc += parseFloat(stadium.querySelector('p').textContent.replace("audience: ", ""));
        return acc;
    }, 0);

    const resultCount = document.getElementById('result-count');
    resultCount.textContent = "Total: " + sum;
}


function startSort() {
    const button = document.getElementById('sort');

    if (sort) {
        sort = false;
        button.style.background = '#ffffff';
    } else {
        sort = true;
        button.style.background = 'rgb(96, 180, 146)'
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