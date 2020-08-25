// Get array data from api to variable
function fetchArr(cb, func) {
  $.ajax({
    url: "https://randomuser.me/api/?results=10",
    success: function (response) {
      usersArr = response
      cb(usersArr, func)
    },
    error: (xhr, text, error) => alert(text),
  })
}

function printData(data) {
  console.log(data)
}

function passData(data, func = 0) {
  if (func) {
    func(data)
  }
}

const addUSer = function (data) {
  console.log(data)
  const source = $("#user-template").html()
  const template = Handlebars.compile(source)
  const newHTML = template(data)
  $("#data").append(newHTML)
}
fetchArr(passData, addUSer)
