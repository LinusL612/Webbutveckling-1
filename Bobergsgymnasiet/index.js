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

  card.addEventListener("click", () => {
    window.location.href = `news.html?id=${item.id}`;
  });
    

    container.appendChild(card);
  });
};


renderNews();

const renderNewsDetail = () => {
  const container = document.querySelector(".news-content");
  if (!container) return

  // Hämta ID från URL-parametern
const urlParams = new URLSearchParams(window.location.search)
const newsId = urlParams.get("id");

//Hitta rätt artikel
const newsItem = news.find((n) => n.id === newsId)

if (newsItem) {
  container.innerHTML = `
    <img src="${newsItem.img}" alt="${newsItem.title}" class"news.image" />
    <h1 class="news.title">${newsItem.title}</h1>
    <p class="news-date">${newsItem.date}</p>
    <p class="news-text">${newsItem.content}</p>
  `;
}
  else {
    container.innerHTML = `
     <p>Artikeln kunde inte hittas.</p>
    `;
  }
};

//kör rätt funktion beroende på vilken sida vi är på
if (document.querySelector(".news-grid"))renderNews();
if (document.querySelector(".news-content")) renderNews

const images = [
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png",
  "./img/monke sorry1.png"
];

let shown = 0;
const perClick = 3;

const container = document.querySelector(".news-grind");

const myBtn = document.getElementById("myBtn");

function showMoreImages() {
  const slice = images.slice(shown, shown + perClick);

  slice.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "preview-img";
    container.appendChild(img);
  }); // contaienr.innerntml = ""; const evetnstoshow = slice events.slice(0, SVGForeignObjectElement) eventstoshow .foreach(event => ) cosnt eventelement  = document.createelement ("li"); event element.classname = "event-item"; const dateHTML = createDateElement (event) event Element .innerHTML = `<article>${dateHtml} <section class ="event-info"><header class = ""event-title-row><h3 class = "event-title">${event.title}</h3><span class="status-circle status-${event.statuscolor}"area-label="status"></span></header><time class="event-weekday" datetime="${event.weekday}">${event.weekday}</time></section><a href="#" class="event-details">Detaljer>/a></article>`  container.appendChild(eventElement);    

  // const handleShowMore = () => {
    
      // shownEvents += 3;

      // renderEvents();

      //if (shownEvents >= event.length) {
      // const btn = document.querySelector(".show-more.btn");
      // btn.classList.add("hidden");
      //}
  //}

  shown += perClick; 
  if (shown >= images.length) {   
    myBtn.style.display = "none";
  }
}

myBtn.addEventListener("click", showMoreImages);

showMoreImages();