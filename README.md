# fading-menu-and-panels
Demonstrates how to create a menu and panel pane which appear on either click or hover events.

### The HTML
The page has two main sections: a navigation section on the left and a main content section on the right.

The navigation section is then divided into the following elements:
- the hamburger menu, including the hidden content of this menu.
- the pane holding six sets of icons and the hidden panel with text that comes along with it.

The HTML file is commented to make identifying the different elements more easily.

### The CSS
The CSS is pretty straightforward for each of the elements and is commented where necessary.

### The JavaScript
There are three separate functions that take care of the interactivity.
- When the hamburger menu is clicked, the main menu either appears or disappears, depending on its current state.
- When the close button inside the main menu is clicked, the main menu disappears.
- When one of the icons is hovered over, the appropiate panel appears.

## [Take a look at the live working version of this demo](https://VincentKlijn.github.io/fading-menu-and-panels/)
Hover over any of the graphics on the left to see a pane appear.
Click the hamburger menu to open a main menu; then either click the hamburger again to close it, or click the close button inside the menu.
