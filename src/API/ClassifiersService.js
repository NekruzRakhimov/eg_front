import axios from "axios";
import {MAIN_HOST} from "../utils/configs";

export default class ClassifiersService {
    static async getAll(limit = 10, page = 1, query="", sort="") {
        const response = await
            axios.get(`${MAIN_HOST}/classifiers`, {
                params: {
                    _limit: limit,
                    _page: page,
                    _query: query,
                    _sort: sort,
                }
            })
        return response
    }

    static async getByCode(code) {

        const response = await
            axios.get(`${MAIN_HOST}/classifiers/by_code/${code}`)
        return response
    }



    static async getClassifierItems(classifierID, itemID, limit = 10, page = 1, query="", sort="") {

        const response = await
            axios.get(`https://egback-caf44ed58dff.herokuapp.com/classifiers/${classifierID}/items/${itemID}`)
        return response
    }

    static async getClassifierAllItems(classifierID, limit = 10, page = 1, query="", sort="") {

        const response = await
            axios.get(`https://egback-caf44ed58dff.herokuapp.com/classifiers/${classifierID}/all-items`)
        return response
    }
}