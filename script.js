function searchEvents() {
    let query = document.getElementById("eventSearch").value.toLowerCase();
    let events = ["Music Festival", "Tech Conference", "Sports Event", "Art Exhibition"];
    let results = events.filter(event => event.toLowerCase().includes(query));
    document.getElementById("eventsList").innerHTML = results.length ? results.join("<br>") : "No events found.";
}

function startVoiceSearch() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        document.getElementById("eventSearch").value = event.results[0][0].transcript;
        searchEvents();
    };
    recognition.start();
}