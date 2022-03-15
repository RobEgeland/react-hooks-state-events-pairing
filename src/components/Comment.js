import react from "react";

function Comment({comments, hide}) {
    return(
        <div>
            <h2> {comments.length} Comments</h2>
            <ul className="List">
                {comments.map((comment) => {
                    return(
                    <li key={comment.id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </li>
                    )
                    
                })}
            </ul>
        </div>
    )
}

export default Comment;