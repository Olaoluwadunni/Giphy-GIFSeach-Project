import React, { useState, createContext, useEffect } from 'react'
// import GadgetService from '../services/gadget'



// export const Context = createContext()

// const Provider = props => {
   
//     const [gadgets, setGadgets] = useState([])

//     useEffect(() => {
//         fetchGadgets()
//     }, [])

//     const fetchGadgets = async() => {
//         try {
//             const gadgets = await GadgetService.getGadgets();
//             setGadgets(gadgets.data)
//         } catch (error) {
//             console.log(error);
//         }
//     }
   
    
//     return(
//         <Context.Provider value= {{gadgets}}>
//             {props.children}
//         </Context.Provider>
//     )
// }

// export default Provider