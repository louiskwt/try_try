from sympy import *

x, y, z = symbols('x y z')

f = 2*x**2+5

g = 3*sin(y)

df = diff(f, x)

print(df)

dg = diff(g, y)

print(dg)
