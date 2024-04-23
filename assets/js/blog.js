const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const blogPostsSection = document.getElementById('blogPosts');

blogPosts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.id = 'blog-post';
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.username}</p>
        <p>${post.content}</p>
        <p>${post.timestamp}</p>
    `;
    blogPostsSection.appendChild(postElement);
});