import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';


const Blogs = () => {
    const pdfExportComponent = useRef(null);
    const handlePdfExport = () => {
        pdfExportComponent.current.save();
    };

    return (
        <div>
            <ReactToPdf targetRef={pdfExportComponent} scale={0.7}>
                {({ toPdf }) => (

                    <div className='pl-1 lg:pl-36 mt-12 absolute'>
                        <button className='btn btn-outline  rounded-lg' onClick={toPdf}>Generate PDF</button>
                    </div>

                )}
            </ReactToPdf>
            <div ref={pdfExportComponent}>
                <div className='py-12 bg-gray-100'>
                    <h2 className='font-bold text-center text-3xl'>Blogs</h2>
                </div>

                <div className='text-start mx-4 md:mx-36 p-5 rounded-lg bg-gray-200'>
                    <h2><span className='font-bold'>1. What are the differences between Controlled and Uncontrolled components?</span></h2>
                    <p className='my-2'><span className='font-bold'>Answer:</span> In Controlled Component, parent component is responsible for managing the state and passing data as props to the controlled component. Thus, tracking the state becomes easier. On the other hand, Uncontrolled Component uses a ref to access DOM element's current value and update the state. In big project, this can be a hassle.</p>

                    <h2 className='mt-8'><span className='font-bold'>2. How to validate React props using PropTypes?</span></h2>
                    <p className='my-2'><span className='font-bold'>Answer:</span> We can validate React props using proptypes very easily. <br /> 1. At first, we have to import PropTypes from 'prop-types'. <br /> 2. Then after declaring the function, we use validator such as: 'PropTypes.string' to validate properties to be a string and also can use 'isRequired' to ensure the props must be present. So, if any props is passed to function that is not proper, a warning will be shown in console.</p>

                    <h2 className='mt-8'><span className='font-bold'>3. What are differences between NodeJS and ExpressJS ?</span></h2>
                    <p className='my-2'><span className='font-bold '>Answer: </span> NodeJS provides a run-time environment for running JS code in server side for building fast and scalable application whereas, ExpressJS is a NodeJS web application framework that provides tools and features for building web applications and API's. </p>

                    <h2 className='mt-8'><span className='font-bold'>3. What is a Custom hook and why will you create a custom hook ?</span></h2>
                    <p className='my-2'><span className='font-bold '>Answer: </span> A custom hook looks like a built-in hook that offers the option to share the same logic among different components. We may need to create custom hook for better reusability of the code logic and functionalities. </p>


                </div>
            </div>

        </div >
    );
};

export default Blogs;