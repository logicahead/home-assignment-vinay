import HttpService from 'Core/Http/http.service';
import { SearchTypeEnum, SearchKeyEnum } from "Types/Domain";
import * as bodybuilder from 'bodybuilder';

class RoleHttpService extends HttpService {
    private static instance: RoleHttpService;

    constructor() {
        super();
    }

    // singlton class
    public static getInstance(): RoleHttpService {
        if (!RoleHttpService.instance) {
            RoleHttpService.instance = new RoleHttpService();
        }

        return RoleHttpService.instance;
    }

    fetchRoleDefsData = async payload => {
        try {

            const query = bodybuilder().from(payload.from).size(payload.size);

            if (payload.filter && payload.filter.length) {
                payload.filter.forEach(q => {
                    if (q.type == SearchTypeEnum.filter)
                        query.addFilter(q.key, q.modelfield, q.value)
                });
            }

            if (payload.query && payload.query.length) {
                payload.query.forEach(q => {
                    if (q.type == SearchTypeEnum.query && q.key == SearchKeyEnum.multi_match)
                        query.addQuery(q.key, q.modelfield, q.value, q.options)
                    else if (q.type == SearchTypeEnum.query && q.key !== SearchKeyEnum.multi_match)
                        query.addQuery(q.key, q.modelfield, q.value)
                });
            }

            const response = await this.client.get(`/searchRoles`, { params: query.build() });
            return response.data;
        } catch (error) {
            throw error.response || error.message;
        }
    };


}

const instance = new RoleHttpService();
export default instance;
