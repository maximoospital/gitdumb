let url = window.location.href;
if (!url.endsWith('/')) {
  url += '/';
}
const urlRoot = url.split('/').slice(0, 5).join('/');
console.log(urlRoot)

if(url === urlRoot || url === urlRoot + '/') {
  console.log("Searching for latest release tag")
  const latest = document.querySelector('[title="Label: Latest"]');
  if(latest) {
    const sidebar = document.querySelector('.Layout-sidebar');
    const firstChild = sidebar.firstElementChild;
    const firstChildFirstChild = firstChild.firstElementChild;
    const firstChildFirstChildsFirstChild = firstChildFirstChild.firstElementChild;
    const firstChildFirstChildsFirstChildsFirstChild = firstChildFirstChildsFirstChild.firstElementChild;
    const summary = document.createElement('summary');
    const button = document.createElement('a');
    button.classList.add('gd_downloadbutton');
    button.href = urlRoot + '/releases/latest';
    button.textContent = 'Download';
    summary.appendChild(button);
    firstChildFirstChildsFirstChildsFirstChild.insertAdjacentElement('afterbegin', summary)
    const style = document.createElement('style');
    style.textContent = `
      .gd_downloadbutton {
        display: inline-block;
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
      }
      .gd_downloadbutton:hover {
        background-color: #0069d9;
        cursor: pointer;
        color: black;
      }
    `;
    document.head.appendChild(style);
  } else {
    console.log("No latest release found")
  }
}