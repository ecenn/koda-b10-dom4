const board = document.createElement("div")
board.classList.add("board")

for (let i = 0; i < 8; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    
    if (i == 0 || i%2 == 0) {
        for (let i = 0; i < 4; i++) {
            const black = document.createElement("div")
            black.classList.add("black")
            const white = document.createElement("div")
            white.classList.add("white")
            row.append(white)
            row.append(black)
        }
        board.append(row)
    } else {
        for (let i = 0; i < 4; i++) {
            const black = document.createElement("div")
            black.classList.add("black")
            const white = document.createElement("div")
            white.classList.add("white")
            row.append(black)
            row.append(white)
        }
        board.append(row)
    }
}

document.querySelector("body").append(board)