import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticleList = props => {
  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div>
      {props.articles.map(article => {
        return (
          <h2>
            <ArticlePreview article={article} key={article.slug} />
          </h2>
        );
      })}
    </div>
  );
};

export default ArticleList;
