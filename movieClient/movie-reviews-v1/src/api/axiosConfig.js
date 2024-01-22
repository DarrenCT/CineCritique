import axios from "axios";

export default axios.create({
  baseURL: "https://18bb-70-48-90-55.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
