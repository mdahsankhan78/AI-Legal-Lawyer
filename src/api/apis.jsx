import api, { apis } from "./instance";

export const registerUser = async (email, password, name) => {
    try {
        const response = await api.post(apis.register, {
            email,
            password,
            name,
        });
        console.log(response.data);
        return ('Registration successful')
    } catch (error) {
        console.error("Registration error:", error.response.data);
        return ('Registration error')
    }
};

export const loginUser = async (email, password) => {
    try {
        const formData = new URLSearchParams();
        formData.append("username", email);
        formData.append("password", password);

        const response = await api.post("/auth/login", formData, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        localStorage.setItem("token", response.data.access_token);
        console.log("Login successful:", response.data);
    } catch (error) {
        console.error("Login error:", error.response.data);
    }
};

export const analyzeDocument = async (file) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await api.post("/analyze", formData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Analysis Result:", response.data);
    } catch (error) {
        console.error("Analysis error:", error.response.data);
    }
};

export const legalQuery = async (question, context) => {
    const token = localStorage.getItem("token");
  
    try {
      const response = await api.post(
        "/query",
        { question, context },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Query Response:", response.data);
    } catch (error) {
      console.error("Query error:", error.response.data);
    }
  };
  

