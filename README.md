# About

SelectNav.js is a JavaScript plugin that lets you convert your website navigation into a select drop-down menu. Used together with media queries it helps you to create a space saving, responsive navigation for small screen devices.

Inspired by TinyNav.js, it was rewritten from scratch to become jQuery independent and customizable.

# Features

* Independent - no external library or other dependecies
* Ligthweight - only 1.5KB minified and 0.8KB minified+gziped
* Customizable - to make it suit your needs
* Compatible - tested with IE 6+, Firefox 3.6+, Chrome 4+, Safari 3+, Mobile Safari iOS 3.2+, Android 2.3+ Browser, Opera Mobile, Opera Mini.


# Usage

## HTML structure

```html
<ul id="nav">
<li><a href="homepage.html">Homepage</a></li>
<li><a href="about.html" class="active">About us</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>
``

Selectnav.js works with all navigation in form of ul and li lists that follow the example above.

The id property will be later passed to the JavaScript function.

Do you have nested lists in your menu? Not a problem - just make sure they are proprerly structured!

## CSS

``css
/* default style */
.purenav { display: none; }

/* small screen */
@media screen and (max-width: 600px) {
  .js #nav { display: none; }
  .js .purenav { display: block; }
}
``

SelectNav.js adds a js class to the html element. Thanks to this, when JavaScript is disabled the default navigation will be visible.

## JavaScript

```js
<script src="purenav.min.js"></script>
<script>purenav('nav'); </script>
``

The script must be fired after the the DOM is ready. You can achieve this either by putting those two lines at the bottom of your page, either, what is recommended, by wrapping them in a domReady function.

Because the script relays on @media property of CSS3, it is highly recommended obligatory to use it together with a media query polyfill. If you haven't included it yet into your design, don't wait a second - download it right way and enjoy a responsive layout on IE 6-8 and some older mobile browsers.

## Options...

The purenav function takes as the second argument a key-value list of the following optional parameters:

activeclass string - contains the name of the active class. SelectNav.js will mark the correponding element with "selected" attribute. Change to any other string or to false if you want to disable this feature. Default: 'active'
autoselect boolean - instead of explicitly setting an active class, you can let SelectNav.js to automatically determine the active element. Default: true
nested boolean - SelectNav.js can handle multi-level, nested menus. Set this to false if you want only the uppermost level of the navigation to appear in the dropdown menu.
indent char - used together with nested attribute, it lets you specify the indent symbol. Default: →
label string - set a label that will be the first element of the drop-down menu. Default: - Navigation -


# Demos

