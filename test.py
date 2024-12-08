def calculate_total(price_list):
    total = 0
    for price in price_list:
        total += price  # Could suggest using sum() for optimization
    return total

def process_user_input():
    user_input = input("Enter your age: ")
    age = int(user_input)  # Potential issue: no error handling for invalid input
    if age < 18:
        print("Access denied.")
    else:
        print("Access granted.")

def data_processing(data):
    for i in range(len(data)):  # Inefficient: Could use 'enumerate'
        print(f"Processing item {data[i]}")
