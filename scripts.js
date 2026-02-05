/* --- 1. DANH SÁCH ẢNH (Bạn thay tên file thực tế vào đây) --- */
const imageList = [
    '1.jpg','2.png', '3.jpg', '4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg', '12.png', '13.jpg', '14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg', '22.jpg','23.jpg',
    '24.jpg','25.jpg','26.jpg','27.jpg','28.jpg',  'anh1.jpg', 'anh2.jpg', 'anh3.jpg', 'anh4.jpg', 'anh5.jpg',  'anh6.jpg', 'anh7.jpg', 'anh8.jpg',
];

let currentIndex = 0; // Chỉ số ảnh đang hiển thị
const slider = document.getElementById('main-slider');

/* --- 2. HÀM KHỞI TẠO: TỰ ĐỘNG CHÈN ẢNH VÀO HTML --- */
function initSlider() {
    // Chúng ta chèn ảnh vào TRƯỚC các nút bấm
    imageList.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Ảnh hoạt động ${index + 1}`;
        img.className = (index === 0) ? 'slide-img active' : 'slide-img';
        slider.insertBefore(img, slider.firstChild);
    });
}

/* --- 3. HÀM CHUYỂN ẢNH (Dùng chung cho cả Next và Prev) --- */
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide-img');
    
    // Ẩn ảnh hiện tại
    slides[currentIndex].classList.remove('active');

    // Tính toán chỉ số mới (Xử lý cả trường hợp quay vòng từ cuối về đầu)
    currentIndex = (currentIndex + direction + imageList.length) % imageList.length;

    // Hiển thị ảnh mới
    slides[currentIndex].classList.add('active');
}

// Chạy hàm khởi tạo khi trang web load xong
initSlider();
