import "./FrontPage.css";
import  { useState } from "react";




const Frontpage = () => {
const [imageLogo, setimageLogo] = useState ("./joao.png")
const setImage = (imageLogo) => {
  setimageLogo(imageLogo);
};
    return (
        <>
        <div className="flexGrid">
        <div className="imageLogo">
        <img
           src={imageLogo} alt=""
          onMouseEnter={() => setImage("./joao2.png")}
          onMouseOut={() => setImage("./joao.png")}
        />
        </div>
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
  };
  export default Frontpage;