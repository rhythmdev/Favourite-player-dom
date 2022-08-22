const playerCart = [];
function display(addPlayer) {
  //  console.log(addPlayer)
  const olBody = document.getElementById("selected-player");
  olBody.innerHTML = "";
  for (let i = 0; i < addPlayer.length; i++) {
    // console.log(addPlayer[i].playerN{ame)
    let childrenNode = olBody.children.length;
    if (childrenNode >= 5) {
      alert("You can select max 5 players");
      return;
    } else {
      const name = addPlayer[i].playerName;
      const li = document.createElement("li");

      li.innerText = name;

      olBody.appendChild(li);
      li.style.color = "white";
      li.style.textAlign = "center";
    }
  }
}

function selectPlayer(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  const playerObj = {
    playerName: playerName,
  };
  playerCart.push(playerObj);

  // document.getElementById('total-added-player').innerText = playerCart.length;
  display(playerCart);
}

//** calculate area */


document.getElementById('calculate-btn').addEventListener('click', function(){
  
})