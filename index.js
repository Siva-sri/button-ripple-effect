const btnEl = document.querySelector(".btn");

//To get position of mouse event, we need to get its correct X and Y values.
//Subtract from offsetLeft and offsetTop from x and y to get orginal values 
btnEl.addEventListener("mouseover",(event)=>{
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos",x + "px");
    btnEl.style.setProperty("--yPos",y + "px");
});

//We cannot before pseudo element from JS.
//So we will add a variable in CSS and change its value in JS
//px is used for to specify the unit