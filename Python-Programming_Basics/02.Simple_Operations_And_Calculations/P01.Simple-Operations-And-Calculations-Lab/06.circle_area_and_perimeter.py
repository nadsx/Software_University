from math import pi

radius = float(input())
area = radius**2 * pi
perimeter = 2 * pi * radius
print(f'{area:.2f}')
print(f'{perimeter:.2f}')