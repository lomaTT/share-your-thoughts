"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const DiffProfile = () => {

  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const profileId = searchParams.get('id');
  const profileUsername = searchParams.get('username');


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch (`/api/users/${profileId}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    console.log(posts);
    if (session?.user.id) fetchPosts();
  }, [])
  


  return (
    <>
    { (session?.user.id === profileId) ? (
      <Profile 
      name="My"
      description="Welcome to your profile!"
      data={posts}
    />
    ) : (
      <Profile 
      name={profileUsername}
      description={`Welcome to ${profileUsername} profile!`}
      data={posts}
    />
    )}
    </>
  )
}

export default DiffProfile