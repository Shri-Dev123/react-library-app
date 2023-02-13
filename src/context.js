import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const AppContext = React.createContext();




const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    // const [authorName] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("hello");
    const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(books.length / recordsPserPage)
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
  console.log(books)
  console.log(nPages)
  console.log(pageNumbers)

  const nextPage = () => {
      if (currentPage !== nPages)
          setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
      if (currentPage !== 1)
          setCurrentPage(currentPage - 1)
  }


    

    const fetchBooks = useCallback(async () => {
        const URL = `http://openlibrary.org/search.json?title=${searchTerm}`;
        setLoading(true);
        try {
            const response = await fetch(`${URL}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 100).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (<>
        <AppContext.Provider value={{
            loading, prevPage,pageNumbers,setCurrentPage,nextPage, setLoading, books,  setSearchTerm, resultTitle, setResultTitle, indexOfFirstRecord, indexOfLastRecord
        }}>
            {children}





        </AppContext.Provider>
    </>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };