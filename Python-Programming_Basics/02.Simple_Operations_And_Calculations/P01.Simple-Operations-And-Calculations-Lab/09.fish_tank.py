length = int(input())
width = int(input())
height = int(input())
percent_other_stuff = float(input())
aquarium_volume = length * width * height
liters = aquarium_volume / 1000
percent_other_stuff = percent_other_stuff / 100
liters = liters - liters * percent_other_stuff
print(f'{liters:.3f}')