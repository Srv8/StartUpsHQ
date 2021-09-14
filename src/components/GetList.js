import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';

// GetList.propTypes = {
//     postList: PropTypes.array,
// };
// GetList.defaultProps = {
//     postList: [], 
// }


function GetList(props) {
    const [postList, setpostList] = useState([]);
    useEffect(()=>{
      async function fetchpostList(){
        try{
          const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
          const response = await fetch(requestUrl);
          const responseJson = await response.json();
          console.log(responseJson);
          setpostList(responseJson);
        }
        catch{
  
        }
      }
      fetchpostList();
    },[]);

    const [PageNumber, setPageNumber] = useState(0)

    const userPerPage = 10
    const pageVisited = PageNumber* userPerPage

    const pageCount = Math.ceil(postList.length / userPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        
            <div className="post-list">
                <div className="bg-green-300">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your Comments</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
                        {postList.slice(pageVisited, pageVisited + userPerPage).map(post=>(
                            <div className="group relative">
                                <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-black-700">
                                    <Link to={{pathname:"GetComments", state:{postId: (post.id), title: (post.title), postBody: (post.body), userId:(post.userId) }}}>
                                    <span aria-hidden="true" class="absolute inset-0">Title:{' '}{' '}{' '}{post.title}</span><br/>
                                    <p>Post by: {' '}{' '}{post.userId}</p>
                                    </Link>
                                    </h3>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ReactPaginate previousLabel={"Previous"}
                    nextLabel = {"Next"} 
                    pageCount = {pageCount} 
                    onPageChange={changePage} 
                    containerClassName={"pageBttn"}
                    previousLinkClassName={"previousBttn"} 
                    nextLinkClassName = {"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName = {"paginationActive"} />
                </div>
                </div>
                {/* {postList.map(post=>(
                    <section className='section' key={post.id}><a href={post.id}>{post.userId}<p>{post.title}</p></a></section>
                ))} */}


            </div>

        );
}

export default GetList;