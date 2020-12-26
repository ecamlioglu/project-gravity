
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

console.log(markdownEditor.value);

function createPDF() {
    const doc = new jsPDF({
      unit: "pt",
      orientation: "p",
      lineHeight: 1.2
    });
    doc.lineHeightProportion = 2;

  
    doc.addFont("Roboto-Medium.ttf", "Roboto", "normal");
    doc.setFont("Roboto");
    //doc.setFontType("normal");
    doc.setFontSize(12);
    doc.html(markdownPreview.innerHTML,{
        'width': 170,
        callback: function (doc) {
                     doc.save("cv.pdf")
                 }
    });
  }
  