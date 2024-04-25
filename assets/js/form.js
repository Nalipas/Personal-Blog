const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitPost = document.querySelector('#submit');
const contentMsg = document.querySelector('#msg');


// Displays error or success message.
function displayMessage(type, message) {
    contentMsg.textContent = message;
    contentMsg.setAttribute('class', type);
    
    // Sets the error or success message to clear after 5000ms
    setTimeout(function() {
        clearMessage();
    }, 5000);
}

// Clears error or success message.
function clearMessage() {
    contentMsg.textContent = '';
    contentMsg.removeAttribute('class');
}

// Adds event listener to store 'blogPost' data in local storage only after certain conditions are met.
submitPost.addEventListener('click', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '') {
        displayMessage('error', 'Username cannot be blank!');
    } else if (title === '') {
        displayMessage('error', 'Title cannot be blank!');
    } else if (content === '') {
        displayMessage('error', 'Post cannot be blank!');
    } else {
        const blogPost = {
            username: username,
            title: title,
            content: content,
            timestamp: new Date().toLocaleString()
        };

        // Pulls 'blogPosts' from localStorage, then adds new 'blogPost' to the 'blogPosts' array in localStorage.
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        displayMessage('success', 'Blog entry posted!');

        // Adds 3000ms delay to redirect after successful post.
        setTimeout(function() {
            if (contentMsg.getAttribute('class') === 'success') {
                window.location.href = 'blog.html';
            }
        }, 3000);
    }    
});