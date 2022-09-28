import React from 'react'
import { useEffect, useState } from 'react';
import '../Component/Recipe.css';
import Carousel from './Carousel';
import RecipeItem from './RecipeItem';
import Spinners from './Spinners';
import Header from './Header';

export default function Recipe(props) {
    const [results, setResults] = useState([]);
    // eslint-disable-next-line
    const [numbers, setNumbers] = useState(3);
    const [loading, setloading] = useState(true);
    const [loadMore, setLoadMore] = useState(true);

    const apiKeys = props.apiKey;

    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${props.apiKey}&cuisine=${props.cuisine}&number=${numbers}`;
        // this is for spinners
        setloading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setResults(parseData.results);
        setNumbers(parseData.number);
        setloading(false);
        props.setProgress(100);
        setNumbers(numbers + 3)
    }

    const LoadMore = async () => {
        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${props.apiKey}&cuisine=${props.cuisine}&number=${numbers}`;
        setloading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setResults(parseData.results);
        setloading(false);
        setNumbers(numbers + 3)
    }
    useEffect(() => {
        setLoadMore(true);
        updateNews();
        // eslint-disable-next-line
    }, [1])

    const vegOnly = async () => {
        setLoadMore(false);
        props.setProgress(0);
        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${props.apiKey}&diet=Vegetarian&number=3`;
        // this is for spinners
        setloading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setResults(parseData.results);
        setNumbers(parseData.number);
        setloading(false);
        props.setProgress(100);
    }
    return (
        <div className='recipe'>
            <Carousel vegOnly={vegOnly}  />
            <Header />
            <div className="container" >
                <div className="container text-center ">
                    {loading && <Spinners />}
                    <div className="row align-items-start">
                        {/* MAin content  loop */}
                        {/* fetching api data */}
                        {results.map((e) => {
                            return (
                                <div className="col-md-4 mb-4" key={e.id} >
                                    <RecipeItem api={apiKeys} id={e.id} title={e.title ? e.title : " "} imageUrl={e.image} />
                                </div>
                            )
                        })}
                    </div>
                    {loadMore && <div className="container d-flex justify-content-center" >
                        <button type="button" className="btn btn-success" onClick={LoadMore} >More Recipes</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}
