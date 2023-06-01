import React, { useState, useEffect, useCallback, Fragment } from "react";
import styles from "./Blog.module.scss";
import { useCustomState } from "../../../state/state";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import {
  BlogCard,
  BlogPagination,
  BlogCategories,
  BlogFeatured,
  BlogSearch,
} from "./components";

import { Header } from "../../widgets";

export default ({ layout = "grid", title = "Forum" }) => {
  const state = useCustomState()[0];
  const { category, author, posting_date, query } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useState(6)[0];
  const [postsArray, setPostsArray] = useState([]);
  const [pageTitle, setPageTitle] = useState(title);

  const filterPosts = useCallback(() => {
    let posts = [...state.data.posts];

    if (category) {
      posts = state.data.posts.filter(
        (post) => category === post.category_id.toString()
      );
      setPageTitle(
        "Category: " +
          state.data.categories.filter((cat) => cat.id === category)[0].title
      );
    } else if (author) {
      posts = state.data.posts.filter(
        (post) => author === post.user_id.toString()
      );
      setPageTitle(
        "Author: " +
          state.data.users.filter((user) => user.id.toString() === author)[0]
            .name
      );
    } else if (posting_date) {
      posts = state.data.posts.filter(
        (post) => posting_date === post.posting_date
      );
      setPageTitle("Date: " + posting_date);
    } else if (query) {
      posts = state.data.posts.filter((post) => post.title.includes(query));
      setPageTitle("Search for: " + query);
    } else {
      setPageTitle(title);
    }

    return posts;
  }, [
    author,
    category,
    posting_date,
    query,
    state.data.categories,
    state.data.posts,
    state.data.users,
    title,
  ]);

  useEffect(() => {
    setPostsArray(
      filterPosts().map((post, index) => {
        return (
          <BlogCard
            key={index}
            layout={layout}
            post={post}
            author={
              state.data.users.filter(
                (user) => user.id.toString() === post.user_id
              )[0]
            }
            category={
              state.data.categories.filter(
                (cat) => cat.id === post.category_id.toString()
              )[0].title
            }
          />
        );
      })
    );
    setCurrentPage(1);
  }, [
    layout,
    category,
    author,
    query,
    posting_date,
    state.data.users,
    state.data.categories,
    filterPosts,
  ]);
  const img_url = "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  return (
    <Fragment>
      <Header img={img_url}>{pageTitle}</Header>
      <section
        className={[
          styles.wrapper,
          styles.with_sidebar + " " + styles.left
        ].join(" ")}
      >
        <aside className={styles.sidebar}>
          <BlogSearch />
          <BlogCategories data={state.data.categories} />
          <BlogFeatured data={state.data.posts} />
        </aside>

        <article>
          <div
            className={ styles.grid }
          >
            {postsArray.slice(
              (currentPage - 1) * postsPerPage,
              currentPage * postsPerPage
            )}
          </div>

          <BlogPagination
            amount={Math.ceil(postsArray.length / postsPerPage)}
            current={currentPage}
            next={() => {
              setCurrentPage((c) => c + 1);
              scroll.scrollToTop();
            }}
            prev={() => {
              setCurrentPage((c) => c - 1);
              scroll.scrollToTop();
            }}
            goto={(id) => {
              setCurrentPage(id);
              scroll.scrollToTop();
            }}
          />
        </article>
      </section>
    </Fragment>
  );
};
