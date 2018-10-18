import { IXmlableObject, XmlComponent } from "../../../../../file/xml-components";
import { BorderStyle } from "../../../../styles";
export declare enum PageBorderDisplay {
    ALL_PAGES = "allPages",
    FIRST_PAGE = "firstPage",
    NOT_FIRST_PAGE = "notFirstPage"
}
export declare enum PageBorderOffsetFrom {
    PAGE = "page",
    TEXT = "text"
}
export declare enum PageBorderZOrder {
    BACK = "back",
    FRONT = "front"
}
export interface IPageBorderAttributes {
    display?: PageBorderDisplay;
    offsetFrom?: PageBorderOffsetFrom;
    zOrder?: PageBorderZOrder;
}
export interface IPageBorderConfiguration {
    style?: BorderStyle;
    size?: number;
    color?: string;
    space?: number;
}
export interface IPageBordersOptions {
    pageBorders?: IPageBorderAttributes;
    pageBorderTop?: IPageBorderConfiguration;
    pageBorderRight?: IPageBorderConfiguration;
    pageBorderBottom?: IPageBorderConfiguration;
    pageBorderLeft?: IPageBorderConfiguration;
}
export declare class PageBorders extends XmlComponent {
    constructor(options?: IPageBordersOptions);
    prepForXml(): IXmlableObject;
}
