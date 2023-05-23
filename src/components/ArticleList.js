import Article from "./Article";

const ArticleList = ({ posts }) => {
    console.log(posts);
    const postList = posts.map((post) => (
       <Article 
            key={post.id} 
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    ));

    console.log(postList);
    
    return (
        <main>
          {postList}  
        </main>
    )
}

export default ArticleList;