import '../styles/card.css';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

function RecipeItem({ name, image, handleSave, id, favorited }) {

  //if item is clicked, this id === outline heart

  

  return (
  

    <div className="card">
      {/* {console.log(id)} */}
      <div className="img-overlay">
      <img src={image} alt=""/>
      <AiOutlineHeart className="outline-heart"
      
      onClick={() => handleSave(name, image, id)}
      />
      </div>
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>

      </div>
    </div>
  );
}

export default RecipeItem;
