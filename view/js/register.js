
const form = document.querySelector('form');


const storageKey = 'user_data';


function storeData(nama, email, password) {

const data = JSON.parse(localStorage.getItem(storageKey)) || [];


data.push({nama, email, password});

localStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
event.preventDefault();

const nama = form.nama.value;
const email = form.email.value;
const password = form.password.value;

storeData(nama, email, password);

alert('Registrasi berhasil!');

console.log(localStorage.getItem(storageKey));
// window.location.href = "login.html";


form.reset();
});

// const tombol = document.getElementById("daftar");
// tombol.onclick = daftar;

// function daftar (e){
//     e.preventDefault()
//     const nama = document.getElementById("daf_nama");
//     const email = document.getElementById("daf_email");
//     const pass = document.getElementById("daf_password");

//     localStorage.setItem("Nama", nama.value);
//     localStorage.setItem("Email", email.value);
//     localStorage.setItem("Password",pass.value);

//     alert("berhasil daftar");
// }
