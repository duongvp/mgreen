import { authUtil } from "@/utils/AuthUtils";
import { httpRequestUtil } from "@/utils/HttpRequestUtils";

type TParmaLogin = {
    email: string,
    password: string
}

export const AuthService = {
    LOGIN_URL: "/login",
    REGISTER_URL: "/register",

    login: async function ({ email, password }: TParmaLogin) {
        const response = await httpRequestUtil.post(this.LOGIN_URL, {
            email: email,
            password: password,
        });
        if (response.status == 200) {
            const res = await response.json()
            authUtil.save('token', `${res.tokenType} ${res.accessToken}`)
        }
        return response
    },

    register: async function (email: string, password: string) {
        const response = await httpRequestUtil.post(this.REGISTER_URL, {
            email: email,
            password: password,
        });
        return response

    }
};
