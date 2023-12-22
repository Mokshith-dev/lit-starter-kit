import { CSSResultArray, LitElement, css, html } from 'lit'
import { customElement, property } from "lit/decorators.js";

import { RenderTemplate } from '@maersk-global/mds-components-utils';
// styles
import { styles } from "./styles/index.styles";


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mc-c-notifications')
export class McCNotifications extends  RenderTemplate(LitElement) {
  
  @property()
  name = 'World'

  static get styles(): CSSResultArray {
    return styles;
  }


  render() {
    return html`
    <div class="mc-popover">
      <h1>This is the first version of notifications</h1>
      
      <slot></slot>
    </div>`
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mc-c-notifications': McCNotifications
  }
}
