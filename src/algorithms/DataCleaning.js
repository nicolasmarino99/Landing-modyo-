const cleanData = (users, posts) => {
  const merge = [];
  let element;

  for (let i = 0; i < users.length; i += 1) {
    const selectOnePost = posts.filter((x) => x.userId === users[i].id)[0];
    if (selectOnePost) {
      element = {
        name: users[i].name,
        photoId: `person_${Math.ceil((Math.random() * 4))}`,
        post: selectOnePost.body,
      };
      merge.push(element);
    }
  }
  return merge;
};

export default cleanData;