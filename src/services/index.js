export function getPosts(userId) {
  return [
    {
      id: 1,
      username: "Your Story",
      userImage: "images/avatars/ceci.jpeg",
      postImage: "https://picsum.photos/id/2/200/200",
      likes: 100,
      comments: 115,
      commentsData: [
        {
          id: 0,
          username: "mariela",
          text: "This is a comment"
        },
        {
          id: 1,
          username: "mimi",
          text: "This is a comment"
        }
      ],
      dateCreated: "2020-01-01-00-00-00",
      isLiked: false,
      isSaved: false,
    },
    {
      id: 2,
      username: "Your Story",
      userImage: "images/avatars/ceci.jpeg",
      postImage: "https://picsum.photos/id/2/200/200",
      likes: 100,
      comments: 115,
      commentsData: [
        {
          id: 0,
          username: "mariela",
          text: "This is a comment"
        },
        {
          id: 1,
          username: "mimi",
          text: "This is a comment"
        }
      ],
      dateCreated: "2020-01-01-00-00-00",
      isLiked: false,
      isSaved: false,
    }
  ];
}
