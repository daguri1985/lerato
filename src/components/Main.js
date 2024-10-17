import React from 'react';

const Main = () => {
    return (
        <main className="px-4 py-8 md:px-8 md:py-16">
            <section id="hero" className="text-white flex flex-col md:flex-row items-center md:px-8">
                <div className="flex-1 text-left border border-gray-300 rounded-md shadow-md p-6 bg-white mb-6 md:mb-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Public Speaking and Personal Branding <br /> Skills for Mid and Lower Cadre Staff at Old Mutual Kenya
                    </h2>
                    <p className="text-lg md:text-2xl text-black mb-4">
                        <b>Objective:</b> Lerato Creations Ltd proposes a series of impactful <br />
                        sessions designed to enhance public speaking and personal branding
                        skills for Old Mutual Kenya's mid and lower cadre staff. <br />
                        These sessions will empower staff to communicate confidently, <br />
                        represent the company effectively, and build stronger professional identities.
                    </p>
                    <a href="#cards-section" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                        Learn More
                    </a>
                </div>

                <div className="flex-1">
                    {/* Replace with your image */}
                    <img src="/he2.jpg" alt="Hero" className="object-cover h-64 md:h-full w-full" />
                </div>
            </section>

            <section id="cards-section" className="py-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Why This Matters to Old Mutual Kenya:
                </h2>
                <div className="flex justify-center px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                            <figure>
                                <img src="employee2.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2 px-3">Enhanced Employee Confidence:</h3>
                                <p className="px-3 mb-3">By improving communication and presentation skills, employees will engage more confidently with clients, stakeholders, and within teams.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                            <figure>
                                <img src="band.jpeg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2 px-3">Brand Representation:</h3>
                                <p className="px-3 mb-3">A workforce skilled in personal branding ensures consistent alignment with Old Mutual’s values, creating a stronger, more unified brand presence.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                            <figure>
                                <img src="band2.jpeg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2 px-3">Client Relationships:</h3>
                                <p className="px-3 mb-3">Staff will develop better client-facing communication, leading to improved client satisfaction and retention.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="cards-section" className="py-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-700">What Old Mutual Stands to Gain:

                </h2>
                <div className="flex justify-center px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                            <figure>
                                <img src="product.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2 px-3">Increased Productivity:</h3>
                                <p className="px-3 mb-3">Improved communication within teams results in clearer instructions, fewer misunderstandings, and faster task completion.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                            <figure>
                                <img src="ceo.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2 px-3">Stronger Internal Leadership:</h3>
                                <p className="px-3 mb-3">As staff gain personal confidence, they will naturally take on more leadership roles within their departments.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                            <figure>
                                <img src="client.png" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold mb-2 px-3">Client-Centric Service: </h3>
                                <p className="px-3 mb-3">Employees with strong personal branding skills are better equipped to represent Old Mutual’s mission, increasing trust with clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Cost of the Program</div>
                <div className="collapse-content">
                    <p> Ksh 89,000 + VAT per session.
                    </p>
                </div>
            </div>


        </main>
    );
};

export default Main;
