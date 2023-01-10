let billAmount = document.getElementById('billamt')
let serviceQuality = document.getElementById('serviceQual')
let numberOfPeople = document.getElementById('peopleamt')
let each  = document.getElementById('each')
let tip = document.getElementById('tip')
let totalTip = document.getElementById('totalTip')

totalTip.style.display = 'none'


function calculateTip(){
    if(serviceQuality.value == '' || billAmount.value ==''){
        alert('Veuillez renseigner definir le montant de la factuer et selectionné une devise')
    }
    if(numberOfPeople.value == '' || parseInt(numberOfPeople.value)<1){
        each.style.display = 'none'
        numberOfPeople.value = 1
    }


    let total = (parseInt(billAmount.value) * parseFloat(serviceQuality.value)) / parseInt(numberOfPeople.value)
        console.log(total)
        totalTip.style.display = 'block'
        tip.textContent = total
}