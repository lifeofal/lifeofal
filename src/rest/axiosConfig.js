import axios from "axios";

export default axios.create({
    baseURL: `http://localhost:8080/rest/v1`
    // headers: {"ngrok-skip-browser-warning": "true"}
})