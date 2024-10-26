
        document.getElementById('trackOrderForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const orderId = document.getElementById('orderId').value;

            // Simulate fetching order status (you can replace this with an API call)
            const orderData = {
                '123456': {
                    status: 'Shipped',
                    details: ['Item: Running Shoes', 'Quantity: 1', 'Estimated Delivery: 3-5 days'],
                },
                '654321': {
                    status: 'Delivered',
                    details: ['Item: Basketball Shoes', 'Quantity: 2', 'Delivered on: 10th Oct 2024'],
                }
            };

            const order = orderData[orderId];

            if (order) {
                document.getElementById('statusMessage').innerText = `Your order is currently: ${order.status}`;
                const detailsList = document.getElementById('orderDetails');
                detailsList.innerHTML = ''; // Clear previous details

                order.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.innerText = detail;
                    detailsList.appendChild(li);
                });

                document.getElementById('orderStatus').style.display = 'block';
            } else {
                alert('Order ID not found. Please check and try again.');
            }
        });
    