function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.password-toggle');
    const icon = toggleButton.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('bi-eye');        
        icon.classList.add('bi-eye-slash');     
        toggleButton.classList.add('active');   
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('bi-eye-slash');  
        icon.classList.add('bi-eye');         
        toggleButton.classList.remove('active'); 
    }
}