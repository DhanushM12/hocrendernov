import React from 'react';

class RenderProps extends React.Component {
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
        return this.props.render({
            ...this.state,
            ...this.props,
            update : this.update
        })
    }
}
export default RenderProps;