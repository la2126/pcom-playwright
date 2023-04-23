import { Locator } from "@playwright/test";
import { number } from "prop-types";
import { HtmlElement } from "./atoms/HtmlElement";

export class ElementCollection<T extends HtmlElement>{

    _element:Locator;
    

    _new(element): T {
        return new this.testType(element);
    }
    
    constructor(element:Locator, private testType: new (element:Locator) => T){
        this._element = element;
    }

    nth(index: number):T{
        const locator = this._element.nth(index);
        if(locator){
            return this._new(locator);
        }
        return null;
    }

}