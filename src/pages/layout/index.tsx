import React from "react";
import {customApi} from "../../apis";

const Layout = () => {

    function TestApi(){
        const TestApiReq = customApi(
            {url: "https://api.barberssite.com/shop"},
            {})
        TestApiReq.then((val)=>{
            console.log(val)
        })
    }


    return(
        <>
            <button onClick={()=>{TestApi()}}> Get</button>
        </>
    )
}

export default Layout