function signup(){
    var getEmail = document.querySelector('#email')
    var getPass = document.querySelector('#password')
    var userName = document.querySelector('#username')
    localStorage.setItem('email' , getEmail.value)
    localStorage.setItem('password' , getPass.value)
    localStorage.setItem('username' , userName.value)
    alert("Signup Successful")
    location.href = './signin.html'
}

function signin() {
    var getEmail = document.querySelector('#email').value;
    var getPass = document.querySelector('#password').value;
    var userName = document.querySelector('#username').value;

    var storedEmail = localStorage.getItem('email');
    var storedPass = localStorage.getItem('password');
    var storeduserName = localStorage.getItem('username');

    if (getEmail === storedEmail && getPass === storedPass && userName === storeduserName) {
        alert("Email and Password matched successfully");
        location.href = './welcome.html';
    } else {
        alert("Input didn't matched successfully");
        location.href = './signup.html'; // Redirect to signup page if credentials don't match
    }
}
