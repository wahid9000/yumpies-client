# b7a10-chef-recipe-hunter-client-side-wahid9000
b7a10-chef-recipe-hunter-client-side-wahid9000 created by GitHub Classroom

***
Things I have done in this project:

* LiveSite Link: https://yumpies-ee151.web.app/
* I have named my website by myself and reserched about chefs and recipes of United States.
* In Home Page, I have  added a navbar and a header-Banner section.
* In the navbar, the profile photo of user will show and a condition is implemented for Login & Logout button.
* I have added cards to show chefs name and their profile in a section.
* The data on the cards are fetched from server using API.
* By Clicking the View Recipe Button, user will be redirected to Chef Recipe page (if logged in) and can view chef's profile in a banner-card and their recipes just under the profile banner.
* In Chef Recipe Page, when the user will click 'Add To Favourites' button, a toast will show.
* In home page, I have addeded another section about the number of recipes.
* I have added a section of popular recipes and the data are fetched from the server.
* In another section,  have added a marquee showing the sponsors.
* At the bottom I have added a footer.

* For Authentication, clicking the Login Button in navbar, the user will be redirected to Login Page. If the user is not registered, he may click on the Register link to route to the registration page. 
* To validate, the user have to give inputs in all fields to register. No field can be left empty, the password should have atleast 6 characters.
* Then when the user will press register then he will be redirected to Home page.
* Different froms of Login implemented Like: GoogleLogin, GithubLogin, EmailPasswordLogin.
* I have implemented PrivateRoute, so that if the user is not logged in and wants to go to ChefsRecipe page, he will be redirected to Login page. Then after successful login he can go to the exact page he wanted.
* I have added a Spinner using react to load data in private route as well as login & register page.
* I have hiiden fiebase config leys using ENV.
* I have added active routed to show which route is active.
* I have created a 404 page so that if the user moves to irrelavent page, 404 error will show.
* I have added a blogs page with some question-answers and implemnted 'PDF Generation Functionality' using reactToPdf package.
* I have implemnted 'Lazy Load' using react-lazy-load package.
