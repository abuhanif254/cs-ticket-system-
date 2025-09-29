import TicketCard from './TicketCard';

const CustomerTickets = ({ tickets, onAddToTaskStatus }) => {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Tickets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tickets.map((ticket) => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              onAddToTaskStatus={onAddToTaskStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;