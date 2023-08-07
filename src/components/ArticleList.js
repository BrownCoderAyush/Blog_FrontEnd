
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";


const ArticleListReuse = ({ articles }) => {
    const {user , isLoggedIn} = useUser();
    return (
        <>
            {/* {user ? <p>Hello buddy</p>:<p>Bye bye already</p>} */}
            {articles.map(((article, index) => {
                return (<div key={index}>
                    <Link className="article-list-item" to={`/articles/${article.name}`}>
                        <h3>{article.name}</h3>
                        <p>{article.content.substring(0, 150)}....</p>
                    </Link>
                </div>)
            }
            )
            )
            }
        </>


    )
}
export default ArticleListReuse;