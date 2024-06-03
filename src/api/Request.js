import axios from "axios";

const Request = axios.create({
    baseURL: "http://localhost:8080/events",
});
export default Request;
