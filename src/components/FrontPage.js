import { span } from 'prelude-ls';
import React from 'react';
import "./FrontPage.css";


function FrontPage () {

    return (
        <>
        <div className="flexGrid">
            <img className="imageLogo" src="joao.png"  alt="Logo" />
         <div className="columnRight">
                  <h1> 
                        &lt;p&gt; Hello world &lt;p&gt;
                      </h1>
                    <h2 style={{ fontWeight: "lighter" }}>
                        My name is
                        <span style={{ fontWeight: "bold" }}> João Fonseca </span>
                    </h2>
                    <h2 style={{ fontWeight: "lighter" }}>I'm a Fullstack Developer from Portugal to the World</h2>

            </div>
            </div>
        </>

    )

}

           /*  <div className='Links_Style'>
                <NavLink activeClassName='link_active' className='link_no_active' exact to='/'>
                    FrontPage
                </NavLink>
                <NavLink activeClassName='link_active' className='link_no_active' exact to='/about'>
                    About
                </NavLink>
                <NavLink activeClassName='link_active' className='link_no_active' exact to='/portfolio'>
                    Portfolio
                </NavLink>
                <NavLink activeClassName='link_active' className='link_no_active' exact to='/contact'>
                    Contact
                </NavLink>
            </div>
         */

export default FrontPage