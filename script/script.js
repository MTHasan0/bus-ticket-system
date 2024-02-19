function handleSeatSelection(event) {
    const seat = event.target;


    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');


    } else if (document.querySelectorAll('.selected').length < 4 && seat.tagName === 'BUTTON') {
        seat.classList.add('selected');

    }

    updateSelectedSeatsList();
    updateTotalPrice();
}

function updateSelectedSeatsList() {
    const selectedSeats = document.querySelectorAll('.selected');
            const selectedSeatsTableBody = document.getElementById('selectedSeatsTableBody');
            selectedSeatsTableBody.innerHTML = ''; // Clear previous entries

            selectedSeats.forEach(seat => {
                const seatName = seat.textContent;
                const seatPrice = 550; // Per seat price is 550
               

                const row = document.createElement('tr');
                const seatCell = document.createElement('td');
                

                seatCell.textContent = seatName;
                row.appendChild(seatCell);
               
                const priceCell = document.createElement('td');
                priceCell.textContent = seatPrice;
                row.appendChild(priceCell);
                selectedSeatsTableBody.appendChild(row);
            });
}

// Function to update total price


function updateTotalPrice() {
    const selectedSeatsCount = document.querySelectorAll('.selected').length;
    const totalPrice = selectedSeatsCount * 550; // Per seat price is 550
    document.getElementById('totalPrice').textContent = totalPrice;
}

function couponCalculate(){
    const coupon15 = document.getElementById('coupon15').textContent.toLowerCase();
    const coupon20 = document.getElementById('coupon20').textContent.toLowerCase();
    const couponInput = document.getElementById('couponInput').value.toLowerCase();

    if(couponInput === coupon15){
        const totalPrice = document.getElementById('totalPrice').innerText;
        const grandTotal1 = totalPrice - (totalPrice * 0.15);

        document.getElementById('grandTotal').textContent = grandTotal1;
        


    }

    else if(couponInput === coupon20){
        const totalPrice = document.getElementById('totalPrice').innerText;
        const grandTotal1 = totalPrice - (totalPrice * 0.20);


        document.getElementById('grandTotal').textContent = grandTotal1;
    }

    else if (couponInput === ' '){
        document.getElementById('grandTotal').textContent = 'Please Input a code';
        
    }

    else{
        document.getElementById('grandPrice').textContent = 'Invalid code.'
    }


    
}





// Function to handle booking tickets
function bookTickets() {
    const selectedSeats = document.querySelectorAll('.selected');
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat.');
    } else if (selectedSeats.length > 4) {
        alert('You cannot book more than 4 seats at once.');
    } else {
        const seatNames = Array.from(selectedSeats).map(seat => seat.textContent);
        alert('Selected seats: ' + seatNames.join(', '));
    }
}

// Event listeners
document.getElementById('seats').addEventListener('click', handleSeatSelection);
document.getElementById('couponButton').addEventListener('click', couponCalculate)
document.getElementById('bookBtn').addEventListener('click', bookTickets);