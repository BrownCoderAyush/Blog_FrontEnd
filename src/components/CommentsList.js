const CommentsList = ({comments})=>{
   return <>
        <h3>Comments : </h3>
        {console.log(comments,"comments here")}
        {comments.map((comment , index)=>{
           return <div className="comment" key={index}>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        })}
    </>
}

export default CommentsList;