
# Quizzifi

In two days, as a pair, we created a quiz making app that would pull sets of questions and answers from a third party API.

## Deployment

To view this project, please click the following link.

https://quizzifi.netlify.app/
## Tech Stack

**Client:** JavaScript, React, Axios, CSS, SCSS, React Router Dom

**Development Tools:** Visual Studio Code, Insomnia, Yarn, Git & GitHub, Google Chrome dev tools, Zoom, Slack, Netlify
## Planning

We initially did some searching for third party APIs to use for our project and discovered the Will Fry quiz API. Alliteration is always appealing.

We wireframed out how we wanted the page to look and mapped out what requests would be necessary to pull wanted information. 

We pair coded throughout the build, taking it in turns sharing screens and writing code. This really helped ensure that we both fully understood every element of our app.

Insomnia was utilised to test routes and ensure we were receiving the correct information.


## Build

**Home**

We wanted the home page to display a single question with the answer hidden & include a little timer to indicate when it would switch to a new one.

![Home page](https://i.postimg.cc/Vsn9bK6S/Screenshot-2022-04-11-at-23-13-36.png)

We used an axios request to pull a single question from the database.

![Home code 1](https://i.postimg.cc/pXvfQKhs/Screenshot-2022-04-11-at-23-13-52.png)

This function sets it to send a new request and update the Home Page with a new question. We also wanted to have the timer come in to count down only the final 10 seconds.

![Home code 2](https://i.postimg.cc/wjTDZHkJ/Screenshot-2022-04-11-at-23-14-03.png)

**Give Me Knowledge**

This page sends a request for a larger number of questions and displays them in a list with filters to change how many questions are displayed and to sort by categories.

![List page](https://i.postimg.cc/9MVmgXdH/Screenshot-2022-04-11-at-23-20-09.png)

We used an axios request to get 50 questions & their answers, then used another function to filter through and create a filter for the categories.

![List code 1](https://i.postimg.cc/RFRMkrd6/Screenshot-2022-04-11-at-23-20-22.png)

We used a function to change how many questions were displayed depending on the filter selection.

![List code 2](https://i.postimg.cc/SRxyqZ1Z/Screenshot-2022-04-11-at-23-20-43.png)


## Challenges

The Will Fry API was a little awkward to use as he changed the routes for the API halfway through the project which didn't help!

We had a fair bit of difficulty initially with trying to remove duplicate questions from the API in the larger volume requests.

## Wins

We were quite aligned in what we wanted on screen which led to a smooth plan and build as we weren't butting heads on everything.

## Bugs

The API claimed that it did not have any duplicates but this was not the case when interacting with it.

## Key Learnings

This was my first experience pair coding in a project & fortunately Ryan and I had quite similar ideas of what we wanted and how it should look.

Make sure you research your API! There were certainly better and more versatile options around but we were swayed by the name.
