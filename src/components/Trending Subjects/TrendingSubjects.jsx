import { Link } from "react-router-dom";
const TrendingSubjects = () =>{

 

 return (
    <>
      <h1 className='trending-heading'>Trending subjects are as below</h1>
      <div className='trendingGroup'>
      <Link  className='Trending' to={"/science"}>Science</Link>
      <Link className='Trending' to={"/maths"}>Maths</Link>
      <Link className='Trending' to={"/history"}>History</Link>
      <Link className='Trending' to={"/social"}>Social</Link>
      <Link className='Trending' to={"/english"}>English</Link> 
      </div>

    </>
  )


}

export default TrendingSubjects;
