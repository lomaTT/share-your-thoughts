"use client";

import React from 'react'
import { useState, useEffect } from 'react'

import InputCard from './InputCard';

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <InputCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleTagClick = (tag) => {
    setSearchText(tag)
  }

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json();
      if (searchText !== '') {
        const searchData = data.map((post) => {
          if (
            post.prompt.includes(searchText) || 
            post.tag.includes(searchText) || 
            post.creator.username.includes(searchText)
            ) 
          return post;
        });
        const filteredData = searchData.filter( item => item );
        setPosts(filteredData);
        console.log(filteredData);
      } else {
        setPosts(data);
      }
    }

    fetchPrompts();

  }, [searchText]);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {(posts !== []) ? (
        <PromptCardList
          data={posts}
          handleTagClick={handleTagClick}
        />
      ) : <></>}
      
    </section>
  )
}

export default Feed