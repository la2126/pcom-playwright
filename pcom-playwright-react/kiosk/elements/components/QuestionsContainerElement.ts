import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { ElementCollection } from "../../../pcom/ElementCollection";
import { OptionComponentElement } from ".";

export  class QuestionsContainerElement extends HtmlElement {

    optionComponentElement: ElementCollection<OptionComponentElement>;
    


    constructor(element: Locator) {
        super();
        this._element = element;
        this.optionComponentElement = new ElementCollection<OptionComponentElement>(element.locator('[data-testid^="option-"]'), OptionComponentElement);
    }
}







