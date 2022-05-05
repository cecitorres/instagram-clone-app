const StoryItem = ({ storyData, showPlus }) => {
  return (
    <li className="flex-none flex-col items-center text-center mx-2 ">
      <div className="relative bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-[2px] rounded-full">
        <a href="#" className="block bg-white p-[2px] rounded-full transform transition hover:-rotate-6">
          <img className="w-14 h-14 rounded-full" src={storyData.avatarURL} alt="cute kitty" />
        </a>
        { showPlus && (
          <button className="absolute bg-blue-500 text-white text-2xl font-medium w-8 h-8 rounded-full bottom-0 right-1 border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700 focus:outline-none">
          <div className="transform -translate-y-px">+</div>
        </button>
        )}
      </div>

      <a href="#">{storyData.username}</a>
    </li>
  );
}

export default StoryItem;