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