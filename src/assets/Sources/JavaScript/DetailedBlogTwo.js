
document.addEventListener('DOMContentLoaded', function() {
            
    const comment = document.getElementById('comment');
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    function showComments() {
        commentList.innerHTML = '';
        comments.forEach((comment, index) => {
            const comment_container = document.createElement('div');
            comment_container.innerHTML = `
    <div style="
        border: 1px solid #ccc; 
        border-radius: 8px; 
        padding: 10px; 
        margin-bottom: 10px; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        background-color: #f9f9f9;
    ">
        <p style="font-weight:bold; margin: 0 0 8px; font-size: 16px;">${comment}</p>
        <button 
            onclick="deleteComment(${index})" 
            style="
                background-color: #ff4d4d; 
                color: white; 
                border: none; 
                border-radius: 4px; 
                padding: 5px 10px; 
                cursor: pointer; 
                font-size: 14px;
                transition: background-color 0.3s ease;
            "
            onmouseover="this.style.backgroundColor='#ff1a1a';" 
            onmouseout="this.style.backgroundColor='#ff4d4d';"
        >
            Delete
        </button>
    </div>
`;

            commentList.appendChild(comment_container);
        });
    }

    window.deleteComment = function(index) {
        if (confirm('Do you want to delete this comment?')) 
            {
            comments.splice(index, 1);
            localStorage.setItem('comments', JSON.stringify(comments));
            showComments();
        }
    };

    comment.addEventListener('submit', function(event) {
        event.preventDefault();
        const comment = commentInput.value.trim();
        if (!comment) 
        {
            alert('Please enter a comment.');
            return;
        }

        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        showComments();
        commentInput.value = '';
    });

    showComments();
});
