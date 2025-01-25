import axios from "axios";

const restaurantDb = axios.create({
    baseURL: "https://backend-nest-js-production.up.railway.app/api",
    headers: {
        Accept: "application/json",
    }
});

export default restaurantDb;