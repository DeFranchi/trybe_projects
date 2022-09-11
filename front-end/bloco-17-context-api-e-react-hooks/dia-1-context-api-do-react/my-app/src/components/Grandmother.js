import React from "react";
import Father from './Father'

class Grandmother extends React.Component {
    render(){
        return(
            <div>
                <h2>EU sou a vó</h2>
                <Father money={this.props.money}/>
            </div>
        )
    }
}

export default Grandmother;