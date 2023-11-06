
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {

    const { user,isLoading  } = useAuth();
    const location =useLocation();

    if(isLoading){
        return <div className="flex text-center justify-center items-center "><span className="loading bg-[#90EE90]  loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;