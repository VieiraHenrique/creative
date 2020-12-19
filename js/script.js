const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const carousel = document.getElementById('carousel');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');

toggle.addEventListener('click', () => {
	menu.classList.toggle('show');
});

let pointer = 0;

const carImgs = [
	{
		url:
			'https://vieirahenrique.github.io/creative/img/desktop/image-slide-1.jpg',
		txt1: 'Lean Product Roadmap',
		txt2: '2019 Project',
	},
	{
		url:
			'https://vieirahenrique.github.io/creative/img/desktop/image-slide-2.jpg',
		txt1: 'New Majestic Hotel',
		txt2: '2018 Project',
	},
	{
		url:
			'https://vieirahenrique.github.io/creative/img/desktop/image-slide-3.jpg',
		txt1: 'Crypto Dashboard',
		txt2: '2016 Project',
	},
];

next.addEventListener('click', () => {
	if (pointer === carImgs.length - 1) {
		pointer = 0;
	} else {
		pointer++;
	}
	showImg();
});
prev.addEventListener('click', () => {
	if (pointer === 0) {
		pointer = carImgs.length - 1;
	} else {
		pointer--;
	}
	showImg();
});

const showImg = () => {
	carousel.style.background = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${carImgs[pointer].url})`;
	txt1.innerHTML = carImgs[pointer].txt1;
	txt2.innerHTML = carImgs[pointer].txt2;
};

showImg();
