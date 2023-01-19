import { useEffect, useState } from "react";

export function Images(){
   







    const [image, setImage]=useState();
    
    const getImage = async() =>{
        try{
            const response = await fetch(`http://192.168.5.76:3000/api/v1/books`);
            const result = await response.json();
            console.log(result);
            setImage(result.books);

        }catch(error){
            console.log("Error"+error);
        }
    } 


    




    
    useEffect (() =>{
        getImage();
     },[]);
     

     
    
    if(image != undefined){
        return(
            <>
           
            {
                image.map((currElem) =>{
                    return(
                        <>
                            <img src={currElem.img} alt="Book cover page"/>
                        </>
                    )
                })
                 
                   
            }
            </>)
    }
}
    
