# Chess-Game-Engine - A Brand New Project

# What is this project going to contain ?
Most of the core features of chess... such as:
    
- Black & White pieces
- A board
- 2x Rook, 2x horse, 2x bishop, 1 queen, 1 king
- 8x pawns - for each team
- Castling - king with rook
- En passant
- Promotion - your pawn can promote to be either: a queen, rook, bishop, horse
- legal & illegal moves
- stale-mate
- check-mate - your in danger!
- winning, lossing, drawing - game over...

If I'm forgetting anything these features will also more than likly be added in also!

# Have a look at the project so far:

This board was printed to my terminal 

    kylekinsella@fedora:~/Documents/Chess-Game-Engine$ go run main.go

    [rook| horse| bishop| queen| king| bishop| horse| rook|]

    [pawn| pawn| pawn| pawn| pawn| pawn| pawn| pawn| pawn|]

    [______| ______| ______| ______| ______| ______| ______| ______|]

    [______| ______| ______| ______| ______| ______| ______| ______|]

    [______| ______| ______| ______| ______| ______| ______| ______|]

    [______| ______| ______| ______| ______| ______| ______| ______|]

    [pawn| pawn| pawn| pawn| pawn| pawn| pawn| pawn| pawn|]

    [rook| horse| bishop| queen| king| bishop| horse| rook|]


Now I've put the board on a endpoint as JSON and I can just pull this data down and map over it via React

![Chess Project Kanban Board](https://github.com/KyleKinsella/Chess-Game-Engine/blob/main/images/Screenshot%20From%202026-04-28%2019-26-28.png)

Processing the first piece to move: Knight.
![Knight movement](https://github.com/KyleKinsella/Chess-Game-Engine/blob/main/images/Screenshot%From%2026-05-10%12-45-39.png)

# Kanban Board
As I am building this project I am going to be using a kanban board to keep track of what I need to do and what has been complete and so much more!

Have a look at my kanban board: https://github.com/users/KyleKinsella/projects/5
    
# Tech Stack
## Backend
- Go

## Frontend
- HTML
- CSS
- JavaScript
- React

## Version Control
- Git

# Why Go ?
I chose to use Go for this project mainly because I really enjoy coding in Go and Go code is very easy to read and understand.

But another reason I chose Go is for the concurreny aspect of Go.

We all know the basics of chess and one of the most important things is raw speed for chess and Go's concurrency model is very good, so that is another reason to why I chose Go.

    For example,  
    Chess is a 2d array with Rows and Cols so for a lot of the project i'm going to be iterating twice like this:
        for i := 0; i < ROWS; i++ {
            for j := 0; j < COLS; j++ {
                // process here...
            }
        }

        so if I do this sequentially this will be quite slow but if I use Go's builtin Concurrency features, such as: Goroutines, Channels, Waitgroups, etc, I will be able to process the chess game a good bit faster!

# Might happen or might not
Have a database either, MySql, NoSql or possibly Redis, if I don't use a database, I might use local-storage. But as the project is early doors, this won't happen for a while.

# Engine
This part of the project is where the AI will come in to play! (this will most likly be the last feature).
