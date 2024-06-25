import { httpRequestUtil } from "@/utils/HttpRequestUtils";

export const StaffService = {
    Staff_Get_URL: "/Staff/Get",
    Staff_Accept_URL: "/Staff/AcceptSchedule",

    patchAcceptSchedule: async function (id: any) {
        const response = await httpRequestUtil.patchId(`${this.Staff_Accept_URL}/${id}`);
        return response
    },

    get: async function () {
        const response = await httpRequestUtil.get(this.Staff_Get_URL);
        return response
    },

};
