// ==UserScript==
// @name       Explain XKCD
// @copyright  2014, Simon Zou
// ==/UserScript==

var comicID = window.location.pathname;
comicID = comicID.substring(0, comicID.length - 1); // chopping off a '/' at the end of the pathname
var listitem = '<li><a target="_blank" href="http://www.explainxkcd.com/wiki/index.php' + comicID + '">I don\'t get it...</a></li>';
var comicNav = document.getElementsByClassName("comicNav");
comicNav[0].innerHTML += listitem;
comicNav[1].innerHTML += listitem;