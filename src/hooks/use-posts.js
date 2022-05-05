import { useState, useEffect } from 'react';
import { getPosts } from '../services/index';

export default function usePosts(user) {
  console.log('ceci');
  const [posts, setPosts] = useState(null);
  console.log('ceciii');
  useEffect(() => {
    async function getTimelinePosts() {
      // does the user actually follow people?
      // if (user?.following?.length > 0) {
        console.log('hi');
        const followedUserPosts = await getPosts(1);
        console.log(followedUserPosts, 2);
        // re-arrange array to be newest posts first by dateCreated
        followedUserPosts.sort((a, b) => b.dateCreated - a.dateCreated);
        setPosts(followedUserPosts);
      // }
    }

    getTimelinePosts();
  // }, [user?.userId, user?.following]);
  }, []);

  return { posts };
}