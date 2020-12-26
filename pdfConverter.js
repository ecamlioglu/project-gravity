
const markdownEditor = document.querySelector(".markdownEditor");
const markdownPreview = document.querySelector(".markdownPreview");
//const converter = new showdown.Converter();
//import markdownpdf from "./node_modules/markdown-pdf/bin/markdown-pdf.js";

const mdConverter = new showdown.Converter();

const loadFileInToTextarea = value => {
    const markdownForHtml = mdConverter.makeHtml(value);
    markdownPreview.innerHTML = markdownForHtml;
}

readTextFile("/CV.md");

var savedLocalFile = window.localStorage.getItem('cvMd');
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                if (!savedLocalFile)
                    window.localStorage.setItem('cvMd', allText);
            }
        }
    }
    rawFile.send(null);
}
var savedLocalFile = window.localStorage.getItem('cvMd');
loadFileInToTextarea(savedLocalFile);

markdownEditor.addEventListener("keyup", evt => {
    const { value } = evt.target;
    window.localStorage.setItem('cvMd', value);
    loadFileInToTextarea(value);
});

if (savedLocalFile) {
    markdownEditor.value = savedLocalFile;
    loadFileInToTextarea(savedLocalFile);
}
const { jsPDF } = window.jspdf;
console.log(window);
const doc = new jsPDF();
//doc.text(markdownPreview.innerHTML, 10,10);
console.log(doc.getFontList());
doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal')
doc.setFont('Roboto');
doc.setFontSize(8);
function SavePdf(params) {
    doc.html(markdownPreview.innerHTML,{
        "width": 180,
        callback: function (doc) {
            // doc.addFileToVFS('Roboto-Regular.ttf', Roboto);
            // doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
          doc.save();
        },
        x: 10,
        y: 10,
    
     });
}