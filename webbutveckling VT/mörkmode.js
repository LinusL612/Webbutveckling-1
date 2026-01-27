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

localStorage.setItem("lastVisit", Date.now())

const FIVE_MINUTES = 1000 * 60 * 5;
const LastVisit = localStorage.getItem("lastVisit")
if (LastVisit) {
    const now = Date.now();

    const timePassed = now - LastVisit;

    if (timePassed > FIVE_MINUTES) {
        localStorage.removeItem("theme")
        localStorage.removeItem("lastVisit")
    }
}




