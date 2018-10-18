import { XmlAttributeComponent, XmlComponent } from "../../../file/xml-components";
export declare type AlignmentOptions = "start" | "end" | "center" | "both" | "distribute" | "left" | "right";
export declare class AlignmentAttributes extends XmlAttributeComponent<{
    val: AlignmentOptions;
}> {
    protected xmlKeys: {
        val: string;
    };
}
export declare class Alignment extends XmlComponent {
    constructor(type: AlignmentOptions);
}
