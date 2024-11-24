
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    // 2. Generate a random excuse

    const excuseText = `The dog ate my homework for breakfast`;

    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = excuseText;
}