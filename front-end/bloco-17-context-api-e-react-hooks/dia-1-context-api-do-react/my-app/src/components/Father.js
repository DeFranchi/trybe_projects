import React from "react";
import Dauther from './Daugther'

class Father extends React.Component {
    render(){
        return(
            <div>
                <h2>EU sou o pai</h2>
                <Dauther money={this.props.money}/>
            </div>
        )
    }
}

export default Father;