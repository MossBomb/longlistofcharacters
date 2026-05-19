fetch('https://mossbomb.github.io/longlistofcharacters/list.tsv')
.then(res => res.text())
.then(data => {
    const lines = data.trim().split('\n');
    console.log(lines.length);
    console.log(Math.floor(Math.random() * lines.length));
    const character = lines[Math.floor(Math.random() * lines.length)];
    const thebox = document.createElement("div");
    thebox.classList.add("maincolumn");
    thebox.style.transform = "translateX(50%)";
    thebox.textContent = character
    document.body.appendChild(thebox);
})
    .catch(err => console.log(err));
