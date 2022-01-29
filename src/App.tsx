import React from 'react'
import PageRoot from "./pages";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <div>
            <PageRoot.Layout/>
            <ToastContainer/>
        </div>
    );
}

export default App;
