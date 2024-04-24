const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const blogPostsSection = document.getElementById('blogPosts');

blogPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

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