//button for view my work 

// 1. Find the "View My Work" button
const viewWorkButton = document.querySelector('.view-work-button');

// 2. Find the "Projects" section you want to scroll to
const projectsSection = document.querySelector('.projects');

// 3. Add a click listener to the button
viewWorkButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the projects section smoothly
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

// button for get in touch**

// 1. Find the "Get In Touch" button
const getInTouchButton = document.querySelector('.get-in-touch');

// 2. Find the "Contact Me" section you want to scroll to
const contactSection = document.querySelector('.Contact-Me');

// 3. Add a click listener to the button
getInTouchButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the contact section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// home button**

// 1. Find the "Home" button in the nav bar
const homeButton = document.querySelector('.Home .nav-button');

// 2. Find the "Welcome" section (the top of the page)
const welcomeSection = document.querySelector('.welcome');

// 3. Add a click listener to the button
homeButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the welcome section smoothly
    welcomeSection.scrollIntoView({ behavior: 'smooth' });
});

// about button**

// 1. Find the "About" button in the nav bar
const aboutButton = document.querySelector('.about .nav-button');

// 2. Find the "About-me" section
const aboutSection = document.querySelector('.About-me');

// 3. Add a click listener to the button
aboutButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the "About-me" section smoothly
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// projects**
// 1. Find the "projects" button in the nav bar
const projectsButton = document.querySelector('.Projects .nav-button');

// projects uper bhi hai 
// 3. Add a click listener to the button
projectsButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the "projects" section smoothly
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

// contact 

// 1. Find the "Contact" button in the nav bar
const contactButton = document.querySelector('.Contact-link .nav-button');
//get in touch phele se hai 

// 3. Add a click listener to the button
contactButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the "Contact-Me" section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

//start conversation 

// 1. Find the "Start Conversation" button (it's inside the div with class "jp")
const startButton = document.querySelector('.jp button');


// 3. Add a click listener to the button
startButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the "Contact-Me" section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// lets work together 

// 1. Find the "Let's Work Together" button
const workTogetherButton = document.querySelector('.together1');

// 3. Add a click listener to the button
workTogetherButton.addEventListener('click', () => {
    // 4. When clicked, scroll to the "Contact-Me" section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
});