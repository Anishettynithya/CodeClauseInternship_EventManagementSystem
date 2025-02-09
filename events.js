
// Sample event data (Replace this with real event data or fetch from an API)
const events = [
    { title: "Tech Conference 2025", date: "March 10, 2025", location: "New York", category: "Technology" },
    { title: "Music Fest", date: "April 5, 2025", location: "Los Angeles", category: "Music" },
    { title: "Startup Meetup", date: "May 12, 2025", location: "San Francisco", category: "Business" }
];

// Function to display recommended events
function displayRecommendedEvents() {
    const eventContainer = document.getElementById("recommended-events");
    
    if (events.length === 0) {
        eventContainer.innerHTML = "<p>No events available.</p>";
        return;
    }

    let eventHTML = "";
    events.forEach(event => {
        eventHTML += `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Category:</strong> ${event.category}</p>
            </div>
        `;
    });

    eventContainer.innerHTML = eventHTML;
}

// Call the function after the page loads
document.addEventListener("DOMContentLoaded", displayRecommendedEvents);
use:-<script src="js/events.js"></script>
