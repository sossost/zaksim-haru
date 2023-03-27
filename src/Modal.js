class Modal {
  constructor() {
    this.modalTemplateEl = document.getElementById("modal_template");
  }

  /* Template 태그에 있는 요소들을 가져옴 */

  show() {
    console.log(this.hidemodalTemplateEl.content);
    const modalElements = document.importNode(
      this.modalTemplateEl.content,
      true
    );
    /* 상수에 modalTemplateEl의 document fragment를 자식까지 포함해서 복제 */

    this.modalElement = modalElements.querySelector(".jaksim_today_modal");
    this.backdropElement = modalElements.querySelector(".backdrop");
    /* 모달과 백드롭 엘리먼트를 각각 this.엘리먼트들에게 저장 */

    document.body.insertAdjacentElement("afterbegin", this.modalElement);
    document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    /* body 첫번째 자식으로 모달과 백드롭을 삽입 */
  }

  hide() {
    document.body.removeChild(this.modalElement);
    document.body.removeChild(this.backdropElement);
    this.modalElement = null;
    this.backdropElement = null;

    /* body안의 모달과 백드롭 엘리먼트들을 제거 그 후 this.엘리먼트들 초기화 */
  }
}
