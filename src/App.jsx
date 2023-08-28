import './App.css'
import { useState } from 'react'
import {puppyList} from './data.js'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId) 
  console.log(featuredPup)
  // console.log(puppies)

  return (
      <div className='container'>
        <div className='main'>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}
              </p>
          })
          
          
        }
        </div>
       
        {featPupId && (
        <div className='sub'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        
      </div>
  )
}

export default App
