/**
 * This file contains all the utility classes and will be imported whenver / wherever necessary.
 */
"use strict";

import { Post } from './Post.js';

export const baseAPIURL = 'https://jsonplaceholder.typicode.com/posts';
export let isEditMode = false;

const postsMap = new Map();

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
        <div style='display:flex;>
            <div style='display:flex;'>
                <i style="font-size:25px; margin-right:5px;" class="fa fa-plus-circle show-expand" title='fetch details'></i>
                <p style="max-width: 300px; text-align:left;">${post.title}</p>
            </div>  
            <i class="fa fa-spinner fa-spin spinner" style="display:none;font-size:24px"></i>
            <div class='post-desc hide'></div>  
            <div class="button-group">
                <button type="button"  class="edit-post-btn" title='Edit this post'><i class="fa fa-edit"></i></button>
                <button type="button"  class="mark-post-btn" title='Mark as done'><i class="fa fa-check"></i></button>
                <button type="button"  class="delete-post-btn" title='Delete post'><i class="fa fa-trash"></i></button>
            </div>
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
                    renderOrHideInfo('saved-posts', 'no-saved-posts');
            }
            if(target?.className === 'edit-post-btn') {
                editPost(li);
            }
            // expand or collapse clicked
            if(e.target.className.includes('show-expand')) {
                handleSinglePostDetails(li);
            }
        }
        // Delete From Local storage
        if(isLocal && target?.className === 'delete-post-btn') {
            deleteFromLocalstorage(li);
            renderOrHideInfo('saved-posts', 'no-saved-posts');
        }
    }
    );
    return li;
}

async function handleSinglePostDetails(li) {
   const icon = li.querySelector('.show-expand');
   const postDesc = li.querySelector('.post-desc');
   const spinner = li.querySelector('.spinner');

   // console.log(icon, postDesc, li);
   // Button is now expanded one, change it to collapse and make API call.
   if(icon.classList.contains('fa-plus-circle')) {
        showOrHideElement(spinner, true, '');
        icon.classList.remove('fa-plus-circle');
        icon.classList.add('fa-minus-circle');
        postDesc.classList.remove('hide');
        postDesc.classList.add('show');
        const post = await getDetails(li.dataset.id);
        showOrHideElement(spinner, false, '');
        postDesc.innerText = post?.body ? post.body : 'NO DETAILS WAS FOUND';
   }
   // button is now collapsed, change it to expand and return (no api call) 
   else {
        icon.classList.remove('fa-minus-circle');
        icon.classList.add('fa-plus-circle');
        postDesc.classList.remove('show');
        postDesc.classList.add('hide');
   }
}

async function getDetails(id) {
    const existingPost = postsMap.get(id);
    if(existingPost) {
        return existingPost;
    }
    // make API call and return
    let response = await fetch(`${baseAPIURL}/${id}`,{
        method: 'GET',
        headers: {
             'Content-Type': 'application/json'
        }}
    );
    const post = await response.json();  
    postsMap.set(id, post);  
    return post;
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
    renderOrHideInfo('posts-list', 'no-regular-posts');
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
    renderOrHideInfo('saved-posts', 'no-saved-posts');
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
        location.href = 'login/login.html';
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

export function renderOrHideInfo(parentElementId, idOfElement) {
    const parentElement = document.getElementById(`${parentElementId}`);
    if(parentElement.childNodes.length > 0) {
        document.getElementById(`${idOfElement}`).style.display = 'none';
    }
    else {
        document.getElementById(`${idOfElement}`).style.display = 'block';
    }
}

export const resetValues = () => {
    document.getElementById('post-input').value = '';
    changeButtonText(false);
    document.getElementById('post-id').value = null;
}

