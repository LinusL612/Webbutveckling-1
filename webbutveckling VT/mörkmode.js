function LightDarkmode() {
    var element = document.body;
    element.classList.toggle("mörkmode");
}

let year = new Date().getFullYear();

document.getElementById("Getcurrentyear").innerHTML = year;