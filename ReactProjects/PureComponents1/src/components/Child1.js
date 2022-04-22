import React, { Component, PureComponent } from 'react'

export class Child1 extends PureComponent {
    render() {
        console.log(this.props.uname);
        return (
            <div>
               <h2>{this.props.uname}</h2> 
            </div>
        )
    }
}

export default Child1
