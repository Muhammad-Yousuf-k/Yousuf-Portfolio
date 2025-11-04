

// for projects card buttons==================================================================
let project = document.getElementById("projbtn");
let certi = document.getElementById("cerbtn");
let tech = document.getElementById("techbtn");

project.addEventListener("click", () => {
  let con1 = document.getElementById("projects-container1");
  let con2 = document.getElementById("projects-container2");
  let con3 = document.getElementById("projects-container3");

  if (con1.style.display === "none") {
    con1.style.display = "flex";
    con2.style.display = "none";
    con3.style.display = "none";
    console.log("project true");
  }
});

certi.addEventListener("click", () => {
  let con2 = document.getElementById("projects-container2");
  let con1 = document.getElementById("projects-container1");
  let con3 = document.getElementById("projects-container3");

  if (con2.style.display === "none") {
    con1.style.display = "none";
    con3.style.display = "none";
    con2.style.display = "flex";
    console.log("true");
  }

});

tech.addEventListener("click", () => {
  let con3 = document.getElementById("projects-container3");
  let con2 = document.getElementById("projects-container2");
  let con1 = document.getElementById("projects-container1");

  if (con3.style.display === "none") {
    con3.style.display = "flex";
    con1.style.display = "none";
    con2.style.display = "none";
    console.log("true");
  }
});

// for projects card==================================================================
const projects = [
  {
    title: "Netflix Clone",
    description: "practicing to enchant to skills, try to clone Netflix",
    image: "img/proj/netflix.webp",
    link: "https://muhammad-yousuf-k.github.io/Netflex-clone/",
  },

  {
    title: "Tic Tak Toe",
    description: "practicing to enchant to skills, To Make a Game",
    image: "img/proj/tikTakToc.webp",
    link: "https://tiktaktoc-og.netlify.app/",
  },
  {
    title: "YouTube Clone",
    description: "practicing to enchant to skills, try to clone YouTube",
    image: "img/proj/youtube.webp",
    link: "https://muhammad-yousuf-k.github.io/youtube_cloned/",
  },
  {
    title: "ExpensePro",
    description: "Expense Pro is a simple app to track and manage your daily expenses easily.",
    image: "img/proj/ExpensePro.webp",
    link: "https://expensepro-production.up.railway.app/",
  },

];
const certificate = [
  {
    title: "Web Development",
    description: "by Visionery IT Institute",
    image: "img/certificate/web_certi.webp",
    Status: "Complete"
  },
  {
    title: "C.I.T",
    description: "by Visionery IT Institute",
    image: "img/certificate/cit_certi.webp",
    Status: "Complete"
  },
  {
    title: "Matric",
    description: "by Pak German Capital School",
    image: "img/certificate/",
    Status: "Complete"
  },
  {
    title: "(DAE) in software engineering",
    description: "by Capital Institute",
    image: "img/certificate/",
    Status: "continue"
  }

];
const techz = [
  {
    icon: "fab fa-html5",
    name: "HTML",
    progress: "95%"
  },
  {
    icon: "fab fa-css3-alt",
    name: "CSS",
    progress: "90%"
  },
  {
    icon: "fab fa-js",
    name: "JavaScript",
    progress: "85%"
  },
  {
    icon: "fab fa-wordpress",
    name: "WordPress",
    progress: "88%"
  },
  {
    icon: "fas fa-paint-brush",
    name: "Photoshop",
    progress: "86%"
  },
  {
    icon: "fas fa-file-word",
    name: "Microsoft Office",
    progress: "90%"
  },
  {
    icon: "fas fa-server",
    name: "Express.js",
    progress: "78%"
  },
  {
    icon: "fab fa-node-js",
    name: "Node.js",
    progress: "80%"
  },
  {
    icon: "fas fa-database",
    name: "MongoDB",
    progress: "75%"
  }
];


// project============================
const container = document.getElementById("projects-container1");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
 <img src="${project.image}" alt="${project.title}">
 <h3>${project.title}</h3>
 <p>${project.description}</p>
 <a href="${project.link}" target="_blank">
 <button>view project</button>
 </a>
 `;
  container.appendChild(card);
});





// certificate============================
const container1 = document.getElementById("projects-container2");
certificate.forEach((certificate) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="flip_img" src="${certificate.image}" alt="Avatar">
    </div>
    <div class="flip-card-back">
      <h1>${certificate.title}</h1>
      <p>${certificate.description}</p>
      <p>Status: ${certificate.Status}</p>
      <p style="margin-top: 10px">Click to view</p>
    </div>
  </div>
</div> `;
  container1.appendChild(card);
});


// tech stack============================
const container2 = document.getElementById("projects-container3");
techz.forEach((techz) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `    <div class="skills-container">

          <div class="skill">
            <div class="skill-header"><i class="${techz.icon}"></i>
              <h4>${techz.name}</h4>
            </div>
            <div class="progress-bar">
              <div style="width:${techz.progress}" class="progress mongo"></div>
            </div>
          </div>

        </div>
 `;
  container2.appendChild(card);
});


//for burger btn===============================================================

let burger = document.getElementById("bug")

burger.addEventListener("click", () => {
  let ul = document.getElementById("nv_ul")
  // ul.setAttribute("display", "none");


  if (ul.style.display === "none") {
    ul.style.display = "flex"
    console.log("true");

  } else {
    ul.style.display = "none"
    console.log("false");
  }
})



const burgerm = document.getElementById("burgerBtn");
const back = document.getElementById("back");
const mobileNav = document.getElementById("mobileNav");

burgerm.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

back.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

// optional: close when clicking a link
document.querySelectorAll(".mobile_nav a").forEach(link => {
  link.addEventListener("click", () => mobileNav.classList.remove("active"));
});
