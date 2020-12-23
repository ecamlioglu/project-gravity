const markdownEditor = document.querySelector(".text-editor");
const markdownPreview = document.querySelector(".preview");
//const converter = new showdown.Converter();

const mdConverter = new showdown.Converter();
 


markdownEditor.addEventListener("keyup", evt => {
    const {value} = evt.target;
    const markdownForHtml = converter.makeHtml(value);
    markdownPreview.innerHTML = markdownForHtml;
});