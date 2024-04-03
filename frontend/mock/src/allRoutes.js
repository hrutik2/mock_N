import { Route,Routes} from "react-router-dom";
import { Login } from "./page/login";
import { SignUp } from "./page/signup";
export const AllRoutes=()=>{
    return (
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/sigup" element={<SignUp/>}></Route>
       </Routes>
    )
}