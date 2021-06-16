document.querySelector('#a').f1.addEventListener("click",showFactOne);
function showFactOne(){
	
	document.querySelector('#b').innerHTML = "A cat can recognize his owners foot' steps from hundreds of feet away"; 
}

document.querySelector('#a').f2.addEventListener("click",showFactTwo);
function showFactTwo(){
	document.querySelector('#b').innerHTML="Cats bring you dead animals because they think you're just a crappy cat that can't survive on its own.";
}

document.querySelector('#a').f3.addEventListener("click",showFactThree);
function showFactThree(){
	document.querySelector('#b').innerHTML="Most female cats are right-pawed and most male cats are left-pawed.";
}

document.querySelector('#a').f4.addEventListener("click",showFactFour);
function showFactFour(){
	document.querySelector('#b').innerHTML = "Cat's kidneys are so efficient it can survive on a diet consisting only of meat, with no additional water, and can even hydrate by drinking seawater.";
}

document.querySelector('#a').f5.addEventListener("click",showFactFive);
function showFactFive(){
	document.querySelector('#b').innerHTML = "<img src='images/cat.jpeg' alt='an orange cat'><p>Every cat nose is unique just like human fingerprints.</p>";
}



