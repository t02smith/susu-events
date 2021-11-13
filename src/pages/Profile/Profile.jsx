import React from 'react'

import "../../style/css/pages/Profile.css"

import SocietyCard from './components/SocietyCard'

const users = require("../../data/users").default
const societies = require("../../data/societies").default;

//const myArrCreatedFromMap = users.a.societies.map((item, i) => (<li key={item + i}>{item}</li>));

function Profile() {
  return (
    <div className="userInfo">
      <div>
        <img src='./img/userIcon.jpg'/>
      </div>
      <h1>{users.a.username}</h1>
      <div>
      {
          users.a.societies &&
          users.a.societies.map((soc,i) => {
            const s = societies[soc]
            return (<SocietyCard key={i} title={s.name} img={s.logo} id={soc}/>)
          })
        }
      </div>
        
      
    </div>
  )
}

export default Profile
