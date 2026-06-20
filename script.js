// ============================
// NAVBAR SCROLL EFFECT
// ============================


const nav = document.querySelector(".syringe-nav");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.boxShadow =
        "0 0 40px #00d9ff";

        nav.style.transform =
        "scale(0.97)";

    }

    else{

        nav.style.boxShadow =
        "0 15px 35px rgba(0,0,0,.25)";

        nav.style.transform =
        "scale(1)";

    }

});




// ============================
// SCROLL REVEAL ANIMATION
// ============================


const revealElements =
document.querySelectorAll(
".card, .product, .about-text, .about-image"
);



function reveal(){

    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect()
        .top;


        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){

            element.style.opacity="1";

            element.style.transform=
            "translateY(0)";

        }


    });


}



window.addEventListener(
"scroll",
reveal
);




// Initial state

revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform=
"translateY(60px)";

element.style.transition=
"1s ease";

});







// ============================
// FLOATING MOLECULE EFFECT
// ============================


const hero =
document.querySelector(".hero");



for(let i=0;i<20;i++){


let particle =
document.createElement("span");


particle.className="particle";


particle.style.left =
Math.random()*100+"%";


particle.style.top =
Math.random()*100+"%";


particle.style.animationDuration =
(3+Math.random()*5)+"s";



hero.appendChild(particle);



}







// ============================
// PARALLAX MOVEMENT
// ============================


window.addEventListener(
"scroll",
()=>{


let scroll =
window.scrollY;


hero.style.backgroundPositionY =
scroll * 0.4 +"px";


});






// ============================
// CARD 3D TILT EFFECT
// ============================


const cards =
document.querySelectorAll(
".card,.product"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let rect =
card.getBoundingClientRect();


let x =
e.clientX - rect.left;


let y =
e.clientY - rect.top;



let rotateX =
(y-rect.height/2)/15;


let rotateY =
(rect.width/2-x)/15;



card.style.transform =
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform=
"translateY(0)";

});


});





// ============================
// SMOOTH LINK MOVEMENT
// ============================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});


});
