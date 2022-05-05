import Post from './Post';

const Timeline = () => {
  return (
    <div className='bg-gray-100 w-full border-t-2'>
      { new Array(10).fill(0).map((_, index) => (
        <Post key={index} postData={{ avatarURL: 'images/avatars/mariela.jpeg', altText: 'mariela', username: 'Mariela' }} />
      )) }
      </div>
  );
}
 
export default Timeline;