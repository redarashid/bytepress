import React from "react";
import siteMetadata from "../components/data/siteMetadata";

const MAX_DISPLAY = 5;
const Main = ({ posts }) => {
  return (
    <>
      <div className=" divide-y divide-gray-200 dark:divide-dark-700">
        <div className=" space-y-2 pt-6 pb-8 md:space-y5">
          <h1 className=" font-extrabold text-3xl leading-9 tracking-tight text-gray-900 sm:leading-10 sm:text-4xl md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className=" text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "Not posts found."}
          {posts.sclice(0, MAX_DISPLAY).map((post) => {
            const { title, date, summary, slug, tags } = post;
            return (
              <li key={slug} className=" py-12">
                <article>
                  <div className=" space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"></div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
