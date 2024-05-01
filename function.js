let btn1 = document.getElementById("btn1")
function favorite(btn1){
    if(btn1.style.color=="white"){
        btn1.style.color="red";
    }
    else{
        btn1.style.color="white";
    }
}
let btn2 = document.getElementById("btn2")
function watchlist(btn2){
    if(btn2.style.color=="white"){
        btn2.style.color="blue";
    }
    else{
        btn2.style.color="white";
    }
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function myFunction() {
  var element = document.getElementById("watchlist");
  element.classList.toggle("dark-mode");
}





const btn = document.querySelector(".button");
const feedback=document.querySelector(".feedbackn");
btn.addEventListener("click", () => {
    feedback.innerHTML='<h1>thank you for your feedback</h1>';
});





function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}







function toggleNav() {
  var menu = document.getElementById('menu');
  var icons = document.getElementById('icons');
  var toggleBtn = document.querySelector('.toggle-btn');

  menu.classList.toggle('active');
  icons.classList.toggle('active');
  toggleBtn.classList.toggle('active');
}
document.querySelector("#root > div.flex.flex-col > footer > div.md\\:flex.items-center.justify-between.overflow-x-auto.border-b.pb-14.mb-14.gap-30")

let isLiked = false;

function toggleLike() {
    isLiked = !isLiked;
    updateLikeIcon();
}

function updateLikeIcon() {
    const likeButton = document.getElementById('like-buttonw');
    const likeIcon = document.getElementById('like-iconw');

    if (isLiked) {
        likeButton.textContent = 'Unlike';
        likeIcon.textContent = '👎'; // You can change the symbol to anything you want to display when not liked 
    } else {
        likeButton.textContent = 'Like';
        likeIcon.textContent = '👍';
    }
}
function martina(){
  let btnw=document.querySelector('.heartw')
    if(btnw.style.color=="white"){
        btn1.style.color="rgb(153, 0, 255)";
    }
    else{
        btn1.style.color="white";
    }
}
function myFunctionf() {
  var element = document.getElementById("fo");
  element.classList.toggle("dark-modee");
}

const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var showIcon = document.getElementById("show");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showIcon.textContent = "visibility_off";
  } else {
    passwordInput.type = "password";
    showIcon.textContent = "visibility";
  }
}

function toggleConfirmPasswordVisibility() {
  var ConfirmpasswordInput = document.getElementById("ConfirmpasswordInput");
  var showIcon = document.getElementById("show");

  if (ConfirmpasswordInput.type === "password") {
    ConfirmpasswordInput.type = "text";
    showIcon.textContent = "visibility_off";
  } else {
    ConfirmpasswordInput.type = "password";
    showIcon.textContent = "visibility";
  }
}




// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Hide the form
  var form = document.querySelector('.container form');
  form.style.display = "none";

  // Show the success message
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
}

// Add event listener to the form submission
var form = document.querySelector('.container form');
form.addEventListener('submit', handleSubmit);


