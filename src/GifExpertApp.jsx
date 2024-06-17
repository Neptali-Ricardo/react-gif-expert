
import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory)) return;
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={ value => onAddCategory(value)}
            />

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }/>
                ))
            }
       
        </>

        
    )
}
