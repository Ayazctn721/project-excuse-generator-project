
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');


    // 2. Generate a random excuse
    function generateExcuse() {

        const part1 = [
            "Iron Man",
            "Captain America",
            "Thor",
            "Hulk",
            "Black Widow",
            "Hawkeye",
            "Loki",
            "Nick Fury",
        ];

        const part2 = [
            "flew and hit the sky",
            "smashed the door with a hammer",
            "tested immortality",
            "tried running faster than light",
            "stole a spaceship",
            "made toast with a laser",
            "threw a building",
            "turned invisible and disappeared",
        ];

        const part3 = [
            "my shield",
            "my hammer",
            "my Hulkbuster armor",
            "the SHIELD files",
            "our quantum tunnel",
            "my key portal",
            "my Thanos plans",
            "my comic book collection",
        ];

        const part4 = [
            "last week",
            "last night",
            "during Infinity War",
            "at the first Avengers meeting",
            "right before dawn",
            "while vacationing in Wakanda",
            "during a multiverse journey",
            "in the middle of the final battle",
        ]

        const indexPart1 = Math.floor(Math.random() * part1.length);
        const indexPart2 = Math.floor(Math.random() * part2.length);
        const indexPart3 = Math.floor(Math.random() * part3.length);
        const indexPart4 = Math.floor(Math.random() * part4.length);

        return `${part1[indexPart1]} ${part2[indexPart2]} ${part3[indexPart3]} ${part4[indexPart4]}`;
    }

    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = generateExcuse();

    // 4. event listener to the button to change the excuse on click
    document.getElementById("click-btn").addEventListener("click", function () {
        excuse.innerHTML = generateExcuse();
    });
}