// import { usePostsContext } from '../../../context/posts';
import usePosts from '../../../hooks/use-posts';
import Post from './Post';

const Timeline = () => {
  const user = {
    userId: '1',
    following: [1]
  }
  const { posts } = usePosts(user);

  return (
    <div className='w-full bg-gray-100 xs:border-t-2'>
      {new Array(10).fill(0).map((_, index) => (
        <Post key={index} postData={{ avatarURL: 'images/avatars/mariela.jpeg', altText: 'mariela', username: 'Mariela' }} />
      ))}
    </div>
  );
}

export default Timeline;