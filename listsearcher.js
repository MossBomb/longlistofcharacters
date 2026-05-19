fetch('https://mossbomb.github.io/longlistofcharacters/list.tsv')
.then(res => res.text())
.then(data => {
    const lines = data.trim().split('\n');
    console.log(lines.length);
    console.log(Math.floor(Math.random() * lines.length));
    const character = lines[Math.floor(Math.random() * lines.length)];
    const box = document.createElement("maincolumn");
    box.textContent = character
})
    .catch(err => console.log(err));
