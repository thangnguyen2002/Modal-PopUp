var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
// lấy chính xác thẻ i
var btnClose = document.querySelector('.modal__footer button')
// lấy chính xác thẻ button

var toggleModal = (e) => {
    console.log(e.target)
    // e.target la nhung su kien đã querySelector trên khi click vào chúng
    modal.classList.toggle('hide')
}
// function làm đối số thi` ko can ngoac (), co () tuc la goi function
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', e => {
    if (e.target === e.currentTarget) toggleModal()
    // event đã querySelector === event modal thì mới gọi function
    // nên chỉ khi click vào những cái đã đc querySelector mới thêm bớt class 'hide'
    // còn click vào header phần chữ hay body phần chữ.. đều ko có hiệu lực, ko tác dụng
    // currentTarget la su kien dc addEvent hien tai gan nhat, tuc la modal
})