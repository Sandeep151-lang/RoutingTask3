
import { Link } from 'react-router-dom'
import { Collapse, Button } from 'reactstrap';
import { useState } from 'react'
import { List, SidebarData } from './json-data/SidebarData'
import SideMenu from './SideMenu'
import images from './images/undraw_rocket.svg'



// Sidebar component 
const Sidebars = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <Collapse isOpen={isOpen} className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <li className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </li>

                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link to="/" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                </div>

                {/* Sidebar Menu list start here  */}

                {/* dropdown sidebar Menu start here */}
                {SidebarData.map((item, index) => {
                    return <SideMenu item={item} key={index} />;
                })}
                {/* dropdown sidebar end start here */}


                {List.map((item, index) => {
                    return <li className="nav-item" key={index}>
                        <Link to={item.path} className="nav-link" href="charts.html">
                            {item.icon}
                            <span>{item.title}</span></Link>
                    </li>
                })}
                {/* Sidebar Menu list end here */}

                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src={images} alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <Link to="#" className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</Link>
                </div>
            </Collapse>
            <Button onClick={toggle} className="mt-3 pb-3 side-arrow" color="success" >{(isOpen) ? <i className="fas fa-arrow-to-left"></i> : <i className="fal fa-arrow-to-right mb-2 mr-5"></i>}</Button>
        </>
    );
};

export default Sidebars;
