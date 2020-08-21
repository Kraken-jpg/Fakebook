new Vue({
    el: '#app',
    data: {  
    },
    methods: {
    }
})

function addCategories(){
    let none = document.getElementsByClassName('appear')
    for(let i = 0; i < none.length; i++){
        none[i].classList.remove('none')
    }
    document.querySelector('.add').classList.add('none')
};

function removeCategories(){
    let none = document.getElementsByClassName('appear')
    for(let i = 0; i < none.length; i++){
        none[i].classList.add('none')
    }
    document.querySelector('.add').classList.remove('none')
};

function editButtonThing(){
    document.querySelector('.edit').classList.remove('none')
}

function editRemoveThing(){
    document.querySelector('.edit').classList.add('none')
}

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


var modali = document.querySelector(".modal1");
var triggeri = document.querySelector(".trigger1");
var closeButtoni = document.querySelector(".close1-button");

function toggleModali() {
    modali.classList.toggle("show-modal1");
}

function windowOnClicking(event) {
    if (event.target === modali) {
        toggleModali();
    }
}

triggeri.addEventListener("click", toggleModali);
closeButtoni.addEventListener("click", toggleModali);
window.addEventListener("click", windowOnClicking);


function enablePostBtn(){
    var nameInput = document.getElementsByClassName('textarea')[0].textContent;
    console.log(nameInput)
    if (nameInput) {
        document.querySelector('.Post-status').classList.add('ready-to-post')
    } else if(!nameInput){
        document.querySelector('.Post-status').classList.remove('ready-to-post')
    }
}

var modal2 = document.querySelector(".modal2");
var trigger2 = document.querySelector(".trigger2");
var closeButton2 = document.querySelector(".close2-button");

function toggleModal2() {
    modal2.classList.toggle("show-modal2");
    modali.classList.toggle("show-modal1");
}

function windowOnClick(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
}

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick);

