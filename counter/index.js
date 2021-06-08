

const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
const countText = document.querySelector(".count");

let current = 0;
decreaseBtn.addEventListener("click",()=>{
    current -=1;
    countText.textContent=current.toString();
});
resetBtn.addEventListener("click",()=>{
    current =0;
    countText.textContent=current.toString();
});
increaseBtn.addEventListener("click",()=>{
    current +=1 ;
    countText.textContent=current.toString();
});