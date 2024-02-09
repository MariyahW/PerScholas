import Employeelistitem from "./Employeelistitem"

export default function Employeelist(props) {
  
  
  
  return (
    <div className="emplList">
      <h3>Employee List</h3>
     
     <Employeelistitem data ={props.data}/>
     


    </div>
  )
}
