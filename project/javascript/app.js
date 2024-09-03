/**
 * This is the main Javascript file. This will import all the necessary utility classes from util.js
 *  whenever necessary.
 */
"use strict";

import {baseAPIURL, createElement, renderPosts, showOrHideElement, resetValues } from './util.js';

document.addEventListener('DOMContentLoaded', fetchAndRenderPosts);

const loaderElement = document.getElementById('loader');

document.getElementById('add-post-button').addEventListener('click', submitPost);
/**
 * This will make HTTP call to our given endpoint, and fetch the data from server,
 * Map each data, modify if required and finally render to the UI
 */
async function fetchAndRenderPosts(event) { 
    //console.log('event ', event);
    showOrHideElement(loaderElement, true, 'Fetching Posts From Server');
    const posts = await fetchPosts(6);
    showOrHideElement(loaderElement, false, 'Fetching Posts From Server');
    renderPosts(posts);
}

async function fetchPosts(postsLimit = 5) {
    const response = await fetch(baseAPIURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const posts = await response.json();
    loaderElement.style.display = 'none';
    const limitedPosts = posts.slice(0, postsLimit);
    // Filtering post with title = "qui est esse" ()
    // Functional programming / Declartive programming
    const filteredPosts = limitedPosts.filter(post => post.title !== "qui est esse");
    // Imperative programming
    // const fp = [];
    // for(const post of limitedPosts) {
    //     if(post.title !== "qui est esse") {
    //         fp.push(post);
    //     }
    // }
    return filteredPosts;
}

async function submitPost () {
    const postTitle = document.getElementById('post-input').value;

    if(postTitle.trim().length < 1) {
       document.getElementById('input-error').style.display = 'block';
       return;
    } 
    const postToAdd = {
        title: postTitle
    }
    document.getElementById('input-error').style.display = 'none';
    await addPost(postToAdd);
}

async function addPost(postToAdd) {
      // make http call
      showOrHideElement(loaderElement, true, 'Adding Post');
      const response = await fetch(baseAPIURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(postToAdd)
       }  
      );
      const addedPost = await response.json();
      // postToAdd.id = addedPost.id;
      const addedelement = createElement(addedPost);
      const postsSection = document.getElementById('posts-list');
      postsSection.prepend(addedelement);
      showOrHideElement(loaderElement, false);
      resetValues();
}