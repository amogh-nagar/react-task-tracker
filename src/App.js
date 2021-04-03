import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import {BrowserRouter as Router,Route} from "react-router-dom";
import About from "./components/About";
import { useState, useEffect } from "react";
import Footer from './components/Footer'
import Header from "./components/Header";
function App() {
  // const name='Brad'
  const [showaddtask, setshowaddtask] = useState(false);
  const [tasks, settasks] = useState([]);

  useEffect(() => {
  const getTasks=async ()=>{
    const tasksfromserver=await fetchtasks()
    settasks(tasksfromserver) //Setting up tasks
  }

    getTasks();
  }, []);


//Fetch tasks
const fetchtasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json(); //Will give us json data

  return data;
};


//Fetch task
const fetchtask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json(); //Will give us json data

  return data;
};

  //Add task
  const addtask =async (task) => {
    const res=await fetch('http://localhost:5000/tasks',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(task)
    })
    
    const data=await res.json()//Data retuirned with new task added

    settasks([...tasks,data])


    
    
    // const id = Math.floor(Math.random() * 1000) + 1;

    // generating a random id

    // const newTask = { id, ...task };
    // settasks([...tasks, newTask]);
  };
  //   Delete task
  const deletetask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })
  
  
    settasks(tasks.filter((task) => task.id !== id));
  };

  //   Toggle reminder
  const togglereminder =async (id) => {
    const tasktotoggle=await fetchtask(id);
  const updatedtask={...tasktotoggle,reminder:!tasktotoggle.reminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"PUT",
   headers:{
  'Content-type':'application/json'
   },
   body:JSON.stringify(updatedtask)//Convert the updated tasks intio json from javascript

  })
  
  
  const data=await res.json();
  
  settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setshowaddtask(!showaddtask)}
        showaddtask={showaddtask}
      />
      
      <Route path='/' exact  render={(PROPS)=>(
        <>
        {showaddtask && <Addtask onAdd={addtask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deletetask} onToggle={togglereminder} />
      ) : (
        "No Tasks to show"
      )}

        </>
      )}/>

      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
