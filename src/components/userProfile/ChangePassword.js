import React, {useState} from "react";
import {Form, useFormik} from "formik";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";

export default function ChangePassword() {
    const [state, setState] = useState({});
    const formik = useFormik({
        initialValues: {
            passwordNow: '',
            newPassword:'',
            confirmNewPassword:'',
        },
        onSubmit: async (values, helpers) => {
            console.log(values)


        },

    })


    // const handleChange = (e) => {
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 p-10 ">
                <div
                    className=" bg-[#ffffff] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#"
                       className="flex items-center mb-6 text-2xl font-semibold text-gray-900 white:text-white">
                    </a>
                    <div
                        className=" regal- write w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Đổi mật khẩu </h1>
                            {/*<p className="text-center text-muted">*/}
                            {/*    Vui lòng nhập số điện thoại của bạn và chúng tôi sẽ gửi mật khẩu mới đến bạn</p>*/}

                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="passwordNow"
                                           className="flex justify-start block mb-2 text-sm font-medium dark:text-black dark:text-black"> Mật
                                        khẩu hiện tại *</label>
                                    <input type="password"
                                           name="passwordNow"
                                           id="passwordNow"
                                           className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="*********"
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.passwordNow}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="flex justify-start block mb-2 text-sm font-medium dark:text-black dark:text-black"> Mật
                                        khẩu mới *</label>
                                    <input type="password"
                                           name="newPassword"
                                           className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="*********"
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.newPassword}/>
                                </div>
                                <div>
                                    <label htmlFor="confirmNewPassword"
                                           className="flex justify-start block mb-2 text-sm font-medium dark:text-black dark:text-black"> Nhập
                                        lại mật khẩu mới *</label>
                                    <input type="password"
                                           name="confirmNewPassword"
                                           className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="*********"
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.confirmNewPassword}/>
                                </div>

                                <button type="submit"
                                        className="w-full text-white bg-[#14f1d7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đổi
                                    mật khẩu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}