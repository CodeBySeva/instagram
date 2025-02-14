export function createProfilePosts(post) {
    const postContainer = document.querySelector('.profile-posts');
    postContainer.classList.add('profile-posts');

    const postElem = document.createElement('div');
    postElem.classList.add('postElem');

    for (const imgUrl of post.imageUrl) {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.classList.add('image');
        postElem.append(img);
    };

    postContainer.append(postElem);

    return postElem;
};