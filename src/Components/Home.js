import React from 'react'

function Home(props) {
  return (
    <div  style={{ color: props.mode === 'dark' ? 'white' : 'Black' }}>
      <h1> This is Home</h1>
      <img src="\Digital-marketing-agency-banner-template-design-scaled (1).jpg" alt="Digital Marketing Banner"/>
    </div>
  )
}

export default Home

