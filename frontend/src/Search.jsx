import React from 'react'
import Header from './component/Header'

const Search = () => {
  return (
    <>
    <Header/>
    <div className='content'>
    <form method='post' >
        <div className='trackForm'>
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search"></i></button>
        </div>
    </form>
    </div>
    </>
  )
}

export default Search