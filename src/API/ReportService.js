import axios from "axios";

export default class ReportService {
    static async GetIndustrialObjectsKeyIndicators(limit = 10, page = 1) {
        const response = await
            axios.get("https://egback-caf44ed58dff.herokuapp.com/reports/technical_economic/industrial_activity_objects/key_indicators",
                {
                    params: {
                        // _limit: limit,
                        // _page: page
                    }
                }
            )
        return response
    }
}