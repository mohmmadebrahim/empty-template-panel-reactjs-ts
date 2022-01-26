import localForageTools from "../components/localForageTools";
import {FetchMethode} from "../models/responsData";

export const baseUrl = `http://localhost:3000`
export const siteUrl = `https://site-address.com`

export async function getToken() : Promise<string | null>{
    return await localForageTools.GetItem("token");
}

export async function customApi(url: string,
                                method: FetchMethode,
                                body: any,
                                token: boolean = false ,
                                formData: boolean = false
) {
    const init: RequestInit = {}
    const headers : HeadersInit = {}
    if (token) headers['token'] = await getToken() ?? ""
    if (method !== "GET") init.body = body
    if(!formData) {
        headers['Content-Type'] = "application/json"
    }else {
        headers['Content-Type'] = "application/json"
    }
    init.headers = headers
    const request = await fetch(url, init)
    const response = request.json();
    response.then((res)=>{
        if(res.result){
            return res
        } else {
            return res
        }
    })
        .catch((err)=>{
            console.log(err)
            return err
        })
}
