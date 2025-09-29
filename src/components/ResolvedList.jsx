const ResolvedList = ({ resolvedTasks }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Resolved Task</h2>
      
      {resolvedTasks.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500">No resolved tasks yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {resolvedTasks.map((task) => (
            <div 
              key={task.id} 
              className="bg-green-50 rounded-lg p-4 border border-green-200"
            >
              <h3 className="font-medium text-gray-900">
                {task.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedList;