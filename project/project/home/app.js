document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let counter = 1;

    function slide() {
        slider.style.transform = `translateX(${-counter * 100}%)`;
        counter++;
        if (counter == document.querySelectorAll('.slide').length) {
            counter = 0;
        }
    }

    setInterval(slide, 3000); 
});
