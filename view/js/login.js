const form = document.querySelector('form');


const storageKey = 'user_data';


function login(email, password) {

const data = JSON.parse(localStorage.getItem(storageKey));


const user = data.find((user) => user.email === email && user.password === password);


if (user) {
    alert('Login berhasil!');
    window.location.href = "../../index.html";

} else {
    alert('Username atau password salah!');
}
}


form.addEventListener('submit', (event) => {
event.preventDefault();


const email = form.email.value;
const password = form.password.value;


login(email, password);

form.reset();
});


// const button = document.getElementById("login");
// const email = document.getElementById("email");
// const pass = document.getElementById("pass");

// button.addEventListener("click", function (e){
//     e.preventDefault()
//     // const local_email = localStorage.getItem("Email");
//     // const local_password = localStorage.getItem("Password");

//     if (email.value == 'fazry@gmail.com' && pass.value == '123') {
//         alert("Selamat Datang");
//         window.location.href = "../../index.html";
//         } else {
//         alert("Username atau Password Salah");
//         }
// });
