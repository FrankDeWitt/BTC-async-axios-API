const { Movies } = require('./Movies');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store = new Store();
const type = store.getTypeData();
const movies = new Movies(type);
const ui = new UI();

let btnClass = document.getElementsByClassName("btn-type");
let btnData = document.querySelectorAll('[data-myattribute="'+ movies.type +'"]')

async function fetchMovies() {
    
    const data = await movies.getMovies();
    ui.render(data);
}



let myFunction = function() {
    let attribute = this.getAttribute("data-myattribute");
    
    movies.changeMovies(attribute);
    fetchMovies();
    store.setTypeData(attribute);
};

Array.from(btnClass).forEach(function(element) {
    element.addEventListener('click', myFunction);
});

for (var i = 0; i < btnData.length; ++i) {
    btnData[i].classList.add('active');
}

for (let i = 0; i < btnClass.length; i++) {
    btnClass[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

document.addEventListener('DOMContentLoaded', fetchMovies);