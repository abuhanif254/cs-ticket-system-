const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Task Status</h2>
      
      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No tasks in progress yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-3">
                {task.title}
              </h3>
              
              <button
                onClick={() => onComplete(task)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;