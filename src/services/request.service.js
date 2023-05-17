import axios from "axios";

const RequestService = axios.create({
    baseURL: "http://localhost:8080/api",
});

export default RequestService