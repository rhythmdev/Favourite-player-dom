const playerCart = [];
function display(addPlayer) {
  //  console.log(addPlayer)
  const olBody = document.getElementById("selected-player");
  olBody.innerHTML = "";
  for (let i = 0; i < addPlayer.length; i++) {
    // console.log(addPlayer[i].playerN{ame)
    let childrenNode = olBody.childNodes.length;

    const name = addPlayer[i].playerName;
    const li = document.createElement("li");

    li.innerText = name;

    olBody.appendChild(li);
    li.style.color = "white";
    li.style.textAlign = "center";
  }
}

function selectPlayer(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  const playerObj = {
    playerName: playerName,
  };
  if (playerCart.length >= 5) {
    alert("You can select max 5 players");
    return;
  } else {
    playerCart.push(playerObj);
    display(playerCart);
  }

  // document.getElementById('total-added-player').innerText = playerCart.length;
}

//** calculate area */

document.getElementById("calculate-btn").addEventListener("click", function () {
  
  
  const perPlayerBudget = getInputFieldById("per-player");
  const playerSelected = document.querySelectorAll('#selected-player li');

  const totalPlayerExpenses = playerSelected.length * perPlayerBudget;
  console.log(totalPlayerExpenses);

 const playerExpenses = document.getElementById('player-expenses');
 playerExpenses.innerText = totalPlayerExpenses;
  



});

