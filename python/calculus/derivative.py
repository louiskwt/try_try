from sympy import *

# x, y, z = symbols('x y z')

# f = 2*x**2+5

# g = 3*sin(y)

# h = sin(x)/cos(x)

# df = diff(f, x)

# print(df)

# dg = diff(g, y)

# print(dg)

# dh = diff(h, x)
# print(dh)

# i = symbols('i')

# u = 3*i**4 + 2*i**3 - i ** 2 + 36

# d2u = diff(u, i, 3)

# print(d2u)

# complex derivative
j = symbols('j')

w = (1 / (j ** 2 + 4))

d2w = diff(w, j, 2)

print(d2w)
