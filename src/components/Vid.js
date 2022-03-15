import react, {useState} from "react";

function Vid({title, url, views, date, likes, dislikes, hideComments, hide}) {
    const[upVotes, setUpVotes] = useState(likes);
    const[downVotes, setDownVotes] = useState(dislikes)

    function handleLikes() {
        setUpVotes((upVotes) => upVotes + 1)
    }

    function handleDislikes() {
        setDownVotes((downVotes) => downVotes + 1)
    }

    return(
        <div className="Video">
            <iframe
                width="919"
                height="525"
                src={url}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <h3>{views} | {date}</h3>
            <button onClick={handleLikes}>{upVotes}👍</button>
            <button onClick={handleDislikes}>{downVotes}👎</button>
            <div>
            <button onClick={hideComments} className="Hide">{hide ? "Show Comments" : "Hide Comments"}</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default Vid;