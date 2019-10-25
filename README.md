# WishDish

Author: Dennis Krupitsky

This is a project utilizing the yelp, firebase and google MAPS API, to create a program with a modern, slick interace
where the user signs in to their google account and can search for business using 3 search parameters, which provide a autocomplete function to show the results matching the criteria. The details page returns the selected business details, the maps location and an option to store it to the google users favorites.

## Time spent
Describe the time you spent on the project.
 * Tutorials, research: 5 hours
 * Coding required stories: 8 hours
 * Optional and extras: 1 hour

## User stories

### Required
 * [x] Search capability with at least three facets (e.g. name, category, location, price level, etc).
 * [x] Search should show some form of “auto-complete” as the user is typing.
 * [x] Display detailed business information, such as: Phone, Review Count and details, Hours
 * [x] Add login ability via Firebase
 * [x] Add “Favorites” page, listing out all Favorites
 * [x] Provide user with ability to Save/Unsave to their Favorites

### Optional

 * [x] Show location in Google Maps

## GIF Walkthrough

![Walkthrough GIF](https://media.giphy.com/media/PiuVKPUcBD1Q2iEdK9/giphy.gif)


## Notes & shoutouts

This was an incredibly fun and innovative project done. We utilized a different approach to hit the API called graphQL, which eliminated the need for a serializer and adapter, just had to create graphQL files. The design is mostyl custom CSS and a bit of bootstrap for positioning. Shoutout to shane for providing the data examples to show how to utilize graphQL along with firebase. Also utilized is the ember-google-maps add on to utilize the google maps API. I really enjoyed working on this project, and is probably the most advanced project ive worked on as it is leveraging multiple APIs along with a live database (firebase) to store results per user. 

--------------------------------------------------------------------------------------------------------------------

# adding api keys

I have my API keys hidden, if you wish to pull and run this project you must create 2 files in the config folder, called firebase_config.js and googlemaps_config.js and add following code

``` 
 exports.config = {
        firebase: {
            apiKey: "api-key",
            authDomain: "wish-dish-favorites.firebaseapp.com",
            databaseURL: "https://wish-dish-favorites.firebaseio.com",
            projectId: "wish-dish-favorites",
            storageBucket: "wish-dish-favorites.appspot.com",
            messagingSenderId: "594740038507",
            appId: "1:594740038507:web:e928d2cfb82fdf780b9a2e"
        }
}
 ```

``` 
exports.config = {
    maps: {
        key: "api-key", // Using .env files in this example
        language: 'en',
        region: 'GB',
        protocol: 'https',
        version: '3.35',
        libraries: ['geometry', 'places'], // Optional libraries
        // client: undefined,
        // channel: undefined,
        // baseUrl: '//maps.googleapis.com/maps/api/js'
      }
}
 ```
# yelpAPI-APP

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd movie-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
