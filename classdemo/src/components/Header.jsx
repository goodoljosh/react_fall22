import React, { Component } from "react";
import MainBody from "./MainBody";

class Header extends Component {
    //constructor for state
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
            name: ""
        }
    }


    render() {

        return (
            <header className={`App-header ${this.state.theme}`}>
                <h1 className={"testing-this" + this.state.theme}>
                    Joshua Findley
                </h1>
                <h1>
                 Computer Science Major
                </h1>
                <MainBody />
            </header>
        )

    }
}
export default Header