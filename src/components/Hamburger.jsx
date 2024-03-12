import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import hambugerImage from "../assets/image/icon-hamburger.svg"
import closeImage from "../assets/image/icon-close.svg"
import "../css/Home.css"
import "../css/MobileNav.css"


function Hamburger({ ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='d-block d-md-none'>
            <Button variant="" onClick={handleShow} className="me-2">
                <img src={hambugerImage} alt="" />
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className="hamburger-body w-75 ">
                <div className="d-flex justify-content-between">
                    <div></div>
                    <Offcanvas.Header >
                        <Button variant="" onClick={handleClose} className="">
                            <img src={closeImage} alt="" />
                        </Button>
                    </Offcanvas.Header>
                </div>

                <Offcanvas.Body>
                    <ul style={{ listStyle: "none" }} className='mt-5 mob-nav-text'>
                        <li className=''><NavLink to="/" className="text-light text-decoration-none" activestyle={{ color: "white" }}> <span>00 </span><span>HOME</span></NavLink></li>
                        <li className=' my-4'><NavLink to="/destination/moon" className='text-light text-decoration-none'><span>01 </span><span>DESTINATION</span></NavLink></li>
                        <li><NavLink to="/crew/douglashurley" className="text-light text-decoration-none"><li><span>02 </span><span>CREW</span></li></NavLink></li>
                        <li className=' my-4' > <NavLink to="/technology/launchvehicle" className='text-light text-decoration-none hey'><span>03 </span><span>TECHNOLOGY</span></NavLink></li>
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}








export default Hamburger

