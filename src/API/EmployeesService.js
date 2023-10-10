import axios from "axios";

export default class EmployeesService {
    // static async getAll(limit = 10, page = 1, query="", sort="", authorizedCapitalFilter="", enterpriseAgeFilter="", location_filter="") {
    //     const response = await
    //         axios.get("https://egback-caf44ed58dff.herokuapp.com/enterprises", {
    //             params: {
    //                 _limit: limit,
    //                 _page: page,
    //                 _query: query,
    //                 _sort: sort,
    //                 _authorized_capital_filter: authorizedCapitalFilter,
    //                 _enterprise_age_filter: enterpriseAgeFilter,
    //                 _location_filter: location_filter
    //             }
    //         })
    //     return response
    // }

    static async Create(enterpriseID, employeeInfo) {
        const response = await
            axios.post(`https://egback-caf44ed58dff.herokuapp.com/enterprises/${enterpriseID}/employee`, {
                body: employeeInfo
            })
        return response
    }

    static async getByID(id) {

        const response = await
            axios.get(`https://egback-caf44ed58dff.herokuapp.com/employees/${id}`)
        return response
    }
}