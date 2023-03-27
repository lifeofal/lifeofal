import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080/rest/v1";

export default axios.create({
    baseURL: apiUrl
    // headers: {"ngrok-skip-browser-warning": "true"}
})