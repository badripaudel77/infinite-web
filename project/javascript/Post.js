export class Post {
    constructor(postId, postTitle) {
        this.id = postId;
        this.title = postTitle;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.postTitle;
    }
}

// Equivalent ways

// Object literal
// const post1 = {

// }

// function constructor
// export function Post2(id, title) {
//     this.id = id;
//     this.title = title;
// }