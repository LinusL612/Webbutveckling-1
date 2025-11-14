const nav = document.querySelector("nav");
 
 const mobileNav = document.querySelector(".mobile-nav")
 
 const hamburgerBtn = document.querySelector ("#close")


 const news = []
 {
    img: "./img/lovethegoat.jpg",
    title; "föredrag 22/10"
   date: "16 oktober 2025"
 }

 {
    img: "./img/monke sorry1.jpg",
    title; "åk 9 besökdag"
   date: "5 oktober 2025"
 }

 {
    img: "lovecool.mp4",
    title; "föräldrarmöte åk1 9/9"
   date: "2 september 2025"
 }


const closeMenu = () => {
    
    mobileNavNav.classList.add("hidden")
    nav.classList.add("nav-closed")
    hamburgerBtn.classlist.remove("hidden")
}
    
const openMenu = () => {

    hamburgerBtn.classList.add("hidden")
    nav.classList.remove("nav-closed")
    mobileNav.classList.remove("hidden")
}

const menuCloseBtn = document.querySelector ("#menu-close")
.addEventListener("click", closeMenu);
    

const menuOpenBtn = document.querySelector ("#menu-open")
.addEventListener("click", openMenu);

const renderNews = () => {
    const container = document.querySelector(".news-grind");

    news.forEach((news) =>  {
      const card = document.createElement("div");
      card.className = "news-card";
      
      card.innerHTML = `
        <img src "${news.img} alt="${news.title}" class="news-image" />
        <h3 class="news.title">${news.title}</h3>
        <p class="news.date">${news.date}</p>

      `;

      container.appendChild(card);
    });
};

renderNews();


