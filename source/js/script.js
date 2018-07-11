var searchHotelsBtn = document.querySelector('.search-hotels-btn');
var popup = document.querySelector('.modal-window');

searchHotelsBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.toggle('modal-show');
});
