import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/container/search';

function Categories(props){
    return(
        <div className="Categories">
            <Search /> 
            {
                props.categories.map( (item, i)=> {
                    return( 
                        <Category 
                            key={item.id} {...item} 
                            handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories;