# RPSLS - The Ultimate Showdown

[View the live project here.](https://deanburke.github.io/RPSLS-TUS/)

![Screeshot of the site on Am I repsonsive](./assets/images/am-i-responsive.jpg)

Welcome to RPSLS - The Ultimate Showdown, the premium online destination for all things Rock-Paper-Scissors-Lizard-Spock. Our website is dedicated to the classic hand gesture game that has entertained millions around the world.

With easy-to-use rules, RPSLS offers a fresh take on the game you love! So what are you waiting for? Join us now for the ultimate showdown!

---

# User Experience (US)

This website is designed to get the user as quick into the game as possible. With the rules visibly at and to cater to anyone new to this game made popular by the hit tv show 'The Big Bang Theory'.

# Design

## Wireframes

Wireframes were created for the site with  [Wireframe.cc](https://wireframe.cc/)

![Screenshot of website as desktop view on Wireframe.cc](./assets/images/wireframe-desktop.jpg)
![Screenshot of website as mobile view on Wireframe.cc](./assets/images/wireframe-mobile.jpg)

Wireframes were done for both a desktop view and mobile view.

## Colour Scheme

Neutral colours were chosen when considering the color palette to keep it user friendly on firs impressions.

Colour palette was created using:

* [Colormind](http://colormind.io/)

 ![Screenshot of colour palette done on colormind.io](./assets/images/color-scheme.jpg)

 ## Typography

 Anton was chosen from [Google Fonts](https://fonts.google.com/), this was with idea of imitating the Impact font on 'The Big Bang Theory' logo.

  ![Screenshot of Anton font from Google fonts](./assets/images/typography-anton.jpg)

  <br>

# Features

## Favicon

A favicon was implented with the logo used for the website, this was created with [Favicon.io](https://favicon.io/)

  ![Screenshot of favicon](./assets/images/favicon.jpg)

## Header with logo

Featured at the top page, the name of the website along with a logo, that rotates on load up. 

  ![Screenshot of header with logo](./assets/images/header-with-logo.jpg)

<br>

## Game Area

* Featured at the center of the page to direct user's attention to the game on entry to the website
* All buttons labeled with corresponding hand gesture, along with icons of said gestures obtained through [Font Awesome!](https://fontawesome.com/)

  ![Screenshot of main game area](./assets/images/game-area.jpg)

* Each button was given styling to let the user know which button they were hovering over. Along with a change of color when the user select the hand they are going to play that round. 

  ![Screenshot of button hover and select](./assets/images/button-hover-select.jpg)

<br>

## Game Information Area

The game information area is located just beneath the game itself. Which itself has multiple features. 

* Located on the left and center is the user's current score and life count. 

  ![Screenshot of user score and lives](./assets/images/score-lives.jpg)

* Located on the right is the rules button, which deploys a pop up model of all the information the user need to understand and get straight into some games.

  ![Screenshot of rules button](./assets/images/rules-button.jpg)
  ![Screenshot of rules popup](./assets/images/rules-popup.jpg)

<br>

## Gameplay

* The game starts as soon as the user selects their first hand gesture, the computer will then randomly choose their selection and a winner is determined.
* If the user wins, they will get an alert notification on their victory (along with letting you know what the computer's choice was) and the score will increase by 1, as pictured below. 

  ![Screenshot of alert win](./assets/images/alert-win.jpg)

  ![Screenshot of score increase](./assets/images/score-win.jpg)

* If the user loses, they will get an alert notification of their loss (along with letting you know what the computer's choice was) and the user's life count will decrease by one, as pictured below. 

  ![Screenshot of alert loss](./assets/images/alert-loss.jpg)

  ![Screenshot of life count decrease](./assets/images/lives-loss.jpg)

* If the user and the computer select the same hand gesture then the result of the round is a draw and you go again!

  ![Screenshot of alert draw](./assets/images/alert-draw.jpg)

* Like everything, you're luck must run out at some point! When the user's life count hits zero, they will get an alert informing them and encouragement to try again and beat their score!

  ![Screenshot of game reset](./assets/images/alert-reset.jpg)

<br>

## Footer

*  The footer of the website is designed to be minimalistic and includes a clickable link for my LinkedIn page under 'Dean Burke'.

  ![Screenshot of footer](./assets/images/footer.jpg)


## Future Features
 
 * High score counter
 * Computer AI - If the user continues to choose the same hand gesture(or chooses it 4 times out of 5 etc), the computer recognizes this and will adjust their move.

 <br>

 # Testing

 There was a number of different tests done to ensure that the website was working as it should:

* The website was tested on a number of different browsers:
    * Windows
        * Firefox on Windows 10 Pro
        * Chrome on Windows 10 Pro
    * Android
        * Chrome OnePlus 10
        * Chrome Samsung Galaxy S22
    * Apple iOS
        * Safari iPhone SE
* All features were tested as they were implemented such as spinning logo, pop out modal for rules section and then as each part of the game itself was created in JavaScript.
* Once I had worked on the responsiveness of the website the layout of both pages were tested in Google Dev Tools, on a 26 inch laptop screen, on a Samsung Galaxy Tab S8 (11 inch display) and on a OnePlus 10.
* I used both [W3C Validator](https://validator.w3.org/#validate_by_input) and [Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) to test my code to check for mistakes or errors.
* I used lighthouse to improve accessibility and perfomance.
* I used [JSHint](https://jshint.com/) to check my JavaScript code and to check for warnings or game breaking errors.

<br>

## Bugs

**Solved Bugs**

* When deploying my website, I realized the spinning logo was not showing, resulting in the ALT text displaying.
  * When looking at my code in my index.html file it was incorrectly showing the below.
  
    ![Screenshot of logo bug](./assets/images/logo-bug.jpg)
  * I had incorrectly place a slash at the start so it wasn't reading the directory on GitHub.
* When testing my code on [W3C Validator](https://validator.w3.org/#validate_by_input), I realized I had incorrectly play `<p>` tags inside of my `<i>` 
  * I adjuested this throughout my code in the Game Area, and then subsequently adjusted all the relevant CSS code.
* When initially creating my answers object in JavaScript code, as seen below.

  ![Screenshot of answers bug](./assets/images/js-answers-bug.jpg)

  * I incorrectly forgot to place commas, after each individual errors, thus incurring errors when I got further into my coding fo the game.

**Unfixed Bugs**

No unfixed bugs.

<br>

# Validating Testing

* HTML
    * No errors were returned when running my final test of [W3C Validator](https://validator.w3.org/#validate_by_input)
* CSS
    * No errors were returned when running my final test of [Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
* JavaScript
    * No errors were returned when running my final test of [JSHint](https://jshint.com/), The following warnings appeared, all relating to variations of  **'(use 'esversion: 6') or Mozilla JS extensions (use moz)'** <br>
    ![Screenshot of JSHint results](./assets/images/jshint-results.jpg) 
* Accessibility
    * Using lighthouse in Chrome Dev Tools, I confirmed that colors and fonts were readable against backgrounds. Along with Meta description and keywords added <br>
     ![Screenshot of Lighthouse results](./assets/images/lighthouse-results.jpg)

<br>

# Deployment

The site was deployed to GitHub pages. The following steps were used:

* Go to respositiory
* Click the Settings tab
* On the left hand column, click Pages under code and automation
* Under build and deployment, in the source box, ensure the 'Deploy from a branch' is selected.
* Then select main under the branch and click save <br>
![Screenshot of Deployment Build and Deployment section](./assets/images/deployment.jpg)
* It may take a few minutes, but when the page has been created you will see the following message. <br>
![Screenshot of Deployment live](./assets/images/deployment-live.jpg)

<br>

# Credits

* I used code I had learned from the love math project.
* I used [W3 Schools](https://www.w3schools.com/) for help with regards to the pop up modal for my rules, adding a button pressed animation and the spinning logo image.
    * This [article](https://www.w3schools.com/howto/howto_css_modals.asp#gsc.tab=0) for help with my rules popup.
    * This [article](https://www.w3schools.com/css/css3_buttons.asp) for help with the button pressed animation.
    * This [article](https://www.w3schools.com/css/css3_animations.asp) for help with the spinning logo animation.
* I also used the following [YouTube](https://www.w3schools.com/) video for additional help with the spining logo animation.
    * This [video](https://www.youtube.com/watch?v=IcnonhBM-SE) from Code Boxx









