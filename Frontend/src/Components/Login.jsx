import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const App = () => {

  const [active, setActive] = useState('login')
  const [email, setEmail] = useState()
  const [password, setPasswod] = useState()
  const [createName, setCreateName] = useState()
  const [createEmail, setCreateEmail] = useState()
  const [createPassword, setCreatePassword] = useState()
  const [createConPassword, setCreateConPassword] = useState()

  const location = useLocation()
  useEffect(() => {
    const data = location.state;
    if (data) {
      setActive(data)
    }

  }, [])


  const CreateAccount = async () => {
    if (createName && createEmail && createPassword && createConPassword) {
      if (createConPassword === createPassword) {
        let url = `https://hostex-backend.onrender.com/user/createAccount`
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: createEmail, name: createName, password: createPassword })
          });
          if (response.status === 200) {
            localStorage.setItem("email", createEmail);
            localStorage.setItem('name', createName);
            setCreateConPassword()
            setEmail()
            setPasswod()
            setCreateEmail()
            setCreateName()
            setCreatePassword()
            toast.success("Create Account Sucesfully!")
            setActive()
            navigate("/profile");

          } else {
            const data = await response.json();
            toast.error(data.error)
          }
        } catch (e) {
          toast.error(e)

          console.log(e, 'error')
        }
      } else {
        toast.error("password and confirmPassword not same!")
      }
    } else {

      toast.error("please fille all filled!")
    }


  }
  const navigate = useNavigate();

  const Login = async () => {
    if (email && password) {

      let url = `https://hostex-backend.onrender.com/user/login`
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password })
        });
        const data = await response.json();
        if (response.status === 200) {
          console.log(data)
          localStorage.setItem("email", data.email);
          localStorage.setItem('name', data.name);
          setCreateConPassword()
          setEmail()
          setPasswod()
          setCreateEmail()
          setCreateName()
          setCreatePassword()
          toast.success("Login Sucesfully!")
          navigate("/profile");

        } else {
          toast.error(data.error)
        }
      } catch (e) {
        toast.error(e)

        console.log(e, 'error')
      }
    } else {
      toast.error("please fille all filled!")

    }

  }

  const ForgotPassword = async () => {
    if (email && createPassword && createConPassword) {
      if (createConPassword === createPassword) {
        let url = `https://hostex-backend.onrender.com/user/ForgotPassword`
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: createPassword })
          });
          if (response.status === 200) {
            setEmail()
            setCreateConPassword()
            setPasswod()
            setCreateEmail()
            setCreateName()
            setCreatePassword()
            toast.success("Password Update Sucesfully!")
            setActive('login')

          } else {
            const data = await response.json();
            toast.error(data.error)
          }
        } catch (e) {
          toast.error(e)

          console.log(e, 'error')
        }
      } else {
        toast.error("password and confirmPassword not same!")
      }
    } else {

      toast.error("please fille all filled!")
    }


  }


  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid" alt="Phone image" />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            {
              active === "login" &&

              <div>
                <div class="form-outline mb-4">
                  <input type="email" id="form1Example13" class="form-control form-control-lg"
                    value={email} onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example23" class="form-control form-control-lg"
                    value={password} onChange={(e) => { setPasswod(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example23">Password</label>
                </div>
                <div class="d-flex align-items-center mb-4" style={{ justifyContent: 'space-between' }}>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                  </div>
                  <a style={{ color: "black", cursor: "pointer" }} onClick={() => {
                    setEmail()
                    setCreatePassword()
                    setCreateConPassword()
                    setActive('forgot')
                  }}>Forgot password?</a>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block w-100" onClick={() => { Login() }}>Sign in</button>

                <div class="divider d-flex align-items-center justify-content-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a class="btn btn-primary btn-lg btn-block w-100" style={{ backgroundColor: "#3b5998", color: "white" }} onClick={() => { setActive('create') }}
                  role="button">Create New Account
                </a>

              </div>
            }
            {
              active === "create" &&

              <div>
                <h1 className='text-center' style={{ color: '#0d6efd' }}> Create Account</h1>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg" value={createName}
                    onChange={(e) => { setCreateName(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">Name</label>
                </div>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg"
                    value={createEmail} onChange={(e) => { setCreateEmail(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg"
                    value={createPassword} onChange={(e) => { setCreatePassword(e.target.value) }}

                  />
                  <label class="form-label" for="form1Example13">Password</label>
                </div>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg"
                    value={createConPassword} onChange={(e) => { setCreateConPassword(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">Confirm Password</label>
                </div>


                <button type="submit" class="btn btn-primary btn-lg btn-block w-100" onClick={() => { CreateAccount() }}>Submit</button>



              </div>
            }
            {
              active === "forgot" &&

              <div>
                <h1 className='text-center mb-3' style={{ color: '#0d6efd' }}> Forgot Password</h1>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg" value={createName}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg"
                    value={createPassword} onChange={(e) => { setCreatePassword(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">New Password</label>
                </div>
                <div class="form-outline mb-2">
                  <input type="email" id="form1Example13" class="form-control form-control-lg"
                    value={createConPassword} onChange={(e) => { setCreateConPassword(e.target.value) }}
                  />
                  <label class="form-label" for="form1Example13">New Confirm Password</label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block w-100" onClick={() => { ForgotPassword() }} >Submit</button>



              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
