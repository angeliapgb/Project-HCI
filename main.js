var indexSlide = 1;
displaySlide(indexSlide);

function goTo(x) {
    displaySlide(indexSlide += x);
}

function position(x) {
    displaySlide(indexSlide = x);
}

function displaySlide(x) {
    var slide = document.getElementsByClassName("slider-image");
    var index;

    if(x > slide.length) {
        indexSlide = 1;
    }
    if(x < 1) {
        indexSlide = slide.length;
    }

    for(index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }

    slide[indexSlide-1].style.display = "block";
}

function Dropdown() 
    {
        document.getElementById("Dropdown").classList.toggle("show");
    }
  
  window.onclick = function(event) 
  {
    if (!event.target.matches('.dropbtn'))
        {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++)
            {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) 
                {
                    openDropdown.classList.remove('show');
                }
             }
        }
 }

 const kawasakoButton = document.getElementById('kawasako-btn');
 const inputForm = document.getElementById('input-form');

 kawasakoButton.addEventListener('click', showForm);

 function showForm() {
    console.log('Clicked!');
    inputForm.classList.add('input-form');
    kawasakoButton.classList.remove('choose-product');
    // kawasakoButton.classList.add('choose-product');
    // inputForm.classList.remove('input-form');
 }

const loginButton = document.getElementById('login');

loginButton.addEventListener('click', redirect);

//  document.getElementById("login").addEventListener("click", redirect);

 function redirect() {
   window.open("index.html");
 }