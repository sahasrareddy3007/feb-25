import React, { useState } from 'react'
import '../css/login.css'

export default function Login() {
    const[fullname,setfullname]=useState( '');
    const savReg = (e:FormDataEvent)=>{

        e.preventDefault();
        console.log("submit clicked.....");
        console.log("fullname---->"+fullname);
    };
    const getFullName = (e:any)=>{
        setfullname(e.target.value);
        }

  return (
    <div>
      <p>Fill the form to Login</p>
          <section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-white">

        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"bg-image-vertical="color:rgb(7, 30, 30);"></i>
          <span className="h1 fw-bold mb-0">Logo</span>
        </div>

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form bg-image-vertical="width: 23rem;">

            <h3 className="fw-normal mb-3 pb-3" bg-image-vertical="letter-spacing: 1px;">Log in</h3>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" >Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="/reg" className="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
      <img src="https://img.freepik.com/premium-vector/senior-high-school-students-illustration_705652-661.jpg"
          alt="Login image" className="w-100 vh-100" bg-image-vertical="object-fit: cover; object-position: left;"/>

       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}