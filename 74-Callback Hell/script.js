function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
    console.log("Users Data: ", usersData)
    makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
        console.log("Posts Data: ", postsData)
        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
            console.log("Comments Data: ", commentsData);
            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].id}`, (userData) => {
                console.log("User Data: ", userData)
            })
        })
    })
})