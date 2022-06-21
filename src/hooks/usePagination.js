export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  const totalPages = Math.ceil(totalCount / pageSize);
  let paginationNumbers = [];

  if (currentPage === 1)
    paginationNumbers = [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      DOTS,
      totalPages,
    ];

  if (currentPage === 2)
    paginationNumbers = [
      1,
      DOTS,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      DOTS,
      totalPages,
    ];

  if (currentPage > 2 && currentPage < totalPages - 2)
    paginationNumbers = [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      totalPages,
    ];

  if (currentPage >= totalPages - 2)
    paginationNumbers = [1, DOTS, totalPages - 2, totalPages - 1, totalPages];

  if (currentPage === 1 && totalPages === 1) paginationNumbers = [1];

  /*

This hook will first find the total number of pages by taking the total number of posts and dividing it by the
number of posts per page. I used the Math.ceil() function so that the number would round to the highest value,
since the last page will always have one or more items, it won't exclude the entire last page due to the value
being rounded down. Next, I declared an array with let, so that it will be able to be mutated. I set several
conditionals that could meet any possible outcome, and mutated each array to display the correct display of numbers
and for the ellipses to be in the correct position depending on which conditional is met. Finally, I return the 
paginationNumbers array so that it can be mapped over in the BlogList component.

*/

  return paginationNumbers;
}

export default usePagination;
