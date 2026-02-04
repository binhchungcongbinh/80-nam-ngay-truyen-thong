document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slide-img');
    const totalImages = images.length;
    let slideTimer;

    function showSlide(index) {
        images.forEach((img) => img.classList.remove('active'));
        if (images[index]) {
            images[index].classList.add('active');
        }
    }

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
        resetTimer(); // Reset thời gian chờ khi bấm nút
    }

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showSlide(currentIndex);
        resetTimer(); // Reset thời gian chờ khi bấm nút
    }

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000);
    }

    // Khởi tạo
    showSlide(currentIndex);
    resetTimer();
});
