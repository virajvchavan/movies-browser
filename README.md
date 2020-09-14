A Single Page Application built using React that shows lists of movies categorized by genres.
User can add any movies to a list; which persists in localStorage.

Deployed here: https://dry-island-76843.herokuapp.com/

The MovieDb api is used: https://developers.themoviedb.org/3/

### Basic logic used:
- Fetch genres(referred as categories in the code) from the api.
- For each category, fetch movies by pages (each page has 20 movies)
- All movies are stored in a single top-level object called `movies`
- `movies` is a key-value object, where key is the movieId
- store ony what is needed in each movie object
- A movie may belong to multiple genres, although it'll be stored just once in the `movies` state
- For each category, store an array of movieIds that belong to that category
- Render movies for each category in a horizontally scrollable row
- Maintain a list of movieIds for movies saved by the user. User can add/delete any movie to the list.
- Sync these saved movies to localStorage.
- An image carousel of random movies is shown at the top of the page. Since the api gives us a large number of movies, store top 3 movie banners from each cateory in a seperate state. Enusre the count of these doesn't go beyong 15.

### Run the app locally:
- `npm install`
- `npm start`

### Possible improvments:
- Styles can be improved. Right now, all the custom css is dumped into App.css. A better approach can be followed.
- Categories can be cached in localStorage since they rarely change. This will save a network call.
- A navigation for categories can be added. Possible on the left side as fixed vertical navbar. On click will scroll to a particular category.
- Experience on mobile can be made better.
- Better loaders and related animations for a smoother experience.
- Add test cases. Possible unit test case scenarious:
    - Ensure various api responses(200, 404, 500) are handled.
    - Ensure each category is rendered for a mocked api response
    - Ensure each movie card is rendered for a mocked api response
    - Ensure `Add to list` button is showed on the card if a movie is not yet added
    - Ensure `Remove from list` button is showed on the card if a movie is already in the list
    - Ensure overlay on a card is shown on hover.
    - Ensure that a movie is shown in `My List` at the top of the page if added by user
    - Ensure the `Add to list` button works as expected
    - Ensure the `Remove from list` button works as expected
    - Ensure images for top carousel are saved in proper state once api response is received.
    - etc
