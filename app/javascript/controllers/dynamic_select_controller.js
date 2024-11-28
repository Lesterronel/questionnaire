// app/assets/javascripts/controllers/dynamic_select_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["select", "choice", "long"]

  connect() {
    this.selected()
  }

  selected() {
    console.log(this.selectTarget.value);
    this.hideFields();
    switch (this.selectTarget.value) {
      case 'single_choice':
        console.log(this.choiceTarget);
        this.choiceTarget.removeAttribute('hidden');
        break;
      case 'multiple_choice':
        console.log(this.choiceTarget);
        this.choiceTarget.removeAttribute('hidden');
        break;
      case 'long_answer':
        console.log(this.longTarget);
        this.longTarget.removeAttribute('hidden');
        break;
    }
  }
  
  hideFields() {
    console.log("ronel hide fields");
    this.choiceTarget.setAttribute('hidden', true);
    this.longTarget.setAttribute('hidden', true);
  }
}