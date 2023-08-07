import { useParams  , Link} from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFound";
import { useState, useEffect } from "react";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";


const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ name:null ,upvotes: 0, comments: [] });
    const { articleId } = useParams();
    const {user , isLoading} = useUser();


    useEffect(() => {
        const loadArticleInfo = async () => {
            try {
                const token = user && await user.getIdToken();
                const headers = token ? {authtoken : token}:{};
                const response = await axios.get(`/api/articles/${articleId}`,{
                    headers
                });
                const newArticleInfo = response.data.data[0];
                setArticleInfo(newArticleInfo); 
            } catch (error) {
                console.log(error);
            }
        }
        loadArticleInfo();
    }, [user])

    const addUpvote = async()=>{
        try {
            console.log("add upvote begins")
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken : token}:{};
            const response = await axios.put(`/api/articles/${articleId}/upvote`, null ,{
                headers
            }); 
            console.log(response , "response");
             setArticleInfo({...articleInfo , upvotes : response.data.upvotes});  
            
        } catch (error) {
            console.log(error);
        }
    }

    if (articleInfo.name) {
        return (
            <>
        <div>
            <h1>{articleInfo.name}</h1>
            <div className="upvotes-section">
                {console.log(user , "user")}
               {user ?<button onClick={addUpvote}>Upvote</button>: <Link to="/login"><button>Login to upvote</button></Link> }
                <p>This article has {articleInfo.upvotes} upvotes</p>
            </div>
            <div>
                <p>{articleInfo.content}</p>
            </div>
            {user ?<AddCommentForm articleName={articleInfo.name} onArticleUpdate={setArticleInfo}/>:<Link to="/login"> <button>Login to comment</button></Link>}
            <CommentsList comments={articleInfo.comments}/>

            {/* {articleInfo.content.map((paragraph , index)=>{
           return <p key={index}>{paragraph}</p>
        })} */}
        </div>
         </>
            )
    }
    else {
        return (
           <NotFoundPage/>
        )
    }
    
    
}

export default ArticlePage;
