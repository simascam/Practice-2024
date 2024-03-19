import React, { useState } from "react";


const Categories = ({chooseCategory}) => {

    const [categories] = useState ([
        {
            key: 'all', 
            name: 'All' 
        },
        {
            key: 'chairs', 
            name: 'Chair' 
        },
        {
            key: 'tables', 
            name: 'Table' 
        },
        {
            key: 'sofa', 
            name: 'Sofa' 
        },
        {
            key: 'light', 
            name: 'Light' 
        },
    ]);

    return (
        <div className='categories'>
          {categories.map(el => (
              <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
          ))}
        </div>
      )
};

export default Categories;