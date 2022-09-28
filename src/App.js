import { useState } from 'react';
import './App.css';
import Nav from './Component/Nav';
import Recipe from './Component/Recipe';
import LoadingBar from 'react-top-loading-bar';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Component/Footer';

function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;


  return (
    <>
      <Router>
        <Nav />
        {/* Loading bar \|/ */}
        <LoadingBar
          color='green'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route
            exact path="/"
            element={
              <Recipe key='indian' apiKey={apiKey} setProgress={setProgress} cuisine="indian" />
            } />
            <Route
            exact path="/Chinese"
            element={
              <Recipe key='Chinese' apiKey={apiKey} setProgress={setProgress} cuisine="Chinese" />
            } />
            <Route
            exact path="/French"
            element={
              <Recipe key='French' apiKey={apiKey} setProgress={setProgress} cuisine="French" />
            } />
            <Route
            exact path="/American"
            element={
              <Recipe key='American' apiKey={apiKey} setProgress={setProgress} cuisine="American" />
            } />
            <Route
            exact path="/Italian"
            element={
              <Recipe key='Italian' apiKey={apiKey} setProgress={setProgress} cuisine="Italian" />
            } />
            <Route
            exact path="/Spanish"
            element={
              <Recipe key='Spanish' apiKey={apiKey} setProgress={setProgress} cuisine="Spanish" />
            } />
            <Route
            exact path="/African"
            element={
              <Recipe key='African' apiKey={apiKey} setProgress={setProgress} cuisine="African" />
            } />
            <Route
            exact path="/Thai"
            element={
              <Recipe key='Thai' apiKey={apiKey} setProgress={setProgress} cuisine="Thai" />
            } />
            <Route
            exact path="/German"
            element={
              <Recipe key='German' apiKey={apiKey} setProgress={setProgress} cuisine="German" />
            } />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
