import React from 'react'

const IngredientTile = props => {
  return(
    <div className='ingredient-tile'>
      <h1>{props.name}</h1>
      <img src={props.imgUrl}/>
    </div>
  )
}

export default IngredientTile;
