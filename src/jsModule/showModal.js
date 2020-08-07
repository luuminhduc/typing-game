export function showModal(msg) {
    document.querySelector('.message').innerText = msg;
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.add('active');
}