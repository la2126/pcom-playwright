import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { QuestionSlideElement } from "../components";

export  class UiAProductSearchElement extends HtmlElement {
    questionSlideElement: QuestionSlideElement;



    constructor(element: Locator) {
        super();
        this._element = element;
        this.questionSlideElement= new QuestionSlideElement(element.locator('.questionSlide'));
       

        
    }
}