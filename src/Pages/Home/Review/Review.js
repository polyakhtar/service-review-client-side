import React from 'react';

const Review = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-orange-600 ">clients</span> say
        </h1>
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
              We had our wedding in Rome and chose imagications as our photographer. Our photos are amazing, look as if they are from a movie or fashion magazine.
              Crew was very fun, kind and helpful all day with us , we didn't even feel like we were posing, we had a great time.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                </div>
              </div>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
              "Onur was exceptional. You hardly knew he was there and just got on with the job, in exactly the way we had asked him to. He showed us photos as he went to make sure we were happy and stayed until all the important stuff had been captured. We could not recommend him more."
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                </div>
              </div>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
              Onur is very friendly and professional. We spent wonderful time together. He was always very kind and obviously he loves his job. Not surprisingly, the results were amazing. We received best shots of our lives
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
};

export default Review;