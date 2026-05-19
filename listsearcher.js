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
    refreshbtn.style.transform = "translateY(100px)";
    thebox.classList.add("maincolumn");
    document.body.appendChild(refreshbtn);
    thebox.style.transform = "translateX(50%)";
    thebox.textContent = character
    document.body.appendChild(thebox);

    refreshbtn.addEventListener("click", function() {
        character = lines[Math.floor(Math.random() * lines.length)];
        thebox.textContent = character
        console.log("clicked!");
    });
    
})
    .catch(err => console.log(err));
