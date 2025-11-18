const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");


const news = [
  {
    img: "./img/banger.mp4",
    title: "Föredrag 22/10",
    date: "16 oktober 2025"
  },
  {
    img: "./img/LImpan.mp4",
    title: "Åk 9 besökdag",
    date: "5 oktober 2025"
  },
  {
    img: "./img/lovecool.mp4",
    title: "Föräldrarmöte åk1 9/9",
    date: "2 september 2025"
  }
];


const openMenu = () => {
  mobileNav.classList.remove("hidden"); 
  openBtn.classList.add("hidden");      
  closeBtn.classList.remove("hidden");  
};

const closeMenu = () => {
  mobileNav.classList.add("hidden");    
  openBtn.classList.remove("hidden");   
  closeBtn.classList.add("hidden");     
};


openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);


const renderNews = () => {
  const container = document.querySelector(".news-grind");

  news.forEach((item) => {
    const card = document.createElement("div");
    card.className = "news-card";

    
    const media = item.img.endsWith(".mp4")
      ? `<video class="news-image" controls><source src="${item.img}" type="video/mp4"></video>`
      : `<img src="${item.img}" alt="${item.title}" class="news-image" />`;

    card.innerHTML = `
      ${media}
      <h3 class="news-title">${item.title}</h3>
      <p class="news-date">${item.date}</p>
    `;

    container.appendChild(card);
  });
};


renderNews();


