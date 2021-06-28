import React, { useState } from 'react';
const Switch = () => {
    const [on,setOn]=useState(true);
    return ( 
        <label className='switch  ' >
            <input type="checkbox"  className='switch__input'  />
            <span className='switch__slider' ></span>
        </label>
     );
}
 
export default Switch;