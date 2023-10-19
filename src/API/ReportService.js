import axios from "axios";
import {MAIN_HOST} from "../utils/configs";

export default class ReportService {
    static async GetIndustrialObjectsKeyIndicators(filter) {
        const response = await
            axios.get(`${MAIN_HOST}/reports/technical_economic/industrial_activity_objects/key_indicators`,
                {
                    params: {
                        _date_from: filter.date_from,
                        _date_to: filter.date_to,
                        _location: filter.location,
                        _economic_activity: filter.economic_activity,
                        _organization_age: filter.organization_age,
                        _yearly_turnover: filter.yearly_turnover,
                        _authorized_capital: filter.authorized_capital
                    }
                }
            )
        return response
    }
}