import React from 'react';
// import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                {/* <Helmet> <title>Blogs</title></Helmet> */}
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    This is Blog Questions Answer.
                </h2>
                <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://cdn.educba.com/academy/wp-content/uploads/2021/02/React-State-Management.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 font-bold leading-none sm:text-2xl text-left">
                                What are the different ways to manage a state in a React application?
                            </h5>
                            <p className="mb-5 text-gray-700 text-left">
                                There are four main types of state you need to properly manage in your React apps: <br />
                                01. Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.  <br />
                                02. Global (UI) state – Global state is data we manage across multiple components. <br />
                                03. Server state – Data that comes from an external server that must be integrated with our UI state. <br />
                                04. URL state – Data that exists on our URLs, including the pathname and query parameters.
                                <a className='text-primary' href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/">Read More...</a>
                            </p>
                        </div>
                    </div>
                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://miro.medium.com/max/1400/0*edtYKYPk_PW3-OK1.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-left">
                                How does prototypical inheritance work?
                            </h5>
                            <p className="mb-5 text-gray-700 text-left">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.
                                <a className='text-primary' href="https://www.geeksforgeeks.org/prototypal-inheritance-using-__proto__-in-javascript/">Read More...</a>
                            </p>
                        </div>
                    </div>
                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://blog.autify.com/static/84ac8b56a04924ac3a0f6a5dd94b3df3/3b2f8/unit-testing-life-cycle.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-left">
                                What is a unit test? Why should we write unit tests?
                            </h5>
                            <p className="mb-5 text-gray-700 text-left">
                                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />
                                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                                <a className='text-primary' href="https://www.guru99.com/unit-testing-guide.html">Read More..</a>
                            </p>

                        </div>
                    </div>
                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://miro.medium.com/max/1400/1*3Q-98or93IYvC84TOpC4rA.jpeg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-left">
                                React vs. Angular vs. Vue?
                            </h5>
                            <p className="mb-5 text-gray-700 text-left">
                                <strong>React,</strong> interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior. <br />
                                <strong>In Angular,</strong> components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. This is what sets it apart when looking at Angular vs React. <br />
                                <strong>Vue,</strong> When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Bootstrap.
                                <a className='text-primary' href="https://www.codeinwp.com/blog/angular-vs-vue-vs-react/">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;