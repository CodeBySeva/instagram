import { header } from "./Components/header.js";
import { createStoryElement } from "./Components/stories.js";
import { createPostElement } from "./Components/posts.js";
import { render } from "./libs/utils.js";

header();

const storiesContainer = document.querySelector(".stories-container");
const postsContainer = document.querySelector(".posts-container");

fetch('http://localhost:3001/stories')
.then(response => response.json())
.then(data => render(data, storiesContainer, createStoryElement))
.catch(error => console.error(error))


fetch('http://localhost:3001/posts')
.then(response => response.json())
.then(data => render(data, postsContainer, createPostElement))
.catch(error => console.error(error))