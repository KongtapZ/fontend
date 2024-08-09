import BootstrapClient from '../component/ฺBootstrapClient';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <>
            <BootstrapClient />
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
                <div className="container-fluid">
                    <a className="navbar-brand fw-5" href="#">KoNgTaPZ</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                        </ul>
                        <div>
  <a href className=" btn btn-outline-primary mx-1">Sign In</a>
  <a href="signup" className=" btn btn-outline-danger mx-1">Sign Up</a>
</div>

                    </div>
                </div>
            </nav>
        </>
    )
}
