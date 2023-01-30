var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

var toggleModal = (e) => {
    console.log(e.target)
    modal.classList.toggle('hide')
}
// function làm đối số thi` ko can ngoac (), co () tuc la goi function
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', e => {
    if (e.target === e.currentTarget) toggleModal()
})