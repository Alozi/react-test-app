import axios from "axios";

const API_URL = "https://dummy-api.d0.acom.cloud/api/auth/";

export async function userLogin(email, password, setAccessToken, getUserInfo, setUser, setDataErrorMessage) {
    axios
        .post(`${API_URL}login?email=${email}&password=${password}`)
        .then((response) => {
            console.log("Data:", response.data);
            setAccessToken(response.data.access_token);
            getUserInfo(response.data.access_token, setUser);
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

export async function getUserInfo(accessToken, setUser) {
    console.log("getInfo");
    console.log(accessToken);

    try {
        axios
            .get(`${API_URL}user-profile`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                console.log("Data:", response.data);

                setUser(() => {
                    return {
                        login: true,
                        name: response.data.name,
                        email: response.data.email,
                        profileImage: response.data.profile_image,
                    };
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } catch (error) {
        console.log(error);
    }
}