import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <>
    <div className='card '>
        <div className='row'>
            <div className='mx-auto'>
                <p>{post.postItem}</p>
            </div>
            
        </div>
        <div className='row'>
        <div className='col'>
                <p>Sender: {post.sender}</p>
            </div>
            <div className='col'>
                <p>Recipient: {post.recipient}</p>
            </div>
        </div>

    </div>
    <hr/>
</>

  )
}

export default Post