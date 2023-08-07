import ArticleListReuse from "../components/ArticleList";
import axios from "axios";
import { useEffect,useState } from "react";

const ArticleList = ()=>{
    const [article , setArticles ] = useState([]);
    useEffect(()=>{
        async function fetchArticles(){
            const response = await axios.get('/api/articles');
            console.log(response);
            setArticles(response.data.data);
            
        }
        fetchArticles();
    },[])
    return (
        <>
        {console.log(article)};
        <h1>Articles</h1>
        <ArticleListReuse  articles={article}/>
        </>
    )
}
export default ArticleList;