1. If we were fetching the data from an API instead of in the root of the document, we would
   have to import the useEffect hook from React. I think this would be the best option because
   we could set dependencies for when we want the function to run, and if we had data that we stored
   in state from the returned function in the useEffect we could just set the dependency as [] so it
   only runs when the component is mounted. Some other considerations we would have to think
   about would be how the data structure is set up coming from an external API. This would effect how
   we extract the data we need. A good solution for storing this data would be setting it as an array in state and naming it blog, that way we don't have to go through and change all of the dynamic data we've
   already inserted into the document.

2. Using nanoid with React could cause some problems with optimisation and re-rendering when it doesn't need to. Nanoid is not stable and should be avoided when setting a key on children of a list, because it will generate a new key for each render. It is better to use a stable value. An example of a stable value could be an id that has already been declared on the API that the developer is receiving the data from. When a stable value is set it makes it easier for the frontend and backend to communicate, especially if CRUD operations rely on identifying the correct item with the key.
