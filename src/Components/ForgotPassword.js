import React from 'react'

import { Link, useNavigate } from 'react-router-dom'



const ForgotPassword = () => {

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();


    navigate('/otppage');
  };


  return (
    <>


      <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h1"><b>EcoRIK </b>Admin</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
            
            <form action='/otppage' method="get">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Request OTP
                  </button>
                </div>
                                  
              </div>
            </form>
            <p className="mt-3 mb-1">
              <Link to="/">Login</Link>
            </p>
          </div>
        
        </div>
      </div>
      </div>


    </>
  )
}

export default ForgotPassword
