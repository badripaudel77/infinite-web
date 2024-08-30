/**
 * This is the main Javascript file. This will import all the necessary utility classes from util.js
 *  whenever necessary.
 */
import {baseAPIURL} from './util.js';

document.addEventListener('DOMContentLoaded', fetchAndRenderPosts);

/**
 * This will make HTTP call to our given endpoint, and fetch the data from server,
 * Map each data, modify if required and finally render to the UI
 */
async function fetchAndRenderPosts() {    
    const response = await fetch(baseAPIURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const posts = await response.json();
    console.log('response', posts);
}