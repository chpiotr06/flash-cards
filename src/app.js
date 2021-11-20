const transitionDiv = document.querySelectorAll(".flash-card");
const addMenuBtn = document.querySelector("#add-menu-btn");
const addCardMenu = document.querySelector("#add-card");
const addCardBtn = document.querySelector("#add-card-btn");
const discardBtn = document.querySelector("#discard-btn")
const app = document.querySelector(".app");

addCardMenu.style.transform = `translateY(-${window.screen.height}px)`;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animate(){
  this.removeEventListener("click", animate);

  let front = this.children[0];
  let back = this.children[1];
  let tmpStyle = getComputedStyle(front).transform;
  let tmpZindex = getComputedStyle(front).zIndex;
  
  front.style.transform = getComputedStyle(back).transform;
  back.style.transform = tmpStyle;
  
  front.style.zIndex = getComputedStyle(back).zIndex;
  back.style.zIndex = tmpZindex;
  await sleep(300);
  this.addEventListener("click", animate);
}

function addCard(question, answer){
  let card = document.createElement("div");
  let faceFront = document.createElement("div");
  let faceBack = document.createElement("div");

  card.className = "flash-card";
  faceFront.className = "face front"
  faceBack.className = "face back";

  faceFront.innerHTML = question;
  faceBack.innerHTML = answer;

  card.appendChild(faceFront);
  card.appendChild(faceBack);

  card.addEventListener("click", animate);
  app.appendChild(card);
}

addMenuBtn.addEventListener("click", () => {
  addCardMenu.style.transform = "translateY(-0px)";
  addCardMenu.dataset.visible = "true";
})

document.addEventListener("keydown", (event) => {
  if(event.key === "Enter" && addCardMenu.dataset.visible === "true"){
    addCardMenu.style.transform = `translateY(-${window.screen.height}px)`;
    addCardMenu.dataset.visible = "false";

    question = document.querySelector("#question").value;
    answer = document.querySelector("#answer").value;
    addCard(question,answer);
  }else if(event.key === "Escape" && addCardMenu.dataset.visible === "true"){
    addCardMenu.style.transform = `translateY(-${window.screen.height}px)`;
    addCardMenu.dataset.visible = "false";
  }
})

addCardBtn.addEventListener("click", () => {
  if(addCardMenu.dataset.visible === "true"){
    addCardMenu.style.transform = `translateY(-${window.screen.height}px)`;
    addCardMenu.dataset.visible = "false";

    question = document.querySelector("#question").value;
    answer = document.querySelector("#answer").value;
    addCard(question,answer);
  }
})

discardBtn.addEventListener("click", () => {
  if(addCardMenu.dataset.visible === "true"){
    addCardMenu.style.transform = `translateY(-${window.screen.height}px)`;
    addCardMenu.dataset.visible = "false";
  }
})

