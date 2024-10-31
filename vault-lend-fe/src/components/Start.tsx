import { Link, Outlet } from "react-router-dom";

export default function Start() {
    return (
        <div>
            <div className="vault-boy-img" />
            <div className="ribbon-blue">
                <h1>Vault Lend</h1>
                <h2>Stop delaying your dreams!</h2>
            </div>
            <div className="content">
                <Link to="/personalDetails"><button>Start application</button></Link>
                <Outlet />
            </div>
        </div>
    )
}

