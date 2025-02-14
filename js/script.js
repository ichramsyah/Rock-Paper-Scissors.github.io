document.addEventListener("DOMContentLoaded", function () {
    let playerScore = 0; // Variabel untuk menyimpan skor pemain
    const scoreClass = document.querySelector('.scoreClass');
    let heroImage = document.querySelector(".hero");

    setTimeout(() => {
        scoreClass.style.display = 'block';
        scoreClass.style.opacity = '1';
     
        scoreClass.style.transform = "translateY(0)";
    }, 4700);

    setTimeout(() => {
        heroImage.style.opacity = "1";
    }, 1500);

    setTimeout(() => {
        heroImage.style.opacity = "0";
    }, 4000);

    setTimeout(() => {
        heroImage.remove();
    }, 4500);

    let computer = document.querySelector(".computer");
    setTimeout(() => {
        computer.style.display = "flex";
    }, 4700);

    setTimeout(() => {
        computer.style.opacity = "1";
        computer.style.transform = "translateY(0)";
    }, 5000);

    let info = document.querySelector(".info");
    setTimeout(() => {
        info.style.display = "block";
    }, 4900);

    setTimeout(() => {
        info.style.opacity = "1";
        info.style.transform = "translateY(0)";
    }, 5300);

    let card = document.querySelector(".area-player");
    setTimeout(() => {
        card.style.display = "flex";
    }, 4900);

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 5500);

    // Event listener untuk pilihan pemain
    card.addEventListener("click", function (event) {
        if (
            event.target.classList.contains("rock") ||
            event.target.classList.contains("paper") ||
            event.target.classList.contains("scissors")
        ) {
            const computerDecision = getComputerDecision();
            const playerDecision = event.target.classList[0];
            const result = getPlayerDecision(computerDecision, playerDecision);

            spinImg();

            setTimeout(function () {
                const imgComputer = document.querySelector(".imgcomp");
                imgComputer.setAttribute("src", computerDecision + ".webp");

                info.innerHTML = result;

                // Update skor jika pemain menang
                if (result === "Menang!") {
                    playerScore++; // Tambah skor
                    updateScore(); // Panggil fungsi update score
                }
            }, 1600);
        }
    });

    // Fungsi untuk memperbarui tampilan skor
    function updateScore() {
        document.getElementById("player-score").textContent = playerScore;
    }

    // Fungsi untuk menentukan pilihan komputer
    function getComputerDecision() {
        const comp = Math.random();
        if (comp < 0.34) return "rock";
        if (comp >= 0.34 && comp < 0.64) return "paper";
        return "scissors";
    }

    // Fungsi untuk menentukan hasil permainan
    function getPlayerDecision(comp, player) {
        if (player === comp) return "Seri!";
        if (player === "rock") return comp === "paper" ? "Kalah!" : "Menang!";
        if (player === "paper") return comp === "rock" ? "Menang!" : "Kalah!";
        if (player === "scissors") return comp === "paper" ? "Menang!" : "Kalah!";
    }

    // Animasi spin gambar komputer
    function spinImg() {
        const allImage = ["rock", "paper", "scissors"];
        let i = 0;
        const timeStart = new Date().getTime();
        const imgComputer = document.querySelector(".imgcomp");

        const intervalId = setInterval(function () {
            if (new Date().getTime() - timeStart > 1600) {
                clearInterval(intervalId);
                return;
            }
            imgComputer.setAttribute("src", allImage[i++] + ".webp");
            if (i >= allImage.length) i = 0;
        }, 100);
    }
});


