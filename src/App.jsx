
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import CustomerTickets from './components/CustomerTickets.jsx'
import { ticketsData } from './data/ticketsData.jsx'
import './App.css'

function App() {
  const [tickets] = useState(ticketsData);
 const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount] = useState(0);

   const handleAddToTaskStatus = (ticket) => {
    alert(`Added "${ticket.title}" to Task Status!`);
    setInProgressCount(inProgressCount + 1);
  };

  return (
    <>
     
      <div>
        <Navbar/>
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
         <CustomerTickets tickets={tickets} onAddToTaskStatus={handleAddToTaskStatus} />
      </div>

    </>
  )
}

export default App;
