import {ApiInputRequired, ApiInputOptional} from "../models";
import {toast} from "react-toastify";
import LocalForage from "localforage"

export const baseUrl = `http://localhost:3000`
export const siteUrl = `https://site-address.com`
export async function getToken(): Promise<string | null> {
    return await LocalForage.getItem("token");
}

// the customApi component not test completely yet (form-data and post data mode)
export async function customApi(required: Required<ApiInputRequired>, optional: Partial<ApiInputOptional>) {
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
    if(!navigator.onLine) {
        toast( "Internet Connection Lost", {type: "error"})
        setTimeout(()=>{
            alert("Internet Connection Lost")
            return location.reload();
        },1000)
    }
    const request = await fetch(required.url, init)
    const response = request.json();
    return response.then((res) => {
        if (res.result) {
            toast(optional.successMes, optional.messageConfig = {type: "success"})
            return res
        } else {
            toast(optional.errorMes, optional.messageConfig = {type: "error"})
            return res
        }
    })
        .catch((err) => {
            toast( "Unexpected Error Accrued", {type: "error"})
            console.log(err)
            return err
        })
}
