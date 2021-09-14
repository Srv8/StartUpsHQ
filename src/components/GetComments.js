import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// GetComments.propTypes = {
//     commentList: PropTypes.array,
// };
// GetComments.defaultProps = {
//     commentList: [], 
// }


function GetComments(props) {
    const location = useLocation()
    const {postId, title, postBody, userId} = location.state
    const [commentList, setcommentList] = useState([]);
    useEffect(()=>{
      async function fetchcommentList(){
        try{
          const requestUrl = 'https://jsonplaceholder.typicode.com/comments';
          const response = await fetch(requestUrl);
          const responseJson = await response.json();
          console.log(responseJson);
          setcommentList(responseJson);
        }
        catch{
  
        }
      }
      fetchcommentList();
    },[]);

    return (
        
            <div classNameName="post-list">
                <div className="bg-green-300">
                    <Link to="/">Back</Link>
                    <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">User ID : {userId}</h2>
                        <p>Post ID : {postId}</p>
                        <p>Title : {title}</p>
                        <p>Body : {postBody}</p><br/>
                        <hr/>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
                        {commentList.map(comment=>((postId === comment.postId)?
                            (<div className="bg-white- group relative">
                                <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-black-300">
                                    <span aria-hidden="true" className="absolute inset-0">Comment:{' '}{' '}{' '}{comment.body}</span><br/><br/>
                                    <p>ID: {' '}{' '}{comment.id}</p><br/>
                                    <p>Comment by: {' '}{' '}{comment.name}</p><br/>
                                    <p>Email: {' '}{' '}{comment.email}</p><br/>
                                    </h3>
                                    <hr/>
                                </div>
                                </div>
                            </div>):[]
                        ))}
                    </div>
                </div>
                    </div>
                {/* {commentList.map(post=>(
                    <section classNameName='section' key={post.id}><a href={post.id}>{post.userId}<p>{post.title}</p></a></section>
                ))} */}
            </div>

        );
}

export default GetComments;