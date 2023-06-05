import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center my-16">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:h-full" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/beautiful-wedding-walk-nature-ukraine-sumy_8353-5800.jpg?size=626&ext=jpg&ga=GA1.2.1815370125.1670900571&semt=sph")'}} />
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Build Your New <span className="text-orange-600">Account</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
            For using all services in this field, you can quickly open an account here. We give the best priority to all users of our website.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <Link href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-black duration-300 bg-primary rounded-lg focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CTA;