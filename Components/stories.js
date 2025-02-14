export function createStoryElement(story) {

    const storyDiv = document.createElement("div");
    storyDiv.classList.add("story");

    const storyPic = document.createElement("div");
    storyPic.classList.add("story-pic");

    if (!story.status) {
        storyPic.classList.add("status-false");
    }

    const image = document.createElement("img");
    image.src = story.avatarUrl;
    image.alt = story.username;
    image.classList.add("image");
    storyPic.append(image);

    const storyName = document.createElement("div");
    storyName.classList.add("story-name");
    storyName.textContent = story.username;

    storyDiv.append(storyPic, storyName);

    storyDiv.onclick = () => {
        changeModalContent(story);

        if (storyModal) {
            const timeout = setTimeout(() => {
                storyModal.style.display = 'none';
            }, 15000);

            closeModal.onclick = () => {
                storyModal.style.display = 'none';
                clearTimeout(timeout);
            };
        }

        // fetch(`http://localhost:3001/stories${story.id}`, {
        //     method: "PATCH",
        //     body: JSON.stringify({ status: true }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(res => console.log(res))
    };

    return storyDiv;
};

const closeModal = document.querySelector("#closeStory");
const storyModal = document.querySelector("#storyModal");

function changeModalContent(story) {
    storyModal.style.display = 'flex';

    const name = document.querySelector('.story-info #username');
    const avatar = document.querySelector('.users-avatars #avatarPic');
    const storyImg = document.querySelector('.modal-content .story-content');

    name.textContent = story.username;
    avatar.src = story.avatarUrl;
    storyImg.src = story.storyUrl;
    storyImg.alt = story.username;
}

closeModal.onclick = () => {
    storyModal.style.display = 'none';
};