import React, { useEffect, useState } from 'react'

import "../../style/css/pages/Profile.css"

import SocietyCard from './components/SocietyCard'


function Profile({ name, societies, getSociety }) {

	const [socList, setSocList] = useState(null);

	const getSocs = async () => {
		let arr = [];
		for (let soc in societies) {
			let s = await getSociety(societies[soc]);
			arr.push(s)
		}
		setSocList(arr);
	}

	useEffect(() => {
		getSocs();

		// eslint-disable-next-line
	}, [])

	return (
		<div className="userInfo">
			<div>
				<img src={process.env.PUBLIC_URL + '/img/userIcon.jpg'} alt=""/>
				<h1>{name}</h1>
			</div>


			<div className="societyList">
				<h2>My Societies</h2>
				<div className="soc-cards">
				{
				socList &&
				socList.map((s,i) => <SocietyCard key={i} title={s.name} img={s.icon} id={societies[i]}/>)
				}
				</div>

			</div>


		</div>
	)
}

export default Profile
