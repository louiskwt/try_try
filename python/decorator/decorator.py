def func(f):
    def wrapper(*args, **kwargs):
        print("Started")
        rv = f(*args, **kwargs) 
        print("Ended")

        return rv
    
    return wrapper

@func               # decorator ==> func2 = func(func2)
def func2(x, lol):
    print(x, lol)
    return lol

@func
def func3(x):
    print(x)

# func3 = func(func3)

# x = func2(5, "haha")
# func3(6)

# print(x)

import time
from typing import Dict

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        rv = func(*args, **kwargs)
        total = time.time() - start
        print(f"Time: {total:.6f}")

        return rv

    return wrapper

@timer
def fib1(n: int) -> int:
    if n == 0: return 0
    
    last: int = 0
    next: int = 1

    for _ in range(1, n):
        last, next = next, last + next

       
    return next

#navie recursion
@timer
def fib2(n: int) -> int:
    if n <= 2:
        return n
    
    return fib2(n - 1) + fib2(n - 2)


memo: Dict[int, int] = {0: 0, 1: 1}

@timer
def fib3(n: int) -> int:
    if n not in memo:
        memo[n] = fib3(n-1) + fib3(n-2)
    return memo[n]


# y = fib2(20)


z = fib3(20)

x = fib1(100)
print(f"result for x: {x}")
# print(f"results for y: {y}")
print(f"result for z: {z}")
