import { Controller } from "@hotwired/stimulus";
import { Modal } from "bootstrap";

// Connects to data-controller="modal"
export default class extends Controller {
  // `connect()`はStimulusのライフサイクルコールバックの1つ
  // コントローラーがHTML要素にアタッチされた時（=HTML要素が画面に表示された時）に実行される
  // vueのmountedみたいなやつか
  connect() {
    this.modal = new Modal(this.element);
    this.modal.show();
  }

  close(event) {
    if (event.detail.success) {
      this.modal.hide();
    }
  }
}
