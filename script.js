document.addEventListener("DOMContentLoaded", () => {
    // ================= MODAL =================
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
        refs.openModalBtn.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);

        refs.modal.addEventListener("click", (event) => {
            if (event.target === refs.modal) {
                toggleModal();
            }
        });
    }

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }

    // ================= TIMER =================
    const myTimer = document.querySelector('.timer');

    if (myTimer) {
        let myTimerInJs = 10;
        
        const myinterval = setInterval(() => {
            if (myTimerInJs > 0) {
                myTimer.textContent = myTimerInJs;
                myTimerInJs--;
            } else if (myTimerInJs === 0) {
                myTimer.textContent = '0';
                clearInterval(myinterval);
            }
            console.log(myTimerInJs);
        }, 1000);
    }
});