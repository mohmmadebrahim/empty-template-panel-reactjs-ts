import React from 'react'
import Layout from "./pages/layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Layout/>
        <ToastContainer />
    </div>
  );
}

export default App;
