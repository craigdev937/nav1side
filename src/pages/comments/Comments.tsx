import React from "react";
import classes from "./Comments.module.css";
import { DUM } from "../../global/DUM";
import { Spinner } from "../../components/spinner/Spinner";

export const Comments = () => {
    const { error, isLoading, data } = DUM.useAllQuery();
    const COM = data?.comments;

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
                <main className={classes.com}>
                    <header className={classes.header}>
                        <div>
                            <h1 className={classes.title}>Comments</h1>
                            <p className={classes.subtitle}>The latest from the community.</p>
                        </div>
                        <span className={classes.count}>
                            {COM?.length ?? 0} comments
                        </span>
                    </header>

                    {COM?.length ? (
                        <div className={classes.grid}>
                            {COM.map((com) => (
                                <article className={classes.card} key={com.id}>
                                    <header className={classes.author}>
                                        <span className={classes.avatar} aria-hidden="true">
                                            {com.user.fullName.trim().charAt(0).toUpperCase()}
                                        </span>
                                        <div className={classes.identity}>
                                            <h2 className={classes.name}>{com.user.fullName}</h2>
                                            <p className={classes.username}>@{com.user.username}</p>
                                        </div>
                                    </header>
                                    <p className={classes.body}>{com.body}</p>
                                    <footer className={classes.metadata}>
                                        <span>Post #{com.postId}</span>
                                        <span>User #{com.user.id}</span>
                                        <span className={classes.likes}>
                                            {com.likes} {com.likes === 1 ? "like" : "likes"}
                                        </span>
                                    </footer>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className={classes.empty}>No comments to show yet.</p>
                    )}
                </main>
            )}
        </React.Fragment>
    );
};


