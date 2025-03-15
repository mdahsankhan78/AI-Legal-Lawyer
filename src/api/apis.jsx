import api, { apis } from "./instance";
import { jwtDecode } from 'jwt-decode';

export const isUserLoggedIn = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return false;
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem('token');
            return false;
        }

        return true;
    } catch (error) {
        localStorage.removeItem('token');
        return false;
    }
};

export const registerUser = async (email, password, name) => {
    try {
        const response = await api.post(apis.register, {
            email,
            password,
            name,
        });
        console.log(response.data);
        return (response.data.message)
    } catch (error) {
        console.error("Registration error:", error.response.data);
        return (error.response.data.detail)
    }
};

export const loginUser = async (email, password) => {
    try {
        const formData = new URLSearchParams();
        formData.append("username", email);
        formData.append("password", password);

        const response = await api.post(apis.login, formData, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        localStorage.setItem("token", response.data.access_token);
        return ('Logged in successfully')

    } catch (error) {
        console.error("Login error:", error.response.data);
        if (error.response.data && error.response.status === 400) {
            return (error.response.data.detail);
        }
        else if (error.response.data && error.response.status === 401) {
            return (error.response.data.detail);
        } else {
            return ('Something went wrong');
        }
    }
};

export const getCurrentUser = async (token) => {
    try {
        const loggedIn = isUserLoggedIn()
        if (loggedIn) {
            const decodedToken = jwtDecode(token)
            const response = await api.get(`${apis.currentUser}${decodedToken.id}`, {
                headers: { "Content-Type": "application/json" },
            });
            return (response.data)
        }
        else {
            return ('User not logged in')
        }
    } catch (error) {
        return (error.response.message);
    }
};

export const analyzeDocument = async (file) => {
    // debugger
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await api.post(apis.analyze, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Ensure correct content type
            }
        });
        console.log("Analysis Result:", response.data);
        return (response.data.response)
    } catch (error) {
        console.error("Analysis error:", error.response.data);
        if (error.response.data && error.response.status === 500) {
            return (error.response.data.detail);
        }
        else if (error.response.data && error.response.status === 401) {
            return (error.response.data.detail);
        } else {
            return ('Something went wrong');
        }
    }
};

export const legalQuery = async (question) => {
    try {
        const response = await api.post(
            apis.query,
            { question },
        );
        console.log("Query Response:", response.data);
        return (response.data)
    } catch (error) {
        console.error("Query error:", error.response.data);
        return (error.response.data)
    }
};

export const generateFIR = async (data) => {
    try {
        const response = await api.post(apis.fir, data);
        console.log(response.data);
        return (response.data)
    } catch (error) {
        console.error("Generating error:", error.response);
        return (error.response.detail)
    }
};


