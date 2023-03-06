# Selection Sort
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    
    return smallest_index

def findLargest(arr):
    largest = arr[0]
    largest_index = 0
    for i in range(1, len(arr)):
        if arr[i] > largest:
            largest = arr[i]
            largest_index = i
    return largest_index


# Big O = n^2

def selectionSort(arr, order):
    newArr = []
    sorting_func = findSmallest if order == "asc" else findLargest
    for _ in range(len(arr)):
        smallest = sorting_func(arr)
        newArr.append(arr.pop(smallest))
    
    return newArr


print(selectionSort([13, 27, 903, 100, 2304, 234, 65, 2, 4, 45], "desc"))
print(selectionSort([13, 300000, 342, 27, 903, 100, 2304, 234, 65, 2, 4, 45, 1], "asc"))