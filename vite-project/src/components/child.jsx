import React, { Component, useMemo, useRef } from 'react'

//  const Child = ({number}) => {
//     console.log("child Component Render")

//     const square = useMemo(() => {

//         console.log("calculating")
//         return number*number
//     })
//   return (
// <>
// <h2>Child component</h2> 
// <p>{number*number}</p>
// </>
// )
// }


function Child  ({numer})  {

const RendeRef = useRef(null);

RendeRef.current++;
console.log("RendeRef",RendeRef)

  return (
<>
    <h2>Child component</h2>
    <p> RendeRefCount:{RendeRef.current}</p>
</>
)
}

export default Child;
