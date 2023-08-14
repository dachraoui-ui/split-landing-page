let container = document.querySelector(".container");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
right.addEventListener('mouseenter',()=>{
   container.classList.add('hover-right');
})
right.addEventListener('mouseleave',()=>{
   container.classList.remove('hover-right');
});
left.addEventListener('mouseenter',()=>{
   container.classList.add('hover-left')});
left.addEventListener('mouseleave',()=>{
   container.classList.remove('hover-left')});
