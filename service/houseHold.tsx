import { ScheduleStateType } from "@/constant/schedule";
import { authUtil } from "@/utils/AuthUtils";
import { httpRequestUtil } from "@/utils/HttpRequestUtils";


interface TCreatDate {
    date: string
    startTime: string
    endTime: string
    quantity: number
    scheduleState: number
}

export const houseHoldService: any = {
    HouseHold_Get_URL: "/HouseHold/Get",
    HouseHold_Create_URL: "/HouseHold/Create",
    HouseHold_Update_URL: "/HouseHold/Update",
    HouseHold_Delete_URL: "/HouseHold/Delete",

    //Tao moi lich
    post: async function (data: TCreatDate) {
        const response = await httpRequestUtil.post(this.HouseHold_Create_URL, data);
        return response
    },

    get: async function (scheduleState: ScheduleStateType) {
        const response = await httpRequestUtil.get(`${this.HouseHold_Get_URL}?scheduleState=${scheduleState}`);
        return response
    },

    put: async function (id: any) {
        const response = await httpRequestUtil.put(this.HouseHold_Update_URL, id);
        return response
    },

    delete: async function (id: any) {
        const response = await httpRequestUtil.deleteRequest(this.HouseHold_Delete_URL, id);
        return response
    },

};
