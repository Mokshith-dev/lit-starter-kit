import { LitElement } from "lit";
import { IMyHeaderProps } from "./types";
export declare class MyHeader extends LitElement implements IMyHeaderProps {
    static styles: import("lit").CSSResult;
    title: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-header": MyHeader;
    }
}
