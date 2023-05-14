document.querySelector('.btn-daily').addEventListener('click',() => {
    document.querySelector('.btn-daily').classList.add('focused');
    document.querySelector('.btn-weekly').classList.remove('focused');
    document.querySelector('.btn-monthly').classList.remove('focused');
    let Daily = document.querySelectorAll('.daily');
    let Weekly = document.querySelectorAll('.weekly');
    let Monthly = document.querySelectorAll('.monthly');
    for (let i=0; i < Daily.length; i++){
        Daily[i].classList.remove('hidden')
        Weekly[i].classList.add('hidden')
        Monthly[i].classList.add('hidden')
    }
})
document.querySelector('.btn-weekly').addEventListener('click',() => {
    document.querySelector('.btn-daily').classList.remove('focused');
    document.querySelector('.btn-weekly').classList.add('focused');
    document.querySelector('.btn-monthly').classList.remove('focused');
    let Daily = document.querySelectorAll('.daily');
    let Weekly = document.querySelectorAll('.weekly');
    let Monthly = document.querySelectorAll('.monthly');
    for (let i=0; i < Daily.length; i++){
        Daily[i].classList.add('hidden')
        Weekly[i].classList.remove('hidden')
        Monthly[i].classList.add('hidden')
    }
})
document.querySelector('.btn-monthly').addEventListener('click',() => {
    document.querySelector('.btn-daily').classList.remove('focused');
    document.querySelector('.btn-weekly').classList.remove('focused');
    document.querySelector('.btn-monthly').classList.add('focused');
    let Daily = document.querySelectorAll('.daily');
    let Weekly = document.querySelectorAll('.weekly');
    let Monthly = document.querySelectorAll('.monthly');
    for (let i=0; i < Daily.length; i++){
        Daily[i].classList.add('hidden')
        Weekly[i].classList.add('hidden')
        Monthly[i].classList.remove('hidden')
    }
})