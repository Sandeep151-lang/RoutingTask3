import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>    
        <li className="nav-item">

          <Link to={item.path} onClick={item.subNav && showSubnav} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            {item.icon}
            <span>{item.title}</span>
          </Link>
          {subnav && item.subNav.map((value, index) => {
        return  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            
               <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">{item.subs}</h6>

                <Link to={value.path} className="collapse-item">{value.title}</Link>

              </div>
        
            </div>
          })}
          
        </li>
        </>
    );
};

export default SubMenu;