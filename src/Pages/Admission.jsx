import React from 'react';
import Text from '../Components/Text';
import Typewriter from 'typewriter-effect';

const Admission = () => {
  return (
    <div className='lg:px-40 px-4'>
      {window.scroll(0,0)}
      <div className='mt-7 mb-20'>
        <Text text={"Process"} />
        <h1 className='text-2xl font-semibold'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(10)
                .typeString(`Admission forms are available for download. Submit the completed form along with required documents at the school office.`)
                .pauseFor(10)
                .start();
            }}
            options={{
              typeSpeed: 1
            }}
          />
        </h1>
        <a href='https://drive.google.com/file/d/1GmnRvxC2bX52joPBV-yV2aNHltV7FAxL/view?usp=sharing' target='_blank' className='text-2xl text-blue-800 font-semibold' download={true}>Click Here to download the form.</a>
      </div>
      <div className='mb-20'>
        <Text text={"Criteria"} />
        <h1 className='text-2xl font-semibold'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(10)
                .typeString(`Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.`)
                .pauseFor(10)
                .start();
            }}
            options={{
              typeSpeed: 1
            }}
          />
        </h1>
      </div>
      <div>
        <Text text={"Important Dates"} />
        <ul className='list-disc pl-5 text-2xl font-semibold'>
          <li className='mb-2'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(10)
                  .typeString('Application Start Date: August 1, 2024')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                typeSpeed: 1
              }}
            />
          </li>
          <li className='mb-2'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(10)
                  .typeString('Application End Date: September 15, 2024')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                typeSpeed: 1
              }}
            />
          </li>
          <li className='mb-2'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(10)
                  .typeString('Entrance Test Date: October 5, 2024')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                typeSpeed: 1
              }}
            />
          </li>
          <li className='mb-2'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(10)
                  .typeString('Admission Confirmation: November 1, 2024')
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                typeSpeed: 1
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Admission;
