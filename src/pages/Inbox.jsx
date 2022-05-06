import ChatItem from "../components/Inbox/ChatItem";
import RightInbox from "../components/Inbox/RightInbox";

const Inbox = () => {

  const chats = [
    {
      id: 1,
      username: "/",
      userImage: "/",
      
      text: "/",
    },
    {
      id: 2,
      username: "/",
      userImage: "/",
      text: "/",
    },
    {
      id: 3,
      username: "/",
      userImage: "/",
      text: "/",
    },
    {
      id: 4,
      username: "/",
      userImage: "/",
      text: "/",
    },
    {
      id: 5,
      username: "/",
      userImage: "/",
      text: "/",
    }
  ];

  return (
    <div>
      {/* <!-- component --> */}
      <div class="bg-gray-50 w-screen h-screen sm:p-5">
        <div class="bg-white border border-gray-200 rounded flex h-full">
          {/* <!-- Left --> */}
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full">
            {/* <!-- Account --> */}
            <div class="border-b border-gray-200 p-3 relative">
              <button class="flex items-center mx-auto select-none font-semibold focus:outline-none">
                neysidev
                <svg class="ml-1 transform rotate-180 translate-y-0.5" height="20" viewBox="0 0 48 48" width="20">
                  <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                </svg>
              </button>
              <button class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                <svg height="20" viewBox="0 0 44 44" width="20">
                  <path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
                </svg>
              </button>
            </div>
            {/* <!-- Group --> */}
            <div class="flex items-center justify-between text-sm border-b border-gray-200">
              <div>
                <button class="py-3 w-20 uppercase font-semibold select-none h-full focus:outline-none border-b border-black">
                  Primary
                </button>
                <button class="py-3 w-20 uppercase text-gray-400 select-none h-full focus:outline-none border-b border-transparent">
                  General
                </button>
              </div>
              <button class="p-3 font-semibold text-blue-500 select-none h-full focus:outline-none border-b border-transparent">
                1 Request
              </button>
            </div>
            {/* <!-- Chats --> */}
            <ul class="py-1 overflow-auto">
              {/* <!-- Chat 1 --> */}
              {chats.map((chat) => (
                // Hector
                <ChatItem info={chat}  />
                // Hector
              ))}
            </ul>
          </div>
          {/* <!-- Right --> */}
          <RightInbox />
        </div>
      </div>
    </div>
  );
}

export default Inbox;