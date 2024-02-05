import axios from "axios";

export default axios.create({
  baseURL: "https://414c-70-48-90-55.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
