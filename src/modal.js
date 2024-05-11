export const openModal = () => {
    const leyes = document.querySelector(".leyes");
    const modalLeyes = document.querySelector(".modal-leyes-container");

    leyes.addEventListener("click", () => {
        modalLeyes.classList.add("modal-open");
    })

    closeModal(modalLeyes);
}

const closeModal = modal => {
    const btnCloseModal = document.querySelector(".btn-closemodal");

    btnCloseModal.addEventListener("click", () => {
        modal.classList.remove("modal-open");
    })
}

export default openModal;