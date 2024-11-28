// app/javascript/controllers/nested_form_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["add_item", "template", "template_answer"]

  add_association(event) {
    let new_date =  new Date().valueOf()
    event.preventDefault()  
    let content = this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD_QUESTION/g, new_date)
    this.add_itemTarget.insertAdjacentHTML('beforebegin', content)
  }

  add_association_answer(event) {
    let new_date =  new Date().valueOf()
    event.preventDefault()  
    let content = this.template_answerTarget.innerHTML.replace(/TEMPLATE_RECORD_ANSWER/g, new_date)
    this.add_itemTarget.insertAdjacentHTML('beforebegin', content)
  }

  remove_association(event) {
    event.preventDefault()
    let item = event.target.closest(".nested-fields")
    item.querySelector("input[name*='_destroy']").value = 1
    item.style.display = 'none'
  }
}