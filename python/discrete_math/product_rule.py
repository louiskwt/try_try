# Counting variant
#  Let A=\{{e, u}A={e,u} be a set of two letters and B=\{8, 2, 5\}B={8,2,5} be a set of three digits. What is the number of ways to select one element from AA and one element from BB?

from itertools import product

variants = []

for p in product({'e', 'u'}, {8, 2, 5}):
    variants.append(p)
    print(variants)
    print("Number of ways: ", len(variants))