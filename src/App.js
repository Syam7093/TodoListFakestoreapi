// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"

function App() {
  const [display,setdispaly]=useState([])
  const [deletedata,setdelete]=useState([])
  const [number,setnumber]=useState(300)
  const[second,setsecond]=useState()
  console.log(deletedata,"ddd")
  useEffect(()=>{
    somedata()
  },[])

  const somedata=async()=>{
    let request={
      method:"GET"
    }
    const data=await fetch("https://fakestoreapi.com/products",request)
    const conv=await data.json()
    setdispaly(conv)
  }
 
  const some=[]
  const somedelete=(value)=>{
      // const maindata=display.filter((item)=>{
      //   return item.id !== value.id
      // })
      // setdelete([...deletedata,value])
      // setdispaly(maindata)

      for(let i=0;i<display.length;i++)
      {
        if(display[i].id !== value.id)
        {
            some.push(display[i])
            
            setdelete([...deletedata,value])
        }
        
      }
      // setdispaly(some)
  }


  const changeNumber=()=>{
    setnumber(second)
  }

  return (
   <div>
     <div className="App" style={{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",margin:"5px"}}>
      {
        display.map((e)=>{
          return(
            <div >
              <img onClick={()=>{somedelete(e)
              console.log(e,"ggg")
              }} alt="" src={e.image} height={"80px"} width={"100px"} style={{margin:"5px",padding:"5px"}}></img>
            </div>
          )
        })
      }
      
    </div>
    <h1>----------------------------------------------------------------------------------------------------------------------</h1>
    <div className="App" style={{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",margin:"5px"}}>
      {
        deletedata.map((e)=>{
          return(
            <div >
              <img onClick={()=>{somedelete(e)
              console.log(e,"ggg")
              }} alt="" src={e.image} height={"80px"} width={"100px"} style={{margin:"5px",padding:"5px"}}></img>
            </div>
          )
        })
      }
      
    </div>
   <h1>{number}</h1>
   <input type="number" onChange={(e)=>{setsecond(e.target.value)}}></input>
   <button type="submit" onClick={()=>{
changeNumber()
   }}>submit</button>
   
   </div>
  );
}

export default App;
