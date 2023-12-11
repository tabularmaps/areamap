import { makeGrids } from "./util.js";

export class TabularMap extends HTMLElement {
  constructor() {
    super();
    const url = this.getAttribute("src");
    if (url) {
      this.show(url);
    } else {
      const data = this.textContent;
      this.innerHTML = "";
      this.appendChild(makeGrids(data, " "));
    }
  }
  async show(url) {
    const data = await (await fetch(url)).text();
    this.appendChild(makeGrids(data, "\t"));
  }
};

customElements.define("tabular-map", TabularMap);
