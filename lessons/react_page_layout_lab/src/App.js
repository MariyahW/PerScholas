import Homepage from "./componets/Homepage";
import Employeepage from "./componets/Employeepage";
import "./App.css";

let data = [
  {name: 'James King',
      title:"President and CEO",
      office: "123-456-7890",
      mobile:"012-345-6789",
      sms: "777-777-9311",
      email:"jk@me.me",
    image: "https://cdn.dribbble.com/users/1049366/screenshots/15800369/media/683d40b24ab7f702f2e9495a797947d0.png?resize=400x0"},
  {name: 'Julie Taylor',
      title:"VP of Marketing",
      office: "123-456-7890",
      mobile:"012-345-6789",
      sms: "777-777-9311",
      email:"jt@me.me"},
  {name: 'Eugene Lee',
      title:"CFO",
      office: "123-456-7890",
      mobile:"012-345-6789",
      sms: "777-777-9311",
      email:"el@me.me"},
  {name: 'John Williams',
      title:"VP of Engineering",
      office: "123-456-7890",
      mobile:"012-345-6789",
      sms: "777-777-9311",
      email:"jw@me.me"},
  {name: 'Ray Moore',
      title:"VP of Sales",
      office: "123-456-7890",
      mobile:"012-345-6789",
      sms: "777-777-9311",
      email:"rm@me.me"},
  {name: 'Paul Jones',
      title:"QA Manager",
      office: "123-456-7890",
      mobile:"012-345-6789",
      sms: "777-777-9311",
      email:"pj@me.me"}
]

function App() {
  return (
    <div className="App">
      
      <Homepage data = {data}/>
       <Employeepage data = {data} /> 
    </div>
  );
}

export default App;
