const PostItem = ({ postData }) => {
  return (

    <div className="bg-white border-gray-300">

      <header className="grid items-center grid-cols-6 p-3 border-b border-b-gray-300">

        <div className="">
          <img src="https://picsum.photos/50/50" className="w-10 h-10 rounded-full" alt="alt" />
        </div>

        <div className="col-span-4 text-sm font-semibold">
          pianizz
        </div>

        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="float-right w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>

      </header>

      <photo>
        <img src="https://picsum.photos/500/500" alt="alt" />
      </photo>

      <content className="flex flex-col gap-3 p-4">

        <div className="flex flex-row gap-3">
          {/* <div className="grid grid-cols-4"> */}

          {/* Heart */}
          <svg aria-label="Like" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>

          {/* Comment */}
          <svg aria-label="Comment" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>

          {/* Share */}
          <svg aria-label="Share Post" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
          {/* TODO: Align to right */}
          <svg aria-label="Save" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

        </div>

        <div className="text-sm font-semibold">
          11,552 Likes
        </div>

        <div className="text-sm">
          <span className="font-semibold">gnfi</span> Saat ini Indonesia memiliki 34 provinsi, jumlah tersebut diproyeksi bertambah seiring dengan adanya usulan 30 Daerah Otonomi Baru (DOB) khusus untuk provinsi, dan 9 diantaranya berada di Pulau Jawa.
        </div>

        <div className="text-sm text-gray-500">
          View all 877 comments
        </div>

        <div className="text-xs text-gray-400">
          2 HOURS AGO
        </div>

      </content>

      <footer>
      </footer>

    </div>

  );
}

export default PostItem;