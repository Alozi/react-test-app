import axios from "axios";

const API_URL = "https://dummy-api.d0.acom.cloud/api/auth/";

export async function userLogin(email, password, getUserInfo, setUser, setDataErrorMessage) {
    axios
        .post(`${API_URL}login?email=${email}&password=${password}`)
        .then((response) => {
            // console.log("Data:", response.data);

            sessionStorage.setItem('access_token', response.data.access_token);
            // setAccessToken(response.data.access_token);
            getUserInfo(setUser);
        })
        .catch((error) => {
            console.error("Error:", error);
            let errorMessage;
            if (error.response) {
                if (error.response.data.password !== undefined) {
                    errorMessage = error.response.data.password[0];
                } else if (error.response.data.error !== undefined) {
                    errorMessage = error.response.data.error;
                }
            } else {
                errorMessage = "Internal server error. Please try again later";
            }

            setDataErrorMessage((prevValues) => {
                return {
                    ...prevValues,
                    show: true,
                    text: errorMessage,
                };
            });
        });
}

export async function getUserInfo(setUser) {
    axios
        .get(`${API_URL}user-profile`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            },
        })
        .then((response) => {
            // console.log("Data:", response.data);

            setUser(() => {
                return {
                    name: response.data.name,
                    email: response.data.email,
                    profileImage: response.data.profile_image,
                };
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export async function userLogout(setUser, setIsUserAuthorized) {
    axios
        .post(`${API_URL}logout`, {}, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            },
        })
        .then((response) => {
            // console.log("Data:", response.data);

            setUser(() => {
                return {
                    name: '',
                    email: '',
                    profileImage: '',
                };
            });

            setIsUserAuthorized(false);

            sessionStorage.removeItem('access_token');
        })

        .catch((error) => {
            console.error("Error:", error);
        });
}