// This Section Upgrade Soon
import {ToastContent, ToastOptions} from "react-toastify/dist/types";

export declare type ServerToClientEvents = {
    result: boolean,
    message: string
    data: any
}

export declare type FetchMethode = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE";

export declare type apiInputRequired = {
    url: string,
}

export declare type apiInputOptional = {
    body: any,
    token: boolean,
    formData?: boolean,
    method?: FetchMethode,
    successMes?: ToastContent,
    errorMes?: ToastContent,
    messageConfig?: ToastOptions<{}>
}

