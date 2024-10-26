// buy now form payment method script

document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
    input.addEventListener('change', function() {
        const cardInfo = document.querySelector('.card-info');
        if (this.value === 'Credit Card') {
            cardInfo.style.display = 'block';
        } else {
            cardInfo.style.display = 'none';
        }
    });
});
