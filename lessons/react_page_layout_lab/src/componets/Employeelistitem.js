

export default function Employeelistitem(props) {
  
  const emp =  props.data?.map((employee)=> {
   return (
    <>
    <h5>{employee.name}</h5>
    <p>{employee.title}</p>
    <img src={employee.image}></img>
    </>
   )
})


  return (
    <div className="emplistitem">
    {emp}
      </div>
  )
}
