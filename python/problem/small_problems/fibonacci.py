from typing import Dict, Generator
from functools import lru_cache

# Fibonacci Sequence: 0, 1, 1, 2, 3...
# f(0) = 0, f(1) = 1, f(2) = 1 ... 
# f(3) = f(3-1) + f(3-2) 
#        f(2) + f(1)
#         1 + 1 = 2

memo: Dict[int, int] = {0: 0, 1: 1} # memonized all the base cases

# Basic recursive calls
def fib(n: int) -> int:
    # Base case
    if n <= 2:
        return n

    return fib(n-1) + fib(n-2)


# memoizated fibonacci
def memo_fib(n: int) -> int:
    if n not in memo:
        memo[n] = memo_fib(n - 1) + memo_fib(n - 2)
    
    return memo[n] 

@lru_cache(maxsize=None)
def cached_fib(n: int) -> int:
    if n < 2:  #base case
        return n
    return cached_fib(n - 2) + cached_fib(n - 1)

# iterative approach
def fib5(n: int) -> int:
    if n == 0: return n # special case
    last: int = 0    # initially set to fib(0)
    next: int = 1    # initially set to fib(1)

    for _ in range(1, n):
        last, next = next, last + next
    return next

def fib_gen(n: int) -> Generator[int, None, None]:
    yield 0
    if n > 0: yield 1
    last: int = 0
    next: int = 1

    for _ in range(1, n):
        last, next = next, next + last
        yield next # main generation step

if __name__ == "__main__":
    print(fib(5))
    print(fib(10))
    # print(fib(100)) --> will froze
    print(memo_fib(500))
    print(cached_fib(800))
    print(fib5(800))
    print(fib5(1000))
    print(fib5(1200))

    print("---------------------------------")
    for i in fib_gen(100):
        print(i)

