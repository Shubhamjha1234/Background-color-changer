const parent = document.getElementById("parent");

parent.addEventListener('click',(e)=>{
    const child = e.target ;//we can apply event listener on  every element by e object
    const body = document.querySelector('body');
    body.style.backgroundColor = child.id ; 
})