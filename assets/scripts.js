AOS.init({
    once: true,
});

const footerEgg = () => {
    const element = document.getElementsByClassName("footer-egg");
    element[0].innerHTML = "Stupid RTA";
    element[0].style = "color: rgba(255, 255, 255, 1); text-decoration: none; cursor: text;";
    element[0].onclick = null;
}