import React from 'react'
import { Link } from 'react-router-dom'

const OtpPage = () => {

 

  return (
    <>


      <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h1"><b>EcoRIK </b></a>
          </div>
          <div className="card-body">
            <p className="login-box-msg"><b>Enter OTP!</b> sent in your email.</p>
            <form action="/recoverpassword" method="get">
              <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Enter OTP"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Request new password</button>
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


export default OtpPage
