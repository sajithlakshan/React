import React from 'react'

function Mhero({heroName}) {
    if(heroName ==='Joker'){
        throw new Error('Not a hero')

    }
  return (
    <div>{heroName}</div>
  )
}

export default Mhero