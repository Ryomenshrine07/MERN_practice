import React from "react";

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0}
        this.props = props;
    }
    handleClick = (e) =>{
        console.log('Clicked')
        console.log(e.type);
        console.log(e)
        console.log(e.nativeEvent);
    }
    render(){
        
        return (
            <>
            <h1>This is class component</h1>
            <p>This is count of Class Compo : {this.state.count}</p>
            <button onClick={() => this.setState({count : this.state.count + 1})}>inc</button>
            <button onClick={() => this.setState({count : 0})}>reset</button>
            <button onClick={this.handleClick}>click me</button>
            </>
        );
    }
    componentDidMount(){
        console.log("Component Mounted succesfully");
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
        }
    }
    componentWillUnmount(){
        console.log("Componet Removed")
    }
}

export default MyComponent