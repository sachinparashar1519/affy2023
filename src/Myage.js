import { Component } from 'react'
class Myage extends Component
{
    constructor()
    {
        super();
        this.state={
            age:22
        }
    }

     ageHandler=()=>{
       this.setState(
        {
            age:this.state.age+1
        }
       )
     }

    render()
    {
        return(
           <div>
               <h1>{this.state.age} </h1>
               <button onClick={this.ageHandler}>click ME</button>
           </div>
        )
    }
}

export default Myage;
