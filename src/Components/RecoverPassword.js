import React from 'react'
import { Link } from 'react-router-dom'

const RecoverPassword = () => {
  return (
    <>


      <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index.html" className="h1"><b>EcoRIK </b>Admin</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
            <form action="/" method="get">
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Confirm Password"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Change password</button>
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

export default RecoverPassword
