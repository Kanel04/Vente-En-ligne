import React from 'react'
import LandingCard from './card'

function About() {
  return (
    <div className='h-screen'>
      
        <h1 className='font-bold text-3xl text-center'>A propos</h1>
<div className='flex justify-between m-5'>
<LandingCard></LandingCard>
<LandingCard></LandingCard>
<LandingCard></LandingCard>
</div>

    </div>

  )
}

export default About