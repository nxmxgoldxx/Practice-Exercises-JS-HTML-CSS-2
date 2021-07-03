// change the background color of the footer to #d7ddf3
var footer = document.querySelector(".contact");
// console.log(background)

footer.style.backgroundColor = "#d7ddf3";
// console.log(footer);

var tagline = document.querySelector(".tagline");
tagline.innerHTML = `We really are starting to understand this,<span class="highlight"> now our salary goes up now</span>.`;

var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
// console.log(address);

//Emphasize the words "every day" in the contact section

var everyDay = document.querySelector("h3");
everyDay.innerHTML = "We are here for you <em>every day</em> of the week!";
// console.log(everyDay);

//change color of instagram and facebook icons
var instagram = document.querySelector(".fa-instagram");
instagram.style.color = "#d45bb9";

var facebook = document.querySelector(".fa-facebook");
facebook.style.color = "#6a99b5";

// Apply border to footer and change border color

var openingHours = document.querySelector(".contact p");
openingHours.style.border = "1px, solid #d45bb9";

// Add padding to opening hours paragraph
openingHours.style.padding = "1em";
