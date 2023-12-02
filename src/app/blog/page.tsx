"use client"
import BlogComponenet from "@/component/BlogComponenet";
import React, { useState,useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
 

  const getMorePost = async () => {
    try {
      const res = await fetch(
        `api/blogpost/`
      );
      if(!res.ok)
      {
        setPosts(["Some Error Has Occured"])
        return
      }
      const newPosts = await res.json();
     
    
      setPosts(newPosts.message);
    } catch (error) {
      setPosts([{blog:"Some Error Has Occured"}])
      return
    }
   
  };
   useEffect(() => {
      getMorePost()
   }, [])
   console.log(posts)
  return (
    <div className="[background:linear-gradient(180deg,_#222,_#131313)] w-full min-h-screen ">
     
        {posts.map((data) => (
          <div>
            <BlogComponenet blog={data.blog}/>
          </div>
        ))}
      
      
    </div>
  );
};

export default Blog;