import { Locator } from "@playwright/test";
import { HtmlElement } from "../../../pcom/atoms";
import { ElementCollection } from "../../../pcom/ElementCollection";
import { QuestionsContainerElement, ProductsResultsElement } from "./";

export  class QuestionSlideElement extends HtmlElement {

    questionsContainerElement: ElementCollection<QuestionsContainerElement>;
    productsResultsElement: ProductsResultsElement;
    
    constructor(element: Locator) {
        super();
        this._element = element;
        this.questionsContainerElement = new ElementCollection<QuestionsContainerElement>(element.locator('.questions-container'), QuestionsContainerElement);
        this.productsResultsElement = new ProductsResultsElement(element.locator('.ProductsResults'));
    }
}








