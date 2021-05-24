const kawasakoButton = document.getElementById('kawasako-btn');
const vixianButton = document.getElementById('vixian-btn')
const imageKawasako = document.getElementById('image-kawasako');
const imageVixian = document.getElementById('image-vixian');
const inputForm = document.getElementById('input-form');

kawasakoButton.addEventListener('click', showForm);
vixianButton.addEventListener('click', showForm);

function showForm(e) {
    e.preventDefault();
    if(this.id == 'kawasako-btn') {
        imageKawasako.style.display = "block";
    } 
    else {
        imageVixian.style.display = "block";
    }
    kawasakoButton.style.visibility = "hidden";
    vixianButton.style.visibility = "hidden";
    inputForm.style.display = "block";
}