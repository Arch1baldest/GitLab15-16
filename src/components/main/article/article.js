import "./article.css"

import {Routes, Route} from "react-router-dom";

import About from "./article_comps/about/about"
import News from "./article_comps/news/news"
import Contacts from "./article_comps/contacts/contacts";

function Article(){
    return(
        <div className="article">
            <Routes>
                <Route path={"/about"} element={<About />}></Route>
                <Route path={"/news"} element={<News />}></Route>
                <Route path={"/contacts"} element={<Contacts />}></Route>
            </Routes>
        </div>
    );
}
export default Article;