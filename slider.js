let page = document;
let slider = page.getElementById('slider');
let slider_images = slider.children[1].children;
let slider_indicator = page.getElementsByClassName('slider-indicator')[0];
let current_image = 0;

for(let i=0; i < slider_images.length; i++){
	let node = page.createElement('div');
	node.className = "node";
	slider_indicator.appendChild(node);
}


let indicators = slider_indicator.children;


page.addEventListener("DOMContentLoaded", slide);
function slide(){
	console.log("I am called...");
	if(current_image > slider_images.length -1){
		current_image = 0;
		slider_images[slider_images.length - 1].style.display = "none";
		indicators[slider_images.length - 1].style.backgroundColor = "#ddd";

	}

	if(current_image > 0) {
		slider_images[current_image - 1].style.display = "none";
		indicators[current_image - 1].style.backgroundColor = "#ddd";
	} else {
		slider_images[0].style.display = "none";
		indicators[0].style.backgroundColor = "#ddd";
	}

	slider_images[current_image].style.display = "inline-block";
	indicators[current_image].style.backgroundColor = "#aaa";
	current_image = current_image + 1;

}

setInterval(slide, 2000);


page.getElementById('arrow-back').addEventListener("click", function (){
if(current_image > 1){
	current_image = current_image - 2;
	console.log(current_image);
	slide();
	console.log(current_image)
}


});

// slide();