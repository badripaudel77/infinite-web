/**
 * This is the main Javascript file. This will import all the necessary utility classes from util.js
 *  whenever necessary.
 */
import {baseAPIURL} from './util.js';

document.addEventListener('DOMContentLoaded', fetchAndRenderPosts);

// async call
async function fetchAndRenderPosts() {    
    const response = await fetch(`${baseAPIURL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const posts = await response.json();
    console.log('response', posts);
}