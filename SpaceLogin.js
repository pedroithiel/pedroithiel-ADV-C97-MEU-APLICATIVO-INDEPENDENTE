function logar() {
    var Spacelogin = document.getElementById("nomeSpaceUsuario").value;
    localStorage.setItem("name", Spacelogin);
    window.location= "SpaceDay.html";
}