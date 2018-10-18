import { XmlComponent } from "../../../file/xml-components";
export interface IIndentAttributesProperties {
    left?: number;
    hanging?: number;
    firstLine?: number;
    start?: number;
    end?: number;
}
export declare class Indent extends XmlComponent {
    constructor(attrs: IIndentAttributesProperties);
}
