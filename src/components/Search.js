import { useEffect, useState } from "react";

export function Search(){
    const [search, setSearch]= useState([]);
    const getSearch = async ()=>{
        try{
           var q = document.getElementById('searchvalue').value;
            // const response = await fetch(`http://localhost/api/?auth_id=a3Jpc2hhbWFoYXJqYW4&q=${q}`);
            const response = await fetch(`http://192.168.5.76:3000/api/v1/books?name=${q}`);
            const result = await response.json();
            console.log(result.books);
            setSearch(result.books);
        } catch(error){
            console.log("Error"+error);
        }
    }
   useEffect(() =>{
    // getSearch();
   },[])
   
    return(
        <>
        <input type="search" id="searchvalue" placeholder="type here..." onChange={getSearch} />
         {
            search.map((currElem) =>{
                return(
                    <>
                            <span>{currElem.name} <br/> </span>
                    </>
                )
            }
         )}
        </>
    )
}