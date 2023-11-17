// Counter
let valueDisplays = document.querySelectorAll(".counter");
let interval = 1000;
valueDisplays.forEach((valueDisplay) => {
  let start = 0;
  let end = parseInt(valueDisplay.getAttribute("data-value"));
  let duration = Math.floor(interval / end);
  let counter = setInterval(function () {
    start += 1;
    valueDisplay.textContent = start;
    if (start == end) {
      clearInterval(counter);
    }
  }, duration);
});

// Responsive Navbar

let dropdown = document.querySelector(".mobileDropdown");
let hamburger = document.querySelector(".hamburgerWrapper");
dropdown.onclick = function () {
  let dropMenu = document.querySelector(".dropdownMenu");
  dropMenu.classList.toggle("show");
};
hamburger.onclick = function () {
  let hamburgerList = document.querySelector(".mobileMenu");
  hamburgerList.classList.toggle("show");
};
