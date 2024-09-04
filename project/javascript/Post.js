export class Post {
    constructor(postId, postTitle) {
        this.id = postId;
        this.postTitle = postTitle;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.postTitle;
    }
}