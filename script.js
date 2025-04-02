console.log("Hello World!");

// Given sample freelancers array
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

function displayRoster(roster) {
    const freelancerContainer = document.getElementById("freelancerContainer");
    freelancerContainer.innerHTML = "<h2>Current Available Freelancers</h2>";

    const freelancerList = document.createElement("ul");
    freelancers.forEach(freelancer => {
        const freelancerListItem = document.createElement("li");
        freelancerListItem.textContent = freelancer;
        freelancerList.appendChild(freelancerListItem);
    });

    freelancerContainer.appendChild(freelancerList);
    return freelancerList;
};

console.log(displayRoster(freelancers));