import { Avatar, Button, Fab } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import { storage } from "../../../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import {
  getHouseById, updateHouse,
} from "../../../../redux/actionThunk/houseActionThunk";
import { useNavigate, useParams } from "react-router";
import {
  setStatusHouseActionIdle,
  setStatusHouseActionPending
} from "../../../../redux/slide/houseSlide";

const Update = () => {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  let { user } = useSelector((state) => state.user);
  let { house } = useSelector((state) => state.house);
  const [image, setImage] = useState();
  const { id } = useParams();
  // useEffect(() => {
  //   disPatch(getHouseById(id));
  // }, []);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    // file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  const formik = useFormik({
    initialValues: {
      name: house ? house?.name : "",
      typeRoom: house ? house?.typeRoom : "",
      address: house ? house?.address : "",
      area: house ? house?.area : "",
      amountBedroom: house ? house?.amountBedroom : "",
      amountBathroom: house ? house?.amountBathroom : "",
      description: house ? house?.description : "",
      price: house ? house?.price : "",
      image: house ? house?.idImage.link : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tên không để trống!"),
      typeRoom: Yup.string().required("Loại phòng không để trống!"),
      address: Yup.string().required("Địa chỉ không để trống!"),
      price: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .integer("Số phòng không được bao gồm dấu thập phân")
        .required("Giá không để trống!"),
      amountBedroom: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .integer("Số phòng không được bao gồm dấu thập phân")
        .required("Số phòng không để trống"),
      amountBathroom: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .integer("Số phòng không được bao gồm dấu thập phân")
        .required("Số phòng không để trống"),
      area: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .required("Không để trống"),
      // address: Yup.string().required("Không để trống"),
    }),
    onSubmit: async (values) => {
      console.log(123456)
      disPatch(setStatusHouseActionPending())
      //   console.log(values);
      let imageUpload = image;
      if (imageUpload) {
        console.log(9999)
        const imageRef = ref(storage, `images/${imageUpload?.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            values.image = { link: url };
            console.log(values);
            console.log(id);
            disPatch(updateHouse({id: id, house: values}));
            disPatch(setStatusHouseActionIdle());
          });
        });
      }
    },
  });

  return (
    <div className="w-full bg-white p-5 min-h-[550px] h-max">
      <div className="flex justify-between border-b pb-6 items-center">
        <h4 className="text-2xl">Sửa thông tin nhà</h4>
      </div>
      <div className="mt-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tên nhà
              </label>
              <input
                type="text"
                id="first_name"
                name="name"
                className={
                  formik.touched.name && formik.errors.name
                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Loại phòng
                </label>
                <select
                  id="countries"
                  name="typeRoom"
                  className={
                    formik.touched.typeRoom && formik.errors.typeRoom
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.typeRoom}
                >
                  <option selected>Chọn loại phòng</option>
                  <option value="phòng đơn">Phòng đơn</option>
                  <option value="phòng đôi">Phòng đôi</option>
                  <option value="phòng VIP">phòng VIP</option>
                  <option value="phòng luxury">Phòng Luxury</option>
                </select>

                {formik.touched.typeRoom && formik.errors.typeRoom ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {formik.errors.typeRoom}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <label
                htmlFor="amountBedroom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Số phòng ngủ
              </label>
              <input
                type="text"
                id="amountBedroom"
                name="amountBedroom"
                className={
                  formik.touched.amountBedroom && formik.errors.amountBedroom
                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.amountBedroom}
              />
              {formik.touched.amountBedroom && formik.errors.amountBedroom ? (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formik.errors.amountBedroom}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="amountBathroom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Chọn phòng tắm
              </label>
              <input
                type="text"
                id="amountBathroom"
                name="amountBathroom"
                className={
                  formik.touched.amountBathroom && formik.errors.amountBathroom
                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.amountBathroom}
              />
              {formik.touched.amountBathroom && formik.errors.amountBathroom ? (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formik.errors.amountBathroom}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Địa chỉ
              </label>
              <input
                type="text"
                id="website"
                name="address"
                className={
                  formik.touched.address && formik.errors.address
                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formik.errors.address}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Giá tiền
              </label>
              <input
                type="text"
                id="visitors"
                name="price"
                className={
                  formik.touched.price && formik.errors.price
                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formik.errors.price}
                </p>
              ) : null}
            </div>
            <div className="mb-6">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Chọn ảnh
                </label>
                <input
                  className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  name="image"
                  onChange={handlePreviewAvatar}
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Diện tích
                </label>
                <input
                  type="text"
                  id="visitors"
                  name="area"
                  className={
                    formik.touched.area && formik.errors.area
                      ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values?.area}
                />
                {formik.touched.area && formik.errors.area ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {formik.errors.area}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Mô tả
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="description"
              onChange={formik.handleChange}
              value={formik.values?.description}
            />
          </div>

          <button
            type="submit"
            className="text-white my-4 bg-[#4fba81] hover:bg- focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sửa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
