# Python 3 Comprehensive Reference with Major Libraries

## Python 3 Core Language

### Basic Syntax and Data Types

#### Variables and Basic Operations
```python
# Variable assignment
x = 10
name = "Python"
pi = 3.14159
is_active = True

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0

# Basic operations
result = 10 + 5 * 2  # 20
power = 2 ** 3       # 8
division = 10 / 3    # 3.333...
floor_div = 10 // 3  # 3
modulo = 10 % 3      # 1
```

#### Data Types
```python
# Numbers
integer = 42
floating = 3.14
complex_num = 3 + 4j

# Strings
single_quote = 'Hello'
double_quote = "World"
multiline = """This is a
multiline string"""
f_string = f"Value is {integer}"

# Boolean
is_true = True
is_false = False

# None
empty_value = None
```

### Data Structures

#### Lists
```python
# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty_list = []

# List operations
numbers.append(6)           # Add element
numbers.insert(0, 0)        # Insert at index
numbers.remove(3)           # Remove first occurrence
popped = numbers.pop()      # Remove and return last element
numbers.extend([7, 8, 9])   # Add multiple elements

# List comprehensions
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# Slicing
first_three = numbers[:3]
last_three = numbers[-3:]
every_second = numbers[::2]
```

#### Dictionaries
```python
# Creating dictionaries
person = {"name": "Alice", "age": 30, "city": "New York"}
empty_dict = {}

# Dictionary operations
person["email"] = "alice@email.com"  # Add/update
age = person.get("age", 0)           # Get with default
person.pop("city")                   # Remove and return
keys = person.keys()                 # Get keys
values = person.values()             # Get values
items = person.items()               # Get key-value pairs

# Dictionary comprehension
squared = {x: x**2 for x in range(5)}
```

#### Sets
```python
# Creating sets
numbers_set = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 4])  # Removes duplicates

# Set operations
numbers_set.add(6)                # Add element
numbers_set.remove(3)             # Remove element
numbers_set.discard(10)           # Remove if exists
other_set = {4, 5, 6, 7}
union = numbers_set | other_set   # Union
intersection = numbers_set & other_set  # Intersection
difference = numbers_set - other_set    # Difference
```

#### Tuples
```python
# Creating tuples
coordinates = (10, 20)
single_item = (42,)  # Note the comma
empty_tuple = ()

# Tuple unpacking
x, y = coordinates
a, *rest, last = (1, 2, 3, 4, 5)  # a=1, rest=[2,3,4], last=5
```

### Control Flow

#### Conditional Statements
```python
# if-elif-else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# Ternary operator
status = "pass" if score >= 60 else "fail"

# Multiple conditions
if 80 <= score <= 90 and score != 85:
    print("Good score, but not 85")
```

#### Loops
```python
# for loops
for i in range(5):
    print(i)

for item in [1, 2, 3]:
    print(item)

for key, value in {"a": 1, "b": 2}.items():
    print(f"{key}: {value}")

# while loops
count = 0
while count < 5:
    print(count)
    count += 1

# Loop control
for i in range(10):
    if i == 3:
        continue  # Skip iteration
    if i == 7:
        break     # Exit loop
    print(i)
```

### Functions

#### Basic Functions
```python
def greet(name):
    return f"Hello, {name}!"

def add_numbers(a, b=0):  # Default parameter
    return a + b

def flexible_sum(*args):  # Variable arguments
    return sum(args)

def process_data(**kwargs):  # Keyword arguments
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Lambda functions
square = lambda x: x**2
add = lambda x, y: x + y

# Higher-order functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

#### Decorators
```python
def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    time.sleep(1)
    return "Done"
```

### Classes and Objects

#### Basic Classes
```python
class Person:
    species = "Homo sapiens"  # Class variable
    
    def __init__(self, name, age):
        self.name = name          # Instance variable
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old"
    
    def __str__(self):
        return f"Person({self.name}, {self.age})"
    
    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2024 - birth_year
        return cls(name, age)
    
    @staticmethod
    def is_adult(age):
        return age >= 18

# Usage
person = Person("Alice", 30)
person2 = Person.from_birth_year("Bob", 1990)
```

#### Inheritance
```python
class Employee(Person):
    def __init__(self, name, age, salary):
        super().__init__(name, age)
        self.salary = salary
    
    def introduce(self):  # Method overriding
        base_intro = super().introduce()
        return f"{base_intro} and I earn ${self.salary}"

class Manager(Employee):
    def __init__(self, name, age, salary, team_size):
        super().__init__(name, age, salary)
        self.team_size = team_size
```

### Exception Handling
```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Cannot divide by zero: {e}")
except ValueError:
    print("Invalid value")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No exceptions occurred")
finally:
    print("This always runs")

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
```

### File Operations
```python
# Reading files
with open('file.txt', 'r') as f:
    content = f.read()          # Read entire file
    lines = f.readlines()       # Read all lines

# Writing files
with open('output.txt', 'w') as f:
    f.write("Hello, World!")
    f.writelines(['line1\n', 'line2\n'])

# JSON operations
import json
data = {"name": "Alice", "age": 30}
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)

with open('data.json', 'r') as f:
    loaded_data = json.load(f)
```

---

## NumPy

### Array Creation and Basic Operations
```python
import numpy as np

# Array creation
arr1d = np.array([1, 2, 3, 4, 5])
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
zeros = np.zeros((3, 4))
ones = np.ones((2, 3))
empty = np.empty((2, 2))
arange = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]
random = np.random.random((3, 3))

# Array properties
print(arr2d.shape)      # (2, 3)
print(arr2d.dtype)      # int64 (or similar)
print(arr2d.size)       # 6
print(arr2d.ndim)       # 2
```

### Array Operations
```python
# Mathematical operations
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

addition = a + b        # Element-wise addition
multiplication = a * b  # Element-wise multiplication
power = a ** 2         # Element-wise power
dot_product = np.dot(a, b)

# Universal functions
sqrt_vals = np.sqrt(a)
exp_vals = np.exp(a)
log_vals = np.log(a)
sin_vals = np.sin(a)

# Aggregation functions
total = np.sum(a)
mean = np.mean(a)
std = np.std(a)
maximum = np.max(a)
minimum = np.min(a)
```

### Array Indexing and Slicing
```python
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# Basic indexing
element = arr[1, 2]     # 6
row = arr[1, :]         # [4, 5, 6]
column = arr[:, 1]      # [2, 5, 8]

# Boolean indexing
mask = arr > 5
filtered = arr[mask]    # [6, 7, 8, 9]

# Fancy indexing
indices = [0, 2]
selected = arr[indices, :]  # Rows 0 and 2
```

### Array Reshaping and Manipulation
```python
# Reshaping
original = np.arange(12)
reshaped = original.reshape(3, 4)
flattened = reshaped.flatten()

# Concatenation and splitting
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])
h_concat = np.hstack([a, b])  # Horizontal concatenation
v_concat = np.vstack([a, b])  # Vertical concatenation

# Splitting
split_arrays = np.hsplit(h_concat, 2)
```

---

## Pandas

### Data Structures

#### Series
```python
import pandas as pd

# Creating Series
s1 = pd.Series([1, 2, 3, 4, 5])
s2 = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
s3 = pd.Series({'x': 100, 'y': 200, 'z': 300})

# Series operations
print(s2['a'])          # 10
print(s2.values)        # Array of values
print(s2.index)         # Index object
filtered = s2[s2 > 15]  # Boolean indexing
```

#### DataFrames
```python
# Creating DataFrames
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 35],
        'City': ['NYC', 'LA', 'Chicago']}
df = pd.DataFrame(data)

# From CSV
df = pd.read_csv('data.csv')

# From dictionary of lists
df2 = pd.DataFrame({
    'A': [1, 2, 3],
    'B': [4, 5, 6],
    'C': [7, 8, 9]
})
```

### Data Inspection and Information
```python
# Basic info
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.info())        # Data types and non-null counts
print(df.describe())    # Statistical summary
print(df.shape)         # (rows, columns)
print(df.columns)       # Column names
print(df.index)         # Row index
```

### Data Selection and Indexing
```python
# Column selection
name_column = df['Name']
multiple_cols = df[['Name', 'Age']]

# Row selection
first_row = df.iloc[0]          # By integer position
specific_rows = df.iloc[0:2]    # Slice by position
by_label = df.loc[0]            # By label
conditional = df[df['Age'] > 28] # Boolean indexing

# Cell selection
cell_value = df.loc[0, 'Name']  # Specific cell
df.at[0, 'Name'] = 'Alice Smith'  # Set specific cell
```

### Data Cleaning and Manipulation
```python
# Handling missing data
df_clean = df.dropna()                    # Remove rows with NaN
df_filled = df.fillna(0)                  # Fill NaN with 0
df['Age'].fillna(df['Age'].mean(), inplace=True)  # Fill with mean

# Adding/removing columns
df['Full_Name'] = df['Name']              # Add column
df['Age_Group'] = df['Age'].apply(lambda x: 'Adult' if x >= 18 else 'Minor')
df.drop('City', axis=1, inplace=True)     # Remove column

# Data type conversion
df['Age'] = df['Age'].astype('int64')
df['Name'] = df['Name'].astype('string')

# Renaming
df.rename(columns={'Name': 'Full_Name'}, inplace=True)
```

### Data Analysis and Aggregation
```python
# Grouping
grouped = df.groupby('City')['Age'].mean()
multi_group = df.groupby(['City', 'Age_Group']).size()

# Aggregation functions
stats = df.agg({
    'Age': ['mean', 'std', 'min', 'max'],
    'Name': 'count'
})

# Pivot tables
pivot = df.pivot_table(values='Age', index='City', columns='Age_Group', aggfunc='mean')

# Sorting
sorted_df = df.sort_values('Age', ascending=False)
sorted_multi = df.sort_values(['City', 'Age'])
```

### Merging and Joining
```python
df1 = pd.DataFrame({'A': [1, 2, 3], 'B': ['a', 'b', 'c']})
df2 = pd.DataFrame({'A': [1, 2, 4], 'C': ['x', 'y', 'z']})

# Merging
inner_merge = pd.merge(df1, df2, on='A', how='inner')
outer_merge = pd.merge(df1, df2, on='A', how='outer')
left_merge = pd.merge(df1, df2, on='A', how='left')

# Concatenating
concat_df = pd.concat([df1, df2], axis=0)  # Rows
concat_cols = pd.concat([df1, df2], axis=1)  # Columns
```

### Time Series Operations
```python
# Date parsing
df['Date'] = pd.to_datetime(df['Date'])
df.set_index('Date', inplace=True)

# Date operations
df['Year'] = df.index.year
df['Month'] = df.index.month
df['Weekday'] = df.index.dayname()

# Resampling
monthly = df.resample('M').mean()  # Monthly averages
daily = df.resample('D').interpolate()  # Daily interpolation
```

---

## Matplotlib

### Basic Plotting
```python
import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', color='blue', linewidth=2)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)
plt.show()

# Multiple lines
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)', linestyle='--')
plt.legend()
plt.show()
```

### Different Plot Types
```python
# Scatter plot
x = np.random.randn(100)
y = np.random.randn(100)
colors = np.random.rand(100)

plt.scatter(x, y, c=colors, alpha=0.7, s=50)
plt.colorbar()
plt.title('Scatter Plot')
plt.show()

# Bar plot
categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]

plt.bar(categories, values, color=['red', 'green', 'blue', 'orange'])
plt.title('Bar Chart')
plt.ylabel('Values')
plt.show()

# Histogram
data = np.random.normal(100, 15, 1000)
plt.hist(data, bins=30, alpha=0.7, color='skyblue', edgecolor='black')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()

# Box plot
data = [np.random.normal(100, 10, 100),
        np.random.normal(90, 20, 100),
        np.random.normal(80, 30, 100)]
plt.boxplot(data, labels=['Group 1', 'Group 2', 'Group 3'])
plt.ylabel('Values')
plt.title('Box Plot')
plt.show()
```

### Subplots and Layout
```python
# Subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot in each subplot
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('sin(x)')

axes[0, 1].plot(x, np.cos(x), 'r--')
axes[0, 1].set_title('cos(x)')

axes[1, 0].scatter(np.random.randn(50), np.random.randn(50))
axes[1, 0].set_title('Scatter')

axes[1, 1].hist(np.random.normal(0, 1, 1000), bins=30)
axes[1, 1].set_title('Histogram')

plt.tight_layout()
plt.show()
```

### Customization and Styling
```python
# Style settings
plt.style.use('seaborn-v0_8')  # Or 'ggplot', 'dark_background', etc.

# Custom styling
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x, y, linewidth=3, color='#2E86AB', linestyle='-', marker='o', markersize=4)
ax.set_facecolor('#F8F8F8')
ax.grid(True, alpha=0.3)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Text annotations
ax.annotate('Maximum', xy=(np.pi/2, 1), xytext=(2, 1.2),
            arrowprops=dict(arrowstyle='->', color='red'))

plt.show()
```

### 3D Plotting
```python
from mpl_toolkits.mplot3d import Axes3D

# 3D surface plot
fig = plt.figure(figsize=(12, 8))
ax = fig.add_subplot(111, projection='3d')

x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

surf = ax.plot_surface(X, Y, Z, cmap='viridis', alpha=0.8)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
plt.colorbar(surf)
plt.show()
```

---

## SciPy

### Scientific Computing
```python
from scipy import optimize, integrate, interpolate, linalg
from scipy import stats
import numpy as np

# Optimization
def objective_function(x):
    return x**2 + 2*x + 1

result = optimize.minimize(objective_function, x0=0)
print(f"Minimum at x = {result.x[0]:.4f}")

# Root finding
def equation(x):
    return x**3 - 2*x - 5

root = optimize.fsolve(equation, 2)[0]
print(f"Root: {root:.4f}")
```

### Integration
```python
# Numerical integration
def integrand(x):
    return np.exp(-x**2)

result, error = integrate.quad(integrand, 0, np.inf)
print(f"Integral result: {result:.6f}")

# Multiple integration
def integrand_2d(y, x):
    return x * y

result_2d = integrate.dblquad(integrand_2d, 0, 1, 0, 1)[0]
```

### Interpolation
```python
# 1D interpolation
x = np.linspace(0, 10, 11)
y = np.sin(x)
f = interpolate.interp1d(x, y, kind='cubic')

x_new = np.linspace(0, 10, 100)
y_new = f(x_new)

plt.plot(x, y, 'o', x_new, y_new, '-')
plt.show()
```

### Linear Algebra
```python
# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication
C = linalg.matmul(A, B)

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = linalg.eig(A)

# Solve linear system Ax = b
b = np.array([1, 2])
x = linalg.solve(A, b)

# Matrix decompositions
U, s, Vh = linalg.svd(A)  # Singular Value Decomposition
```

### Statistics
```python
# Statistical distributions
from scipy import stats

# Normal distribution
normal_dist = stats.norm(loc=0, scale=1)
samples = normal_dist.rvs(1000)  # Random samples
pdf_values = normal_dist.pdf(np.linspace(-3, 3, 100))
cdf_values = normal_dist.cdf(np.linspace(-3, 3, 100))

# Statistical tests
data1 = np.random.normal(0, 1, 100)
data2 = np.random.normal(0.5, 1, 100)

# T-test
t_stat, p_value = stats.ttest_ind(data1, data2)
print(f"T-test p-value: {p_value:.6f}")

# Correlation
correlation, p_val = stats.pearsonr(data1[:50], data2[:50])
print(f"Correlation: {correlation:.4f}")
```

### Signal Processing
```python
from scipy import signal

# Generate signal
t = np.linspace(0, 1, 500)
sig = np.sin(2 * np.pi * 5 * t) + 0.5 * np.sin(2 * np.pi * 10 * t)

# Apply filter
b, a = signal.butter(4, 0.2, 'low')  # Low-pass filter
filtered_signal = signal.filtfilt(b, a, sig)

# FFT
frequencies, power_spectrum = signal.welch(sig)

plt.figure(figsize=(12, 8))
plt.subplot(3, 1, 1)
plt.plot(t, sig)
plt.title('Original Signal')

plt.subplot(3, 1, 2)
plt.plot(t, filtered_signal)
plt.title('Filtered Signal')

plt.subplot(3, 1, 3)
plt.semilogy(frequencies, power_spectrum)
plt.title('Power Spectrum')
plt.tight_layout()
plt.show()
```

## Common Workflows and Best Practices

### Data Analysis Pipeline
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# 1. Data loading and inspection
df = pd.read_csv('data.csv')
print(df.info())
print(df.describe())

# 2. Data cleaning
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])

# 3. Exploratory data analysis
plt.figure(figsize=(15, 5))

plt.subplot(1, 3, 1)
plt.hist(df['value'], bins=30, alpha=0.7)
plt.title('Distribution')

plt.subplot(1, 3, 2)
plt.boxplot([df[df['category'] == cat]['value'] for cat in df['category'].unique()])
plt.title('By Category')

plt.subplot(1, 3, 3)
plt.plot(df['date'], df['value'])
plt.title('Time Series')
plt.xticks(rotation=45)

plt.tight_layout()
plt.show()

# 4. Statistical analysis
correlation_matrix = df.corr()
print("Correlation Matrix:")
print(correlation_matrix)

# 5. Results and visualization
results = df.groupby('category')['value'].agg(['mean', 'std', 'count'])
print("\nSummary by Category:")
print(results)
```

This comprehensive reference covers Python 3 fundamentals and the major data science libraries. Each section includes practical examples and common use cases to help you get started with data analysis, visualization, and scientific computing!