import "./FrontPage.css";
import { Component } from "react";
export default class FrontPage extends Component {
    state = {
        img: "./joao.png"
    }
    render() {
        return (
            <>
                <div className="flexGrid">
                    <img
                        className="imageLogo" src={this.state.img} alt=""
                        onMouseEnter={() => {
                            this.setState({
                                img: "./joao2.png"
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                                img: "./joao.png"
                            })
                        }}
                    />
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
};