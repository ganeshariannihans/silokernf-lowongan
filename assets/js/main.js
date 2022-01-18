function Login() {
    event.preventDefault();

    var uname = document.getElementById("username").value,
        pass = document.getElementById("password").value;
    
    if (uname == "admin" && pass == "admin") {
        location.replace("admin/index.html");
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }
}

function Register() {
    event.preventDefault();
    
    location.replace("login.html");
    alert("Registrasi Berhasil");
}

function Daftar_Loker() {
    event.preventDefault();
    
    location.replace("loker-terbaru.html");
    alert("Pendaftaran Berhasil");
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({html:true});
});