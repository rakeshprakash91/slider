var i = 1,
	currIndex = 0,
	slider = document.querySelectorAll('.slider div'),
	currElm, prevElm, nextElm;
//initialization
(function () {
	var sliderNav = document.createElement('section');
	sliderNav.setAttribute('class', 'sliderNav');
	document.querySelectorAll('.slider')[0].appendChild(sliderNav);
	var prevBtn = document.createElement('button'),
		nextBtn = document.createElement('button');
	prevBtn.innerHTML = "Prev";
	sliderNav.appendChild(prevBtn);
	nextBtn.innerHTML = "Next";
	sliderNav.appendChild(nextBtn);
	prevBtn.addEventListener('click', updateSlider);
	nextBtn.addEventListener('click', updateSlider);
	slide()
})();

//slider properties
function slide() {
	setTimeout(function () {
		prevElm = slider[currIndex];
		slider[currIndex].style.display = "none";
		slider[i].style.display = "block";
		currIndex = i;
		currElm = slider[i];
		i++;
		nextElm = slider[i];
		if (i == slider.length) {
			i = 0;
			currIndex = slider.length - 1;
		}
		slide();
	}, 3000);
}

function l() {
	console.log(arguments[0]);
}

function updateSlider() {
	var elm = this;
	l(currElm)
	if (elm.innerHTML == "Prev") {
		currElm.style.display = "none";
		prevElm.style.display = "block";
	} else {
		currElm.style.display = "none";
		nextElm.style.display = "block";
	}
}