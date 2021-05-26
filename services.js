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

function validation() {
    const errorQuantityMessage = document.getElementById('error-quantity-msg');
    const blankQuantityMessage = document.getElementById('blank-quantity-msg');
    var inputQuantity = document.forms["form-input"]["quantity"].value;  
    // if (inputQuantity == " ") {
    //     blankQuantityMessage.style.display = "block";
    // } else 
    if(inputQuantity < 1) {
        errorQuantityMessage.style.display = "block";
    }

    const errorNameMessage = document.getElementById('error-name-msg');
    var inputName = document.forms["form-input"]["name"].value;
    if(inputName.length == 0) {
        errorNameMessage.style.display = "block";
    }

    const errorPhoneMessage = document.getElementById('error-phone-msg');
    const blankPhoneMessage = document.getElementById('blank-phone-msg');
    var inputPhoneNumber = document.forms["form-input"]["phone"].value;
    if (inputPhoneNumber.length == 0) {
        blankPhoneMessage.style.display = "block";
    } else if(inputPhoneNumber.length < 12) {
        errorPhoneMessage.style.display = "block";
    }

    const errorAddressMessage = document.getElementById('error-address-msg');
    const blankAddressMessage = document.getElementById('blank-address-msg');
    var inputAddress = document.forms["form-input"]["address"].value;
    if(inputAddress.length == 0) {
        blankAddressMessage.style.display = "block";
    } else if(inputAddress.length < 10) {
        errorAddressMessage.style.display = "block";
    }
}