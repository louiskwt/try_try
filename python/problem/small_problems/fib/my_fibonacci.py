import time

# memoization
def fib(n, computed = {0: 0, 1: 1}):
    if n not in computed:
        computed[n] = fib(n-1, computed) + fib(n-2, computed)

    return computed[n]

def my_fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
    

if __name__ == "__main__":
    time_one = time.time()
    print(my_fib(400))
    time_one_finish = '{:.5f}'.format(time.time() - time_one)
    print(f"Memoized fib completed: {time_one_finish}")
  