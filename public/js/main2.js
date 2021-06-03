// exo 4 

let myInp = document.getElementsByTagName("input")[0];

myInp.addEventListener("focus", ()=>{
     myInp.style.backgroundColor ="blue";
})


// exo 2 

let myInp2 = document.getElementsByTagName("input")[1];
console.log(myInp2);

myInp2.addEventListener('focus', () => {
     myInp2.style.backgroundColor = "blue";
 });


myInp2.addEventListener("focusout", () =>{
     myInp2.style.backgroundColor = "white";
})

// exo 3 

let myP1 = document.getElementsByClassName("premierParagraphe")[0];
let myP2 = document.getElementsByClassName("secondParagraphe")[0];
let myP3 = document.getElementsByClassName("dernierParagraphe")[0];
let myBtn = document.getElementsByClassName("buttonExo")[0];



let copierColler = () =>{
     myP3.innerText = myP2.innerText;
     myP1.innerText = myP2.innerText;
}

myBtn.addEventListener("click", copierColler);


// exo 4 

let toRename = document.querySelector("#exo4");
let inpRename = document.querySelector("input.form-control");
let btnRename = document.querySelectorAll(".buttonExo")[1];


btnRename.addEventListener("click", () =>{
     if(inpRename.value.length > 0){
          toRename.textContent = inpRename.value;
     }
})

// exo 5 

// chemin
let myP4 = document.getElementsByTagName("p")[4];
console.log(myP4);
let myImg = document.getElementsByTagName("img")[0];
let myBtn2 = document.getElementsByTagName("button")[2];
let chemin = myP4.innerText.slice(9);
console.log(chemin);


myBtn2.addEventListener("click", () =>{
     myImg.setAttribute("src",chemin);
})


// exo 6 

let source = document.getElementsByClassName('img-responsive')[1];
console.log(source);
let imgResp2 = document.getElementsByClassName('img-responsive')[2];
console.log(imgResp2);

let srcImg; 

source.addEventListener("click", () =>{
     srcImg = source.getAttribute("src");
     console.log(srcImg);
})

imgResp2.addEventListener("click", () =>{
     imgResp2.setAttribute("src",srcImg)
     console.log(imgResp2);
})

// exo 7 

let monP1 = document.getElementsByTagName('p')[5];
let monP2 = document.getElementsByTagName('p')[6];
let monButton = document.getElementsByTagName('button')[3];

let temp;

monButton.addEventListener("click", () => {
     temp = monP1.innerText; // temp = text 1
     monP1.innerText = monP2.innerText;
     monP2.innerText = temp;
})