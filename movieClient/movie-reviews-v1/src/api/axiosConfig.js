import axios from "axios";

export default axios.create({
    baseURL:'https://8713-70-48-90-55.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});