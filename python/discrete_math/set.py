# Set Theory: divisible probem

def find_divisible_number(r: int, divisible: bool = True):
    if divisible: 
        s: list = [n for n in range(1, r + 1) if n % 2 == 0 or n % 3==0]
    else:
        s: list = [n for n in range(1, r+1) if n % 2 != 0 and n % 3 != 0]

    return len(s)


if __name__ == "__main__":
    print(find_divisible_number(1000, divisible=True))
    print(find_divisible_number(1000, divisible=False))