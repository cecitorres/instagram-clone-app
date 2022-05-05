// import { usePostsContext } from '../../../context/posts';
import Post from './Post';

const Timeline = () => {
  // const { posts } = usePostsContext();

  return (
    <div className='w-full bg-gray-100 border-t-2'>
      {new Array(10).fill(0).map((_, index) => (
        <Post key={index} postData={{ avatarURL: 'images/avatars/mariela.jpeg', altText: 'mariela', username: 'Mariela' }} />
      ))}
    </div>
  );
}

export default Timeline;