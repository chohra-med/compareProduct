import {API} from "../config/apiCalls";
import axios from "axios";

const getProducts = async () => {
    return await axios.get(API()).then(res => res.data.products);
}

export {
    getProducts
}
