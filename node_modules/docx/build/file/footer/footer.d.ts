import { XmlComponent } from "../../file/xml-components";
import { Paragraph } from "../paragraph";
import { Table } from "../table";
export declare class Footer extends XmlComponent {
    private readonly refId;
    constructor(referenceNumber: number);
    readonly ReferenceId: number;
    addParagraph(paragraph: Paragraph): Footer;
    createParagraph(text?: string): Paragraph;
    addTable(table: Table): void;
    createTable(rows: number, cols: number): Table;
}
