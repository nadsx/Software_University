function cappyJuice(input) {
    let juiceQuantities = new Map();
    let juiceBottles = new Map();

    for (let line of input) {
        let [juice, quantity] = line.split(/\s*=>\s*/g);
        quantity = Number(quantity);

        if (juiceQuantities.has(juice)) {
            quantity += juiceQuantities.get(juice);
        }

        juiceQuantities.set(juice, quantity);

        if (quantity >= 1000) {
            juiceBottles.set(juice, Math.floor(quantity / 1000));
        }
    }

    for (let [juice, bottles] of juiceBottles) {
        console.log(`${juice} => ${bottles}`);

    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);

//----------------------------------

// function solve(input) {
//     let data = {};
//     let bottles = new Map();

//     for (const line of input) {
//         let items = line.split(" => ");
//         let juice = items[0];
//         let quantity = Number(items[1]);

//         if (!data.hasOwnProperty(juice)) {
//             data[juice] = 0;
//         }

//         data[juice] += quantity;

//         if (data[juice] >= 1000) {
//             let bottlesCount = Math.floor(data[juice] / 1000);

//             if (bottles.get(juice)) {
//                 bottles.set(juice, bottlesCount + bottles.get(juice));
//             } else {
//                 bottles.set(juice, bottlesCount);
//             }
//         }

//         data[juice] = data[juice] % 1000;
//     }

//     console.log([...bottles]
//         .map(b => `${b[0]} => ${b[1]}`)
//         .join("\n"));
// }