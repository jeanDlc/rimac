import React from 'react';
const Switch = ({onChange}) => {

    return ( 
        <label className='switch  ' >
            <input type="checkbox" 
                onChange={onChange}  
                className='switch__input'  
            />
            <span className='switch__slider' ></span>
        </label>
     );
}
 
export default Switch;