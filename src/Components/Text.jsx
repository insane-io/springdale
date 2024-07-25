import React from 'react';

const Text = (props) => {
  return (
    <div className='relative inline-block text-4xl font-normal italic text-[#D55900] mb-8'>
      {props.text}
      <span className='absolute bottom-0 left-0 w-20 h-1 bg-[#D55900]' style={{ bottom: '-15px' }}></span>
    </div>
  );    
}

export default Text;
