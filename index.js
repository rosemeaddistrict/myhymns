const lyris = "csvContent";
async function loadCsvData(filename) {
    const csvUrl = filename; // Replace with your CSV file URL
    try {
        const response = await fetch(csvUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        document.getElementById(lyris).innerText = csvText;
        // Further process the CSV text here (e.g., parse it into an array of objects)
    } catch (error) {
        console.error('Error fetching CSV:', error);
        document.getElementById(lyris).innerText = 'Error loading CSV data.';
    }
}