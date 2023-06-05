import React from 'react';

const Discount = () => {
    return (
        <div className="bg-white dark:bg-gray-700 my-10">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white lg:text-4xl">35% Discount  <span className="text-orange-600">In This Month</span></h1>
                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <button className="w-full px-5 py-2 text-sm tracking-wider text-black uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto lg:mx-4  focus:outline-none focus:bg-blue-500">
                    Buy This Offer
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full max-w-md" src="https://images.unsplash.com/flagged/photo-1566150217714-ebfea356f885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="email illustration vector art" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Discount;