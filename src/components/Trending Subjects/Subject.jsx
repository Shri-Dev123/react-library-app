import { useParams } from "react-router-dom"
import { useEffect} from "react";
import Loading from "../Loader/Loader";
import {  useGlobalContext } from '../../context.js';
import { useState } from "react";

const Subject = () =>{
    const subject = useParams();
    const {  loading, setLoading} = useGlobalContext();
    const [myBooks,setMyBooks] = useState([])
    const URL = `http://openlibrary.org/subjects/${subject.id}.json?`
    console.log(URL)

    useEffect(() => {

    
        setLoading(true);
        async function getBookDetails(){
          try{
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data.works);
    
            if(data){
              
              setMyBooks(data.works)
            } else {
              setMyBooks(null)
            }
            setLoading(false);
          } catch(error){
            console.log(error);
            setLoading(false);
          }
        }
        getBookDetails();
      }, [URL,setLoading]);
    
      if(loading) return <Loading />;
    
    
return (
<>
{myBooks.map((book,index)=><li>Top{index+1}  {book.title}</li>)}

</>

)
}
export default Subject