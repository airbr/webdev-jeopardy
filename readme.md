# [Live Hosting on Firebase](https://wdijeopardy.firebaseapp.com)

Quickstart from clone/download:
--
**From Terminal**

* 1. Clone Repository ``git clone https://github.com/airbr/WDI7-Jeopardy``
* 2. Change into the directory ``cd ./Project1-Jeopardy``
* 3. Turn on Audio (Optional... but highly reccomended!)
* 4. Open index.html in your web browser ``open public/index.html``
* 5. Enjoy!

**GUI**

* 1. Download ZIP 
* 2. Decompress folder
* 3. Find and open ``public/index.html`` with a modern web browser
* 4. Enjoy!

--
### WDI Jeopardy by Morgan Murrah - v1.5
This was a game created for Project 1 of WDI7 at General Assembly Atlanta and was my first application of HTML, CSS, Javscript and JQuery. I am adding bits and pieces to it since then.

### Screenshots:

![](wdi-jeopardy-v1.5-main.png)
![](wdi-jeopardy-v1.5-modal.png)

Credit to Dr Mike Hopper, Emily Reese, Andrea Airall and Chris Burgess for their assistance in production. Particularly Dr Hopper for assistance writing two key Javascript functions and Chris Burgess for re-writing one function to make a variable global that made this work.

### Current version: V1.5:

Added the Jeopardy font Korinna BT using a comprehensive font-face declaration:

```
@font-face {
  font-family: "Korinna BT";
    src: url('fonts/Korinna Bold BT.eot');
    src: url('fonts/Korinna Bold BTeot?#iefix') format("embedded-opentype"),
    url('fonts/Korinna Bold BT.woff') format("woff"),
    url('fonts/Korinna Bold BT.ttf') format("truetype"),
    url('fonts/Korinna Bold BT.svg#Korinna BT') format("svg");
}
```

#### Further development:

v1.6 should make this game properly responsive. Currently the titles of the question categories break from the table when sized down/ are not properly linked. I intend to do this with media queries.


#### History:

This project was created to meet the [spec defined for Project 1 in the course materials of the Web Development Immersive program](https://github.com/ATL-WDI-Curriculum/projects/blob/master/project1.md). [The corresponding Trello for this game is contained within](https://trello.com/b/FtyjyTlm/wdi-project-1-jeopardy-morgan-murrah). See the Trello for more detailed consideration of the games design and evidence of the games production.

#### Future develoment:

* Make the game competitive/two player
* Add a high-score table, or way of saving/sharing a score result


#### Technologies used in this game include:

 * HTML5
 * CSS3
 * Bootstrap 3.3.7
 * JQuery/Ajax

Resources referred to include:

* [Bootstrap Wells](http://www.w3schools.com/bootstrap/bootstrap_wells.asp)
* [Bootstrap Modal](http://www.w3schools.com/bootstrap/bootstrap_modal.asp)
* [Bootstrap Buttons](http://www.w3schools.com/bootstrap/bootstrap_buttons.asp)
* [W3Schools: How to create a modal box](http://www.w3schools.com/howto/howto_css_modals.asp)
* [JSON Howto](http://www.w3schools.com/json/json_eval.asp)
* [Bootstrap JS Modals documentation](https://getbootstrap.com/javascript/#modals)
* [jQuery API documentation](https://api.jquery.com/)







