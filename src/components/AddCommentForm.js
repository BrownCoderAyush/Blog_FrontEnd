import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";
 const AddCommentForm = ({articleName , onArticleUpdate})=>{
    const [name , setName] = useState("");
    const [comment , setComment] = useState("");
    const { user , isLoading } = useUser();
    const addComment = async()=>{
        const token = user && await user.getIdToken();

        console.log(user , "user in coment form" , token);
        const headers = token ? {authtoken : token}:{};
        const response = await axios.post(`/api/articles/${articleName}/comments`,{
            text : comment
        },{ headers});
        console.log(response , 'response ');

        const updatedArticle = response.data;
        console.log(updatedArticle, "u{}");
        onArticleUpdate(updatedArticle);
        setName('');
        setComment('');    
    }
    return (
        <div id="add-comment-form">

            <h3>
                Add a Comment
            </h3>
            {user && <p>You are posting as {user.email}</p>}
            <br />    
            <label>
                Comment :
                <textarea  value={comment} cols="50" rows="4" onChange={e=>setComment(e.target.value)}>
                </textarea>
            </label>
            <button onClick={addComment}>
                Add Comment
            </button>
        </div>
    )
}

export default AddCommentForm;

