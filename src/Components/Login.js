import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>

      <div className="hold-transition login-page">
      <div className="login-box">
        
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1><b>EcoRIK</b></h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form action="/index" method="get">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember"/>
                    <label for="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                
              </div>
            </form>

            <p className="mb-1">
              <Link to='/forgotpassword'>I forgot my password</Link>
            </p>
          
          </div>
        </div> 
      </div>

      </div>



    </>
  )
}

export default Login
