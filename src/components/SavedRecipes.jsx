//user has option to save recipe card
//on save, recipe card gets added to this component via database
import React from "react";
import SavedRecipeItem from "./SavedRecipeItem";
import axios from "axios";
import Footer from './Footer'
import '../styles/savedRecipes.css'
import { Link } from
  "react-router-dom";
class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/savedRecipes")
      .then((res) => this.setState({ recipes: res.data }))
      .catch((err) => console.log(err));
  }
  handleDelete(id, localId) {
      if (localStorage.getItem('favorited')) {

        let favorites = JSON.parse(localStorage.getItem('favorited'));
        let filterdFaved = favorites.filter( (storageId) => {
          return localId !== storageId
        });
        localStorage.setItem('favorited', JSON.stringify(filterdFaved))
      }
      
      
   
      
    axios
      .delete(`http://localhost:3001/savedRecipes/${id}`)
      .then(() =>
        axios
          .get("http://localhost:3001/savedRecipes")
          .then((res) => this.setState({ recipes: res.data }))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));

    // alert(`deleting ${id}`)
  }
  render() {
    return (
      <div>
        <div className="saved-recipes-wrapper">

      <div className="card-container">
        {this.state.recipes.length > 0 &&
          this.state.recipes.map((recipe) => {
            return (
              <SavedRecipeItem
                key={recipe._id}
                name={recipe.name}
                image={recipe.image}
                id={recipe._id}
                localId={recipe.localId}
                handleDelete={this.handleDelete}
              />
            );
          })}
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default SavedRecipes;
