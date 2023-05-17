import axios from "axios";

const RequestService = axios.create({
    baseURL: "https://localhost:8080/api",
});

export default RequestService