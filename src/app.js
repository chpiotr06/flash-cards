const transitionDiv = document.querySelectorAll(".flash-card");

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

transitionDiv[0].addEventListener("click", animate);
transitionDiv[1].addEventListener("click", animate);
transitionDiv[2].addEventListener("click", animate);

