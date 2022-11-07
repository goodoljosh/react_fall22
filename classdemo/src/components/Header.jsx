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

    // exp ? true : false; if(exp){true} else {false}  
    //lifecycle methods

    render() {
        const { linkText, linkUrl } = this.props
        //const name = this.state.name
        //this.props.linkText
        return (
            <header className={`App-header ${this.state.theme}`}>
                <p className={"testing-this" + this.state.theme}>
                    Resume
                </p>
                {/* <a
                    className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
                    {linkText}
                </a> */}
                {/* <div>
                    <h3> Your stateful name is: <i>{name}</i></h3>
                    <input type="text" value={name} onChange={(e) => this.setState({name : e.target.value})} />
                </div > */}
                {/* <span>
                    You have clicked on the button {this.state.count} times!
                </span>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment Count
                </button> */}
                <MainBody />
            </header>
        )

    }
}
export default Header