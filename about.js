console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
alert("Hooray, The form has been submitted!")
}

let form = document.querySelector('#contact');
form.addEventListener("submit",handleSubmit);


 let cat = document.querySelector("#cat");
 
 function compliments()  {
alert("You look MIGHTY fine today!");
 }
 cat.addEventListener("mouseover", compliments);

 let spidercat = document.querySelector("#spider-cat")
 spidercat.addEventListener("mouseover", compliments);