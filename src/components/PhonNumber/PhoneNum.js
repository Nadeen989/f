import React, { useState } from 'react'

const PhoneNum = () => {

    const [phoneinput,setphoneinput]=useState('');
    const [phonespam,setphonespam]=useState('');

  const phonenumbercheck = async (e) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2fb2535170msh927f85182db7851p1073d1jsn65e935cb20ad",
        "X-RapidAPI-Host": "spamcheck.p.rapidapi.com",
      },
    };

    fetch(
      `https://spamcheck.p.rapidapi.com/index.php?number=%2B${phoneinput}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };



  return (
<>
<div className="input-group w-50 mx-auto mt-5 d-flex flex-column align-items-center"></div>

<div className="p-20 bg-surface-secondary mt-5 ">
  <div className="row">
    <div className=" col-lg-7 mx-auto">
      <div className="shadow">
        <div className="card-body">
          <div className="Text text-center mt-6">
            <h1>Enter Phone Number</h1>
          </div>

          <div className="input-group  w-20 mx-auto mt-6">
            <input
              value={phoneinput}
              onChange={(e) => setphoneinput(e.target.value)}
              type="text"
              className="form-control w-20 mx-auto mt-5"
              placeholder="Enter the Sender Phone Number "
            />

            <button
              onClick={phonenumbercheck}
              className="btn btn-success mt-5"
              type="button"
            >
              Serach{" "}
            </button>
          </div>


          <div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    
  )
}

export default PhoneNum;