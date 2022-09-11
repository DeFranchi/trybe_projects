import React from "react";
import MyContext from "./Mycontext";

class Daugther extends React.Component {
    render(){
        return(
            <div>
                <h2>EU sou a filha</h2>
                {/* <h1>{`EU tenho ${this.props.money} para gastar`}</h1> */}
                <MyContext.Consumer>
                    {
                        //funcao
                        value => (
                            <div>
                            <p>{`Eu tenho ${value.money} para gastar`}</p>
                            <button onClick={value.spendMoney}>Pedir um Ifood</button>
                            <button onClick={value.saveMoney}>Save Money</button>
                            </div>
                        )
                        
                    }
                    
                </MyContext.Consumer>
            </div>
        )
    }
}

export default Daugther;