async function searchMovies() {
    let query = document.getElementById("searchBox").value.trim();
    if (query.length < 2) {
        document.getElementById("results").innerHTML = "";
        return;
    }
    
    try {
        let response = await fetch(`/search?q=${query}`);
        let data = await response.json();
        
        let output = "<h2>Search Results:</h2>";
        for (let site in data) {
            output += `<div class="site-section"><h3>${site.toUpperCase()}</h3><ul>`;
            data[site].forEach(movie => {
                output += `<li>${movie}</li>`;
            });
            output += "</ul></div>";
        }
        
        document.getElementById("results").innerHTML = output;
    } catch (error) {
        document.getElementById("results").innerHTML = '<p class="error">Error fetching search results.</p>';
        console.error("Search error:", error);
    }
}