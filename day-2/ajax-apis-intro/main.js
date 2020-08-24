// ---------------------------Learn---------------------------
// Spot Check 1:
$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind",
  function (result) {
    console.log(result.items[0].volumeInfo)
  }
)

// Spot Check 2:
//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function (users) {
  //extract the geo data of the first user

  let lastUser = users[users.length - 1]
  console.log(lastUser.company.catchPhrase)
})

// Spot Check 3:
const usedData = function (data) {
  console.log(data)
}

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: usedData,
})

// ---------------------------Apply---------------------------
// Exercise 1:
const fetch_e1 = function (isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: (data) => console.log(data),
    error: () => console.log("sorry, an error occured. Try again later"),
  })
}

fetch_e1("9782806269171") //- The Little Prince: Book Analysis
fetch_e1("1440633908") //- Of Mice and Men by John Steinbeck
fetch_e1("9781945048470") //- The Alchemist by Paulo Coelho
fetch_e1("9780307417138") //- Hitchhiker's Guide to the Galaxy

// Exercise 2:
const fetch_e2 = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: (data) => console.log(data),
    error: () => console.log("sorry, an error occured. Try again later"),
  })
}

fetch_e2("isbn", 9789814561778) //- From Third World to First: The Singapore Story
fetch_e2("title", "How to Win Friends and Influence People") //- book by Dale Carnegie

// Exercise 3:
const fetch_e3 = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: (data) => {
      for (let item of data.items) {
        let title = item.volumeInfo.title
        let authors = item.volumeInfo.authors
        let getIsbn = () => {
          let isbnsArr = []
          for (let i of item.volumeInfo.industryIdentifiers) {
            isbnsArr.push(i.identifier)
          }
          return isbnsArr
        }
        console.log(
          "title: " + title + "| author/s: " + authors + "| ISBN: " + getIsbn()
        )
      }
    },
    error: (xhr, text, error) => alert(text),
  })
}

fetch_e3("isbn", 9789814561778) //- From Third World to First: The Singapore Story
fetch_e3("title", "How to Win Friends and Influence People") //- book by Dale Carnegie

//======================Extensions======================

// Exercise 4:
const renderGifToPage = (url, isFavorite) => {
  let btnTxt = "Add"
  let $gifsContainer = $("#search-result")

  if (isFavorite) {
    btnTxt = "Remove"
    $gifsContainer = $("#favorites")
  }
  $gifsContainer.append(
    `<div class="gif"><iframe src="${url}"></iframe><div class="add-gif"><button>${btnTxt}</button></div></div>`
  )
}

const fetchGiphy = function (
  queryValue,
  gifsCount,
  myApiKey = "8MaYvmfAQBrvUKsXPhiPWriSIOXVz6BR"
) {
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${queryValue}&api_key=${myApiKey}&limit=${gifsCount}`,
    success: (data) => {
      let embedURLs = data.data.map((gif) => gif.embed_url)
      for (let url of embedURLs) {
        renderGifToPage(url, 0)
      }
    },
    error: (xhr, text, error) => alert(text),
  })
}

// Exercise 5:
// Prevent manual insert to number input
$("[type='number']").keypress(function (evt) {
  evt.preventDefault()
})

// Searching gifs
$("#search-engine").on("click", "button", function () {
  $("#search-result").empty()
  const $input = $("#search-engine input:text")
  const $gifsCount = $("#search-engine input[type='number']")

  $input.val()
    ? fetchGiphy($input.val(), $gifsCount.val() ? $gifsCount.val() : 1)
    : alert("Please insert a keyword to search for gifs")

  $input.val(null)
  $gifsCount.val(1)
})

// Adding a gif to favorites
let favoriteGifs = []

const renderFavorites = function () {
  $("#favorites").empty()
  for (let url of favoriteGifs) {
    renderGifToPage(url, true)
  }
}

$("#search-result").on("click", "button", function () {
  const gifURL = $(this).closest(".gif").find("iframe").attr("src")
  favoriteGifs.push(gifURL)

  renderFavorites()
})

$("#favorites").on("click", "button", function () {
  const gifURL = $(this).closest(".gif").find("iframe").attr("src")
  favoriteGifs.slice(favoriteGifs.indexOf(gifURL), 1)

  renderFavorites()
})
