var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}   

  // Array of random bucket list items
  const bucketListItems = [
    "Visit Machu Picchu",
    "Go skydiving",
    "Learn to play a musical instrument",
    "Swim with dolphins",
    "Write a book",
    "Learn a new language",
    "Run a marathon",
    "Plant a tree",
    "Volunteer abroad",
    "Go on a hot air balloon ride",
    "Drive a super car "
];

let bucketList = [];
let spinning = false;
let spinInterval;

// Function to spin the carousel
function spin() {
    if (!spinning && bucketList.length < 5) {
        spinning = true;
        spinInterval = setInterval(() => {
            const randomItem = getRandomItem();
            document.getElementById("resultContainer").textContent = randomItem;
        }, 100);
        setTimeout(() => {
            clearInterval(spinInterval);
            spinning = false;
            const randomItem = getRandomUniqueItem();
            bucketList.push(randomItem);
            updateBucketList();
        }, 1000);
    }
}

// Function to get a random item from the bucket list items array
function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * bucketListItems.length);
    return bucketListItems[randomIndex];
}

// Function to get a random item that is not already in the bucket list
function getRandomUniqueItem() {
    let randomItem;
    do {
        randomItem = getRandomItem();
    } while (bucketList.includes(randomItem));
    return randomItem;
}

// Function to update the bucket list display
function updateBucketList() {
    const bucketListElement = document.getElementById("bucketList");
    bucketListElement.innerHTML = "";

    for (let i = 0; i < bucketList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = bucketList[i];
        listItem.classList.add("list-item"); // Add a CSS class for styling
        bucketListElement.appendChild(listItem);
    }
}

// Attach event listener to the spin button
const spinButton = document.getElementById("spinButton");
spinButton.addEventListener("click", spin);
</script>