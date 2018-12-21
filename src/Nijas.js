import React from 'react';

// Display the data of each ninja
const Ninjas = ({ninjas}) => {

    // Method 1:
    // const {ninjas} = props;
    // const ninjaList = ninjas.map( ninja => {
    //     return (
    //         <div className = 'ninjia' key={ninja.id} >
    //         <p> Name: {ninja.name} </p>
    //         <p> Age: {ninja.age} </p>
    //         <p> Belt: {ninja.belt} </p>
    //         </div>
    //     )
    // }) : null;

    // Method 2:
    // const ninjaList = ninjas.map(ninja => {
    //    return  ninja.age > 25 ? (
    //     <p className = 'ninjia' key={ninja.id} >
    //     <div> Name: {ninja.name} </div>
    //     <div> Age: {ninja.age}   </div>
    //     <div> Belt: {ninja.belt} </div>
    //     </p>
    //    ) : null;
    // })

    // Method 3:
    return (
        <div className='ninja-list'>
        {
            /* for Method 1 and 2 : {ninjaList} */
            ninjas.map(ninja => {
                return  ninja.age < 50 ? (
                 <div className = 'ninjia' key={ninja.id} >
                    <div> Name: {ninja.name} </div>
                    <div> Age: {ninja.age}   </div>
                    <div> Belt: {ninja.belt} </div>
                 </div>
                ) : null;
             })
        }
        </div >
    )
}


export default Ninjas