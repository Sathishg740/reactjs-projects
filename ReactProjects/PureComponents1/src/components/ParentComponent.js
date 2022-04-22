import React, { Component } from 'react'
import Child1 from './Child1';
import ChildFunc from './ChildFunc';

export class ParentComponent extends Component {
    state={
        uname:'Arnold'
    };
componentDidMount(){
    setInterval(()=>{
        this.setState({
            uname:"Arnold"
        })
    },2000)
}

    render() {
        return (
            <div>
                {/* <Child1 uname={this.state.uname}/> */}
                <ChildFunc uname={this.state.uname} />
            </div>
        )
    }
}

export default ParentComponent
