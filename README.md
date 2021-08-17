## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
-span or div or p for displaying rules of the game
-An input with type='number' for entering the guess
-A button to submit the guess
-a span or div for displaying the number of remaining guesses
-a span or div for displaying the result of the guess (high/low)
-a span or div for displaying the result of the game (win/lose)
-STRETCH: reset button to let user play again
-STRETCH: a span or div to display total wins/losses
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
-correctAnswer the number the user is trying to guess
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
-guess button on click.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

