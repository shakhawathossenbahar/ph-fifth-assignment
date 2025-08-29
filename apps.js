// Function -----heart icon clicks and update the main counter
function setupHeartButtons() {
  const heartIcons = document.querySelectorAll('.like-btn'); 
  const heartCounter = document.getElementById('like-count');  

  heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      let currentCount = parseInt(heartCounter.innerText); 
      
        
        heartCounter.innerText = currentCount + 1;
      
    });
  });
}

setupHeartButtons();

// callingbtns function 


const callingBtns = document.querySelectorAll('.call-btn');

callingBtns.forEach(callingBtn => {
  callingBtn.addEventListener('click', () => {
    let coinCountElem = document.getElementById('coin-count');
    let coinValue = parseInt(coinCountElem.innerText);

    if (coinValue < 20) {
      return alert("পর্যাপ্ত কয়েন নেই। কল করার জন্য কমপক্ষে ২০ কয়েন প্রয়োজন।");
    }

    coinCountElem.innerText = coinValue - 20;

    const card = callingBtn.closest('div.border'); 
    const nameData = card.querySelector('.heading').innerText;
    const numberData = card.querySelector('.number').innerText;

    alert(`📞 Calling ${nameData} at ${numberData}`);

    const historyContainer = document.getElementById('history-container');
    const dateNow = new Date().toLocaleTimeString();

    const divElement = document.createElement('div');
    divElement.className = "flex justify-between items-center mt-3 mb-3 p-4 gap-3 rounded-lg bg-gray-100";

    divElement.innerHTML = `
      <div>
        <h1>${nameData}</h1>
        <p class="text-gray-500">${numberData}</p>
      </div>
      <h1>${dateNow}</h1>
    `;

    historyContainer.appendChild(divElement);
    
  });
});

// Clear button
let clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener('click', () => {
  const historyContainer = document.getElementById('history-container');
  historyContainer.innerHTML = ""; 
});

// copy btn function

const copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach(copyBtn => {
  copyBtn.addEventListener('click', () => {
    
    
    const copyCounter = document.getElementById("copy-count"); 
    let currentCount = parseInt(copyCounter.innerText);
    copyCounter.innerText = currentCount + 1;

    
    const card = copyBtn.closest('div.border'); 
    const numberData = card.querySelector('.number').innerText;

    
    navigator.clipboard.writeText(numberData);

    
    alert(`${numberData} - এই নাম্বারটি কপি হয়েছে`);
  });
});

