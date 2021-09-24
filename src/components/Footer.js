import React from "react";
import "./footer.css";


class Footer extends React.Component {
    render() {
        return (
            <div className="footer-component">
                <div className="footer" id="footer">
                    
                    <div className="icons">
                        <a href="https://github.com/joaof85">
                            <img
                                className="icon"
                                src="./GitHub.png"
                                alt="My Github"
                            />
                        </a>
                        <a href="https://linkedin.com/in/joao136">
                            <img
                                className="icon"
                                src="./linkedin.png"
                                alt="My Linkedin"
                            />
                        </a>
                        
                    </div>
                   
                    <h3>Copyright © 2021 João Fonseca</h3>
                </div>
            </div>
        );
    }
}

export default Footer;