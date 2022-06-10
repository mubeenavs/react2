import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
	const [pass, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/logn', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				pass,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = "/dash"
		} 
    else {
			alert('Please check your username and password')
		}
	}

  return (
    <React.Fragment>
        <div class="div123">
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/" id="hd">INTOT</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><Link to="/" style={{textDecoration:"none",color:"white"}}>
              <img src="project/images/login.png" alt="" />&nbsp; Home</Link>
            </li>
            <li className="nav-item"><Link to="/sign" style={{textDecoration:"none",color:"white"}}>
              <img src="project/images/signup.png" alt=""/>&nbsp;SignUp</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/"> <img src="project/imagessearch-icon.png" alt="" />
              </a>
            </li>
            <li class="nav-item">
<div id="myNav" class="overlay">

  <a href="/" class="closebtn" onClick="closeNav()">&times;</a>

  <div class="overlay-content">
    <a href="index.html">Home</a>
    <a href="team.html">Team</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="about.html">Contact Us</a>
  </div>

</div>

<span onClick="openNav()"><input type="image" src="project/imagesmenu.png" alt=""/></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
  <section>
    <div class="container" style={{marginTop: "100px" }}>
      <p>Don’t Hesitate To Connect With Us</p>
      <div style={{ marginTop:"-20px"}}>
        <h2>Login In!!</h2>
      </div>
    </div>
    <div class="row" >
      <div class="col" style={{ paddingLeft: "100px",paddingTop: "50px"}}>
      <form action="action_page.php" method="post" style={{border: "3px solid #f1f1f1"}} onSubmit={loginUser}>
  <div class="imgcontainer">
    <h3>Login In</h3>
  </div>

  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email as username" value={email} name="email" required class="lbl" onChange={(e) => setEmail(e.target.value)}/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" value={pass} name="pass" required class="lbl" onChange={(e) => setPassword(e.target.value)}/>

    <button type="submit" className="bbttn" >Login</button>
    <label>
      <input type="checkbox"  name="remember"/> Remember me
    </label>
  </div>

  <div class="container" style={{backgroundColor:"#f1f1f1"}}>
    <button type="button" class="cancelbtn bbttn">Cancel</button>
    <span class="psw">Forgot password?<Link to="/sign">click</Link></span>
  </div>
</form>
      </div>
      <div class="col">
        <img src="project/images/form-img.png" class="frmimage" alt="not"/>
      </div>

    </div>

  </section>
    </React.Fragment>
  )
}
export default Login
