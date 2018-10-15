
// GROUP SELEKSI
const backFrom = document.getElementById("backFrom");
const inputNama = document.getElementById("namaLengkap");
const alamat = document.getElementById("alamat");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirmEmail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const allLabel = document.querySelectorAll("label");
const h1 = document.querySelectorAll("h1")[0].innerHTML="FORMULIR PENGISIAN MEMBER";
const submit = document.querySelector("button");
const kotak = document.querySelector('#kotakWarna')
const range = document.querySelector('#scrool');


// modifikasi warna teks

allLabel.forEach(function(warnaTeks){
    warnaTeks.style.color = "white";
});


// Modifikasi background form
backFrom.style.backgroundColor = "red";

//LOGIC VALIDASI
submit.addEventListener('click',function(e){

    if(inputNama.value === '')alert("Nama Lengkap harus diisi");
    if(alamat.value === '')alert("alamat harus diisi");
    if(email.value === '' )alert("Email harus diisi ");
    if(email.value !== confirmEmail.value )alert("Email anda tidak sama");
    if(password.value === '')alert("password tidak boleh kosong");
    if(password.value !== confirmPassword.value)alert('password tidak sama');

    

});

range.addEventListener('change',function(e){
    e.backgroundColor = "blue";
});

