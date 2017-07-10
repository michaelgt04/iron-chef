import React, { Component } from 'react';
import NewIngredientForm from './NewIngredientForm';
import IngredientTile from './IngredientTile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ids: [],
      ingredients: [],
      name: '',
      url: '',
      messages: []
    }
    this.getRandomIngredient = this.getRandomIngredient.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/ingredients')
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(ids => {
      this.setState({ ids: ids })
    })
  }

  getRandomIngredient(){
    let ingredientIds = this.state.ids
    let randomIngredientId = ingredientIds[Math.floor(Math.random()*ingredientIds.length)]
    fetch(`/api/v1/ingredients/${randomIngredientId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(ingredient => {
      let newState = [...this.state.ingredients, ingredient]
      this.setState({ingredients: newState})
    })
  }

  handleNameChange(event){
    let newName = event.target.value
    this.setState({ name: newName })
  }

  handleUrlChange(event){
    let newUrl = event.target.value
    this.setState({ url: newUrl })
  }

  handleSubmit(event){
    event.preventDefault()
    let requestBody = { name: this.state.name, img_url: this.state.url }
    fetch('/api/v1/ingredients', { method: 'POST', body: JSON.stringify(requestBody) })
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(message => {
      this.setState({ messages: message.message })
    })
  }


  render(){
    let ingredients = this.state.ingredients.map(ingredient => {
      return(
        <IngredientTile
          name={ingredient.name}
          imgUrl={ingredient.img_url}
        />
      )
    })

    let errors = this.state.messages.map(error => {
      return(
        <p>{error}</p>
      )
    })
    return(
      <div>
        <h1>Challenge Ingredients</h1>
        {ingredients}
        <button onClick={this.getRandomIngredient}>Get Ingredient</button>
        {errors}
        <NewIngredientForm
          handleNameChange={this.handleNameChange}
          handleUrlChange={this.handleUrlChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          url={this.state.url}
        />
      </div>
    )
  }
}

export default App;
