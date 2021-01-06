import axios from "axios";

const URL = "https://randomuser.me/api/?results=100&nat=US"

// Export an object containing methods we'll use for accessing the RandomAPI
const API = {
    getUsers: () => axios.get(URL)
}

export default API;
