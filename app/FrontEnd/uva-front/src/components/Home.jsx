import React from 'react'

function Home() {
  return (
    <div><form className="form">
    <p className="heading">Login</p>
    <input className="input" placeholder="Username" type="text"/>
    <input className="input" placeholder="Password" type="text"/> 
    <button className="btn">Submit</button>
    </form> </div>
  )
}

export default Home