import React from 'react';

const NewIngredientForm = props => {
  return(
    <form onSubmit={props.handleSubmit} >
      Name: <input type='text' value={props.name} onChange={props.handleNameChange}/>
      URL: <input type='text' value={props.url} onChange={props.handleUrlChange} />
      <input type='submit' />
    </form>
  )
}

export default NewIngredientForm;
