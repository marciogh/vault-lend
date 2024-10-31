import { Link, Outlet } from "react-router-dom";

export default function Start() {
    return (
        <div>
            <Link to="/personalDetails">Start application</Link>
            <Outlet />
        </div>
    )
}

