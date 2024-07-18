document.getElementById('contentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const publishDate = document.getElementById('publishDate').value;

    if (title && description && publishDate) {
        const contentList = document.getElementById('scheduledContents');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${title}</strong><br>${description}<br><em>Publish Date: ${publishDate}</em>`;
        contentList.appendChild(listItem);

        document.getElementById('contentForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
/** */
document.getElementById('contentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const publishDate = document.getElementById('publishDate').value;

    if (title && description && publishDate) {
        const contentList = document.getElementById('scheduledContents');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${title}</strong><br>${description}<br><em>Publish Date: ${publishDate}</em>`;
        contentList.appendChild(listItem);

        document.getElementById('contentForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
/**search box */
 function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item= document.querySelectorAll('.box');
    let l = document.getElementsByTagName('h3');
    for(var i= 0; i<=l.length;i++){
       let a =item[i].getElementsByTagName('h3')[0];
       let value=a.innerHTML || a.innerText || a.textContent;
       if(value.toUpperCase().indexof(filter) > -l){
        item[i].style.display="";
       }
      else{
        item[i].style.display="none";
      }
    }
}