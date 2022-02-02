import React, {ReactChildren} from "react";
import {customApi, getToken} from "../../apis";

const Layout :({children}: { children: any }) => JSX.Element = ({children}) => {

    function TestApi(){
        const TestApiReq = customApi({url: "https://api.barberssite.com/shop"}, {})
        TestApiReq.then((val)=>{
            console.log(val)
        })
    }

    return(
        <>
            {children}
            <button onClick={()=>{TestApi()}}> Get</button>
        </>
    )
}

export default Layout