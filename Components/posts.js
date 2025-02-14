export function createPostElement(post) {
    const PostContainer = document.querySelector('.posts-container');

    const postElem = document.createElement('div');
    postElem.classList.add('post-elem');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');

    const profilePic = document.createElement('img');
    profilePic.classList.add('profile-pic');
    profilePic.src = post.user.avatarUrl;
    profilePic.alt = post.user.username;

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const nickname = document.createElement('span');
    nickname.classList.add('nickname');
    nickname.textContent = post.user.username;

    const location = document.createElement('span');
    location.classList.add('location');
    location.textContent = post.location || 'Unknown location';

    userInfo.append(nickname, location);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.textContent = '...';

    postHeader.append(profilePic, userInfo, menu);

    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper-container');

    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    post.imageUrl.forEach(imageUrl => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const postImage = document.createElement('img');
        postImage.classList.add('post-image');
        postImage.src = imageUrl;
        postImage.alt = 'Post image';

        slide.append(postImage);
        swiperWrapper.append(slide);
    });

    const swiperPagination = document.createElement('div');
    swiperPagination.classList.add('swiper-pagination');

    swiperContainer.append(swiperWrapper, swiperPagination);

    const postActions = document.createElement('div');
    postActions.classList.add('post-actions');

    ['like-icon.png', 'coment-icon.png', 'send-icon.png', 'save-icon.png'].forEach((src, index) => {
        const img = document.createElement('img');
        img.src = `./images/${src}`;
        img.alt = src.split('-')[0];
        if (index === 3) {
            img.id = 'saveIcon';
            img.classList.add('save-icon');
        }
        postActions.appendChild(img);
    });

    const postLikes = document.createElement('div');
    postLikes.classList.add('post-likes');
    postLikes.textContent = `${post.likes} likes`;

    const postCaption = document.createElement('div');
    postCaption.classList.add('post-caption');
    postCaption.innerHTML = `<strong class="users-nickname">${post.user.username}</strong> ${post.description}`;

    const viewComments = document.createElement('div');
    viewComments.classList.add('view-comments');
    viewComments.textContent = `View all ${post.comments} comments`;

    const comments = document.createElement('div');
    comments.classList.add('comments');
    for (let i = 0; i < 2; i++) {
        const comment = document.createElement('div');
        comment.innerHTML = `<strong class="users-nickname">nickname</strong> Lorem ipsum dolor sit amet <img src="./images/mini-like-icon.png" alt="like">`;
        comments.appendChild(comment);
    }

    const publication = document.createElement('div');
    publication.classList.add('publication');

    const publicationTime = document.createElement('span');
    publicationTime.textContent = post.date;
    publication.appendChild(publicationTime);

    const addComment = document.createElement('div');
    addComment.classList.add('add-comment');

    const emotionIcon = document.createElement('img');
    emotionIcon.src = './images/emotions-icon.png';
    emotionIcon.alt = 'emoji';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';

    const postButton = document.createElement('button');
    postButton.textContent = 'Post';

    addComment.append(emotionIcon, commentInput, postButton);

    postElem.append(postHeader, swiperContainer, postActions, postLikes, postCaption, viewComments, comments, publication, addComment);
    PostContainer.appendChild(postElem);

    setTimeout(() => {
        new Swiper('.swiper-container', {
            loop: false
        });
    }, 100);

    nickname.onclick = () => {
        localStorage.setItem('userId', post.user.id);

        window.location.href = './profile.html';
    };

    return postElem;
}
