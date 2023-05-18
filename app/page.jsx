import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className="max-md:hidden" />
        <span className='orange_gradient text-center'> AI-powered tools</span>
      </h1>
      <p className='desc text-center'>
        Here you can share your thoughts and discover other people
      </p>
      <Feed />
    </section>
  )
}

export default Home