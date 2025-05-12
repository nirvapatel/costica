const openBtn = document.getElementById("openSidebar");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobileMenu");

const mainPanel = document.getElementById("mainPanel");
const collectionsPanel = document.getElementById("collectionsPanel");

const collectionsBtn = document.getElementById("collectionsBtn");
const backMain = document.getElementById("backMain");

openBtn.onclick = () => {
  overlay.classList.add("active");
  mobileMenu.classList.add("active");
};

overlay.onclick = () => {
  overlay.classList.remove("active");
  mobileMenu.classList.remove("active");
  mainPanel.classList.add("active");
  collectionsPanel.classList.remove("active");
};

collectionsBtn.onclick = () => {
  mainPanel.classList.remove("active");
  collectionsPanel.classList.add("active");
};

backMain.onclick = () => {
  mainPanel.classList.add("active");
  collectionsPanel.classList.remove("active");
};
// hero section
const contents = [
  document.getElementById('content0'),
  document.getElementById('content1'),
  document.getElementById('content2')
];

const leftImg = document.getElementById('leftImg');
const rightImg = document.getElementById('rightImg');

const images = [
  ["assets/image/img-1-8.webp", "assets/image/img-1-9.webp"],
  ["assets/image/img-1-13.webp", "assets/image/img-1-14.webp"],
  ["assets/image/img-1-15.webp", "assets/image/img-1-16.webp"],
];

function switchContent(index) {
  contents.forEach((content) => {
    content.classList.remove('content-visible');
    content.classList.add('content-hidden');
  });

  contents[index].classList.remove('content-hidden');
  contents[index].classList.add('content-visible');

  leftImg.classList.remove('animate-left');
  rightImg.classList.remove('animate-right');
  void leftImg.offsetWidth;
  void rightImg.offsetWidth;
  leftImg.classList.add('animate-left');
  rightImg.classList.add('animate-right');

  setTimeout(() => {
    leftImg.src = images[index][0];
    rightImg.src = images[index][1];
    leftImg.classList.remove('animate-left');
    rightImg.classList.remove('animate-right');
  }, 700);
}
