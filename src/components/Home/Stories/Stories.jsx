import StoryItem from './StoryItem';

const Stories = () => {
  return (
    <>
      <div className="relative rounded-xl overflow-auto">
        <div className="max-w-2xl mx-auto min-w-0">
          <ul className="overflow-auto flex py-4">
            { new Array(10).fill(0).map((_, index) => (
              <StoryItem key={index} storyData={{ avatarURL: 'images/avatars/mariela.jpeg', altText: 'mariela', username: 'Mariela' }} showPlus={index === 0 && true}/>
            )) }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Stories;