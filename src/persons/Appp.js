import './App.css';
import { Component } from 'react';
import Person from './Personsr/Person'

class Appp extends Component {
  render() 
  {
    return (
      <div className="Appp">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>
         <Person name="Sachin" age="28"></Person>
         <Person name="Manu" age="29" >My Hobbies: Racing</Person>
         <Person name="Kaalu" age="92" />
      </div>
    );
  }
}

export default Appp;