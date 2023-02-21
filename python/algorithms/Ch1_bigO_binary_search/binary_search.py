# Binary Search

def binary_search(list, target):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (high - low) // 2
        item = list[mid]
        
        if target > item:
            low = mid + 1
        elif target < item:
            high = mid + 1
        elif target == item:
            return item
    return None

outcome = binary_search([1, 2, 3, 4, 5, 6, 7, 8], 3)
print(outcome)