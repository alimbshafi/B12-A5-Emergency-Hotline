// ------------ Heart count feature --------------
const heartIcons = document.querySelectorAll(".countBtn");
const totalHeartCount = document.getElementById("heartCount");

let count = 0;

for (let i = 0; i < heartIcons.length; i++) {
    const btn = heartIcons[i];
    btn.addEventListener("click", function () {
        count = count + 1;
        totalHeartCount.textContent = count;
    });
}

// --------- Coin & Call History feature ------------
const callBtns = document.querySelectorAll(".callBtn");
const totalCoin = document.getElementById("coinCount");
const historyContainer = document.getElementById("callHistory");

let coinCount = 100;

for (let i = 0; i < callBtns.length; i++) {
    const btn = callBtns[i];
    const serviceNames = document.querySelectorAll(".service-name");
    const serviceName = serviceNames[i];
    const serviceNumbers = document.querySelectorAll(".service-number");
    const serviceNumber = serviceNumbers[i];
    
    btn.addEventListener("click", function () {
        if (coinCount < 20) {
            alert("❌ Sorry Not Enough Coins! (minimum 20 coins required to call)");
            return;
        }
        
        coinCount = coinCount - 20;
        if (coinCount < 0) coinCount = 0;
        totalCoin.textContent = coinCount;
        alert("📞 Calling " + serviceName.textContent + " " + serviceNumber.textContent + "...");
        
        const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const div = document.createElement("div");
        div.className = "bg-gray-200 p-3 my-9 rounded-xl flex justify-between items-center gap-10";
        div.innerHTML =
        '<div>' +
        '<p class="font-semibold">' + serviceName.textContent + '</p>' +
        '<p class="text-sm">' + serviceNumber.textContent + '</p>' +
        '</div>' +
        '<span class="text-xs text-gray-500">' + time + '</span>';
        
        historyContainer.prepend(div);
    });
}