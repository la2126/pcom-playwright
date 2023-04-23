import { Locator } from "@playwright/test";
import { HeadingElement } from "../../../pcom/atoms/HeadingElement";
import { HtmlElement } from "../../../pcom/atoms/HtmlElement";
import { RadioButtonElement } from "../../../pcom/atoms/RadioButtonElement";
import { TextElement } from "../../../pcom/atoms/TextElement";
import { ElementCollection } from "../../../pcom/ElementCollection";

export class RadioButtonContainerElement extends HtmlElement {

    heading: HeadingElement;
    radioButtonList: ElementCollection<RadioButtonElement>;
    optionOneNotification: TextElement;
    optionTwoNotification: TextElement;



    constructor(element: Locator) {
        super();
        this._element = element;
        this.heading = new HeadingElement(element.locator('.container-text'));
        this.radioButtonList = new ElementCollection<RadioButtonElement>(element.locator('[type="radio"]'), RadioButtonElement);
        this.optionOneNotification = new TextElement(element.getByText('option1 clicked'));
        this.optionTwoNotification = new TextElement(element.getByText('option2 clicked'));
    }


}