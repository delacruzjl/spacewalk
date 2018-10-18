import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IBookmarkStartAttributesProperties {
    id: string;
    name: string;
}
export declare class BookmarkStartAttributes extends XmlAttributeComponent<IBookmarkStartAttributesProperties> {
    protected xmlKeys: {
        id: string;
        name: string;
    };
}
export interface IBookmarkEndAttributesProperties {
    id: string;
}
export declare class BookmarkEndAttributes extends XmlAttributeComponent<IBookmarkEndAttributesProperties> {
    protected xmlKeys: {
        id: string;
    };
}
