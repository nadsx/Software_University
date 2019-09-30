dogs_count = int(input())
other_animals_count = int(input())
dogs_food_price = dogs_count * 2.5
other_animals_food_price = other_animals_count * 4
food_price_total = dogs_food_price + other_animals_food_price
print(f'{food_price_total:.2f} lv.')