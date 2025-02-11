
// function hideshow() {
//     let z = document.getElementById("main");

//     if(z.style.display === "none") {
//         z.style.display = "block";
//     }
//     else {
//         z.style.display = "none";
//     }
// }

// function btn() {
//     let y = document.getElementById("cost");

//     if(y.style.display === "none") {
//         y.style.display = "block";
//     }
//     else {
//         y.style.display = "none";
//     }

// }



// function toggle() {
//     let x = document.getElementById("con");

//     if(x.style.display === "none") {
//         x.style.display = "block";
//     }
//     else {
//         x.style.display = "none";
//     }
// }





// let originalCost, deliveryCharges, totalCost, packs;
// let orders = JSON.parse(localStorage.getItem('orders')) || [];

// // Calculate Cost Button
// document.getElementById('calculateButton').addEventListener('click', function() {
//     const name = document.getElementById('nameInput').value;
//     const address = document.getElementById('addressInput').value;

//     packs = parseInt(document.getElementById('packsInput').value);
//     const selectedCity = document.getElementById('citySelect').value;

//     if (!name || !address) {
//         alert("Please enter your name and address.");
//         return;
//     }

//     if (isNaN(packs) || packs <= 0) {
//         alert("Please enter a valid number of packs.");
//         return;
//     }

//     if (selectedCity === "") {
//         alert("Please select a valid city.");
//         return;
//     }

//     switch (selectedCity) {
//         case 'Gujrat':
//             deliveryCharges = 50;
//             break;
//         case 'Maharashtra':
//             deliveryCharges = 100;
//             break;
//         case 'Madhya pradesh':
//             deliveryCharges = 150;
//             break;
//         case 'Rajasthan':
//             deliveryCharges = 200;
//             break;    
//     }

//     const pricePerPack = 20; 
//     originalCost = packs * pricePerPack; 
//     totalCost = originalCost + deliveryCharges; 

//     document.getElementById('costDisplay').innerHTML = 
//         `<p>Total Cost: ${totalCost} rupees</p>`;  // Corrected line

//     document.getElementById('placeOrderButton').style.display = 'inline-block';
// });

// // Place Order Button
// document.getElementById('placeOrderButton').addEventListener('click', function() {
//     const name = document.getElementById('nameInput').value;
//     const address = document.getElementById('addressInput').value;
//     const selectedCity = document.getElementById('citySelect').value;

//     // Prepare order object
//     const order = {
//         name: name,
//         address: address,
//         city: selectedCity,
//         packs: packs,
//         originalCost: originalCost,
//         deliveryCharges: deliveryCharges,
//         totalCost: totalCost
//     };

//     // Add the new order to the orders array
//     orders.push(order);

//     // Store updated orders back to localStorage
//     localStorage.setItem('orders', JSON.stringify(orders));

//     // Display a congratulatory message
//     document.getElementById('congratulationMessage').innerText = 'Congratulations! Your order has been placed successfully!';

//     // Reset input fields
//     document.getElementById('nameInput').value = '';
//     document.getElementById('addressInput').value = '';
//     document.getElementById('packsInput').value = '';
//     document.getElementById('citySelect').selectedIndex = 0;
//     document.getElementById('costDisplay').innerHTML = '';
// });












// function hideshow() {
//     let z = document.getElementById("main");

//     if (z.style.display === "none") {
//         z.style.display = "block";
//     } else {
//         z.style.display = "none";
//     }
// }

// let originalCost, deliveryCharges, totalCost, packs;
// let orders = JSON.parse(localStorage.getItem('orders')) || [];

// document.getElementById('calculateButton').addEventListener('click', function() {
//     const name = document.getElementById('nameInput').value;
//     const address = document.getElementById('addressInput').value;

//     packs = parseInt(document.getElementById('packsInput').value);
//     const selectedCity = document.getElementById('citySelect').value;

//     if (!name || !address) {
//         alert("Please enter your name and address.");
//         return;
//     }

//     if (isNaN(packs) || packs <= 0) {
//         alert("Please enter a valid number of packs.");
//         return;
//     }

//     if (selectedCity === "") {
//         alert("Please select a valid city.");
//         return;
//     }

//     switch (selectedCity) {
//         case 'Gujrat':
//             deliveryCharges = 50;
//             break;
//         case 'Maharashtra':
//             deliveryCharges = 100;
//             break;
//         case 'Madhya pradesh':
//             deliveryCharges = 150;
//             break;
//         case 'Rajasthan':
//             deliveryCharges = 200;
//             break;
//         default:
//             deliveryCharges = 0;
//     }

//     const pricePerPack = 20; 
//     originalCost = packs * pricePerPack; 
//     totalCost = originalCost + deliveryCharges; 

//     document.getElementById('costDisplay').innerHTML = `<p>Total Cost: ${totalCost} rupees</p>`;  // Corrected line

//     // Display the Place Order button
//     document.getElementById('placeOrderButton').style.display = 'inline-block';
// });

// function placeOrder() {
//     const name = document.getElementById('nameInput').value;
//     const address = document.getElementById('addressInput').value;
//     const selectedCity = document.getElementById('citySelect').value;

//     const order = {
//         name: name,
//         address: address,
//         city: selectedCity,
//         packs: packs,
//         originalCost: originalCost,
//         deliveryCharges: deliveryCharges,
//         totalCost: totalCost
//     };

//     // Add the new order to the orders array
//     orders.push(order);

//     // Store updated orders in localStorage
//     localStorage.setItem('orders', JSON.stringify(orders));

//     // Display confirmation message
//     document.getElementById('congratulationMessage').innerText = 'Congratulations! Your order has been placed successfully!';

//     // Reset form inputs
//     document.getElementById('nameInput').value = '';
//     document.getElementById('addressInput').value = '';
//     document.getElementById('packsInput').value = '';
//     document.getElementById('citySelect').selectedIndex = 0;
//     document.getElementById('costDisplay').innerHTML = '';
// }








// let originalCost, deliveryCharges, totalCost, packs;
// let orders = JSON.parse(localStorage.getItem('orders')) || [];

// // Show/Hide Order Form
// function hideshow() {
//     let z = document.getElementById("main");
//     if (z.style.display === "none") {
//         z.style.display = "block";
//     } else {
//         z.style.display = "none";
//     }
// }

// // Calculate Cost Button Event Listener
// document.getElementById('calculateButton').addEventListener('click', function() {
//     const name = document.getElementById('nameInput').value;
//     const address = document.getElementById('addressInput').value;
//     packs = parseInt(document.getElementById('packsInput').value);
//     const selectedCity = document.getElementById('citySelect').value;

//     // Check if the required fields are filled
//     if (!name || !address) {
//         alert("Please enter your name and address.");
//         return;
//     }

//     if (isNaN(packs) || packs <= 0) {
//         alert("Please enter a valid number of packs.");
//         return;
//     }

//     if (selectedCity === "") {
//         alert("Please select a valid city.");
//         return;
//     }

//     // Calculate Delivery Charges based on selected city
//     switch (selectedCity) {
//         case 'Gujrat':
//             deliveryCharges = 50;
//             break;
//         case 'Maharashtra':
//             deliveryCharges = 100;
//             break;
//         case 'Madhya pradesh':
//             deliveryCharges = 150;
//             break;
//         case 'Rajasthan':
//             deliveryCharges = 200;
//             break;
//         default:
//             deliveryCharges = 0;
//     }

//     const pricePerPack = 20; 
//     originalCost = packs * pricePerPack; 
//     totalCost = originalCost + deliveryCharges; 

//     // Update the DOM with the calculated cost
//     document.getElementById('costDisplay').innerHTML = `<p>Total Cost: ${totalCost} rupees</p>`;  

//     // Show the "Place Order" button after cost calculation
//     document.getElementById('placeOrderButton').style.display = 'inline-block';
// });

// // Place Order Function
// function placeOrder() {
//     const name = document.getElementById('nameInput').value;
//     const address = document.getElementById('addressInput').value;
//     const selectedCity = document.getElementById('citySelect').value;

//     const order = {
//         name: name,
//         address: address,
//         city: selectedCity,
//         packs: packs,
//         originalCost: originalCost,
//         deliveryCharges: deliveryCharges,
//         totalCost: totalCost
//     };

//     // Add the new order to the orders array
//     orders.push(order);

//     // Store updated orders in localStorage
//     localStorage.setItem('orders', JSON.stringify(orders));

//     // Display confirmation message
//     document.getElementById('congratulationMessage').innerText = 'Congratulations! Your order has been placed successfully!';

//     // Reset form inputs after placing order
//     document.getElementById('nameInput').value = '';
//     document.getElementById('addressInput').value = '';
//     document.getElementById('packsInput').value = '';
//     document.getElementById('citySelect').selectedIndex = 0;
//     document.getElementById('costDisplay').innerHTML = '';
// }
































function hideshow() {
    let z = document.getElementById("main");

    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}

let originalCost, deliveryCharges, totalCost, packs;
let orders = JSON.parse(localStorage.getItem('orders')) || [];

document.getElementById('calculateButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const address = document.getElementById('addressInput').value;

    packs = parseInt(document.getElementById('packsInput').value);
    const selectedCity = document.getElementById('citySelect').value;

    if (!name || !address) {
        alert("Please enter your name and address.");
        return;
    }

    if (isNaN(packs) || packs <= 0) {
        alert("Please enter a valid number of packs.");
        return;
    }

    if (selectedCity === "") {
        alert("Please select a valid city.");
        return;
    }

    switch (selectedCity) {
        case 'Gujrat':
            deliveryCharges = 50;
            break;
        case 'Maharashtra':
            deliveryCharges = 100;
            break;
        case 'Madhya pradesh':
            deliveryCharges = 150;
            break;
        case 'Rajasthan':
            deliveryCharges = 200;
            break;
        default:
            deliveryCharges = 0;
    }

    const pricePerPack = 20; 
    originalCost = packs * pricePerPack; 
    totalCost = originalCost + deliveryCharges; 

    document.getElementById('costDisplay').innerHTML = `<p>Total Cost: ${totalCost} rupees</p>`;  

    // Display the Place Order button
    document.getElementById('placeOrderButton').style.display = 'inline-block';
});

function placeOrder() {
    const name = document.getElementById('nameInput').value;
    const address = document.getElementById('addressInput').value;
    const selectedCity = document.getElementById('citySelect').value;

    const order = {
        name: name,
        address: address,
        city: selectedCity,
        packs: packs,
        originalCost: originalCost,
        deliveryCharges: deliveryCharges,
        totalCost: totalCost
    };

    orders.push(order);

    // Store updated orders in localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Display confirmation message
    document.getElementById('congratulationMessage').innerText = 'Congratulations! Your order has been placed successfully!';

    // Reset form inputs
    document.getElementById('nameInput').value = '';
    document.getElementById('addressInput').value = '';
    document.getElementById('packsInput').value = '';
    document.getElementById('citySelect').selectedIndex = 0;
    document.getElementById('costDisplay').innerHTML = '';
}










    