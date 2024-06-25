import { httpRequestUtil } from "@/utils/HttpRequestUtils";

export const ProfileService = {
    profile_role_URL: "/Profile/SetRole",
    profile_URL: "/Profile/SetProfile",

    put: async function (body: any) {
        const response = await httpRequestUtil.patch(this.profile_URL, body);
        return response
    },

    patch: async function (body: any) {
        const response = await httpRequestUtil.patch(this.profile_URL, body);
        return response
    },

};
