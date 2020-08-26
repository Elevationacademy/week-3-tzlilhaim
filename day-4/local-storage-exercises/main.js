// --------------------------Learn--------------------------
// Set item & Get item
/* 
ocalStorage.setItem("name", "Kyo")
console.log(localStorage.getItem("name"))

// Spot Check 1:
let userStorage = {
  darkMode: true,
  showSideNav: false,
  defaultResultCount: 9,
  latestMarks: {
    sectionA: 92,
    sectionB: 11,
  },
  cart: [
    { id: 3112, count: 2 },
    { id: 812, count: 16 },
  ],
}

//localStorage.userStorage = JSON.stringify(userStorage)
let data = JSON.parse(localStorage.userStorage || "[]")
console.log(data)
*/

// --------------------------Apply--------------------------
// Exercises:

const wisdomArr = []

const pushWisdomToLocalStorage = function () {
  localStorage.clear()
  localStorage.setItem("wisdom", JSON.stringify(wisdomArr))
}

const InputAlert = function () {
  const _$input = $("#enter-wisdom>input")
  const _$icon = $("#enter-wisdom>i")
  add = () => {
    _$input.addClass("alerted")
    _$icon.addClass("alerted")
  }
  remove = () => {
    _$input.removeClass("alerted")
    _$icon.removeClass("alerted")
  }

  return { add, remove }
}

const renderWisdomWords = function (wisdomWords = wisdomArr) {
  const source = $("#text-template").html()
  const template = Handlebars.compile(source)
  const newHTML = template({ data: wisdomWords })
  if (wisdomWords === wisdomArr) {
    $("#wisdom").empty()
  }
  $("#wisdom").append(newHTML)
}

$("#submit").on("click", function () {
  const $input = $("#enter-wisdom>input")
  if ($input.val()) {
    const newWords = { text: $input.val() }
    wisdomArr.push(newWords)
    if (!(wisdomArr.length % 2)) {
      pushWisdomToLocalStorage(newWords)
      renderWisdomWords()
    } else {
      renderWisdomWords([newWords])
    }
  } else {
    InputAlert().add()
    setTimeout(function () {
      InputAlert().remove()
    }, 3000)
  }
  $input.val(null)
})

$("#clear-data").on("click",function(){
    localStorage.getItem("wisdom") ? localStorage.removeItem("wisdom"): null
    renderWisdomWords()
})

$("#wisdom").on("click", ".delete",function(){
    const wisdomeItem = $(this).closest(".wisdom-item")
    wisdomArr.splice(wisdomArr.indexOf(wisdomArr.find(i=>i.text === wisdomeItem.innerHTML),1))
    wisdomeItem.remove()
})

const wisdomData = JSON.parse(localStorage.wisdom || "[]")
wisdomData === "[]" ? null : renderWisdomWords(wisdomData)
