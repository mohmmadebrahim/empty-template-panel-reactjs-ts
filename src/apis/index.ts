import localForageTools from "../components/localForageTools";
import {apiInputRequired, apiInputOptional} from "../models/responsData";
import {toast} from "react-toastify";


export const baseUrl = `http://localhost:3000`
export const siteUrl = `https://site-address.com`

export async function getToken(): Promise<string | null> {
    return await localForageTools.GetItem("token");
}

export async function customApi(required: Required<apiInputRequired>, optional: Partial<apiInputOptional>) {
    const init: RequestInit = {}
    const headers: HeadersInit = {}
    if (optional.token) headers['token'] = await getToken() ?? ""
    if (optional.method !== "GET") init.body = optional.body
    if (optional.formData) {
        headers['Content-Type'] = "multipart/form-data"
    } else {
        headers['Content-Type'] = "application/json"
    }
    init.headers = headers
    init.method = optional.method ?? "GET"
    const request = await fetch(required.url, init)
    const response = request.json();
    return response.then((res) => {
        if (res.result) {
            toast(optional.successMes, optional.messageConfig = {type:"success"})
            return res
        } else {
            toast(optional.errorMes, optional.messageConfig = {type: "error"})
            return res
        }
    })
        .catch((err) => {
            console.log(err)
            return err
        })
}
