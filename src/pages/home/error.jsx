import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <>
        <h1>404</h1>
        <Link className="bg-blue-300 p-1" to ="/">Go Back To Home</Link>
        </>
    )
}