import { header } from "./Components/header.js";
import { render } from "./libs/utils.js";
import { createProfilePosts } from "./Components/profilePosts.js";

header();

const id = localStorage.getItem('userId');
const postContainer = document.querySelector('.profile-posts');

function createProfile(user) {
    const userNickname = document.querySelector('#userNickname');
    const userName = document.querySelector('.name');
    const userLastname = document.querySelector('.lastname');
    const userAvatar = document.querySelector('#avatar');
    const postsCount = document.querySelector('.postsCount');
    const userFollowings = document.querySelector('.following');
    const userFollowers = document.querySelector('.followers');

    userNickname.textContent = user.username;
    userName.textContent = user.name;
    userLastname.textContent = user.lastname;
    userAvatar.src = user.avatarUrl;
    postsCount.textContent = user.posts;
    userFollowings.textContent = user.followings;
    userFollowers.textContent = user.followers;
};

fetch(`http://localhost:3001/users/${id}`)
    .then(response => response.json())
    .then(data => createProfile(data))
    .catch(error => console.error(error))


fetch(`http://localhost:3001/posts?user.id=${id}`)
    .then(response => response.json())
    .then(data => render(data, postContainer, createProfilePosts))
    .catch(error => console.error(error))