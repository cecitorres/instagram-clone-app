// import {
//   Create,
//   Inbox,
//   Likes,
//   Logo
// } from './atoms';
import { Link } from 'react-router-dom';

const Header = () => {
  // return (
  //   <navbar>
  //     <Logo />
  //     <Create />
  //     <Likes />
  //     <Inbox />
  //   </navbar>
  // );
  return (
    <header className="h-12 bg-white border-b border-gray-primary sticky top-0 z-10">
      {/* <div className="container mx-auto max-w-screen-lg h-full"> */}
        <div className="flex items-center justify-between h-full w-full bg-white">
          <div className='flex items-center align-items px-4'>
            <svg aria-label="New Story" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="13.191" fill="none" r="4.539" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></circle><path d="M18.592 21.374A3.408 3.408 0 0022 17.966V8.874a3.41 3.41 0 00-3.41-3.409h-.52a2.108 2.108 0 01-1.954-1.375 2.082 2.082 0 00-2.204-1.348h-3.824A2.082 2.082 0 007.884 4.09 2.108 2.108 0 015.93 5.465h-.52A3.41 3.41 0 002 8.875v9.091a3.408 3.408 0 003.408 3.408z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to="/" aria-label="Instagram logo">
                <img src="/images/logo.png" alt="Instagram" className="w-6/12 mx-auto" />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items px-4">
            {/* Home */}
            {/* <Link to="/" aria-label="Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link> */}
            {/* Inbox */}
            <Link to="/" aria-label="Dashboard">
              <svg aria-label="Messenger" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fillRule="evenodd"></path></svg>
            </Link>
            {/* Add */}
            {/* <Link to="/" aria-label="Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
            <Link to="/" aria-label="Dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link> */}
          </div>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;