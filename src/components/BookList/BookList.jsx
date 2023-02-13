import React from 'react';
import { useGlobalContext } from '../../context.js';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import Pagination from '../../components/pagination/Pagination.jsx';

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, pageNumbers,prevPage,nextPage,setCurrentPage, loading, resultTitle, indexOfFirstRecord,indexOfLastRecord} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(indexOfFirstRecord, indexOfLastRecord).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        
        </div>
      </div>
      <Pagination prevPage={prevPage} pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} nextPage={nextPage} />
    </section>
  )
}

export default BookList