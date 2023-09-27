# Counting variant
#  Let A=\{{e, u}A={e,u} be a set of two letters and B=\{8, 2, 5\}B={8,2,5} be a set of three digits. What is the number of ways to select one element from AA and one element from BB?

from itertools import product, permutations

# variants = []

# for p in product({'e', 'u'}, {8, 2, 5}):
#     variants.append(p)
#     print(variants)
#     print("Number of ways: ", len(variants))

# finding combinations
# combination = []
# for number, pw in enumerate(
#     product("abcdefghijklmnopqrstuvwxyz", repeat=5)
# ):
#     combination.append(pw)

# print(len(combination))

# how many integers from 0 to 9999 have exactly one digit 7
print(len([n for n in range(10000) if str(n).count('3') == 1 and str(n).count('1') == 1]))  # list counting

# print(len([t for t in product(range(10), repeat=4) if t.count(7) == 1])) # counting tuple


# # Counting with restriction
# print(len([n for n in range(10000) if '7' in str(n)]))

# # Permutation
# combo = []
# for p in permutations("abc", 3):
#     combo.append(p)

# print(len(combo))