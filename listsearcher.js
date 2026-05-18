fetch('https://mossbomb.github.io/longlistofcharacters/list.tsv')
.then(res => res.text())
.then(data => {
    const lines = data.trim().split('\n');
    console.log(lines.length);
    console.log(Math.floor(Math.random() * lines.length));
    const character = lines[Math.floor(Math.random() * lines.length)];
    const box = document.createElement("maincolumn");
    const topText = document.createElement("p");
    const topTextNode = document.createTextNode(character);
    box.appendChild(topText);
    topText.appendChild(topTextNode);
    document.body.appendChild(topText);
})
    .catch(err => console.log(err));
