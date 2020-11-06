def solution(n):
    list_of_keys = ["M", 1000, "CM", 900, "D", 500, "CD", 400, "C", 100, "XC", 90, "L", 50, "XL", 40, "X", 10, "IX", 9, "V", 5, "IV", 4, "I", 1]
    roman_number = []
    for index in range(len(list_of_keys)):
        if len(list_of_keys) >= 2:
            if n//(list_of_keys[1]) > 0:
                roman_number.append((n//(list_of_keys[1]))*(list_of_keys[0]))
                n = n % (list_of_keys[1])
                del list_of_keys[1]
                del list_of_keys[0]
            else:
                del list_of_keys[1]
                del list_of_keys[0]
        elif len(list_of_keys) == 0:
                break
    return "".join(roman_number)
    
    
# print(solution(1989))
