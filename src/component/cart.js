const Cart = {
    render(){
        return /*html*/`

        <div class="w-full min-h-screen flex justify-center items-center bg-black">
        <p id="modal-switch" class="text-[10vw] bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500 font-bold cursor-pointer">Click Me</p>
        </div>
        <!-- Modal  -->
        <div class="w-full h-full">
        <div id="modal-bg" class="w-full h-full bg-[#848A97] top-0 absolute hidden"></div>
        <div id="modal-box" class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-2xl font-medium">Payment Successful</span>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur?</p>
            <button id="modal-close" class="p-3 bg-[#4F46E5] rounded-lg w-full text-white">Click Background</button>
        </div>
        </div>
        `
    },
    alterRender(){
        const modalbg = document.getElementById('modal-bg');
        const modalSwitch = document.getElementById('modal-switch');
        const modalBox = document.getElementById('modal-box');
        const modalClose = document.getElementById('modal-close');
        modalbg.addEventListener("click", function() {
            modalBox.classList.add('hidden')
            modalbg.classList.add('hidden')
        });
        modalSwitch.addEventListener("click", function() {
            modalBox.classList.remove('hidden')
            modalbg.classList.remove('hidden')
        });
        modalClose.addEventListener("click", function() {
            modalBox.classList.remove('hidden')
            modalbg.classList.remove('hidden')
        });
    }

}

export default Cart;