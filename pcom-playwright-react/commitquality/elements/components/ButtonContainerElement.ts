import { Locator } from "@playwright/test";
import { ButtonElement } from "../../../pcom/atoms/ButtonElement";
import { HeadingElement } from "../../../pcom/atoms/HeadingElement";
import { HtmlElement } from "../../../pcom/atoms/HtmlElement";
import { RadioButtonElement } from "../../../pcom/atoms/RadioButtonElement";
import { TextElement } from "../../../pcom/atoms/TextElement";

export  class ButtonContainerElement extends HtmlElement {

    heading:HeadingElement;
    basicClick: ButtonElement;
    basicClickNotification: TextElement;
    optionOne: RadioButtonElement;
    optionOneNotification: TextElement;


    constructor(element: Locator) {
        super();
        this._element = element;
        this.heading = new HeadingElement(element.getByRole('heading', { name: 'Buttons', exact: true }));
        this.basicClick = new ButtonElement(element.getByTestId("basic-click"));
        this.basicClickNotification = new TextElement(element.getByText("Button clicked"));
    }

}