
function likes(element){
    if(element===document.querySelector("#Neil")){
        let newLike= document.getElementById("neil")
        let contador= newLike.innerHTML
        contador++
        newLike.innerHTML = contador
    } else if(element===document.querySelector("#Nichole")){
        let newLike= document.getElementById("nichole")
        let contador= newLike.innerHTML
        contador++
        newLike.innerHTML = contador
    }else {
        let newLike= document.getElementById("jim")
        let contador= newLike.innerHTML
        contador++
        newLike.innerHTML = contador
    }
}