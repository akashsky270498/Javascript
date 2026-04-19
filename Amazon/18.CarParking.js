function createParkingLot(capacity) {
    const slots = new Array(capacity).fill(null); // Array to store car at each slot index

    const freeSlots = new Set(); //Keeps track of available slots -> O(1) allocation

    const carToSlot = new Map(); //Map car: Slot for quick lookup/removal

    //initialize all slots are free
    for (let i = 0; i < capacity; i++) {
        freeSlots.add(i);
    }

    //funcion to park a car
    function park(car) {
        if (!car) return "Invalid car"; //Check if car is valid

        //Prevent duplicate parking
        if (carToSlot.has(car)) {
            return `Car already parked at slot ${carToSlot.get(car)}`;
        }

        //Check parking free space
        if (freeSlots.size === 0) {
            return "Parking full";
        }

        //Get any free Slot O(1)
        const slot = freeSlots.values().next().value;

        //Assign car to free slot
        slots[slot] = car;

        //remove the slot
        freeSlots.delete(slot);

        //track where the car is parked
        carToSlot.set(car);

        return `Car  parked at slot ${slot}`;
    }

    //function to unpark a car
    function unpark(car) {
        if (!car) return "Invalid car";

        if (!carToSlot.has(car)) {
            return `Car ${car} not found in parking`;
        }

        const slot = carToSlot.get(car);

        slots[slot] = null;
        freeSlots.add(slot);
        carToSlot.delete(car);

        return `Car ${car} unparked from slot ${slot}`;
    }

    function leave(car) {
        //Car not present
        if (!carToSlot.has(car)) {
            return "Car not found";
        }

        //Found the car
        const slot = carToSlot.get(car);

        //Remove the car & make the slot free
        slots[slot] = null;

        //Add the slot
        freeSlots.add(slot);

        //Remove mapping
        carToSlot.delete(car);

        return `Slot ${slot} is free`;
    }

    function getStatus() {
        return slots;
    }
    return {park, leave, getStatus};

}

const lot = createParkingLot(2);

console.log(lot.park("car1")); // Car parked at slot 0
console.log(lot.park("car2")); // Car parked at slot 1
console.log(lot.park("car3")); // Parking Full

console.log(lot.getStatus());  // ["car1", "car2"]

console.log(lot.leave("car1")); // Slot 0 is now free

console.log(lot.park("car3"));  // Car parked at slot 0

console.log(lot.leave("carX")); // Car not found