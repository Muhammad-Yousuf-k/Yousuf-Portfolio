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
 <button class="modern-btn">view project</button>
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



// service card
let serviceContainer = document.getElementById("service-container");
serviceData.forEach((elem) => {
  const serviceCard = document.createElement("div");
  serviceCard.className = "service-card";

  serviceCard.innerHTML = `
    <h3>${elem.serviceName}</h3>
    <p>${elem.serviceDetailed}</p>
    <button class="modern-btn Service-modern-btn">Learn More</button>
  `;

  serviceContainer.appendChild(serviceCard);
});



// testimonial card
let testimonialContainer = document.getElementById("testimonial-container");
testimonialData.forEach((elem) => {
  const testimonialCard = document.createElement("div");
  testimonialCard.className = "feedback-card";

  testimonialCard.innerHTML = `
    <img src="${elem.img}" alt="Client" class="client-img">
                                <h3 class="client-name">${elem.ClientName}</h3>
                                <p class="client-service">${elem.Service}</p>
                                <p class="client-feedback">${elem.detailed}</p>
  `;

  testimonialContainer.appendChild(testimonialCard);
});