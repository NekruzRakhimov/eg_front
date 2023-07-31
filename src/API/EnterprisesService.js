import axios from "axios";

export default class EnterprisesService {
    static async getAll(limit = 10, page = 1, query="", sort="") {
        const response = await
            axios.get("https://egback-caf44ed58dff.herokuapp.com/enterprises", {
                params: {
                    _limit: limit,
                    _page: page,
                    _query: query,
                    _sort: sort,
                }
            })
        return response
    }

    static async getByID(id) {

        const response = await
            axios.get(`https://egback-caf44ed58dff.herokuapp.com/enterprises/${id}`)
        return response
    }
}