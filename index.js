function login(){
    let username=document.getElementById("username")
    localStorage.setItem("username", username.value)
    window.location.href="zohar.html"
}
