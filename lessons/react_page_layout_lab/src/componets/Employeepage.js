import Header from "./Header"

export default function Employeepage() {
  return (
    <div className="employeepage">
      <h1>This is the Employee Page</h1>

      <Header/>
      <br></br>
      <br></br>
   
      <div className="info"> 
      <h3>Julie Taylor</h3>
      <p>VP of Marketing</p>
      </div>

      
      
      <div className="info"> 
      <h5>Call Office</h5>
      <p>781-000-0002</p>
      </div>

      
      <div className="info"> 
      <h5>Call Mobile</h5>
      <p>617-000-0002</p>
      </div>
      
      <div className="info"> 
      <h5>SMS</h5>
      <p>617-000-0002</p>
      </div>
      
      <div className="info"> 
      <h5>Email</h5>
      <p>jtaylor@fakemail.com</p>
      </div>
      
      
      </div>
  )
}
