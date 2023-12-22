import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { IMyHeaderProps } from "./types";

@customElement("my-header")
export class MyHeader extends LitElement implements IMyHeaderProps {
  static styles = css`
    .title {
      color: red;
    }
  `;

  @property({ type: String })
  title = "This is a heading";

  render() {
    return html` <h1 class="title">${this.title}</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader;
  }
}
