import { signup } from "../api/user";

const SignUpPage = {
    render(){


        return /*html*/`
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <a href="/">
                        <img class="mx-auto h-12 w-auto" src="./img/1200px-FPT-Polytechnic.png" alt="Workflow">
                    </a>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Đăng ký Tài Khoản
                    </h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        hoặc
                        <a href="/signin" class="font-medium text-[#0066B3] hover:text-[#F26F1B]">
                        Đăng Nhập
                        </a>
                    </p>
                </div>
                <form class="mt-8 space-y-6" action="#" method=""  id="form-signup">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="username" name="email" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] focus:z-10 sm:text-sm" placeholder="Họ và Tên...">
                        </div>
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email" name="email" type="email" autocomplete="email" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] focus:z-10 sm:text-sm" placeholder="Email...">
                        </div>
                        
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="password" name="email" type="password" autocomplete="email" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] focus:z-10 sm:text-sm" placeholder="Mật Khẩu...">
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password2" name="password" type="password" autocomplete="current-password" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] focus:z-10 sm:text-sm" placeholder="Nhập Lại Mật Khẩu...">
                        </div>
                    </div>

                    

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0066B3] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <!-- Heroicon name: solid/lock-closed -->
                                <svg class="h-5 w-5 text-white group-hover:text-[#0066B3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Đăng Ký
                        </button>

                    </div>
                </form>
            </div>
        </div>
        
        `;
    },
    afterRender(){
        const formSignup = document.querySelector('#form-signup');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: document.querySelector('#username').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                console.log(response);
                

            } catch (error) {
                console.log(error.response.data);
                
            }

            
        });
    }



}
export default SignUpPage;


