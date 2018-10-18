let docx = require('docx');
let fs = require('fs');


exports.html = function (data, fileLocation) {
    fs.writeFile(fileLocation + ".html", '<div style="color: blue;">' + JSON.stringify(data) + '</div>', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

// https://docx.js.org/#/
exports.doc = function (data, fileLocation) {
    let doc = new docx.Document();
    let paragraph = new docx.Paragraph(JSON.stringify(data));
    doc.addParagraph(paragraph);

    let exp = new docx.Packer();
    exp.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(fileLocation + ".docx", buffer);
    })
}