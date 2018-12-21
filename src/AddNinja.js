import React, { Component } from 'react'


// A form that can add a new ninja
class AddNinja extends Component {
    state = {
        name:null,
        age:null,
        belt:null
    }

    handleChange = (e) => {
        this.setState({
            // set the input value according to the id of each input tag
            // use [] that each id is mapping to name, age, belt 
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // passing the submitted and changed state to AddNinja() in App.js
        this.props.AddNinja(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja