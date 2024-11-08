const showSideBar = document.querySelectorAll("#show-side-bar")
const sideBar  = document.getElementById("side-bar")


const handleShowSideBar = () => {
   sideBar.style.display = "flex";
}

const handleHideSideBar = () => {
    sideBar.style.display = "none";
}

showSideBar.addEventListener("click", handleShowSideBar)