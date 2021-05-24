import React from 'react'

export default function WrestlerCard({name, image}) {

  return (
    <li className="wrestler-card">
      <p>{name}</p>
      <img src={image} />
    </li>
  )
}
