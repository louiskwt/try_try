# Functional approach to implement a human vs human Notako game

players = [1, 2]

A=["A"]
B=["B"]
C=["C"]

for i in range(9):
    A.append(i)
    B.append(i)
    C.append(i)


def print_boards(A, B, C):
    # Get the heads of the board
    a = b = c = 1

    a_broad = "A      "
    b_broad = "B      "
    c_broad = "C      "

    if len(A) == 0:
        a_broad = ""
    if len(B) == 0:
        b_broad = ""
    if len(C) == 0:
        c_broad = ""
    

    print(f'{a_broad}{b_broad}{c_broad}')
    
    # Print rows and cols
    for _ in range(3):
        if a_broad != "":
            for _ in range(3):
                print(A[a], end=" ")
                a += 1
            print("",end=" ")

        if b_broad != "":
            for _ in range(3):
                print(B[b], end=" ")
                b += 1
            print("",end=" ")

        if c_broad != "":
            for _ in range(3):
                print(C[c], end=" ")
                c += 1
            print("",end=" ")
        print()




def game():
    gameover = False
    while not gameover:
        for n in range(len(players)):
            print_boards(A, B, C)
            while True:
                try:
                    move = input("Player "+str(players[n])+": ")
                    validate(move)
                    break
                except:
                    print("Invalid move, please input again")
                   
            check(move)
            if len(A) == 0 and len(B) == 0 and len(C) == 0:
                print(f"Winner: Player{players[n]}")
                gameover = True
                break
        
def validate(move):
    if len(move) < 2 or len(move) > 2:
        raise Exception("Invalid input")
    if move[0].upper() not in ["A", "B", "C"]:
        raise Exception("Invalid input")
    if move[0].upper() == "A" and int(move[1]) not in A:
        raise Exception("Invalid input")
    if move[0].upper() == "B" and int(move[1]) not in B:
        raise Exception("Invalid input")
    if move[0].upper() == "C" and int(move[1]) not in C:
        raise Exception("Invalid input")


def check(move):
    board = move[0].upper()
    target = int(move[1])
    
    if board == "A":
        for idx, a1 in enumerate(A):
            if a1 == target:
                A[idx] = "X"
                print(A)
        
        record(A)

    if board == "B":
    
        for idx, b1 in enumerate(B):
            if b1 == target:
                B[idx] = "X"
                print(B)
        record(B)

    if board == "C":

        for idx, c1 in enumerate(C):
            if c1 == target:
                C[idx] = "X"
                print(C)
        record(C)
        

def record(board):
        # check for X 
        row = [board[i:i+3] for i in range(1, len(board), 3)]

        col = [board[i:len(board):3] for i in range(1, 4)]

        cross1 = board[1:len(board):4]

        cross2 = board[3:len(board)-2:2]

        for j in row:
            z = int(j.count("X"))
            if z == 3:
            # clear the board
                board.clear()

        for k in col:
            c = int(k.count("X"))
            if c == 3:
                board.clear()

        if int(cross1.count("X")) == 3:
                board.clear()
        if int(cross2.count("X")) == 3:
                board.clear()
 

game()