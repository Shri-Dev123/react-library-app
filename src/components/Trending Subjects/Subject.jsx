import { useParams } from "react-router-dom"
import { useEffect} from "react";
import Loading from "../Loader/Loader";
import {  useGlobalContext } from '../../context.js';
import coverImg from "../../images/cover_not_found.jpg";
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
              const {description, title, covers, subject_places, subject_times, subjects} = data.works;
              const newBook = {
                description: description ? description.value : "No description found",
                title: title,
                cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
                subjects: subjects ? subjects.join(", ") : "No subjects found"
              };
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
      }, [URL]);
    
      if(loading) return <Loading />;
    
    
return (
<>
{myBooks.map((book,index)=><li>Top{index+1}  {book.title}</li>)}

</>

)
}
export default Subject