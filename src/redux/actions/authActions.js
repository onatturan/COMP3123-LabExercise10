import axios from "axios";

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post("https://your-api-url.com/login", credentials);
        const { user, token } = response.data;

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: { user, token },
        });
        localStorage.setItem("token", token);
    } catch (error) {
        console.error("Login failed", error);
    }
};

export const logout = () => {
    localStorage.removeItem("token");
    return { type: "LOGOUT" };
};
