import axios from "axios";
const baseURL = "https://dev-api.datadistill.co/api/v1";

export const axiosPublic = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosPrivate.interceptors.request.use(
//   (config) => {
//     const session = getSession();
//     if (session?.accessToken) {
//       config.headers["Authorization"] = `Bearer ${session.accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 (Unauthorized) and we haven't tried to refresh the token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) {
          redirectToLogin();
          return Promise.reject(error);
        }

        // Try to refresh the token
        const response = await axiosPublic.post("/refresh-token", {
          refresh_token: refreshToken,
        });

        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axiosPrivate(originalRequest);
      } catch (refreshError) {
        // If refresh token is invalid or expired, redirect to login
        redirectToLogin();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

function redirectToLogin() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.href = "/sign-in";
}
