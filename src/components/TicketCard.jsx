const TicketCard = ({ ticket, onAddToTaskStatus }) => {
  
    
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH PRIORITY':
        return 'bg-red-100 text-red-600';
      case 'MEDIUM PRIORITY':
        return 'bg-yellow-100 text-yellow-600';
      case 'LOW PRIORITY':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  
  
  const getStatusColor = (status) => {
    if (status === 'Open') {
      return 'bg-green-500';
    } else if (status === 'In-Progress') {
      return 'bg-yellow-500';
    }
    return 'bg-gray-500';
  };

  return (
    <div 
      className="bg-gray-300 rounded-lg shadow-md p-5 hover:shadow-lg transition cursor-pointer border border-gray-200"
      onClick={() => onAddToTaskStatus(ticket)}
    >
     
     
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-3">
          {ticket.title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${getStatusColor(ticket.status)}`}></span>
          <span className="text-sm text-gray-600">{ticket.status}</span>
        </div>
      </div>

      
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {ticket.description}
      </p>

      
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">{ticket.id}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
        </div>
        
        <div className="flex items-center space-x-4 text-gray-500">
          <span>{ticket.customer}</span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{ticket.createdAt}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;