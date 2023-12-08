import { Button } from "reactstrap";
import "./Notfound.css";
import { useNavigate } from "react-router";
const NotFound = () => {
    const navigate = useNavigate();
    return (
       <>
        <div className="w-100 notfound-wraper d-flex justify-content-center align-items-center">
        <div className="button-wrapper">
        <Button className="btn btn-warning text-uppercase" onClick={()=>navigate("/")}>Go Back</Button>
        </div>
        </div>
       
       
       </>
    )
}
export default NotFound;