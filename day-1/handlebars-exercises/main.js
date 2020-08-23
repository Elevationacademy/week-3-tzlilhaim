// ----------------------------------Learn----------------------------------

// Spot Check 1
const classData = {
  classmates: [
    { name: "That on gal", description: "Always has the ansswer" },
    { name: "The weird dude", description: "Quick with a smile" },
    { name: "Taylor", description: "Just Taylor" },
  ],
};

const render_sc1 = function () {
  const source = $("#class-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template(classData);
  $("#class-data").append(newHTML);
};

render_sc1();

// Spot Check 2
const menuData = {
  menu: [
    { name: "Google", link: "http://google.com", socialNetwork: false },
    { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
    { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
    { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
  ],
};

const render_sc2 = function () {
  const source = $("#menu-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template(menuData);
  $(".menu").append(newHTML);
};

render_sc2();

// Spot Check 3 (from codepan)
const foodsData = {
  foods: [
    { name: "Salad", price: 70 + " ILS", isChefChoice: false },
    { name: "Pasta", price: 85 + " ILS", isChefChoice: true },
    { name: "Salmon", price: 120 + " ILS", isChefChoice: true },
    { name: "Omlette", price: 65 + " ILS", isChefChoice: true },
  ],
};

const render_sc3 = function () {
  const source = $("#foods-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template(foodsData);
  $(".chef-choice").append(newHTML);
};

render_sc3();

// Spot Check 4
const data = {
  animals: ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"],
  languages: ["French", "Spanish", "Togolese", "Javascript", "Uruk"],
};

const render_sc4 = function () {
  // Animals
  const source = $("#data-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template(data);
  $("#data").append(newHTML);
};

render_sc4();
