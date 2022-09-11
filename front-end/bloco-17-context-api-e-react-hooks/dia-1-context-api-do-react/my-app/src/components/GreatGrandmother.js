import React from "react";
import MyContext from "./Mycontext";
import Grandmother from "./Grandmother";

class GreatGrandmother extends React.Component {
    constructor(props){
        super(props)
        this.state={
            money: 1000000
        }
        
    }
    handleSpendMoney =() =>{
        this.setState((prevState) => ({money: prevState.money - 100}))
    }
    handleSave=()=>{
        this.setState((prevState) => ({money: prevState.money + 100}))
    }
    render(){
        const contextValue = {
            money: this.state.money,
            spendMoney: this.handleSpendMoney,
            saveMoney: this.handleSave
        }
        return(
            <MyContext.Provider value={contextValue}>
            <div>
                <h2>EU sou a bisavo</h2>
                <Grandmother money={this.state.money}/>
            </div>
            </MyContext.Provider>
           
        )
    }
}

export default GreatGrandmother;