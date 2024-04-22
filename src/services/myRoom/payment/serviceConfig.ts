import axios from "axios";
import { getCookie } from "cookies-next";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_MYROOM_API_URI}${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}`,

  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthTokenPaymentService = () => {
  const userData: any = JSON.parse(getCookie("userData")!);
  const accessToken = userData.stsTokenManager.accessToken;
  axiosClient.defaults.headers["Authorization"] = "Bearer " + accessToken;
};

export default axiosClient;
