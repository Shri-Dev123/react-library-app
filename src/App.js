import React from 'react';
import ReactPaginate from './components/BookDetails/BookDetails.jsx';
import { useGlobalContext } from './context.js';
function App() {
  const {Loading} = useGlobalContext();
  if(Loading) return  <ReactPaginate/>
 
}

export default App;