import { useState, useMemo } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  // setting intial state for when the component first renders
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  /* Finding the index of the first and last item to slice the array at those exact indexes to then
     display the correct items to the user. Memoized the value so the function only executes when the 
     currentPage or postsPerPage changes */
  const currentPaginationData = useMemo(() => {
    const indexOfLastItem = currentPage * postsPerPage;
    const indexOfFirstItem = indexOfLastItem - postsPerPage;

    return blogs.posts.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, postsPerPage]);

  /* When this function runs, it will receive a parameter of value that will set the postsPerPage 
  to the desired value, which will issue a re-render. Lastly, it will reset the currentPage to 1. 
  This resolves problems such as the user being on page 29, but now the amount of pages is only 13. */
  const updateRowsPerPage = (value) => {
    setPostsPerPage(Number(value));
    setCurrentPage(1);
  };

  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={postsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
