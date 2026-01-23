function loadTheme(){
    
    const thema=localStorage.getItem("theme");
    
    if(thema==="mörk") {
        document.body.classList.add("mörkmode");
    }
}

loadTheme();

function LightDarkmode() {
    let element = document.body;
    element.classList.toggle("mörkmode");

    
    if(document.body.classList.contains("mörkmode")) {
        localStorage.setItem("theme","mörk");
    }
    
    else {
        localStorage.setItem("theme","ljus");
    }
}

let year = new Date().getFullYear();

document.getElementById("Getcurrentyear").innerHTML = year;


