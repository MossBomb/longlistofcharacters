fetch('https://mossbomb.github.io/longlistofcharacters/list.tsv')
.then(res => res.text())
.then(data => {
    const lines = data.trim().split('\n');
    console.log(lines.length);
    console.log(Math.floor(Math.random() * lines.length));
    const character = lines[Math.floor(Math.random() * lines.length)];
    const thebox = document.createElement("div");
    thebox.classList.add("maincolumn");
    const thetext = document.createElement("p");
    const textnode = document.createTextNode(character);
    thetext.appendChild(textnode);
    thebox.appendChild(thetext);
    document.body.appendChild(thebox);

    document.body.appendChild(thetext);
})
    .catch(err => console.log(err));
