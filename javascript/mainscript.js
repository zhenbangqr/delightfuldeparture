/* Make Live Chat element follow scroll */
{
  const asideElement = document.querySelector('.livechat');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    asideElement.style.top = 480 + scrollY + 'px';
  });
  }
  

/* Shrinking and moving of navigation bar when moved */
{
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const listedItems = document.querySelector('.listeditems');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    logo.classList.add('scroll');
  } else {
    navbar.classList.remove('scrolled');
    logo.classList.remove('scroll');
  }
});
}

const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');

// Toggle chat box visibility
chatToggle.addEventListener('click', function () {
    if (chatBox.style.display === 'block') {
        chatBox.style.display = 'none';
    } else {
        chatBox.style.display = 'block';
    }
});