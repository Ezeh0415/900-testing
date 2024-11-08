// side bar section
const showSideBar = document.getElementById("show-side-bar");
const hideSideBar = document.getElementById("hide-side-bar");
const sideBar  = document.getElementById("side-bar");
// side bar section

// quick section starts here
const flightFromNigeriaBtn = document.getElementById("flight-from-nigeria-btn");
const flightFromNigeriaIconUp = document.getElementById("flight-from-nigeria-icon-up");
const flightFromNigeriaIconDown = document.getElementById("flight-from-nigeria-icon-down");
const flightFromNigeria = document.getElementById("flight-from-nigeria");
const internationalDestinationBtn = document.getElementById("international-destination-btn");
const internationalDestinationIconUp = document.getElementById("international-destination-icon-up");
const internationalDestinationIconDown = document.getElementById("international-destination-icon-down");
const internationalDestination = document.getElementById("international-destination");
const flightToCountryBtn = document.getElementById("flight-to-country-btn");
const flightToCountryIconUp = document.getElementById("flight-to-country-icon-up");
const flightToCountryIconDown = document.getElementById("flight-to-country-icon-down");
const flightToCountry = document.getElementById("flight-to-country");
// quick section ends here

// side bar functions start
showSideBar.addEventListener("click", () => {
    sideBar.style.display = "flex"
});

hideSideBar.addEventListener("click", () => {
    sideBar.style.display = "none"
});
// side bar function end

// simple or quick action section 
flightFromNigeriaIconUp.style.display = "none";
internationalDestinationIconUp.style.display = "none";
flightToCountryIconUp.style.display = "none";

flightFromNigeriaBtn.addEventListener("click", () => {
    if (flightFromNigeria.style.height === "0px") {
        flightFromNigeria.style.height = "fit-content";
        internationalDestination.style.height = "0px";
        flightToCountry.style.height = "0px";
        flightFromNigeriaIconUp.style.display = "flex";
        flightFromNigeriaIconDown.style.display = "none";
        flightFromNigeria.style.transition = "width 0.5s ease, height 0.5s ease";
    } else {
        flightFromNigeria.style.height = "0px";
        flightFromNigeriaIconUp.style.display = "none";
        flightFromNigeriaIconDown.style.display = "flex";
    }
});

// internationalDestinationIconUp.style.display = "none";
internationalDestinationBtn.addEventListener("click", () => {
    if (internationalDestination.style.height === "0px") {
        internationalDestination.style.height = "fit-content";
        flightFromNigeria.style.height = "0px";
        flightToCountry.style.height = "0px";
        internationalDestinationIconUp.style.display = "flex";
        internationalDestinationIconDown.style.display = "none";
        internationalDestination.style.transition = "width 0.5s ease, height 0.5s ease";
    } else {
        internationalDestination.style.height = "0px";
        internationalDestinationIconUp.style.display = "none";
        internationalDestinationIconDown.style.display = "flex";
    }
});

// flightToCountryIconUp.style.display = "none";
flightToCountryBtn.addEventListener("click", () => {
    if (flightToCountry.style.height === "0px") {
        flightToCountry.style.height = "fit-content";
        internationalDestination.style.height = "0px";
        flightFromNigeria.style.height = "0px";
        flightToCountryIconUp.style.display = "flex";
        flightToCountryIconDown.style.display = "none";
        flightToCountry.style.transition = "width 0.5s ease, height 0.5s ease";
    } else {
        flightToCountry.style.height = "0px";
        flightToCountryIconUp.style.display = "none";
        flightToCountryIconDown.style.display = "flex";
    }
});
