import MainLayout from "../layouts/MainLayout";

const Overview = () => (
  <MainLayout>
    <div className="p-6">
      {/* Stats Grid - Keeping your existing cards at top */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold text-blue-600">1000</h3>
          <p className="text-gray-500 mt-2">Customers</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold text-green-600">100</h3>
          <p className="text-gray-500 mt-2">Total LPOs</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold text-purple-600">₦1,000,000</h3>
          <p className="text-gray-500 mt-2">Total Sales</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-3xl font-bold text-indigo-600">₦1,000,000</h3>
          <p className="text-gray-500 mt-2">Total Revenue</p>
        </div>
      </div>





      {/* Split Layout Section */}
      <div className="flex flex-col md:flex-row gap-8">


         {/* Right Side - Total Customers Months */}
      <div className="md:w-[700px]">
  <div className="bg-white p-6 rounded-lg shadow h-full">
    <h1 className="text-xl font-semibold text-gray-800 mb-6">Total Customers</h1>

    <div className="flex gap-4 items-end h-52">
      {/* Y-Axis Labels */}
      <div className="flex flex-col justify-between h-full pr-2 text-right text-sm text-gray-600">
        <span>1,200</span>
        <span>800</span>
        <span>400</span>
        <span>0</span>
      </div>

      {/* Chart Bars */}
      <div className="flex items-end gap-4 flex-1">
        {[
          { month: 'Jan', height: 'h-20' },
          { month: 'Feb', height: 'h-28' },
          { month: 'Mar', height: 'h-36' },
          { month: 'Apr', height: 'h-16' },
          { month: 'May', height: 'h-32' },
          { month: 'Jun', height: 'h-24' },
          { month: 'Jul', height: 'h-40' },
          { month: 'Aug', height: 'h-12' },
          { month: 'Sep', height: 'h-28' },
        ].map(({ month, height }) => (
          <div key={month} className="flex flex-col items-center">
            <div className={`w-5 bg-blue-600 ${height} rounded-t`}></div>
            <span className="mt-2 text-xs text-gray-700">{month}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* Left Side - Top Sales Regions */}
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Sales Regions</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Shomolu</span>
                <span className="text-gray-900 font-medium">8,374</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Yaba</span>
                <span className="text-gray-900 font-medium">15,642</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Ikorodu</span>
                <span className="text-gray-900 font-medium">9,215</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Island</span>
                <span className="text-gray-900 font-medium">11,048</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Lekki</span>
                <span className="text-gray-900 font-medium">7,983</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  </MainLayout>
);

export default Overview;