import React,{useState,useEffect} from 'react';
import '../Component/RecipeItem.css'


export default function RecipeItem(props) {
  // eslint-disable-next-line
    const [id, setId] = useState(0);
    // eslint-disable-next-line
    const [url, setUrl] = useState();
    const [min, setMin] = useState(10);
    const [score, setScore] = useState(0);

    // fetching instructions
     useEffect( () => {
        // this is for spinners
        // setloading(true);
        // cb1c464d94f142c08b156c5beddade8b
        fetch(
            `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=${props.api}`
          )
          // https://api.spoonacular.com/recipes/complexSearch?apiKey=cb1c464d94f142c08b156c5beddade8b
        // my key == 89be6a11b9544645830976161440c2ff
            .then((response) => response.json())
            .then((data) => {
              setId(data.id);
              setUrl(data.sourceUrl);
              setMin(data.readyInMinutes);
              setScore(data.healthScore)
            })
            .catch(() => {
              console.log("error");
            });
        
    }, [id])

    return (
        <div className='recipeItems'>
            <div className="card text-bg-dark">
                <img src={props.imageUrl} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">healthScore : {score}</p>
                    <p className="card-text">ReadyIn : {min} min</p>
                    <a href={url} target="_blank" className="btn btn-sm btn-success">Get Recipe</a>
                </div>
            </div>

        </div>
    )
}
