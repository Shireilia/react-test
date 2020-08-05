# react-test

Hello readers, and welcome to my first project with react. I'm comming from the Angular world, so, not everything will be optimized or correct in the React world, but i'm always happy to learn more, so don't hesitate to give me your thoughts.

This README will give you an idea on how i see things and build them. This is written so that we can discuss further later.

## General thoughts

First, the idea of application is to have an app to list and rate movies. This is divided in three pages, so i'll be looking to use a router to manage those three pages, and to simply manage navigation to a single resource page (the movie description in this case). I've picked react router for this, there may be more solutions, but since i'm a n00b with react i don't know them (yet).

In my experiences, apps all have some parts that are reusable and some that aren't. Mostly, the structure of the app (that we often call pages) isn't and so, lives in it's separate folder. All components that can be reused lives in the components folder, but if there were other projects using them, i would consider create a library with NX to share it accross projects. At the moment, that at least signify they are reusable inside (or later, outside) the project.

Services are pieces of code that can be used in multiple places in the application, can be simple function like converters or more complex containers with methods and props, that do not need to display data. This is entierly debatable, and come from my Angular way of seeing things.

Models, well, type things with Typescript, and don't use any (or very exceptionnal cases, but yikes. Yes, i did use them here, but i should throw them away asap.). I like to have my business domain clearly defined, and the translation of my domain mostly lives in the model.

## Responsive

One of the constraint is to develop a responsive app, so for that i'll be using flexbox. There are other solutions for this like grids, but after some time playing with grids on old projects, my personnal taste goes for flexbox.

## Data

Regarding data management : i could use Redux, but for this particular case, i find it a bit overkill, since it generates a lot of boilerplate (in my experience with NGRX), and is not a strict necessity here. However, the pattern is good IMO, and would use in other cases where the app complexity grows.

## Graphics

I went really minimal there, because i have a lot more to learn before going serious with this. I did however implement a bit of material-ui to test out the integration and see how it works (when working with Angular, i mostly use Angular Material and i'm curious to see how Material works with React).
