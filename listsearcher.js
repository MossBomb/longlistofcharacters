fetch('https://mossbomb.github.io/longlistofcharacters/list.tsv')
.then(res => res.text())
.then(data => {
    const lines = data.trim().split('\n');
    console.log(lines.length);
    console.log(Math.floor(Math.random() * lines.length));
    const character = lines[Math.floor(Math.random() * lines.length)];
    const thebox = document.createElement("div");
    const refreshbtn = document.createElement("button");
    refreshbtn.textContent = "Refresh";
    refreshbtn.style.transform = "translateY(50%)";
    refreshbtn.onclick = clicked;
    thebox.classList.add("maincolumn");
    document.body.appendChild(refreshbtn);
    thebox.style.transform = "translateX(50%)";
    thebox.style.transform = "translateY(25%)";
    thebox.textContent = character
    document.body.appendChild(thebox);

    function clicked() {
        character = lines[Math.floor(Math.random() * lines.length)];
        thebox.textContent = character
    }
    
})
    .catch(err => console.log(err));
