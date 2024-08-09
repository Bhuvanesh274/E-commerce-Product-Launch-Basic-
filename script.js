document.getElementById('preorder-btn').onclick = function() {
    alert('Thank you for your order! Your order will be deliverd as soon as possible.');
};

document.getElementById('submit-button').onclick = function() {
    var reviewText = document.getElementById('review-text').value;

    if (reviewText.trim() !== '') {
        document.getElementById('message').innerText = 'Thank you for your review!';
        document.getElementById('review-text').value = ''; // Clear the text area
    } else {
        document.getElementById('message').innerText = 'Please write a review before submitting.';
    }
};
