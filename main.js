var gameData = {
    pencils: 0,
    pencilInventory: 0,
    pencilsSold: 0,
    pencilsPerClick: 1,
    pencilsAuto: 1,
    pencilsPerClickCost: 10,
    pencilsPerClickLevel: 1,
    pencilsAutoCost: 10,
    pencilsAutoLevel: 1,
    currency: 0,
    sellRatePerClick: 1,
    sellRateAuto: 1,
    sellPerClickCost: 10,
    sellPerClickLevel: 1,
    sellAutoCost: 10,
    sellAutoLevel: 1,
    currencyPerSell: 1,
    increasePriceCost: 10,
    increasePriceLevel: 1
}

function makePencilOnClick(){
    gameData.pencils +=gameData.pencilsPerClick
    gameData.pencilInventory +=gameData.pencilsPerClick
    document.getElementById("pencilsMade").innerHTML = gameData.pencils + " Pencils made historically"
    document.getElementById("pencilInventory").innerHTML = gameData.pencilInventory + " Pencils still in inventory"
}

function makePencilAuto()
{
    gameData.pencils +=gameData.pencilsAuto
    gameData.pencilInventory +=gameData.pencilsAuto
    document.getElementById("pencilsMade").innerHTML = gameData.pencils + " Pencils made historically"
    document.getElementById("pencilInventory").innerHTML = gameData.pencilInventory + " Pencils still in inventory"
}

function sellPencilOnClick(){
    if(gameData.pencilInventory > 0){
        gameData.pencilInventory -=gameData.sellRatePerClick
        gameData.pencilsSold +=gameData.sellRatePerClick
        gameData.currency +=(gameData.currencyPerSell * gameData.sellRatePerClick)
    }
    document.getElementById("pencilInventory").innerHTML = gameData.pencilInventory + " Pencils still in inventory"
    document.getElementById("pencilsSold").innerHTML = gameData.pencilsSold + " Pencils sold historically"
    document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
}

function sellPencilAuto(){
    if(gameData.pencilInventory > 0){
        gameData.pencilInventory -=gameData.sellRateAuto
        gameData.pencilsSold +=gameData.sellRateAuto
        gameData.currency +=(gameData.currencyPerSell * gameData.sellRateAuto)
    }
    document.getElementById("pencilInventory").innerHTML = gameData.pencilInventory + " Pencils still in inventory"
    document.getElementById("pencilsSold").innerHTML = gameData.pencilsSold + " Pencils sold historically"
    document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
}

function buyPencilsPerClick(){
    if (gameData.currency >= gameData.pencilsPerClickCost)
    {
        gameData.currency -=gameData.pencilsPerClickCost
        gameData.pencilsPerClick +=1
        gameData.pencilsPerClickCost *=2
        gameData.pencilsPerClickLevel +=1
        document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Click Manufacturing (Current Level " + gameData.pencilsPerClickLevel + " ) Cost: " + gameData.pencilsPerClickCost + " Currency"
        document.getElementById("pencilsPerClick").innerHTML = "Making " + gameData.pencilsPerClick + " Pencils Per Click"
    }
}

function buyPencilsAuto()
{
    if(gameData.currency >=gameData.pencilsAutoCost)
    {
        gameData.currency -=gameData.pencilsAutoCost
        gameData.pencilsAuto +=1
        gameData.pencilsAutoCost *=2
        gameData.pencilsAutoLevel +=1
        document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
        document.getElementById("autoUpgrade").innerHTML = "Upgrade Auto Manufacturing (Currently Level " + gameData.pencilsAutoLevel + " ) Cost: " + gameData.pencilsAutoCost + " Currency"
        document.getElementById("pencilsPerSecond").innerHTML = " Making " + gameData.pencilsAuto + " Pencils Per Second"
    }
}

function buyIncreaseCost()
{
    if(gameData.currency >=gameData.increasePriceCost)
    {
        gameData.currency -=gameData.increasePriceCost
        gameData.currencyPerSell +=1
        gameData.increasePriceCost *=2
        gameData.increasePriceLevel +=1
        document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
        document.getElementById("increasePrice").innerHTML = "Increase Sell Price Per Pencil (Current Level " + gameData.increasePriceLevel + " ) Cost: " + gameData.increasePriceCost + " Currency"
        document.getElementById("pencilToCurrency").innerHTML = "Selling 1 Pencil for " + gameData.currencyPerSell + " Currency"
    }
}

function buySellsPerClick()
{
    if (gameData.currency >=gameData.sellPerClickCost)
    {
        gameData.currency -=gameData.sellPerClickCost
        gameData.sellRatePerClick +=1
        gameData.sellPerClickCost *=2
        gameData.sellPerClickLevel +=1
        document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
        document.getElementById("perClickSellUpgrade").innerHTML = "Upgrade Click Selling (Current Level " + gameData.sellPerClickLevel + " ) Cost: " + gameData.sellPerClickCost + " Currency"
        document.getElementById("pencilPerSellClick").innerHTML = "Selling " + gameData.sellRatePerClick + " Pencils Per Click"
    }
}

function buySellsAuto()
{
    if(gameData.currency >=gameData.sellAutoCost)
    {
        gameData.currency -=gameData.sellAutoCost
        gameData.sellRateAuto +=1
        gameData.sellAutoCost *=2
        gameData.sellAutoLevel +=1
        document.getElementById("totalCurrency").innerHTML = gameData.currency + " Total Currency"
        document.getElementById("autoSellUpgrade").innerHTML = "Upgrade Auto Selling (Currently Level " + gameData.sellAutoLevel + " ) Cost: " + gameData.sellAutoCost + " Currency"
        document.getElementById("sellsPerSecond").innerHTML = "Selling " + gameData.sellRateAuto + " Pencils Per Second"
    }
}

var manufactureLoop = window.setInterval(function() {makePencilAuto()}, 1000)
var sellLoop = window.setInterval(function() {sellPencilAuto()}, 1000)