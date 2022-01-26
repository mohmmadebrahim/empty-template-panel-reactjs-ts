import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ToastPosition, TypeOptions} from "react-toastify/dist/types";


export default function NotificationToast(
    massage: string = "New notification", closeTime: number, type: TypeOptions ,
    position: ToastPosition
) {
    return toast(massage, {
        position: position,
        autoClose: closeTime,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: type
    });

}