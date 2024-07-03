import { GetTimeParam } from "@/constant/getTime";
import { UserRole } from "@/constant/user";
import { httpRequestUtil } from "@/utils/HttpRequestUtils";

export const dashBoardService = {
    dash_board_user_URL: "/Dashboard/GetTotalUserByRole/get-total-user-by-role",
    dash_board_trash_URL: "/Dashboard/GetTotalTrashQuantity",

    get: async function (role: UserRole) {
        const response = await httpRequestUtil.get(`${this.dash_board_user_URL}?userRole=${role}`);
        return response
    },

    getTrashData: async function (time: GetTimeParam) {
        const response = await httpRequestUtil.get(`${this.dash_board_trash_URL}?getTime=${time}`);
        return response
    },

};
