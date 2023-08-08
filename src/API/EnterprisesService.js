import axios from "axios";

export default class EnterprisesService {
    static async getAll(limit = 10, page = 1, query="", sort="", authorizedCapitalFilter="", enterpriseAgeFilter="") {
        const response = await
            axios.get("https://egback-caf44ed58dff.herokuapp.com/enterprises", {
                params: {
                    _limit: limit,
                    _page: page,
                    _query: query,
                    _sort: sort,
                    _authorized_capital_filter: authorizedCapitalFilter,
                    _enterprise_age_filter: enterpriseAgeFilter
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