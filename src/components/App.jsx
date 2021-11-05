import React from 'react';
import '../App.css';
import { data } from "../data"
import Navbar from "./navbar";
import MovieCard from "./moviecard"

class App extends React.Component{
  componentDidMount(){
    //Generally we make API Calls in this
      //Subscribe our Component
const {store} = this.props;
      store.subscribe(()=>{
        console.log('Updated');
      })
    //dispatch action
    
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    });


    
    console.log('State',this.props.store.getState());
  }
  render(){
  const movies = this.props.store.getState();
  console.log('Render');
  return (
    <div className="App">
      <Navbar />
      <div className="main">
      <div className="tabs">
        <div className="tab">
          Movies
        </div>
        <div className="tab">
          Favourites
        </div>
      </div>
      <div className="list">
        {data.map((movies,index)=>(
          <MovieCard movie = {movies} key={`movies-${index}`} />
        ))}
      </div>
      </div>
    </div>
  );
  }
}


export default App;