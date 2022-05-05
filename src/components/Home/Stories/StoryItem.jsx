const StoryItem = ({ storyData, showPlus }) => {
  return (
    <li className="flex-col items-center flex-none mx-2 text-center ">
      <div className="relative bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-[2px] rounded-full">
        <a href="#" className="block bg-white p-[2px] rounded-full transform transition hover:-rotate-6">
          <img className="rounded-full w-14 h-14" src={storyData.image} alt={storyData.username} />
        </a>
        { showPlus && (
          <button className="absolute bottom-0 flex items-center justify-center w-6 h-6 font-mono text-2xl font-medium text-white bg-blue-500 border-4 border-white rounded-full right-1 hover:bg-blue-700 focus:outline-none">
          <div className="text-xs transform -translate-y-px">+</div>
        </button>
        )}
      </div>

      <a href="#" className="text-xs">{storyData.username}</a>
    </li>
  );
}

export default StoryItem;