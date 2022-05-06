const ChatItem = () => {
    return (
        <li>
            <button class="flex items-center w-full px-4 py-2 select-none hover:bg-gray-100 focus:outline-none">
                <img class="w-12 mr-3 rounded-full border" src="https://i.ibb.co/Y7H2b8s/83915635-1271088396614888-3530566050498215936-n.jpg" alt="Graphhit" />
                <div class="transform translate-y-0.5 text-left">
                    <h3 class="leading-4">junior.coders</h3>
                    <span class="text-xs text-gray-500">Active 1h ago</span>
                </div>
            </button>
        </li>
        
    );
};

export default ChatItem;
