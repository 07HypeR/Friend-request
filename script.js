var stranger = document.querySelector("h5")
var btn = document.querySelector("#Follow")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
    stranger.innerHTML = "Friend"
    stranger.style.color = "green"
    btn.innerHTML = "Unfollow"
    btn.style.color = "red"
    check = 1
    }else{
    stranger.innerHTML = "Stranger"
    stranger.style.color = "red"
    btn.innerHTML = "Follow"
    btn.style.color = "white"
    check = 0
    }
})
