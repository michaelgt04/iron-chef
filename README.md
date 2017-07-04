# Setting up a Rails API

## Setup Instructions

Getting started with this repository

In addition to your usual Rails, commands make sure to run:

```
rake db:create
rake db:migrate
rake db:seed
```

## Directions

1. Get your React Application set up
	
	Right now your application just has placeholder code for the `ReactDOM.render` function.
	Go in and create an `App` container and an `IngredientTile` component that each have
	dummy placeholder text. Remember, this is to make sure that all your React components are
	setup the right way (which can be a challenge)!

2. Get your Rails API setup

	Using the seed file, you should already have ingredients setup for you to be able to return
	to your Iron Chef application as JSON. Setup a RESTful API controller that will return either all 
	the ingredients' ids (for the index) or the JSON representation of one ingredient depending on 
	which endpoint is hit. There also should 	be a POST functionality that allows the user to 
	create a new ingredient that relies on the current schema.

	Remember, your controller methods should return JSON back to the React application. If you
	need to test out that they are working, you can visit the API enpoints (except for your POST)
	from within the browser. If you'd like to test out your POST endpoint, you can use a great 
	tool called [Postman](https://www.getpostman.com/).

3. Create a page that will allow you to choose ingredients

	You've done all the hard work of getting your API endpoint setup, it's time to actually 
	use the API! In your `App` container, make a fetch call that gets the ids of each ingredient
	so you can use them to make your other show fetch call. 

	Next create a fetch call that will use the array of ingredient ids in the state to get a 
	random ingredient back from the API. This will need another fetch call. If you forget how
	randomness is simulated in JS, take a look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).
	This method should also append this ingredient to the state. Be careful not to mutate the 
	state!

	Once you have these fetch calls working, be sure to map through the selected ingredients
	using your `IngredientTile` component.

4. Create a Form that will allow you to add new ingredients to the database

	Next create a form (yes a React Form) that will allow you to post a new ingredient back to 
	the API endpoint. Remember, forms take a lot of setup in React, so be sure to make liberal
	use of your debuggers. Also, be sure to use your log messages on the Rails server to verify
	that the ingredient is actually being created.

### Notes

If you can do this, you are in really good shape coming out of the content weeks. This separate 
front end and back end architecture is how many websites are setup and would make a good model 
for a React single page application for a breakable toy.

There is also a branch with solution code entitled `clinic-solution` that you can use to guide
you as you attempt this on your own. By no means does this mean it's the only way to setup 
the application or right this code, but it's a good starting point.

## Common Mistakes/Gotchas

* Stringify the POST request body

	Make sure that you use the `JSON.stringify` method that JS so graciously gives you! If you
	don't do this, you won't be able to send the information back as the body of the POST request
	becuase it will not be a valid HTTP Request body.

* Use your debuggers!
	
	Using this application architecure, there is a lot that has to go right for you to get
	anything to show up on the page! Go one step at a time and verify that things are working
	every chance that you can. Put `binding.pry`s in your controller methods on the API side.
	Use your debuggers in your fetch calls to make sure you're getting the right things back.
	Put them in your render to make sure that the state is getting set the right way. Use 
	`console.log` to verify that your form inputs are working the right way. Experiment and
	find a debugging style that works for you!

* Make sure that your API endpoints behave the way you want

	It can be easy to rush through the API creation steps! Don't. Verify that those work and are
	returing the information you want them to before you move on to having the React application
	interact with it!
