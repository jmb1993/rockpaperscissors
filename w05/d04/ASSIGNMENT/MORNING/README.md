# Styling Forms

![test](http://fillmurray.com/102/103)

Forms are one of the most commonly seen and most important elements on the web. We need users to fill out and submit forms in order to gather data, make purchases, creates profiles, etc. For today's warmup, we are going to practice styling form elements. We want to keep our forms simple and clean so that users can easily fill them out.

## CSS Reset
As you may have noticed while trying to style a webpage in the past, browsers have default styles on many elements that may conflict with or override your own styles. We want to get rid of the default styles on all browsers (or at least try). Luckily, some awesome and benevolent people have already done the heavy lifting when it comes to CSS resets. For this activity, we are using Eric Meyer's `reset.css`, one of the most commonly used and trusted rest stylesheets. *Note: Eric himself has admitted that this reset is not 'perfect' and is meant to be customized according to developer needs*
Some other commons approaches to resets include...
  - [HTML5 Doctor CSS Reset](http://html5doctor.com/html-5-reset-stylesheet/)
  - [Normalize.css](http://necolas.github.io/normalize.css/)
    - Normalize doesn't reset all browser styles, but attempts to make them consistent and in line with modern standards.
  - [Universal Selector ‘*’ Reset](http://cssreset.com/scripts/universal-selector-css-reset/)
  - [Yahoo! (YUI 3) Reset CSS](http://cssreset.com/scripts/yahoo-css-reset-yui-3/)

To use the premade reset stylesheets, simply download or cut and past into a css file and link in your HTML.

## The Form Element
Our forms looks strange and are difficult to read if they take up the whole page.
  - Give the *form* a max-width, so it will never be bigger than a certain size on the page, but can still minimize when the window is smaller.
  - Set the left and right margins of your form to 'auto' to center it
  - Add padding and top and bottom margins

### Form Header
You may want to add a title or label to the entire form. The best way to do this is with a form header.
  - Make a div with the class of *form-header* right after the opening form tag.
  - Give your header a top, left and right margins of 0, and set a bottom margin (do you remember the shorthand for setting top and bottom and sides?)

### Form Groups
For easier styling, you can put your inputs and their labels into separate groups. For instance, the email input and the email label would be a separate group. Each group should be wrapped in a div with class *form-grp*.  
  - Give them zero top margin, but margin on the bottom and sides.

### Labels
A quick way to make your forms look much nicer is to set a display property of 'block' on your labels.
  - Give your labels margin on the bottom.

### Styling by Input Type
You may want to set a certain style on only one input type. The syntax for this is `input[type="input_type"]`. One of the most common uses of this is to set a different style on the submit button.
  - Refer to your text and email inputs in the CSS with the following selectors `input[type="text"]`, `input[type="email"]`
  - Give them a width of 100%
  - Give them some padding
  - Set a border and border-radius
  - Make sure to add placeholder text for your users

### Styling the submit button
We want our submit button to stand out so users can easily submit their form.
  - Select only the 'submit' input type
  - Give it a different background color
  - Add a subtle text-shadow for emphasis (don't go overboard!)
  - Set a transition property on the background-color
  - Make a hover pseudo class that changes the color slightly and changes the cursor to pointer

### Styling radio buttons
Default radio buttons look ugly and are difficult to click on, especially on smaller screens or for users with a touchscreen
  - Give your radio buttons a unique 'id' and give their labels a 'for' attribute that matches exactly
    - This will make it so you can click the labels to select instead of just the radio button
  - Set your input type of radio button to `display:none`
  - Put a class of 'radio' on your radio labels
  - Style them to look like grey buttons
  - Select 'hover' and 'checked' pseudo-classes on your radio labels and style them to stand out

### Styling check boxes
You can use the same idea to style your check boxes and make them look nicer and easier to press.
