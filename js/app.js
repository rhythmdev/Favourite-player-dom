const playerCart = [];
function display(addPlayer) {
  //  console.log(addPlayer)
  const olBody = document.getElementById("selected-player");
  olBody.innerHTML = "";
  for (let i = 0; i < addPlayer.length; i++) {
    
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
    element.setAttribute("disabled", true);
    element.style.backgroundColor = "gray";
    playerCart.push(playerObj);
    display(playerCart);
  }

  document.getElementById("total-added-player").innerText = playerCart.length;
}

//** calculate area */

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerBudget = getInputFieldById("per-player");
  //! error message //
  if (isNaN(perPlayerBudget) || perPlayerBudget < 0) {
    alert("Please enter a valid number");
    return;
  }
  //! end of error message //

  const playerSelected = document.querySelectorAll("#selected-player li");
  const totalPlayerExpenses = playerSelected.length * perPlayerBudget;

  const playerExpenses = getElementValueById("player-expenses");

  setElementValueById("player-expenses", totalPlayerExpenses);
});

document
  .getElementById("total-calculate-btn")
  .addEventListener("click", function () {
    const managerExpenses = getInputFieldById("manager-expense");
    const coachExpenses = getInputFieldById("coach-expense");

    //! error message //
    if (
      isNaN(managerExpenses) ||
      isNaN(coachExpenses) ||
      managerExpenses < 0 ||
      coachExpenses < 0
    ) {
      alert("Please enter a valid number");
      return;
    }
    //! end of error message //

    const playerTotalExpense = getElementValueById("player-expenses");

    const totalCost = playerTotalExpense + managerExpenses + coachExpenses;

    const finalTotal = getElementValueById("total-cost");

    setElementValueById("total-cost", totalCost);
  });
