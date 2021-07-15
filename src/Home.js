import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home-section">
                <Card src="https://images.pexels.com/photos/764830/pexels-photo-764830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                title='Unique Stays'
                description='This is a unique Hotel to stay comfortably.There are not extra Charge for covid reason.'
                />
                 <Card src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                title='Unique Stays'
                description='This is a unique Hotel to stay comfortably.There are not extra Charge for covid reason.'
                />
                 <Card src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                title='Unique Stays'
                description='This is a unique Hotel to stay comfortably.There are not extra Charge for covid reason.'
                />

            </div>
             <div className="home-section">
                <Card src="https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                title='Unique Stays'
                description='This is a unique Hotel to stay comfortably.There are not extra Charge for covid reason.'
                />
                 <Card src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                title='Unique Stays'
                description='This is a unique Hotel to stay comfortably.There are not extra Charge for covid reason.'
                />
                 <Card src="https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                title='Unique Stays'
                description='This is a unique Hotel to stay comfortably.There are not extra Charge for covid reason.'
                />
                
            </div>
        </div>
    )
}

export default Home
