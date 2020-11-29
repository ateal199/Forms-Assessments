window.onload = function () {
  console.log("hello")

  let item_list = []

  const form_el = document.getElementById("input_form")
  const input_el = document.getElementById("input_box")
  const list_parent_el = document.getElementById("item_list")

  //add submit event listener to form element
  form_el.addEventListener("submit", function (event) {

    //prevent page refresh
    event.preventDefault()

    //get value from input element
    let item = input_el.value
    console.log(item)

    //push it into your item list
    item_list.push(item);

    //render the new list
    render_list()

    //clear out the form field
    form_el.reset()

  })

  function render_list() {

    //empty previous content of the ol tag ( list_parent_el )
    list_parent_el.innerHTML = "";

    //get a list of html template elements using map method
    list_templates = item_list.map(function (item, index) {

      return `<li key="${index}">${item}</li>`
    })

    //append each item of these list templates as children of parent
    for (let template of list_templates) {
      list_parent_el.innerHTML += template
    }

  }
}