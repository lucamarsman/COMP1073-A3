document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("myInfo").innerHTML = "Luca Marsman - 1247846"
})

const form = document.getElementById("pizza-form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const size = document.getElementById("size").value; // Get selected size
    const crust = document.querySelector('input[name="crust"]:checked').value; // Get selected crust

    const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked'); // Get all selected toppings
    let toppings = []; // Declare topping array
    for (let topping of checkedToppings) { // Add each checked topping to topping array
        toppings.push(topping.value);
    }

    const createdPizza = new Pizza(size, crust, toppings); // Create new pizza object using gathered form data
    document.getElementById("result").innerHTML = createdPizza.getInfo(); // Set result string that describes the pizza
    form.reset(); // Reset form after submission
});

class Pizza { // Pizza class
    constructor(size, crust, toppings) { // Pizza constructor
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    getSize() {
        return this.size;
    }

    getCrust() {
        return this.crust;
    }

    getToppings() {
        return this.toppings;
    }

    getInfo(){ // Method that describes the pizza's attributes
        let description = `You've ordered a ${this.size} pizza with a ${this.crust} crust`;
        
        if (this.toppings.length > 0) { // If at least 1 topping selected
            const formattedToppings = this.toppings.join(', '); // Convert topping array to string using ', ' between each topping
            description += ` and topped with ${formattedToppings}.`;
        } else { // If no toppings are selected
            description += " with no additional toppings.";
        }

        return description;
    }
}