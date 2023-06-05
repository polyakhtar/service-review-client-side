import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-12">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-orange-600 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:border-gray-700 dark:hover:border-transparent">
              <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-black">Saeem</h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-black">Manager</p>
              <div className="flex mt-3 -mx-2">
                <Link href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-black" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:border-gray-700 dark:hover:border-transparent">
              <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://media.istockphoto.com/id/495827884/photo/you-are-the-creator-of-your-own-success.webp?b=1&s=170667a&w=0&k=20&c=JSN5VBNnjwRO_nJHytfHAfU-35GgTlWtd4wlkIEAFJU=" alt="" />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-black">Sagor</h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-black">Assistant</p>
              <div className="flex mt-3 -mx-2">
                <Link href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-black" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:border-gray-700 dark:hover:border-transparent">
              <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <h1 className="mt-4 text-2xl font-semibold text-black capitalize dark:text-white group-hover:text-Black">Poly</h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-black">Assistant</p>
              <div className="flex mt-3 -mx-2">
                <Link href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-300 group-hover:text-black" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:border-gray-700 dark:hover:border-transparent">
              <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://media.istockphoto.com/id/498323493/photo/happy-businesswoman-holding-digital-tablet.jpg?s=612x612&w=0&k=20&c=EHDfnejkQ_RgUv8cMtwmSwbhFmgd3d-6c1tUls3Lvz8=" alt="" />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-Black">Munni</h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-black">Assistant</p>
              <div className="flex mt-3 -mx-2">
                <Link href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-300 group-hover:text-black" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Team;