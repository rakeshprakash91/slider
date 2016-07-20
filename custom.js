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
	prevBtn.setAttribute('class', 'prev');
	sliderNav.appendChild(prevBtn);
	nextBtn.innerHTML = "Next";
	nextBtn.setAttribute('class', 'next');
	sliderNav.appendChild(nextBtn);
	prevBtn.addEventListener('click', updateSlider);
	nextBtn.addEventListener('click', updateSlider);
	slide()
})();

//slider properties
function slide() {
	setTimeout(function () {
		if (i == 0) {
			document.querySelectorAll('.prev')[0].style.pointerEvents = "none";
			document.querySelectorAll('.prev')[0].style.opacity = "0.5";
		}
		slider[currIndex].style.display = "none"; //previous
		prevElm = slider[currIndex];
		slider[i].style.display = "block"; // current
		currElm = slider[i];
		if (i != 0) {
			document.querySelectorAll('.prev')[0].style.pointerEvents = "all";
			document.querySelectorAll('.prev')[0].style.opacity = "1";
		}
		currIndex = i;
		i++; //next
		nextElm = slider[i];
		if (i == slider.length) {
			i = 0;
			document.querySelectorAll('.next')[0].style.pointerEvents = "none";
			document.querySelectorAll('.next')[0].style.opacity = "0.5";
		} else {
			document.querySelectorAll('.next')[0].style.pointerEvents = "all";
			document.querySelectorAll('.next')[0].style.opacity = "1";
		}

		slide();
	}, 3000);
}

function l() {
	console.log(arguments[0]);
}

function updateSlider() {
	var elm = this;
	if (elm.innerHTML == "Prev") {
		currElm.style.display = "none";
		prevElm.style.display = "block";
	} else {
		currElm.style.display = "none";
		nextElm.style.display = "block";
	}
}
