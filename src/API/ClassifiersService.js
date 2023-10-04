import axios from "axios";

export default class ClassifiersService {
    static async getAll(limit = 10, page = 1, query="", sort="") {
        const response = await
            axios.get("https://egback-caf44ed58dff.herokuapp.com/classifiers", {
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
            axios.get(`https://egback-caf44ed58dff.herokuapp.com/classifiers/by_code/${code}`)
        return response
    }



    static async getClassifierItems(classifierID, itemID, limit = 10, page = 1, query="", sort="") {

        const response = await
            axios.get(`https://egback-caf44ed58dff.herokuapp.com/classifiers/${classifierID}/items/${itemID}`)
        return response
    }
}