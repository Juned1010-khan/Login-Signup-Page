import { Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router";
// import { Home } from "./pages/home"
// import { About} from "./pages/about"
// import { Contactus} from "./pages/contactus"
import  Login  from "./components/Login";
// import Navbar from "./components/navbar";
// import Table from "./components/table";
// import Api from "./components/api";
import Signup from "./components/Signup";
import Home from "./components/home";

// import { useState } from "react";
// import Child from "./components/child";
// import { useMemo } from "react";

function App() {
// console.log("app component rendering");
//   const [count, setCount] = useState(0);
//   const [price ,setPrice] = useState([100,200,300]);

//   const calculation = useMemo(() => expensivecalculation(),[]);

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}> increment</button>
      <button onClick={() => setPrice([...price ,500])}> Add 500</button>
      {
        price.map((item,index) => (
          (<p key ={index}>{item}</p>)
        ))
      }
      <Child number={5} /> */}

    
      {/* <Routes>
  <Route index element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contactus" element={<Contactus />} />
</Routes> */}
      {/* <Navbar/> */}
{/* <Navbar2/> */}
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/home" element={<Home/>}/>

</Routes>
{/* 
<Carousel/>
<Card/>
<Footer/> */}

      {/* <Table/> */}
      {/* <Api/> */}
    </>
  );
}

export default App;

// const expensivecalculation = ()=> {
//   let num =0;
//   for(let i=0;i<2*1000000000;i++){
//     num = num + 1;

//   }
// }
