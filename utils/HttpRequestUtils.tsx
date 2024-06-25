import { authUtil } from "./AuthUtils";

async function getHeader() {
    let header = {};
    const accessToken = await authUtil.getValueFor("token");
    if (accessToken) {
        header = {
            'Content-Type': 'application/json',
            'accept': 'text/plain',
            'Authorization': accessToken,
        }
    } else {
        header = {
            'Content-Type': 'application/json',
        }
    }
    return header;
}


async function post(url: string, body: any) {
    const header = await getHeader();
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: header
    });
    return response
}

async function get(url: string) {
    const header = await getHeader();
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
        method: 'GET',
        headers: header,
    })
    return response;
}

async function put(url: string, body: any) {
    const header = await getHeader();
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
        method: 'PUT',
        body: typeof body == "string" ? body : JSON.stringify(body),
        headers: header
    });
    return response
}

async function patch(url: string, body: any) {
    const header = await getHeader();
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
        method: 'PATCH',
        body: typeof body == "string" ? body : JSON.stringify(body),
        headers: header
    });
    return response
}

async function patchId(url: string) {
    const header = await getHeader();
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
        method: 'PATCH',
        headers: header
    });
    return response
}


async function deleteRequest(url: string, body: any) {
    const header = await getHeader();
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
        method: 'DELETE',
        body: typeof body == "string" ? body : JSON.stringify(body),
        headers: header
    });
    return response
}

export const httpRequestUtil = {
    post,
    get,
    put,
    patch,
    patchId,
    deleteRequest
};
