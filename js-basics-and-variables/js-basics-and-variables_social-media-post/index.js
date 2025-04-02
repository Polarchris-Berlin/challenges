console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const postTitle = "Reise nach Norwegen";
const postContent =
  "Norwegen enttäuscht nie. Jetzt ist die richtige Zeit, um das Land zu erleben.";
let numberLikes = 55;
const postCreator = "Polarchris";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log(postTitle);
console.log(postContent);
console.log(numberLikes);
console.log(postCreator);
console.log(isReported);

// --^-- write your code here --^--
numberLikes = numberLikes + 1;
console.log(numberLikes);
