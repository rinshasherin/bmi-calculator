import React,{useState} from 'react'

function Home() {

  const [bmiValue,setBmiValue]=useState("")

  let height=0
  let weight=0

  const getheight=(e)=>{
    height=e.target.value
    console.log(height)
  }

  const getweight=(val)=>{
    weight=val
    console.log(weight)
  }

  const calculate=()=>{
    const result=weight/(height**2)
    console.log(result)
    if(result<18.5){
      setBmiValue("Under weight")
    }
    else if(result>=18.5 && result<=24.9){
      setBmiValue("Normal")
    }
    else if(result>=25.0 && result<=29.9){
      setBmiValue("Over weight")
    }
    else if(result>=30.0){
      setBmiValue("Obesity")
    }
  }
  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{height:'90vh'}}>
        <div className="w-50 border shadow p-5">
            <h3>Calculator</h3>
            <input type="text" name="" id="" className="form-control mb-4" placeholder='Enter your height in meters' onChange={(e)=>{getheight(e)}}/>
            <input type="text" name="" id="" className="form-control mb-4" placeholder='Enter your weight in kilograms' onChange={(e)=>{getweight(e.target.value)}}/>
            <button className='btn btn-success' onClick={calculate}>Submit</button>
            <div className="mt-5">
              <h4>{bmiValue}</h4>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home