import { ScheduleStateType } from "@/constant/schedule";
import { httpRequestUtil } from "@/utils/HttpRequestUtils";

export const deliveryStaffService = {
    DeliveryStaff_Get_URL: "/DeliveryStaff/Get",
    DeliveryStaff_Accept_URL: "/DeliveryStaff/AcceptSchedule",
    DeliveryStaff_UnAccept_URL: "/DeliveryStaff/UnAcceptSchedule",
    DeliveryStaff_Confirm_URL: "/DeliveryStaff/ConfirmReceiveSchedule",

    //Nhận lịch đi lấy rác.
    patchAcceptSchedule: async function (id: any) {
        const response = await httpRequestUtil.patchId(`${this.DeliveryStaff_Accept_URL}/${id}`);
        return response
    },

    patchUnAcceptSchedule: async function (id: any) {
        const response = await httpRequestUtil.patchId(`${this.DeliveryStaff_UnAccept_URL}/${id}`);
        return response
    },

    patchConfirmReceiveSchedule: async function (id: any, realQuantity: any) {
        const response = await httpRequestUtil.patch(`${this.DeliveryStaff_Confirm_URL}/${id}`, { realQuantity: realQuantity });
        return response
    },

    get: async function (scheduleState: ScheduleStateType) {
        const response = await httpRequestUtil.get(`${this.DeliveryStaff_Get_URL}?scheduleState=${scheduleState}`);
        return response
    },

};
