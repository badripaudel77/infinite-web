/**
 * This file contains all the utility classes and will be imported whenver / wherever necessary.
 */
"use strict";

import { Post } from './Post.js';

export const baseAPIURL = 'https://jsonplaceholder.typicode.com/posts';
export let isEditMode = false;

export const renderPosts = (posts) => {    
    const postsSection = document.getElementById('posts-list');
    posts.forEach(post => {
        const liElement = createElement(post);
        postsSection.appendChild(liElement);
    });
}

// Create <li> tag for each el
export function createElement(post, isLocal = false) {
    const li = document.createElement('li');
    li.className = 'post-item';
    li.dataset.id = post.id;
    // li.innerText = post.title;
    if(!isLocal) {
        li.innerHTML = `
        <p style="max-width: 400px;">${post.title}</p>
        <div class="button-group">
                <button type="button"  class="edit-post-btn" title='Edit this post'><i class="fa fa-edit"></i></button>
                <button type="button"  class="mark-post-btn" title='Mark as done'><i class="fa fa-check"></i></button>
                <button type="button"  class="delete-post-btn" title='Delete post'><i class="fa fa-trash"></i></button>
        </div>
    `;
    }
    if(isLocal) {
        li.innerHTML = `
        <p style="max-width: 400px;">${post.title}</p>
        <div class="button-group">
                <button type="button"  class="delete-post-btn" title='Delete post'><i class="fa fa-trash"></i></button>
        </div>
    `;
    }
    li.addEventListener('click', e => {
        const target = e.target.closest('button');
        if(!isLocal) {
            if(target?.className === 'delete-post-btn') {
                deletePost(li);
            }
            if(target?.className === 'mark-post-btn') {
                    markPostAsRead(li);
            }
        
            if(target?.className === 'edit-post-btn') {
                editPost(li);
            }
        }
        // Delete From Local storage
        if(isLocal && target?.className === 'delete-post-btn') {
            deleteFromLocalstorage(li);
        }
    }
    );
    return li;
}

export const renderSavedPosts = (posts) => {
    const postsSection = document.getElementById('saved-posts');
    postsSection.innerHTML = '';
    posts.forEach(post => {
        const liElement = createElement(post, true);
        postsSection.appendChild(liElement);
    });
}

function editPost(element) {
    const postId = element.dataset.id;
    const postTitle = element.innerText;
    isEditMode = true;
    // console.log(postTitle, postId)
    document.getElementById('post-id').value = postId;
    document.getElementById('post-input').value = postTitle;
    changeButtonText(isEditMode);
}

async function deletePost(element) {
    showOrHideElement(document.getElementById('loader'), true, 'Deleting in progress');
    const postIdToDelete = element.dataset.id;
    const response = await fetch(`${baseAPIURL}/${postIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
     }  
    );
    if(response.status === 200) {
        element.remove();
        showOrHideElement(document.getElementById('loader'), false, 'Deleting in progress');
    }
}

function markPostAsRead(element) {
    element.style.backgroundColor = 'gray';
    element.style.textDecoration = 'line-through';
    const id = element.dataset.id;
    const title = element.innerText;
    // const postToSave = {
    //     id: id,
    //     title: title
    // };
    const allSavedPosts = getAllSavedPostsFromLocalstorage();
    const postToSave = new Post(id, title);
    const existingPost = allSavedPosts.find((post) => post.id === postToSave.id);
    if(!existingPost) {
        const allPosts = [...allSavedPosts, postToSave];
        localStorage.removeItem("mySavedPosts");
        localStorage.setItem("mySavedPosts", JSON.stringify(allPosts));
        retrieveAndRenderSavedPosts(allPosts)
    }
}

export function retrieveAndRenderSavedPosts() {
    const savedPosts = getAllSavedPostsFromLocalstorage();
    // render saved posts to UI
    const mappedPosts = savedPosts.map(post => ({
        ...post, 
        title: `✔️ ${post.title}`
    }));
    renderSavedPosts(mappedPosts);
}


function deleteFromLocalstorage(liElement) {
    const id = liElement.dataset.id;
    const savedPosts = getAllSavedPostsFromLocalstorage();
    const filteredPosts = savedPosts.filter(savedPost => savedPost.id !== id);
    localStorage.setItem("mySavedPosts", JSON.stringify(filteredPosts));
    liElement.remove();
}

function getAllSavedPostsFromLocalstorage() {
    return JSON.parse(localStorage.getItem('mySavedPosts')) || [];
}

function changeButtonText(isEditMode) {
    const text = isEditMode === true ? 'Edit Post' : 'Add Post';
    document.getElementById('add-post-button').innerText = text;
}

export function checkIfUserIsLoggedInAndRedirect() {
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    if(userdata === null || !userdata['username'] || !userdata.isLoggedIn) {
        location.href = '/project/login/login.html';
    }
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
    changeButtonText(false);
    document.getElementById('post-id').value = null;
}

