import { axiosConfig } from "./axios";

const bookingApi = {
  booking(payload, token) {
    const url = `/booking`;
    return axiosConfig.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  bookingPending(token) {
    const url = `/booking/booking-pending`;
    return axiosConfig.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  bookingAccept(idHome, idBooking, token) {
    const url = `/booking/accept/${idBooking}`;
    return axiosConfig.post(
      url,
      { idHome: idHome },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
export default bookingApi;
