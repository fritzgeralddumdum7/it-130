const handleSubmit = (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const size = document.getElementById('size').value;
  const type = document.querySelector('input[name="discount"]:checked')?.value;
  const message = document.getElementById('alert');
  const extraSweater = document.getElementById('extra-sweater');
  const discount = getDiscount(type);
  const price = extraSweater.checked ? 39.99 : 29.99;
  const discountedPrice = (price - (price * (discount / 100))).toFixed(2);
  const totalPrice = type ? discountedPrice : price;

  message.textContent = `Thank you, ${name} for supporting DePaul! You ordered a ${size.toLowerCase()} sweater. Your cost is: $${totalPrice}.`;
  message.style.display = 'block';
}

const getDiscount = (type) => {
  if (type === 'students') {
    return 25;
  } else if (type === 'alumni') {
    return 10;
  } else {
    return 15;
  }
}

form.addEventListener('submit', handleSubmit);
