// function FistFunction(){
//     return(
//         <h1>first fun component</h1>
//     )
// }
// export default FistFunction
//====arrow
// const FistFunction=()=>{
//     return(
//         <h1>first arrow fun component</h1>
//     )
// }
// export default FistFunction
//====rafc
// import React from 'react'

// const FistFunction = (props) => {
//     console.log(props)//props is a object{}
//   return (
//     <div>
//       <h1>hello rafc</h1>
//       {props.username}<br></br>
//       {props.address}
//       {props.mobileno}
//     </div>
//   )
// }

// export default FistFunction
//=============destructure==================
import React from 'react'

const FistFunction = ({username,address,...props}) => {
    // console.log(props)//props is a object{}
  return (
    <div>
      <h1>hello rafc</h1>
      {username}<br></br>
      {address}
      {props.mobileno}
    </div>
  )
}

export default FistFunction
