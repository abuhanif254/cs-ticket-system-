
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import CustomerTickets from './components/CustomerTickets.jsx'
import { ticketsData } from './data/ticketsData.jsx'
import ResolvedList from './components/ResolvedList.jsx'
import TaskStatus from './components/TaskStatus.jsx';
import Footer from './components/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0); 
  const [resolvedCount, setResolvedCount] = useState(0); 

  const handleAddToTaskStatus = (ticket) => {
  const isAlreadyAdded = taskStatusList.some(task => task.id === ticket.id);
  
  if (!isAlreadyAdded) {
    setTaskStatusList([...taskStatusList, ticket]);
    setInProgressCount(inProgressCount + 1);
    toast.success(`Added "${ticket.title}" to Task Status!`);
  } else {
    toast.warning(`"${ticket.title}" is already in Task Status!`);  
  }
};

  const handleComplete = (task) => {
  const updatedTaskStatus = taskStatusList.filter(t => t.id !== task.id);
  setTaskStatusList(updatedTaskStatus);
  
  setResolvedTasks([...resolvedTasks, task]);
  
  const updatedTickets = tickets.filter(t => t.id !== task.id);
  setTickets(updatedTickets);
  
  setInProgressCount(inProgressCount - 1);
  setResolvedCount(resolvedCount + 1);
  
  toast.success(`"${task.title}" has been completed!`);
};

  return (
    <div>
      <Navbar />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2">
              <ErrorBoundary fallback={<div role="alert">Unable to load customer tickets.</div>}>
                <CustomerTickets 
                  tickets={tickets} 
                  onAddToTaskStatus={handleAddToTaskStatus} 
                />
              </ErrorBoundary>
            </div>

            <div className="lg:col-span-1">
              <TaskStatus tasks={taskStatusList} onComplete={handleComplete} />
              <ResolvedList resolvedTasks={resolvedTasks} />
            </div>

          </div>
        </div>
      </div>
      <Footer/>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

function ErrorBoundary({ children, fallback }) {
  try {
    return children;
  } catch {
    return fallback || <div role="alert">Something went wrong.</div>;
  }
}


export default App;
