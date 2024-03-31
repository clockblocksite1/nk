import React from 'react'
import './GetStarted.css'


const GetStarted = () => {
  return (
    <section className='g-wrapper'>
        <div className='paddings innnerWidth g-container'>
            <div className='flexColCenter inner-container'>
                <span className='primaryText'>Get Started with JoeStates</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from JoeStates
                    <br/>
                    Find your residence soon
                    </span>

                    <button className='button'>
                        <a href='mailto:doublegomosh00@gmail.com'>Get Started</a>
                    </button>
                
            </div>
        </div>
    </section>
  )
}

export default GetStarted