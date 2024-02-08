import Header from "./Header";
import Searchbar from "./Searchbar";
import EmployeeList from "./Employeelist";

export default function Homepage() {
  return (
    <div className="homepage">
        <h1>This is the Homepage</h1>
        <Header />
        <Searchbar />
        <EmployeeList />
        
        
        </div>
  )
}
