import React from 'react';
import Banner from './Banner';
import './styles/Hero.css';

export default class Hero extends React.Component {
	render() {
		return (
				<div className="hero">
					<Banner />
				</div>
		)
	}
}