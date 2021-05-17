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
    var dotButton = document.getElementsByClassName("dot-item");
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

 document.addEventListener("DOMContentLoaded", () => {
    const kawasako = document.querySelector("#product");
    const kawasakoProduct = document.querySelector("#kawasako-product");

     document.querySelector("#kawasako").addEventListener("click", e => {
        e.preventDefault();
        kawasakoProduct.classList.add("grid-kawasako");
        kawasako.classList.remove("grid-product");
     })
 });