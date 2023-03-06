# Selection Sort
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    
    return smallest_index

# Big O = n^2

def selectionSort(arr):
    newArr = []
    for _ in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    
    return newArr


print(selectionSort([13, 27, 903, 100, 2304, 234, 65, 2, 4, 45]))