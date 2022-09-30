const a = 5;
const b = 2
let myName = "Daen"; // const cannot change, whereas let variable  can be changed. (myName can be updated to sth else.)

console.log(myName);
console.log(a+b);
console.log(a*b);
console.log(a/b);

myName = "Diane"; //not putting 'let' infront of this line
console.log('hello my new name is '+myName);

const amIFat = true;
console.log(amIFat)

const player={
    name:"Daen",
    points:10,
    fat:false,
    intro: function intro(nameOfPerson, age){
        console.log("hello my name is "+ nameOfPerson+ " and I'm "+ age);
    }
    }//object 안에 function도 들어갈 수 있음!

    player.intro("Nico", 27)



console.log(player.fat);
console.log(player.name);
console.log(player.points);
console.log(player["name"])

player.lastName = "Seok"
console.log(player[0]) // object doesn't have sequence, thus list-form index doesn't return anything.



function intro(nameOfPerson, age){
    document.write("hello my name is "+ nameOfPerson+ " and I'm "+ age);
}

intro("Daen", 24);


function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
   
}
let age = 24
const krAge = calculateKrAge(age);
console.log(krAge);

const question = prompt("how old are you?") // shows a window to user, in which they can input a value. But not used anymore because interface isn't good. No style, nothing
console.log(question)

//any answers transform into numbers
console.log(typeof question);

parseInt("15") // this converts string into number.

console.log(question, parseInt(question)); //first logged is string, second logged is number. The reason why it's useful is because we can compare the values, which is bigger and smaller.

console.log(question, parseInt("123")) // Latter returns NaN because this function only converts strings into numbers.

//Therefore, if a 'parseInt'-manufactured returned value after answering 'question' is not a number, we will show an error message.

const question2 = parseInt(prompt("How old are you?"));
console.log(question2);


    if(isNaN(question2) === true || question2<0){
    alert("Please write a real positive number");
} else if (question2<18){
    alert("You are too young");
} else if(question2<50){
    alert("You can drink");
} else{
    alert("Please stop drinking");
}
//&& is "AND"(if one of the values is false, returns false.) and || is "OR"(in OR, if one of the value is true the statement is true.)

const hellos = document.getElementsByClassName("hello");
const hello2 = document.getElementsByTagName("h1")

// by class name 은 태그 안에 한줄로 클래스가 지정될때,
// by tag name은 상위 div로 클래스가 지정되고 하위 h1태그가 있을 때 불러오는 방법.
//querySelector은 css방식대로 불러옴. **그러나 여러 quesrySelector있을때 array대신 첫번째 element만 반환해줌. QuerySelectorAll은 모두 반환.
console.log(hellos)
console.log(hello2)



const title = document.querySelector("div.hello:fist-child h1");
console.log(title);
title.style.color = 'powderblue';
========================================================
/***** Useful Website for Events element : developer.mozilla.org/en-US.docs/Web/API/Window */

/*const title = document.querySelector("div.hello h1");

function handleTitleClick(){
    title.style.color = 'blue'
}
title.addEventListener("click", handleTitleClick);
// click 이라는 이벤트를 주시하여, click발생 시 handleTitleClick이라는 함수를 실행

function handleMouseEnter(){
    title.innerText = "mouse is here!";
}
function handleMouseLeave(){
    title.innerText = "mouse is gone!";
}

title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)

//*console.dir(title) 하면 title 안에 있는 property를 찾을 수 있음.
console.dir(title)
*/
/*
===========================================================
const title = document.querySelector("div.hello h1");
function handleTitleClick(){
    title.style.color = 'blue'
}
function handleMouseEnter(){
    title.innerText = "mouse is here!";
}
function handleMouseLeave(){
    title.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}//Here, document.body works but document.div doesn't work. body/head/title those important tags work for 'document'. But for others we have to 'querySelect'.
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no wifi")
}
function handleWindowOnline(){
    alert("ALL GOOOD")
}
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
===========================================================

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === 'blue'){ //first line checks for 'equality' in value. Second line checks that the color is 'given' to h1
        newColor = 'tomato';
    } else{
        newColor = 'blue';
    }
    h1.style.color = newColor; //need to assign newColor to real h1
}

h1.addEventListener("click", handleTitleClick);

So! 
step1. Find the Element
step2. listen for an event
step3. React to that event
==================================================================

const h1 = document.querySelector("div.hello h1");

/***** 1. Using if-else to change class names ******
 
function handleTitleClick(){
    const clickedClass = "active";//active is a raw value, which means it's randomly set by the developer. Thus we can create a constant naming this value. 'clickedClass' is a variable so when we make a spelling mistake, javascript will alert us on console.

    if(h1.className === clickedClass){
        h1.className = "";
    } else{
        h1.className = clickedClass; 
    }   
}
//say, we want to keep the initial class name, 'Cool-font' even when we impose event by clicking.

addEventListener("click", handleTitleClick);
//Javascript modifies html, css looks at html and changes color of h1

/***** 2. classList.contains ******
function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass); 
    }   
}
//say, we want to keep the initial class name, 'sexy-font' even when we impose event by clicking. classlist.contains : sees if class specified is contained in our html element. 
addEventListener("click", handleTitleClick);



/***** 3. Toggle ******

//Toggle checks that a class name exists. if it exists, it removes. else, it adds - MAKES ONLY ONE LINE OF CODE!! 

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

addEventListener("click", handleTitleClick);