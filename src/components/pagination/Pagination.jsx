import "../../../src/App.css";

const Pagination = ({prevPage,pageNumbers,pgNumber,setCurrentPage,nextPage}) =>{
    return(
        <>
        <nav >
            <ul className="pagination">
                <li>
                    <button className="previous-button" onClick={prevPage}>Previous</button>
                </li>
                {pageNumbers.map(pgNumber=>(
                    <li key={pgNumber}>
                        <button button className="pagination-Button"  onClick={()=>setCurrentPage(pgNumber)} >{pgNumber}</button>
                    </li>
                ))}
                <li>
                    <button button className="next-button" onClick={nextPage} href="#" >Next</button>
                </li>
            </ul>
        </nav>
</>
)
}

export default Pagination