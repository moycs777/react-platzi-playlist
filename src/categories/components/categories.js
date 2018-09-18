import React from 'react';
import Category from './category';

function Categories(props){
    return(
        <div>
            {
                props.categories.map( (item, i)=> {
                    <Category/>
                })
            }
        </div>
    )
}

export default Categories;