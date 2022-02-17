// btn = document.querySelector('button');

// container = document.querySelector('body');

// function enableDarkMode() {
//     if (container.style.backgroundColor === 'black') {
//         container.style.backgroundColor = '#fff';
//         document.querySelector('h1').style.color = '#000';

//     } else {
//         container.style.backgroundColor = 'black';
//         document.querySelector('h1').style.color = '#fff';
//     }
// }
// btn.addEventListener('click', enableDarkMode);



// Search Engine
let names = document.querySelectorAll('h2');

let searchValue = document.getElementById('search');

function searchItems() {
    names.forEach((value) => {
        if (value.innerHTML.toLowerCase().indexOf(searchValue.value.toLowerCase()) != -1) {
            value.parentElement.parentElement.style.display = '';
        } else {
            value.parentElement.parentElement.style.display = 'none';
        }
    }
    )
}

searchValue.addEventListener('keyup', searchItems);