console.log('Olá pessoas!');
console.log('#ConstruindoCRUDS');

// [CRUD] Javascript BÁSICO

const miniTwitter = {
  users: [
    {
      id:1,
      username: 'bearibeiroa',
    }
  ],
  posts: [
    {
      id: 1,
      owner: 'bearibeiroa',
      content:'My first tweet!'
    }
  ]
}

// CREATE
function createPost(data) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: data.owner,
    content: data.content
  })
  return miniTwitter.posts;
}


function createUser (data) {
  miniTwitter.users.push({
    id: miniTwitter.users.length + 1,
    username:data.username
  })
  return miniTwitter.users;
}


//READ
function getPost() {
  return miniTwitter.posts;
}

function getUsers () {
  return miniTwitter.users;
}

// UPDATE
function updatePostContent(id, newContent) {
  const postToUpdate = getPost().find((post) => {
    return post.id === id;
  });
  postToUpdate.content = newContent;
}

// DELETE
function deletePost (id) {
  const updatedListOfPosts = getPost().filter((actualPost) => {
    return actualPost.id !== id;
  })
  miniTwitter.posts = updatedListOfPosts;
}



createPost({ owner: 'bearibeiroa', content: 'Second tweet' });
createPost({ owner: 'bearibeiroa', content: 'Third tweet' });

createUser({ username: 'Paulinha' })

createPost({ owner: 'pauladias', content: 'New post from Paulinha' });

updatePostContent(1, 'New tweet content')

deletePost(2)


console.log(miniTwitter)
