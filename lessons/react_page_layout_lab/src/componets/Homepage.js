import Header from "./Header";
import Searchbar from "./Searchbar";
import EmployeeList from "./Employeelist";

export default function Homepage(props) {
  return (
    <div className="homepage">
        <h1>This is the Homepage</h1>
        <Header name={"Homepage"} />
        <Searchbar />
        <EmployeeList data = {props.data} />
        
        
        </div>
  )
}
