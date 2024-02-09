import Header from "./Header"
import MainEmployee from "./MainEmployee"

export default function Employeepage(props) {
  return (
    <div className="employeepage">
      <h1>This is the Employee Page</h1>

      <Header name={"Employee Page"}/>
      <br></br>
      <br></br>
   <MainEmployee person = {props.data[1]}/>
      
      
      
      </div>
  )
}
