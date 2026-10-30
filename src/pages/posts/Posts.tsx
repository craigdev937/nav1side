import React from "react";
import classes from "./Posts.module.css";
import { DUM } from "../../global/DUM";
import { Spinner } from "../../components/spinner/Spinner";

export const Posts = () => {
    const { error, isLoading, data } = DUM.usePostsQuery();
    const POSTS = data?.posts;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className={classes.posts}>
                    <header className={classes.header}>
                        <aside>
                            <h1 className={classes.title}>Posts</h1>
                            <p className={classes.subtitle}>The latest from the community.</p>
                        </aside>
                        <span className={classes.count}>
                            {POSTS?.length ?? 0} posts
                        </span>
                    </header>

                    {POSTS?.length ? (
                        <div className={classes.grid}>
                            {POSTS.map((post) => (
                                <article className={classes.card} key={post.id}>
                                    <header className={classes.heading}>
                                        <span className={classes.badge} aria-hidden="true">
                                            #{post.id}
                                        </span>
                                        <h2 className={classes.name}>{post.title}</h2>
                                    </header>
                                    <p className={classes.body}>{post.body}</p>
                                    {post.tags.length ? (
                                        <ul className={classes.tags}>
                                            {post.tags.map((tag) => (
                                                <li className={classes.tag} key={tag}>
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                    <footer className={classes.metadata}>
                                        <span>User #{post.userId}</span>
                                        <span>
                                            {post.views} {post.views === 1 ? "view" : "views"}
                                        </span>
                                        <span className={classes.likes}>
                                            {post.reactions.likes} {post.reactions.likes === 1 ? "like" : "likes"}
                                        </span>
                                    </footer>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className={classes.empty}>No posts to show yet.</p>
                    )}
                </main>
            )}
        </React.Fragment>
    );
};
