//counters
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
//home increment
let homeOneBtn = document.getElementById("home-one-btn");
let homeTwoBtn = document.getElementById("home-two-btn");
let homeThreeBtn = document.getElementById("home-three-btn");
//guest increment
let guestOneBtn = document.getElementById("guest-one-btn");
let guestTwoBtn = document.getElementById("guest-two-btn");
let guestThreeBtn = document.getElementById("guest-three-btn");
//reset button
let resetbtn = document.getElementById("reset-btn");

let homeCounter = 0;
let guestCounter = 0;

homeOneBtn.addEventListener('click', function () {
    homeCounter++;
    homeEl.textContent = homeCounter
})
homeTwoBtn.addEventListener('click', function () {
    homeCounter += 2;
    homeEl.textContent = homeCounter
})
homeThreeBtn.addEventListener('click', function () {
    homeCounter += 3;
    homeEl.textContent = homeCounter
})
guestOneBtn.addEventListener('click', function () {
    guestCounter++;
    guestEl.textContent = guestCounter;
})
guestTwoBtn.addEventListener('click', function () {
    guestCounter += 2;
    guestEl.textContent = guestCounter
})
guestThreeBtn.addEventListener('click', function () {
    guestCounter += 3;
    guestEl.textContent = guestCounter
})

resetbtn.addEventListener("click", function () {
    homeCounter = 0;
    guestCounter = 0;
    guestEl.textContent = 0;
    homeEl.textContent = 0;
})

