function showAddr(addr) {
  date = new Date().toLocaleDateString();
  console.log(
    addr.buildingNum +
      " " +
      addr.street +
      ", " +
      addr.city +
      " city registered in " +
      date
  );
}

// const addrObj = { street: "abc st.", buildingNum: 15, city: "xyz" };

let street = prompt("Enter street name:");
let buildingNum = parseInt(prompt("Enter building number:"));
let city = prompt("Enter city name:");

const addrObj = { street, buildingNum, city };

showAddr(addrObj);
