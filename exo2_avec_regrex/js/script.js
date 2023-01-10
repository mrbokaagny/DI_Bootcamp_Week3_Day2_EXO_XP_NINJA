// recuperation du input
let email = document.getElementById('email')



function checkEmail(event){
    event.preventDefault()

    if(email.value == ''){
        alert("Veuillez entrer votre addresse mail")
    }else{
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(email.value.match(pattern)){
            alert("Votre addresse est valide ")
        }else{
            alert("Votre addresse email n'est pas valide")
        }
    }
}