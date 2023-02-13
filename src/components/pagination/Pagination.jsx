import "../../../src/App.css";

const Pagination = ({prevPage,pageNumbers,pgNumber,setCurrentPage,nextPage}) =>{
    return(
        <>
        <nav >
            <ul className="pagination">
                <li>
                    <a onClick={prevPage} href="#">Previous</a>
                </li>
                {pageNumbers.map(pgNumber=>(
                    <li key={pgNumber}>
                        <a href="#" onClick={()=>setCurrentPage(pgNumber)} >{pgNumber}</a>
                    </li>
                ))}
                <li>
                    <a onClick={nextPage} href="#" >Next</a>
                </li>
            </ul>
        </nav>
</>
)
}

export default Pagination