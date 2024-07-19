
//Switch phương thức Login

document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử cần thiết từ DOM
    const emailBtn = document.getElementById('emailBtn');
    const phoneBtn = document.getElementById('phoneBtn');
    const emailForm = document.getElementById('emailForm');
    const phoneForm = document.getElementById('phoneForm');

    emailBtn.addEventListener('click', function() {
        emailForm.classList.remove('hidden');
        phoneForm.classList.add('hidden');
        emailBtn.querySelector('span').classList.add('bg-ic-brand-a', 'text-white');
        phoneBtn.querySelector('span').classList.remove('bg-ic-brand-a', 'text-white');
    });

    phoneBtn.addEventListener('click', function() {
        phoneForm.classList.remove('hidden');
        emailForm.classList.add('hidden');
        phoneBtn.querySelector('span').classList.add('bg-ic-brand-a', 'text-white');
        emailBtn.querySelector('span').classList.remove('bg-ic-brand-a', 'text-white');
    });

// Thiết lập trạng thái mặc định là Email
    emailBtn.click();  // Kích hoạt nút Email để hiển thị form Email khi trang được tải    
});








//Logic Enabel, Disable buton Đăng nhập
document.getElementById('emailInput').addEventListener('input', validateEmailForm);
document.getElementById('passwordInput').addEventListener('input', validateEmailForm);

document.getElementById('phoneInput').addEventListener('input', validatePhoneForm);
document.getElementById('phonePasswordInput').addEventListener('input', validatePhoneForm);
function validateEmailForm() {    
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;    
    const loginBtn = document.getElementById('loginBtn');
    if (email && password) {
        loginBtn.removeAttribute('disabled'); 
        loginBtn.classList.remove('bg-ic-ink-3s', 'text-ic-ink-5s');  
        loginBtn.classList.add('bg-ic-primary-6s', 'text-ic-white-6s'); 
        
        
    } else {
        loginBtn.setAttribute('disabled', 'disabled');   
        loginBtn.classList.add('bg-ic-ink-3s', 'text-ic-ink-5s');  
        loginBtn.classList.remove('bg-ic-primary-6s', 'text-ic-white-6s');  
    }
}
function validatePhoneForm() {    
    const phone = document.getElementById('phoneInput').value;
    const password = document.getElementById('phonePasswordInput').value;    
    const phoneLoginBtn = document.getElementById('phoneLoginBtn');
    if (phone && password) {
        phoneLoginBtn.removeAttribute('disabled'); 
        phoneLoginBtn.classList.remove('bg-ic-ink-3s', 'text-ic-ink-5s');  
        phoneLoginBtn.classList.add('bg-ic-primary-6s', 'text-ic-white-6s');    
    } else {
        phoneLoginBtn.setAttribute('disabled', 'disabled');  
        phoneLoginBtn.classList.add('bg-ic-ink-3s', 'text-ic-ink-5s');  
        phoneLoginBtn.classList.remove('bg-ic-primary-6s', 'text-ic-white-6s');   
    }
}

