### URL 
(FOR PERSONAL REFERENCE USE)
Button group classes with name (to match css styling)

<div class="button-group">
            <button type="button" id="edit-post-btn" class="edit-post-btn" title='Edit this post'><i class="fa fa-edit"></i></button>
            <button type="button" id="mark-post-btn" class="mark-post-btn" title='Mark as done'><i class="fa fa-check"></i></button>
            <button type="button" id="delete-post-btn" class="delete-post-btn" title='Delete post'><i class="fa fa-trash"></i></button>
</div>

### TODO attach event listerners as functionality
liElement.addEventListener('click', (event) => {
        const target = event?.target?.closest('button'); 
        target?.classList.contains('mark-post-btn')) ....
});