import React from 'react';
import './Ninjas.css';

// Display the data of each ninja
const Ninjas = ({deleteNinja, ninjas}) => {  
   
    // Method 3:
    
    return (
        <div className='ninja-list'>
        {
            ninjas.map(ninja => {
                return  ninja.age < 50 ? (
                <div className = 'ninja' key={ninja.id} >
                    <div> Name: {ninja.name} </div>
                    <div> Age: {ninja.age}   </div>
                    <div> Belt: {ninja.belt} </div>
                    <button onClick={ () => { deleteNinja(ninja.id)} }> Delete this { ninja.name } </button>
                </div>
                ) : null;
            })
        }
        </div >
    )
    
     // Method 1:

    // Get props passed from caller from App.js <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas} /> 
    // const {ninjas} = props;
    // const ninjaList = ninjas.map( ninja => {
    //     if (ninja.age > 25) {
    //         return (
    //                 <div className = 'ninjia' key={ninja.id} >
    //                 <p> Name: {ninja.name} </p>
    //                 <p> Age: {ninja.age} </p>
    //                 <p> Belt: {ninja.belt} </p>
    //                 </div>
    //             )
    //     } else {
    //     return null 
    //     }
    // }) 

    // Method 2:
    
    // const ninjaList = ninjas.map(ninja => {
    //    return  ninja.age > 25 ? (
    //     <div className = 'ninjia' key={ninja.id} >
    //     <div> Name: {ninja.name} </div>
    //     <div> Age: {ninja.age}   </div>
    //     <div> Belt: {ninja.belt} </div>
    //     </div>
    //    ) : null;
    // })

}


export default Ninjas