import React from 'react';
const Switch = ({onChange,checked }) => {

    return ( 
        <label className='switch  ' >
            <input type="checkbox" 
                onChange={onChange} 
                checked={checked} 
                className='switch__input'  
            />
            <span className='switch__slider' ></span>
        </label>
     );
}
 
export default Switch;