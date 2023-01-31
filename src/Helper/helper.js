import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";







/*  export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}  */


/*  export async function getServerData(url){
    const data = await axios.get(url);
    console.log(data);
}

getServerData('http://localhost:5000/api/result')  */