# CookBook

## Overview
This project is a social media platform centered around sharing food you have cooked. In this initial iteration of Cookbook there is full RESTful architecture and ability to CRUD data as a user. Users login with Google's OAuth and their avatar and username is displayed appropriately throughout the app. I stress that this is only the first iteration of this application. In future iterations I plan to greatly increase mobile functionality and maybe even make it an app. I will utilize technologies that I have not learned yet like REACT and AWS databases- which has held me from implementing a pretty key functionality: the ability for users to upload images. So I decided I would practice implementing an API and use the Open AI API to generate images of food based off the users description. This is definitely a cool and entertaining feature, but generally the food looks at best a little weird and at worst nauseating. So for now the image generation is a fun little feature but definitely not one that will be sticking around. 

## App Walkthrough
Below are screenshots of CookBook, walking through some of the features. 


![Imgur](https://imgur.com/BjVkOfS)
New users will load onto this homepage where before logging in they can view the chronological feed of posts. No other features are available until they login. 

![Imgur](https://imgur.com/Vpa2pg2)
Once using Google's OAuth to login the user will be shown the homepage with the same feed but updated nav bar options. They can create a post, view their profile, find other user profiles, or logout. 

![Imgur](https://imgur.com/UbmWE2t)
![Imgur](https://imgur.com/Q5YBdHG)
When SEE DETAILS on a post is clicked a page showing the user, description, like/unlike buttons, comments, a form to add new comments and a delete button that appears when the post being viewed was created by the viewing user. A user can also view the poster's profile by clicking on their name at the top. 

![Imgur](https://imgur.com/foy82k8)
This shows a user's profile page which consists of their username and avatar at the top and a collection of pictures of their posts that once being clicked will bring you to the post's show page. 

![Imgur](https://imgur.com/Rairq9N)
This is the page a user is shown to create a post. It is pretty bare right now because the only data we need the user to enter is the image description, which will then be used to generate an image. 

![Imgur](https://imgur.com/IYNdpky)
This is the search page where a user can search for another user and any matching results will be shown. When clicked, the result will take the user to the searched profile page. 


#### Technologies Used
> This project used node.js, mongoDB, express, ejs, and css technologies.
>
> APIs used: Google OAuth and Open AI Dall-E image generation


## Getting Started
To view the site go here. 

Some notes:
- Generating images usually takes a few seconds so be patient when creating a post. 
- Images will be deleted after 2 hours (Open AI policy, trying to find work around).
- Must have a Google account (Gmail) to login.


## What's next?
Ontop of the future plans touched on in the overview, some features I would love to add are:
- Following or subscribing capabilities
- Feed algorithm based off followers and interest
- Post search based off hashtag type system
- Capability to share posts to other social media sites
- User image uploading functionality (obviously)
- and more...



