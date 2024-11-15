const bikes = [
    { name: 'bike1', weight: 10 },
    { name: 'bike2', weight: 5 },
    { name: 'bike3', weight: 4 },
    { name: 'bike4', weight: 7 },
    { name: 'bike5', weight: 11 },
    { name: 'bike6', weight: 13 },
    { name: 'bike7', weight: 15 },
    { name: 'bike8', weight: 9 },
    { name: 'bike9', weight: 12 },
    { name: 'bike10', weight: 8 }
];

let lightBike = bikes[0];
for (let i = 0; i < bikes.length; i++) {
    const curBike = bikes[i];
    if (curBike.weight < lightBike.weight) {
        lightBike = curBike;
    }

}

