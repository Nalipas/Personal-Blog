// Retrieves values stored in the 'blogPosts' key in localStorage, then parses the values back into an array.
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const blogPostsSection = document.getElementById('blogPosts');

// Sorts the blog posts in decending order of date and time, with newer posts appearing at the top of other posts.
blogPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

// Interates over each post in the 'blogPosts' array, then generates HTML elements to display the posts on the page.
blogPosts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.id = 'blog-post';
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>${post.username}</strong> ${post.timestamp}</p>
    `;
    blogPostsSection.appendChild(postElement);
});