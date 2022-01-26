import Localforage from "localforage";

async function GetItem(itemsName: string) :Promise<any> {
    return await Localforage.getItem(itemsName)
}

async function SetItem(itemsName: string, value: any) : Promise<void>{
     await Localforage.setItem(itemsName, value)
}

async function DeleteItem(itemsName: string) : Promise<void> {
     await Localforage.removeItem(itemsName)
}


export default {GetItem, SetItem, DeleteItem}