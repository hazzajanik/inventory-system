
const ClientReview = () => {
    return (
        <div>
            <div>
            <section className="text-gray-600 body-font dark:text-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20 dark:text-white">
                        <h1 className="sm:text-3xl text-2xl dark:text-white font-medium title-font text-gray-900 mb-4">Client Reviw</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Client reviews about an inventory management system (IMS) can provide valuable insights into the systems effectiveness, user-friendliness, and overall impact on business operations. Lets explore some key aspects that clients might highlight in their reviews:</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg--500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                
                                    <img  className="rounded-full" src="https://d28hgpri8am2if.cloudfront.net/author_images/7000/will-durant-419643.jpg" alt="" />
                                    {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                                
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">Will Durant</h2>
                                <p className="leading-relaxed text-base">The ability to access real-time data about inventory levels is crucial. Clients may praise the system for providing instant insights, allowing for better decision-making and reducing the risk of overstocking or stockouts.</p>
                                <a className="mt-3 text-rose-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img className="rounded-full" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgw5Bkeg0GfMalEsOdu85wwnIaGZsTxR0TS_XH6G80ArYrSs8X" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">Jared Diamond</h2>
                                <p className="leading-relaxed text-base">Accuracy in inventory tracking is a key factor. Clients appreciate systems that minimize errors, ensure data precision, and provide reliable information for making informed business decisions.</p>
                                <a className="mt-3 text-rose-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img className="rounded-full" src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzBgZdh_2fW0eoYnoSdEyvzorBzCEOjozBDGeuBwSMGABnGZmQ5m6Zk2I9ivqTjfdMRK2TOw" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">khaled hosseini</h2>
                                <p className="leading-relaxed text-base">Positive reviews might highlight the systems flexibility and scalability. Businesses often grow and evolve, and clients appreciate IMS solutions that can adapt to changing needs, whether its scaling operations.</p>
                                <a className="mt-3 text-rose-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg">See More</button>
                </div>
            </section>
        </div>
        </div>
    );
};

export default ClientReview;