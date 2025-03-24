// Toggle between Login and Book Page for Guest Login
document.getElementById('twitter-btn').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('book-page').style.display = 'block';
});
document.getElementById('facebook-btn').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('book-page').style.display = 'block';
});
document.getElementById('google-btn').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('book-page').style.display = 'block';
});
document.getElementById('guest-btn').addEventListener('click', function() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('book-page').style.display = 'block';
});

// Handle button clicks for login (Google, Facebook, Twitter, Guest)
document.getElementsByClassName('login-btn').addEventListener('click', function() {
    loginRedirect('Google');
});
document.getElementsByClassName('facebook-btn').addEventListener('click', function() {
    loginRedirect('Facebook');
});
document.getElementsByClassName('twitter-btn').addEventListener('click', function() {
    loginRedirect('Twitter');
});
document.getElementsByClassName('twitter-btn').addEventListener('click', function() {
    loginRedirect('Guest');
});

// Handle Search Functionality
function searchBooks() {
    let query = document.getElementById('search-bar').value.toLowerCase();
    let books = document.querySelectorAll('.book-card');
    books.forEach(book => {
        let title = book.querySelector('h4').textContent.toLowerCase();
        if (title.includes(query)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

// Clear Search Bar
function clearSearch() {
    document.getElementById('search-bar').value = '';
    searchBooks();
}

// Function to handle login redirects
function loginRedirect(platform) {
    alert(`You have logged in with ${platform}`);
    document.getElementById('login-page').style.display = 'none';  // Hide login page
    document.getElementById('book-page').style.display = 'block';  // Show book page
}

window.onload = function() {
    setTimeout(function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, 3000); // 3 seconds delay before scrolling down
};
let selectedRating = 0;

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        selectedRating = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
        for (let i = 0; i < selectedRating; i++) {
            document.querySelectorAll('.star')[i].classList.add('active');
        }
    });
});
function submitReview() {
    let reviewText = document.getElementById('review-text').value.trim();
    
    if (selectedRating === 0 || reviewText === "") {
        alert("Please select a rating and write a review.");
        return;
    }

    let reviewList = document.getElementById('review-list');
    let newReview = document.createElement('li');
    newReview.innerHTML = `<strong>Rating: ${"★".repeat(selectedRating)}</strong><br>${reviewText}`;
    
    reviewList.appendChild(newReview);
    document.getElementById('review-text').value = ""; 
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
}

