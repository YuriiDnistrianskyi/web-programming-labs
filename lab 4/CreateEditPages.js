function addElement() {
    const container = document.getElementById("container-stadiums");
    const inputName = document.getElementById("name-create").value;
    const inputNumberOfAudience = document.getElementById("numberOfAudience-create").value;
    const inputLightingPower = document.getElementById("lightingPower-create").value;

    if (inputNumberOfAudience == "" || inputName == "" || inputLightingPower == "") {
        alert("Not all data is entered");
    } else {
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
            navigateTo('edit-page', 'menu-edit');
            document.getElementById('name-edit').value = inputName;
            document.getElementById('numberOfAudience-edit').value = inputNumberOfAudience;
            document.getElementById('lightingPower-edit').value = inputLightingPower;
        }

        buttonsElement.appendChild(buttonEdit);
        buttonsElement.appendChild(buttonRemove);

        newElement.appendChild(textName);
        newElement.appendChild(textNumberOfAudience);
        newElement.appendChild(textLightingPower);
        newElement.appendChild(buttonsElement);

        container.appendChild(newElement);

        document.getElementById("numberOfAudience-create").value = "";
        document.getElementById("name-create").value = "";
        document.getElementById("lightingPower-create").value = "";

        if (sort) {
            sortElements();
        }
    }
}

function clearInputCreate() {
    document.getElementById('name-create').value = "";
    document.getElementById('numberOfAudience-create').value = "";
    document.getElementById('lightingPower-create').value = "";
}


function clearInputEdit() {
    document.getElementById("name-edit").value = "";
    document.getElementById("numberOfAudience-edit").value = "";
    document.getElementById("lightingPower-edit").value = ""
}

function navigateTo(pageId, menuItemId) {
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
