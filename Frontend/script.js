// Lấy các phần tử cần thiết từ DOM
const sliderItems = document.querySelector('.slider-items');
const sliderItem = document.querySelectorAll('.slider-item');
const arrowRight = document.querySelector('.ri-arrow-right-fill');
const arrowLeft = document.querySelector('.ri-arrow-left-fill');
const header = document.querySelector('.header');

// Biến điều khiển chỉ số hiện tại của slider
let i = 0;

// Hàm cập nhật slider
function updateSlider() {
    // Ẩn tất cả slider items
    sliderItem.forEach((item) => {
        item.classList.remove('active'); // Xóa lớp active
        item.style.opacity = '0'; // Đặt opacity về 0
    });
    
    // Cập nhật slider với item hiện tại
    sliderItems.style.transform = `translateX(${-i * 100}%)`; // Di chuyển slider
    sliderItem[i].classList.add('active'); // Thêm lớp active cho item hiện tại

    // Từ từ tăng opacity cho item hiện tại
    setTimeout(() => {
        sliderItem[i].style.opacity = '1'; // Đặt opacity về 1
    }, 100); // Thay đổi độ trễ nếu cần
}

// Thêm sự kiện click cho nút mũi tên phải
arrowRight.addEventListener('click', () => {
    i = (i + 1) % sliderItem.length; // Chuyển sang item tiếp theo (circular)
    updateSlider();
});

// Thêm sự kiện click cho nút mũi tên trái
arrowLeft.addEventListener('click', () => {
    i = (i - 1 + sliderItem.length) % sliderItem.length; // Quay lại item trước (circular)
    updateSlider();
});

// Tự động chuyển slider sau mỗi 3 giây
setInterval(() => {
    arrowRight.click(); // Tự động click vào nút mũi tên phải
}, 3000);

// Theo dõi chuyển động chuột để điều chỉnh vị trí thanh header
// document.addEventListener('mousemove', (e) => {
//     const x = e.clientX; // Vị trí x của chuột
//     const y = e.clientY; // Vị trí y của chuột

//     header.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
// });
