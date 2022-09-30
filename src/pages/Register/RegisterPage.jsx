import React from "react";

export function RegisterPage() {
    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className=" bg-[#ffffff] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 white:text-white">
                </a>
                <div className=" regal- write w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Đăng ký
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="flex justify-start block mb-2 text-sm font-medium dark:text-black dark:text-black">Nhập tên đăng nhập *</label>
                                <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="flex justify-start block mb-2 text-sm font-medium dark:text-black dark:text-black">Nhập Email *</label>
                                <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="flex justify-start block mb-2 text-sm font-medium dark:text-black dark:text-black">Nhập Số Điện Thoại *</label>
                                <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập số điện thoại" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="  flex justify-start block mb-2 text-sm font-medium text-gray-900 c">Mật khẩu *</label>
                                <input type="password" name="password" id="password" placeholder="Nhập mật khẩu  " className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className=" flex justify-start block mb-2 text-sm font-medium text-gray-900 dark:text-black">Xác nhận Mật khẩu *</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black " required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className=" flex justify-start block mb-2 text-sm font-medium text-gray-900 dark:text-black">Họ tên *</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Nhập họ tên" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black " required />
                            </div>
                            <div className="form-group rows-2">
                                <div className="columns-1 text-left">
                                    <label htmlFor="accountType" className="form-label">Bạn là? <span className="signup_required__3k-z3">*</span></label>
                                </div>
                                <div className="d-flex columns-2">
                                    <div className="col">
                                        <label className="mb-0">
                                            <input name="accountType" type="radio" value="individual" />
                                                <p className="mb-0 ml-1 d-inline text-sm">Cá nhân</p>
                                        </label>
                                    </div>
                                    <div className="col"><label className="mb-0">
                                        <input name="accountType" type="radio" value="business" />
                                            <p className="mb-0 ml-1 d-inline text-sm">Công ty </p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="  flex justify-start font-light text-gray-500 dark:text-gray-300">Tôi chấp nhận  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                                        Các điều khoản và điều kiện </a></label>
                                </div>
                            </div>
                            <button  type="submit" className="w-full text-white bg-[#14f1d7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Tạo một tài khoản </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                               Bạn có sẵn sàng tạo một tài khoản? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}