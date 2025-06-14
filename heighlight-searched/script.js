// function search() {
//   let textToSearch = document.getElementById("search_data").value;
//   let paragraph = document.getElementById("paragraph");
//   textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

//   let pattern = new RegExp(`&{textToSearch}`, "g");

//   paragraph.innerHTML = paragraph.textToSearch.replace(
//     pattern,
//     (match) => `<mark>${match}</mark>`
//   );
//   console.log(`<mark>${match}</mark>`);
// }
// search();

function search() {
  let textToSearch = document.getElementById("search_data").value;
  let paragraph = document.getElementById("paragraph");

  // Escape special RegExp characters
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let pattern = new RegExp(textToSearch, "gi");

  // Replace matched text with <mark>...</mark>
  paragraph.innerHTML = paragraph.textContent.replace(pattern, (match) => {
    return `<mark>${match}</mark>`;
  });
}
