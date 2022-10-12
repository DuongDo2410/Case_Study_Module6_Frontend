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
  getBooking() {
    const url = `/booking`;
    return axiosConfig.get(url);
  },
  getBookingSuccessOwner() {
    const url = `/booking/booking-success`;
    return axiosConfig.get(url);
  },
  getBookingPendingRenter() {
    const url = `/booking/booking-pending-renter`;
    return axiosConfig.get(url);
  },
  getBookingAcceptRenter() {
    const url = `/booking/booking-accept-renter`;
    return axiosConfig.get(url);
  },
  BookingSuccessOwner(id) {
    const url = `/booking/success/${id}`;
    return axiosConfig.post(url);
  },
  bookingPending(token) {
    const url = `/booking/booking-pending`;
    return axiosConfig.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  bookingActionOwner(token) {
    const url = `/booking/booking-accept`;
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
  BookingCanCel(id) {
    const url = `/booking/cancel/${id}`;
    return axiosConfig.post(url);
  },
  historyBooking() {
    const url = `/booking/historyRenter`;
    return axiosConfig.get(url);
  },
};
export default bookingApi;
