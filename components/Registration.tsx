import React from 'react'

import '../css/Registration.css'

export default function Registration() {
  return (
    <div className='mylabel'>
               
        <h1>Registration Form</h1>
        <h1> JUICE SALON</h1>
        <div className='imgmar'>
        <img src="https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg" />    
        </div> 
             <p>Please fill out this form with the required information</p>
   <form action='https://register-demo.freecodecamp.org'>
     <fieldset>
       <label>Enter Your First Name: <input type="text" name="first-name" required /></label>
       <label>Enter Your Last Name: <input type="text" name="last-name" required /></label> 
       <label>Enter Your Phone no: <input type="text" name="Phone-number" required /></label> 
       <label>Enter Your Email: <input type="email" name="email" required /></label> 
       <label>Create a New Password: <input type="password" name="password" pattern="[a-z}" required /></label> 
     </fieldset>
     <fieldset>
     <h1> Account Type</h1>
       <label><input type="radio" name="account-type" /> Personal Account</label>
       <label><input type="radio" name="account-type" /> Business Account</label>
    </fieldset>
        <fieldset>
        <h1>Available location</h1>
        <p>Select your Location</p>
        <label><input type="radio" name="location" /> location available : Armoor</label>
        <label><input type="radio" name="location" /> location available : Hitech city</label>
        <label><input type="radio" name="location" /> location available : Kompally</label>
    </fieldset>
     <fieldset>
              <label>Input your age (years): <input type="number" name="age" min="13" max="120" />
			  </label>
              </fieldset>
       <label>How did you hear about us?
         <select name="referrer">
           <option value="">(select one)</option>
           <option value="1">freeCodeCamp News</option>
           <option value="2">freeCodeCamp YouTube Channel</option>
           <option value="3">freeCodeCamp Forum</option>
           <option value="4">Other</option>
         </select>
       </label>
       <label>
       <input type="checkbox" name="terms" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
       </label>
         <h1 ><input type="submit" value="Submit" /></h1>
         <p> successfully register Go back to <a href="/">Loginpage</a></p>
        </form>   
</div>
  )
}