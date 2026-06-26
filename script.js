const facts=[

{
type:"space",
text:"A day on Venus is longer than its year 🌕"
},

{
type:"animals",
text:"Octopus have three hearts 🐙"
},

{
type:"science",
text:"Water expands when it freezes ❄️"
},

{
type:"space",
text:"The sun is over 100 times wider than Earth ☀️"
},

{
type:"animals",
text:"Cats sleep around 12-16 hours daily 🐱"
},

{
type:"science",
text:"Lightning is hotter than the surface of the sun ⚡"
}

];


function generateFact(){

let category=document.getElementById("category").value;


let available=facts.filter(
fact=> category=="all" || fact.type==category
);


let random=
available[Math.floor(Math.random()*available.length)];


document.getElementById("fact").innerHTML=random.text;


}


function shareFact(){

let text=document.getElementById("fact").innerHTML;


navigator.share({

title:"FactVerse",
text:text

});

}
