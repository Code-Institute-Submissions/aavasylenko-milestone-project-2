# To-Do List by Anastasiia Vasylenko
Stream-Two-Project: Interactive Frontend Development Milestone Project

This is a To-Do List Website designed for a user to compile and keep track of tasks the user plans to accomplish. Users can easily add new tasks and mark them off. The website is interactive and saves the tasks left to do even after the page is reloaded. 

## UX
This website is designed to be used by any individual who wants to be organized and keep track of his tasks in one convenient place where each task can be added with one simple click. 
The goal of my project design was to make it simple and user-friendly while providing functionality one would look for when creating his own to-do list. 

**User Story:**

> *As a student I want to keep a list of my tasks in one place and keep track of each one of them so I can make sure I accomplish all of them without overlooking anything.*

To help the above user achieve his goal, I designed my interactive website that lets a user easily add a new task to his list, mark it off when the task is completed, or delete the task if it's no longer needed.
My website uses local storage of the user's device to prevent losing the tasks data by reloading the page. Each task is saved in its own visually distinct field which prevents it from being overlooked.

> *As a software developer I have many tasks throughout the day that can add up as I'm going thorugh my day at work. I need a place where I could quickly input all my tasks and add them as I'm going, I want to be able to mark them off when I complete them or delete them if they are no longer relevant. But I would also like to know that if I accidentally closed the window with the list of my task, I can still see them just as I left them when I open the window again.

To help this user achieve his goal, on top of the above listed featured, I added a function to my website that accesses the local storage of his device and saves all the tasks added and/or marked off into two separate categories. When the user refreshes his page or closes the window and then reopens it, he can still see the tasks he typed in. He can manage his to-do list throughout the day, quickly and simply add the tasks or remove them and not worry about the tasks being lost. 

Both users were able to achieve their goals.

## Features 
### Existing Features
* The website has the functionality of choosing the background. The paintbrush button expands the menu to show the possible options of the background style once clicked on. 
  A user can, then, choose the theme he likes and change the background. The last recorded choice will be saved to Local Storage and the background will stay the same even after the page is reloaded.
* Each individual task has its own "Completed" and "Delete" button. "Completed" button marks off the task visually but does not remove it from the local storage.
  The tasks will only be deleted from the local storage if the "delete" button is clicked.
* The website will not allow the user to type in an empty string into the task field.
* All the buttons have hover effects to be more intuitive for the user.
* To-Do List has a filter to only view tasks that are completed or still in progress. The filter is created with "select" element that will show tailored to each software (iOS, Android, and desktop version).
* If the task entered is too long to be displayed on the screen, it will automatically get a vertical scroll option.

### Features Left to Implement 
* In the future, I would like to add an option to create subtasks for each "parent" task.
* I would also like to implement a cloud storage feature and allow a user to store his list in a cloud where he would be able to sign in from different devices.

## Technologies
1. HTML
2. CSS
3. Bootstrap (4.2.1)
4. Font Awesome
5. Java Script
6. JQuery (for the Paint Brush menu).

## Testing
The user was able to achieve his goal by adding his tasks into the list, marking them off once completed, reloading the page, and having the uncompleted tasks left on the screen.

Some manual testing has been done to ensure the website works well:
1. Input form:
    1. Try to submit the empty form and verify that an alert message appears.
    2. Try to submit a long task and verify that the text is displayed correctly wrapped within the field and has a vertical scroll option if needed.
 
2. To-Do List:
    1. Filter tasks and verify that correct tasks are being displayed for "Completed", "In Progress" and "All" options.
    
3. Background:
    1. Try to change the background back and forth between different options and verify that the function behaves correctly displaying the correct background.
    2. After making a background choice, reload the page and verify that the same background is still on the screen.
   
4. Local Storage:
    1. Add a few tasks, mark some of them off as "Completed", refresh the page and verify that these same tasks are still on the screen - completed and uncompleted respectivly. Tasks that were marked as "Completed" will move to the top of the list evety rime the page is refreshed

The website is written for different screen versions with some elements hidden or re-aligned on smaller screens to ensure positive UX and to not overwhelm the user with the number of elements on the screen. All versions for different screen sizes have been tested in Desktop Versions
(Google Chrome, Safari, Mozilla), Tablet Versions (iPad, iPad Pro), and Mobile Versions (iPhone X, iPhone 6, iPhone 6/7/8 Plus, and Samsung Galaxy).

A bug was found at first when I tried to submit a long task into the form in mobile version testing. The text went outside the field.
To fix it I added `<overflow-x>` and `<overflow-y>` properties to style.css file and set them accordingly.

Another bug was found with `<background-attachment>` property. The background image would expand along with the list getting longer. To make the background image fixed regardless of the To-Do list length
I used a property `<fixed, scroll>` in both style.css file and app.js files. I used both `<fixed>` and `<scroll>` values to make it readable by Safari as well as Chrome and Mozilla browser. 

## Deployment

My website was deployed directly from the master branch via GitHub platform. To do this I followed these steps:
* Once the code is commited to the repository open this [repository](https://github.com/aavasylenko/milestone-project-2).
* In "Settings" go to "GitHub Pages" section.
* Choose "Master Branch" from the dropdown "Sources" window.
* After a few minutes reqfresh the page and see this message "Your site is published at https://aavasylenko.github.io/milestone-project-2/"
* The website is now available at this [link](https://aavasylenko.github.io/milestone-project-2/)

To run it locally:
* Open this [repository](https://github.com/aavasylenko/milestone-project-2).
* Click on "Clone" and choose whether you want to "Open in Desktop", "Download ZIP" version of it or just copy the URL.
* If you copied the URL - go to your preferred code editor and create a new environment.
* In terminal paste `<git clone https://github.com/aavasylenko/milestone-project-2.git>`
* You can now run it locally.

## Credits
### Contents

### Media 

All the background images were taken from https://www.pexels.com/:
[Jungle](https://www.pexels.com/photo/brown-wooden-bridge-beside-green-leafy-trees-726298/)
[Ocean](https://www.pexels.com/photo/bird-s-eye-view-of-sea-water-1456291/)
[Mountain](https://www.pexels.com/photo/adventure-calm-clouds-dawn-414171/)
[Desert](https://www.pexels.com/photo/green-grasses-on-sahara-desert-1001435/)

### Acknowledgements

All the code was inspired by previous lessons in Code Institute.
