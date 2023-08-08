import ArticleListReuse from "../components/ArticleList";
import axios from "axios";
import { context } from "../App";
import { useContext, useEffect,useState } from "react";

const ArticleList = ()=>{
    const [article , setArticles ] = useState([]);
    const {user,setUser} = useContext(context);

    
    useEffect(()=>{
        async function fetchArticles(){
            const response = await axios.get('/api/articles');
            setArticles(response.data.data);     
        }
        fetchArticles();
    },[])
    return (
        <>
        <h1>Articles</h1>
        <ArticleListReuse  articles={article}/>
        </>
    )
}
export default ArticleList;