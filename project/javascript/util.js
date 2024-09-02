/**
 * This file contains all the utility classes and will be imported whenver / wherever necessary.
 */
"use strict";

export const baseAPIURL = 'https://jsonplaceholder.typicode.com/posts';

export const renderPosts = (posts) => {
    const postsSection = document.getElementById('posts-list');
    posts.forEach(post => {
        const liElement = createElement(post);
        console.log(liElement);
        postsSection.appendChild(liElement);
    });
}

// Create <li> tag for each el
export function createElement(post) {
    const li = document.createElement('li');
    li.className = 'post-item';
    li.dataset.id = post.id;
    // li.innerText = post.title;
    li.innerHTML = `
     <p style="max-width: 400px;">${post.title}</p>
     <div class="button-group">
            <button type="button" id="edit-post-btn" class="edit-post-btn" title='Edit this post'><i class="fa fa-edit"></i></button>
            <button type="button" id="mark-post-btn" class="mark-post-btn" title='Mark as done'><i class="fa fa-check"></i></button>
            <button type="button" id="delete-post-btn" class="delete-post-btn" title='Delete post'><i class="fa fa-trash"></i></button>
    </div>
    `;
    // attach event listeners ...
    return li;
}

export const showOrHideElement = (element, show = false, innerText = 'In Progress') => {
    if(show) {
        element.style.display = 'block';
        element.innerText = innerText;
    }
    else {
        element.style.display = 'none';
    }
}

export const resetValues = () => {
    document.getElementById('post-input').value = '';
}

