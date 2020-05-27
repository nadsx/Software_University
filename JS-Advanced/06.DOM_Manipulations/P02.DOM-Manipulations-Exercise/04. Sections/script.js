function create(words) {
   let content = document.getElementById("content");

   for (let word of words) {
      let p = document.createElement("p");
      p.style.display = "none";
      p.textContent = word;

      let div = document.createElement("div");
      div.appendChild(p);
      div.addEventListener("click", function () {
         this.firstChild.style.display = "block";
      });

      content.appendChild(div);
   }
}