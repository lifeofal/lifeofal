import axios from "axios";

export default axios.create({
    baseURL: `https://lifeofal.herokuapp.com/rest/v1`
    // headers: {"ngrok-skip-browser-warning": "true"}
})