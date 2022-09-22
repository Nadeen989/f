import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const RegisterUser = () => {  //
    const [userName, setUserName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    //const [role,setrole]=React.useState('');
   // const [cardNumber, setcardNumber] = React.useState('');

    const navigate = useNavigate();

    const register = async (e) => {
      e.preventDefault();
      const body= {
        userName,
        password,
        confirmPassword,
        phoneNumber,
        role:"User"
      };
      console.log(userName,phoneNumber,password,confirmPassword)
        try {
        
       
        const request = await fetch(`/api/v1/auth/register`, { 
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(body)
        });
           console.log(request)
           const data = await request.json();

    if (request.status === 401) {
      toast({
        title: 'Error',
        description: data.message,
        status: 'error',
        duration: 2000,
        isClosable: false,
        position: 'top',
      });
    } else {
      localStorage.setItem('loggedIn', true);
      navigate('/');
    }
}catch(e){
    console.log(e)
}
  };
  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);


  return (
 
    
        <div className="container">
        <div className="screen">
            <div className="screencontent">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 d-flex justify-content-center">
             
             <form onSubmit={register} className="Login m-5 p-5 bg-light shadow font-monospace">
              <h1>Register</h1>
                <div className="loginfield">
                        <i className="loginicon fas fa-user"></i>
                        <input 
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="text" 
                        className="form-control"
                        placeholder="Full Name"
                        />
                    </div>
                    
                    <div className="loginfield">
                        <i className="loginicon fas fa-user"></i>
                        <input 
                         onChange={e => setPhoneNumber(e.target.value)}
                         value={phoneNumber}
                         type="text"
                         className="form-control"
                         placeholder="Phone Number"
                         />
                    </div>
                    <div className="loginfield">
                        <i className="loginicon fas fa-lock"></i>
                        <input
                         onChange={e => setPassword(e.target.value)}
                         type="password"
                         className="form-control"
                         placeholder="Password"
                         />
                    </div>
                   
                    <div className="loginfield">
                        <i className="loginicon fas fa-lock"></i>
                        <input
                        onChange={e => setConfirmPassword(e.target.value)}
                        type="password" 
                        className="form-control"className
                         placeholder="Confirm Password"
                         /> 
                    </div>

                    <input  
                         className="button loginsubmit mt-3"
                         type='submit' value='Register'>
                    </input>
                 
                </form>
                </div>
            </div>
            <div className="screenbackground">
                {/* <span className="screenbackgroundshape screenbackgroundshape4"></span> /}
                {/ <span className="screenbackgroundshape screenbackgroundshape3"></span>         */}
                <span className="screenbackgroundshape screenbackgroundshape2"></span>
                <span className="screenbackgroundshape screenbackground__shape1"></span>
            </div>
        </div>
    </div>
      )
    }


export default RegisterUser


// function RegistrationForm() {
//     return(
//       <div classNameName="form">
//           <div classNameName="form-body">
//               <div classNameName="username">
//                   <label classNameName="form__label" for="firstName">First Name </label>
//                   <input classNameName="form__input" type="text" id="firstName" placeholder="First Name"/>
//               </div>
//               <div classNameName="lastname">
//                   <label classNameName="form__label" for="lastName">Last Name </label>
//                   <input  type="text" name="" id="lastName"  classNameName="form__input"placeholder="LastName"/>
//               </div>
//               <div classNameName="phoneNumber">
//                   <label classNameName="form__label" for="phoneNumber">Phone Number </label>
//                   <input  type="email" id="email" classNameName="form__input" placeholder="PhoneNumber"/>
//               </div>
//               <div classNameName="password">
//                   <label classNameName="form__label" for="password">Password </label>
//                   <input classNameName="form__input" type="password"  id="password" placeholder="Password"/>
//               </div>
//               <div classNameName="confirm-password">
//                   <label classNameName="form__label" for="confirmPassword">Confirm Password </label>
//                   <input classNameName="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
//               </div>
//           </div>
//           <div className="footer">
//               <button type="submit" className="btn">Register</button>
//           </div>
//       </div>      
//     )       
// }
// export default RegistrationForm;