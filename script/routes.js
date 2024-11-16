
    let homes = document.querySelectorAll("#home");
    let regionLanguages = document.querySelectorAll("#region-language");
    let currencys = document.querySelectorAll("#currency");
    let regionLanguagesInner = document.querySelectorAll("#region-language-inner");
    let currencysInner = document.querySelectorAll("#currency-inner");

    // mationality and currency section stert
    let linkStyle1 = document.getElementById("link-style-1");
    let linkStyle2 = document.getElementById("link-style-2");
    // mationality and currency section end

    const currentPath = window.location.pathname;

    // flight hotel and others section 
    let flightLink = document.querySelectorAll("#flight-link");
    let hotelLink = document.querySelectorAll("#hotel-link");
    let clubLink = document.querySelectorAll("#club-link");
    let sportLink = document.querySelectorAll("#sport-link");

    // flight inner links 
    let oneWay = document.querySelectorAll("#one-way");
    let roundTrip = document.querySelectorAll("#round-trip");
    let multiCity = document.querySelectorAll("#multi-city");

    // flight link styles
    let flightLink1 = document.getElementById("flight-link1");
    let flightLink2 = document.getElementById("flight-link2");
    

    // search link section
    let flyingFrom = document.querySelectorAll("#search-link");
    
    homes.forEach(home => {
        home.href = "../index.html";
    });
    

// regional language and currency links starts here
    regionLanguages.forEach(regionLanguage => {
        regionLanguage.href = "html/region-language.html";
        if (currentPath.includes(regionLanguage.getAttribute("href"))) {
            linkStyle1.classList.add("active")
        }
    });
    
    
    currencys.forEach(currency => {
        currency.href = "html/currency.html";
        if (currentPath.includes(currency.getAttribute("href"))) {
            linkStyle2.classList.add("active")
        } 
    })

    // regional language an dcurrency inner link
    regionLanguagesInner.forEach(regionLanguage => {
        regionLanguage.href = "region-language.html";
        if (currentPath.includes(regionLanguage.getAttribute("href"))) {
            linkStyle1.classList.add("active")
        }
    });

    currencysInner.forEach(currency => {
        currency.href = "currency.html";
        if (currentPath.includes(currency.getAttribute("href"))) {
            linkStyle2.classList.add("active");
        } ;
    });
// regional language and currency links ends here

flightLink.forEach(flight => {
    flight.href = "html/flight.html";
})


/* ---------- flight inner link starts here -------*/
oneWay.forEach(link => {
    link.href = "flight.html";
    if (currentPath.includes(link.getAttribute("href"))) {
        flightLink1.classList.add("flight-active");
        flightLink1.style.backgroundColor = "brown";
        link.style.color = "white";
    } ;
})

roundTrip.forEach(link => {
    link.href = "roundTrip.html";
    if (currentPath.includes(link.getAttribute("href"))) {
        flightLink2.classList.add("flight-active");
        flightLink2.style.backgroundColor = "brown";
        link.style.color = "white";
    } ;
})

flyingFrom.forEach(link => {
    link.href = "search.html";
});