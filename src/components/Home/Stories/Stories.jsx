import { useStoriesContext } from '../../../context/stories';
import StoryItem from './StoryItem';

const Stories = () => {
  const { stories } = useStoriesContext();

  return (
    <div className="relative overflow-auto lg:border lg:mt-5">
      <div className="max-w-2xl min-w-0 mx-auto">
        <ul className="flex px-2 py-4 overflow-auto">
          { stories.map(({id, username, image}, index) => (
            <StoryItem key={id} storyData={{ image, username }} showPlus={index === 0 && true}/>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default Stories;