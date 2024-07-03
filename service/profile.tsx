import { httpRequestUtil } from "@/utils/HttpRequestUtils";

export const ProfileService = {
    profile_role_URL: "/Profile/SetRole",
    profile_URL: "/Profile/SetProfile",
    profile_detail_url: "/Profile/GetProfile",

    get: async function () {
        const response = await httpRequestUtil.get(this.profile_detail_url);
        return response
    },

    put: async function (body: any) {
        const response = await httpRequestUtil.put(this.profile_URL, body);
        return response
    },

    patch: async function (body: any) {
        const response = await httpRequestUtil.patch(this.profile_role_URL, body);
        return response
    },

};
