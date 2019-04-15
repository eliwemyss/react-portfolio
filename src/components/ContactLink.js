import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/ContactLink.css';

class ContactLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        }
    }

    handleHover = () => {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        return (
            <div className="contact" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <a className="link" href={this.props.linkTarget} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.props.icon} fixedWidth className="icon" />
                    <span className="hoverClass">{this.props.label}</span>
                </a>
            </div>
        )
    }
}

export default ContactLink;