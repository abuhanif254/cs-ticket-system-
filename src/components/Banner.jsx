

{/* Sir, I have tried a lot to flip the images on this banner card, I have also taken ideas from AI, but I am unsuccessful. */}

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-8 shadow-lg">
          
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
              }}></div>
            </div>
            
            <div className="relative flex items-center justify-between">
              
              <div className="  rounded-lg flex items-center justify-center">
                <span className="text-white text-xs"><img src="/public/image/vector1.png" alt="img" /></span>
              </div>

             
              <div className="text-center text-white">
                <h2 className="text-lg font-medium mb-4">In-Progress</h2>
                <p className="text-6xl font-bold">{inProgressCount}</p>
              </div>

             
              <div className=" transform scale-x[-1]   rounded-lg flex items-center justify-center">
                <span className=" transform scale-x[-1]    text-black text-xs"><img src="/public/image/vector1.png" alt="" /></span>
              </div>
            </div>
          </div>

          
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-8 shadow-lg">
           
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
              }}></div>
            </div>
            
            <div className="relative flex items-center justify-between">
             
              <div className=" flex items-center justify-center">
                <span className="text-white text-xs"><img src="/public/image/vector1.png" alt="" /></span>
              </div>

              
              <div className="text-center text-white">
                <h2 className="text-lg font-medium mb-4">Resolved</h2>
                <p className="text-6xl font-bold">{resolvedCount}</p>
              </div>

              
              <div className=" flex items-center justify-center">
                <span className="text-white text-xs"><img src="/public/image/vector1.png" alt="" /></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;