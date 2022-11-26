from typing import TypeVar, Generic, List

T = TypeVar("T")

# implement a stack data structure to represent the Tower (LIFO)
class Stack(Generic[T]):

    def __init__(self) -> None:
        self._container: List[T] = []
    
    def push(self, item: T) -> None:
        self._container.append(item)
    
    def pop(self) -> T:
        return self._container.pop()
    
    def isEmpty(self) -> bool:
        return not self._container
    
    def __repr__(self) -> str:   # specifiy what will be output when print() is applied to a Stack.
        return repr(self._container)


num_discs: int = 144
tower_a: Stack[int] = Stack()
tower_b: Stack[int] = Stack()
tower_c: Stack[int] = Stack()

# load the first tower to begin with
for i in range(1, num_discs + 1):
    tower_a.push(i)

print(f"start: {tower_a}")

def hanoi(begin: Stack[int], end: Stack[int], temp: Stack[int], n: int) -> None:
    if n == 1:
        end.push(begin.pop())
    else:
        hanoi(begin, temp, end, n - 1)
        hanoi(begin, end, temp, 1)
        hanoi(temp, end, begin, n - 1)

# total moves = 2^n - 1
total_moves = pow(2, num_discs) - 1

print(total_moves)

def hanoi2(begin: Stack[int], end: Stack[int], temp: Stack[int], total: int) -> None:
    for i in range(1, total):
        if not begin.isEmpty() and i % 3 == 1:
            end.push(begin.pop())
        
        if not begin.isEmpty() and i % 3 == 2:
            temp.push(begin.pop())
        
        if not temp.isEmpty() and i % 3 == 0:
            end.push(temp.pop())

        if temp.isEmpty() and begin.isEmpty():
            break


if __name__ == "__main__":
    hanoi2(tower_a, tower_c, tower_b, total_moves)

    print(tower_a)
    print(tower_b)
    print(f"tower c -- finished: ${tower_c}")
