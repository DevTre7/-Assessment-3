console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
alert("the form has been submitted!")

}


let form = document.querySelector('#contact');
form.addEventListener("submit",handleSubmit);

//form.addEventListener('submit', handleSubmit);
//form.addEventListener('submit', handleSubmit);


//Don't know why my event listener is not working properly?
// /addEventListener('mouseover', (event) => {
// 	alert("Have submited your answer to the question below?")
// });
//   onmouseover = (event) => { };

//   */
 let cat = document.querySelector("#cat")
 function compliments()  {
alert("You look MIGHTY fine today!");
 }
 cat.addEventListener("mouseover", compliments);

 let spidercat = document.querySelector("#spider-cat")
 spidercat.addEventListener("mouseover", compliments);