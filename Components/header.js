export function header() {
    let header = document.querySelector('header')

    header.innerHTML = `
    <img src="./images/Logo.png" alt="">
    <input type="text" placeholder="Search">
    <div class="icone">
        <img src="./images/home-icon.png" alt="">
        <img src="./images/message-icon.png" alt="">
        <img src="./images/vector-icon.png" alt="">
        <img src="./images/like-icon.png" alt="">
        <div class="avatar"></div>
    </div>
    `

    let img = document.querySelector('img.logo');
};