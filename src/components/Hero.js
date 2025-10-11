import React from 'react';
import Banner from './Banner';
import './styles/Hero.css';

export default class Hero extends React.Component {
	render() {
		const bg = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${process.env.PUBLIC_URL}/images/mountains.jpg)`;
		return (
				<div className="hero" style={{ backgroundImage: bg }}>
					<Banner />
				</div>
		)
	}
}