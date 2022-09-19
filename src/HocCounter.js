import React from 'react';

const HocCounter = Component => class HOC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0}
    }
    
    update = type => {
        if(type === "INC"){
            this.setState(({count}) => ({count: count+1}))
        }
        else if(type === "DEC"){
            this.setState(({count}) => ({count: count-1}))
        }
    }
    render() {
        return (
           <Component 
            {...this.state}
            {...this.props}
            update = {this.update}
           />
        );
    }
}

export default HocCounter;