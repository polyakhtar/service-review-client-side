import React from 'react';

const Features = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-12">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-2xl font-semibold text-orange-600 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome Features</h1>
                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Time Management</h1>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                   Every worker are very active in their work. They are also try to give service in fixed time.They provide good service.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Great Service</h1>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    We have try to our best to give good service in our customer. Every Customer is very happy with our service.We always try our best.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Service Location</h1>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    We have provide service in Fixed area. Althogh we are an online community, But our service is located in fixed area.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=sph" alt="" />
            </div>
          </div> 
        </div>
      </section>
        
    );
};

export default Features;