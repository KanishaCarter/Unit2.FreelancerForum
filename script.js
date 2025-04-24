console.log("Hello World!");

const freelancerList = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Kanisha", price: 100, occupation: "software developer" },
];

class Freelancer {
  constructor(name, price, occupation) {
    this.name = name;
    this.price = price;
    this.occupation = occupation;
  }
}

let p = document.createElement("p");
let introduction = document.querySelector(".introduction");
introduction.appendChild(p); 

//Function displays roster
function displayRoster(arrayOfFreelancers) {
  let ul = document.createElement("ul");  

  arrayOfFreelancers.forEach(key => {
    let li = document.createElement("li"); 
    li.textContent = `Name: ${key.name} | Occupation: ${key.occupation} | Starting Price: $${key.price}`;
    ul.appendChild(li); 
  });

  return ul;

// HTML Freelancer Roster class section
let rosterContainer = document.querySelector(".rosterContainer");
// Append the 'ul' to the container
rosterContainer.appendChild(displayRoster(freelancerList));  

// Function to generate a random freelancer
function getRandomFreelancer() {
  // Array of possible names and occupations
  const names = ["Carol", "Bob", "Kanisha", "John", "Sara"];
  const occupations = ["Programmer", "Teacher", "Software Developer", "Designer", "Photographer"];
  const prices = [10, 20, 50, 95, 25, 15];

  // Generates a random name, occupation, and price
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = prices[Math.floor(Math.random() * 3)];  // Get random price

  // Creates a new freelancer object
  const newFreelancer = new Freelancer(randomName, randomPrice, randomOccupation);

  // Adds new freelancer to the list
  freelancerList.push(newFreelancer);

  // Renders freelancer roster
  const rosterContainer = document.querySelector(".rosterContainer");
  rosterContainer.innerHTML = ''; // Clear the current list

  function freelancerAvgPrice(freelancerList) {
    let allPrices = freelancerList.map(p => p.price);
    return allPrices.reduce((sum, p) => sum + p, 0) / allPrices.length;
    console.log(allPrices.reduce((sum, p) => sum + p, 0) / allPrices.length);
  };

  // Renders updated list
  freelancerAvgPrice(freelancerList);
  rosterContainer.appendChild(displayRoster(freelancerList));  

  p.innerHTML = `Welcome to The Freelancer Forum. The current avg Price is ${freelancerAvgPrice(freelancerList)}`;
};

// Interval adds a new freelancer every 3 seconds 
setInterval(getRandomFreelancer, 3000);