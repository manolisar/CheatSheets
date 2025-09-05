# Julia Programming Cheatsheet

## Quick Reference
- **Version**: 1.9+ (Latest stable)
- **Platform**: Windows/macOS/Linux (Cross-platform)
- **License**: Open Source (MIT)
- **Official Docs**: https://docs.julialang.org/

## Essential REPL Commands

### REPL Modes
| Key | Mode | Description |
|-----|------|-------------|
| Enter | Julian | Normal Julia mode |
| ] | Pkg | Package manager mode |
| ? | Help | Documentation lookup |
| ; | Shell | System shell commands |
| Backspace | Return | Return to Julian mode |

### REPL Shortcuts
| Action | Shortcut | Description |
|--------|----------|-------------|
| Clear Line | Ctrl+C | Clear current input |
| Clear Screen | Ctrl+L | Clear terminal |
| Exit | Ctrl+D | Exit Julia |
| History Search | Ctrl+R | Reverse history search |
| Autocomplete | Tab | Complete code/filenames |
| Kill Line | Ctrl+K | Delete to end of line |
| Move to Start | Ctrl+A | Move cursor to beginning |
| Move to End | Ctrl+E | Move cursor to end |

## Basic Syntax

### Variables and Types
```julia
# Variables (no declaration needed)
x = 42              # Int64
y = 3.14159         # Float64
name = "Julia"      # String
is_awesome = true   # Bool

# Type annotations (optional but useful)
x::Int64 = 42
y::Float64 = 3.14159

# Constants
const SPEED_OF_LIGHT = 299_792_458  # Use underscores for readability

# Type checking
typeof(x)           # Int64
isa(x, Integer)     # true
x isa Integer       # true (alternative syntax)

# Type conversion
Int(3.14)           # 3
Float64(42)         # 42.0
string(42)          # "42"
parse(Int, "42")    # 42
```

### Numbers and Math
```julia
# Integer types
x = 42              # Int64 (default on 64-bit systems)
x = 0x2a            # Hexadecimal
x = 0o52            # Octal
x = 0b101010        # Binary

# Floating point
y = 3.14159         # Float64 (default)
y = 3.14159f0       # Float32
y = 1.23e-4         # Scientific notation

# Complex numbers
z = 3 + 4im         # Complex{Int64}
z = 3.0 + 4.0im     # Complex{Float64}

# Rational numbers
r = 3//4            # Rational{Int64} = 3/4

# Basic arithmetic
+ - * / ^ %         # Standard operators
÷                   # Integer division (type \div + Tab)
√                   # Square root (type \sqrt + Tab)

# Mathematical functions
abs(x)              # Absolute value
sqrt(x)             # Square root
exp(x)              # Exponential
log(x)              # Natural logarithm
sin(x), cos(x), tan(x)  # Trigonometric functions
```

### Strings
```julia
# String creation
s = "Hello, World!"
s = """Multi-line
       string with
       proper indentation"""

# String interpolation
name = "Julia"
greeting = "Hello, $name!"
calculation = "2 + 2 = $(2 + 2)"

# String operations
length(s)           # String length
s[1]                # First character (1-indexed!)
s[1:5]              # Substring (characters 1-5)
s[end]              # Last character
s[end-2:end]        # Last 3 characters

# String functions
uppercase(s)        # Convert to uppercase
lowercase(s)        # Convert to lowercase
strip(s)            # Remove leading/trailing whitespace
split(s, " ")       # Split on spaces
join(["a", "b"], "-")  # Join with separator
replace(s, "old" => "new")  # Replace substring

# String formatting
using Printf
@printf("Value: %.2f\n", 3.14159)  # Printf-style formatting
@sprintf("Value: %.2f", 3.14159)   # Return formatted string
```

## Data Structures

### Arrays
```julia
# Array creation
arr = [1, 2, 3, 4, 5]           # Vector{Int64}
arr = Int64[1, 2, 3, 4, 5]      # Explicit type
arr = collect(1:5)              # From range
arr = zeros(5)                  # Vector of zeros
arr = ones(3, 3)                # 3x3 matrix of ones
arr = rand(2, 3)                # Random 2x3 matrix

# Array access and slicing
arr[1]                          # First element
arr[end]                        # Last element
arr[2:4]                        # Elements 2-4
arr[1:2:end]                    # Every 2nd element
arr[:]                          # All elements (copy)

# Matrix operations
A = [1 2; 3 4]                  # 2x2 matrix
B = [5 6; 7 8]
A + B                           # Element-wise addition
A * B                           # Matrix multiplication
A .* B                          # Element-wise multiplication
A'                              # Transpose
inv(A)                          # Matrix inverse

# Array functions
length(arr)                     # Number of elements
size(arr)                       # Dimensions tuple
ndims(arr)                      # Number of dimensions
push!(arr, 6)                   # Add element to end
pop!(arr)                       # Remove last element
append!(arr1, arr2)             # Append arr2 to arr1
```

### Tuples and Named Tuples
```julia
# Tuples (immutable)
t = (1, 2, 3)
t = 1, 2, 3                     # Parentheses optional
x, y, z = t                     # Destructuring

# Named tuples
nt = (x=1, y=2, z=3)
nt = (x=1, y=2, z=3)
nt.x                            # Access by name
nt[:x]                          # Access by symbol
nt[1]                           # Access by index

# Tuple operations
length(t)                       # Number of elements
t[1]                            # First element
t[end]                          # Last element
```

### Dictionaries
```julia
# Dictionary creation
dict = Dict("a" => 1, "b" => 2, "c" => 3)
dict = Dict(:a => 1, :b => 2, :c => 3)    # Symbol keys

# Dictionary access
dict["a"]                       # Get value
dict["d"] = 4                   # Set value
get(dict, "e", 0)              # Get with default
haskey(dict, "a")              # Check if key exists

# Dictionary operations
keys(dict)                      # All keys
values(dict)                    # All values
delete!(dict, "a")             # Remove key-value pair
merge(dict1, dict2)            # Merge dictionaries
```

### Sets
```julia
# Set creation
s = Set([1, 2, 3, 3, 2])       # {1, 2, 3} (unique elements)
s = Set{Int}()                  # Empty set with type

# Set operations
push!(s, 4)                     # Add element
delete!(s, 2)                   # Remove element
in(3, s)                        # Check membership
3 ∈ s                           # Alternative syntax

# Set arithmetic
union(s1, s2)                   # Union
intersect(s1, s2)              # Intersection
setdiff(s1, s2)                # Difference
```

## Control Flow

### Conditional Statements
```julia
# if-else
if x > 0
    println("Positive")
elseif x < 0
    println("Negative")
else
    println("Zero")
end

# Ternary operator
result = x > 0 ? "positive" : "non-positive"

# Short-circuit evaluation
x > 0 && println("Positive")   # Only print if x > 0
x < 0 || println("Non-negative")  # Only print if x >= 0
```

### Loops
```julia
# for loops
for i in 1:5
    println(i)
end

for i = 1:5                     # Alternative syntax
    println(i)
end

for item in ["apple", "banana", "cherry"]
    println(item)
end

# Nested loops with enumerate
for (index, value) in enumerate(["a", "b", "c"])
    println("$index: $value")
end

# while loops
i = 1
while i <= 5
    println(i)
    i += 1
end

# break and continue
for i in 1:10
    i == 3 && continue          # Skip iteration
    i == 8 && break             # Exit loop
    println(i)
end
```

### Comprehensions
```julia
# Array comprehensions
squares = [x^2 for x in 1:10]
evens = [x for x in 1:20 if x % 2 == 0]

# Generator expressions (lazy)
squares_gen = (x^2 for x in 1:10)
sum(x^2 for x in 1:100)        # Efficient computation

# Dictionary comprehensions
dict = Dict(x => x^2 for x in 1:5)

# Set comprehensions
unique_remainders = Set(x % 3 for x in 1:20)
```

## Functions

### Function Definition
```julia
# Basic function
function greet(name)
    return "Hello, $name!"
end

# Short form
greet(name) = "Hello, $name!"

# Multiple arguments
function add(x, y)
    x + y
end

# Optional arguments
function greet(name, greeting="Hello")
    "$greeting, $name!"
end

# Keyword arguments
function create_point(; x=0, y=0)
    (x, y)
end
p = create_point(x=3, y=4)

# Variable arguments
function sum_all(args...)
    sum(args)
end
sum_all(1, 2, 3, 4)            # 10
```

### Anonymous Functions
```julia
# Lambda functions
f = x -> x^2
f = (x, y) -> x + y

# Using with higher-order functions
map(x -> x^2, [1, 2, 3, 4])    # [1, 4, 9, 16]
filter(x -> x % 2 == 0, 1:10)  # [2, 4, 6, 8, 10]
reduce(+, [1, 2, 3, 4])        # 10

# do-block syntax
result = map([1, 2, 3, 4]) do x
    if x % 2 == 0
        x^2
    else
        x^3
    end
end
```

### Multiple Dispatch
```julia
# Define methods for different types
function area(r::Real)
    π * r^2                     # Circle area
end

function area(l::Real, w::Real)
    l * w                       # Rectangle area
end

# Julia automatically chooses the right method
area(5)                         # Calls first method
area(3, 4)                      # Calls second method

# Methods for custom types
struct Point
    x::Float64
    y::Float64
end

function distance(p1::Point, p2::Point)
    sqrt((p1.x - p2.x)^2 + (p1.y - p2.y)^2)
end
```

## Package Management

### Package Operations
```julia
# Enter package mode with ]
]

# In package mode:
add PackageName                 # Install package
remove PackageName              # Uninstall package
update                          # Update all packages
update PackageName              # Update specific package
status                          # List installed packages
test PackageName                # Run package tests

# Development
dev /path/to/package            # Develop local package
free PackageName                # Stop developing

# Environments
activate .                      # Activate current directory
activate /path/to/env           # Activate specific environment
instantiate                     # Install packages from Project.toml
```

### Using Packages
```julia
using LinearAlgebra             # Load entire module
using Statistics: mean, std     # Load specific functions
import Random                   # Import module (qualified access)
import Random: rand             # Import specific function

# Example packages
using Plots                     # Plotting
using DataFrames               # Data manipulation
using CSV                      # CSV file I/O
using JSON                     # JSON parsing
using HTTP                     # HTTP requests
```

## Data Analysis

### DataFrames.jl
```julia
using DataFrames

# Create DataFrame
df = DataFrame(
    name = ["Alice", "Bob", "Charlie"],
    age = [25, 30, 35],
    height = [165, 180, 175]
)

# Access data
df.name                         # Column as vector
df[!, :name]                    # Same as above
df[:, :name]                    # Copy of column
df[1, :]                        # First row
df[1:2, [:name, :age]]         # Subset

# Add columns
df.bmi = df.weight ./ (df.height ./ 100).^2
df[!, :category] = ["A", "B", "C"]

# Filter and transform
subset(df, :age => x -> x .> 25)
transform(df, :age => (x -> x .+ 1) => :age_plus_one)
combine(df, :age => mean => :mean_age)

# Group operations
gdf = groupby(df, :category)
combine(gdf, :age => mean)
```

### Statistics
```julia
using Statistics

# Basic statistics
mean([1, 2, 3, 4, 5])          # 3.0
median([1, 2, 3, 4, 5])        # 3.0
std([1, 2, 3, 4, 5])           # Standard deviation
var([1, 2, 3, 4, 5])           # Variance

# Linear algebra
using LinearAlgebra
A = [1 2; 3 4]
det(A)                          # Determinant
tr(A)                           # Trace
eigvals(A)                      # Eigenvalues
eigvecs(A)                      # Eigenvectors
```

## Plotting

### Plots.jl
```julia
using Plots

# Basic plots
plot([1, 2, 3, 4], [1, 4, 9, 16])  # Line plot
scatter([1, 2, 3, 4], [1, 4, 9, 16])  # Scatter plot
bar(["A", "B", "C"], [1, 3, 2])    # Bar plot
histogram(randn(1000))              # Histogram

# Customization
plot(x, y, 
     title="My Plot",
     xlabel="X axis",
     ylabel="Y axis",
     legend=false,
     color=:red,
     linewidth=2)

# Multiple series
plot(x, [sin.(x) cos.(x)], 
     label=["sin(x)" "cos(x)"],
     title="Trigonometric Functions")

# Subplots
p1 = plot(x, sin.(x))
p2 = plot(x, cos.(x))
plot(p1, p2, layout=(1, 2))
```

## Performance and Optimization

### Profiling
```julia
# Timing
@time sum(rand(1000))           # Time and memory usage
@elapsed sum(rand(1000))        # Just execution time
@allocated sum(rand(1000))      # Just memory allocation

# Benchmarking
using BenchmarkTools
@benchmark sum(rand(1000))      # Detailed benchmarking

# Profiling
using Profile
@profile some_function()
Profile.print()                 # View profile results
```

### Performance Tips
```julia
# Type stability
function unstable(x)
    if x > 0
        return x            # Int
    else
        return 0.0          # Float64 - type instability!
    end
end

function stable(x)
    if x > 0
        return x
    else
        return zero(x)      # Same type as x
    end
end

# In-place operations
a = rand(1000)
b = similar(a)              # Allocate once
b .= a .+ 1                 # In-place operation (no allocation)

# Pre-allocation
function compute!(result, input)
    for i in eachindex(result)
        result[i] = input[i]^2
    end
    return result
end

# SIMD and vectorization
using SIMD
# Automatic vectorization with @simd
@simd for i in 1:length(a)
    a[i] = a[i] * 2
end
```

### Memory Management
```julia
# Garbage collection
GC.gc()                         # Force garbage collection
GC.gc(true)                     # Full garbage collection

# Memory usage
varinfo()                       # Variable information
@allocated expression           # Memory allocated by expression

# Avoid allocations
@views a[1:100]                 # View instead of copy
@inbounds a[i]                  # Skip bounds checking (unsafe)
```

## File I/O

### Basic File Operations
```julia
# Reading files
content = read("file.txt", String)
lines = readlines("file.txt")

# Writing files
write("output.txt", "Hello, World!")
open("output.txt", "w") do f
    write(f, "Line 1\n")
    write(f, "Line 2\n")
end

# CSV files
using CSV, DataFrames
df = CSV.read("data.csv", DataFrame)
CSV.write("output.csv", df)

# JSON files
using JSON
data = Dict("name" => "Julia", "version" => "1.9")
json_string = JSON.json(data)
parsed_data = JSON.parse(json_string)
```

## Error Handling

### Exception Handling
```julia
# try-catch-finally
try
    x = parse(Int, "not_a_number")
catch e
    if isa(e, ArgumentError)
        println("Invalid argument")
    else
        rethrow(e)
    end
finally
    println("Cleanup code")
end

# Custom exceptions
struct CustomError <: Exception
    message::String
end

function risky_function(x)
    if x < 0
        throw(CustomError("x must be non-negative"))
    end
    return sqrt(x)
end
```

## Useful Macros

### Common Macros
```julia
# Assertions
@assert 2 + 2 == 4 "Math is broken!"

# Show macro (debugging)
@show x = 2 + 2                 # Prints: x = 2 + 2 = 4

# Which macro (find method)
@which sin(1.0)                 # Shows which method is called

# Code introspection
@code_llvm sin(1.0)             # LLVM IR
@code_native sin(1.0)           # Assembly code

# Documentation
@doc sin                        # Show documentation

# String macros
r"regex\d+"                     # Regex
raw"C:\Users\name"              # Raw string (no escaping)
```

## Tips & Best Practices

### Code Style
- Use snake_case for variables and functions
- Use CamelCase for types and modules
- Add type annotations for performance-critical code
- Use meaningful variable names
- Follow the Blue Style Guide

### Performance Best Practices
- Avoid global variables in performance-critical code
- Use type-stable functions
- Pre-allocate arrays when possible
- Use views (@views) instead of copies
- Profile before optimizing

### Package Development
- Use PkgTemplates.jl for new packages
- Write comprehensive tests
- Document functions with docstrings
- Use semantic versioning
- Set up continuous integration

## Resources
- [Julia Documentation](https://docs.julialang.org/)
- [Julia Discourse](https://discourse.julialang.org/)
- [JuliaHub](https://juliahub.com/)
- [Julia Performance Tips](https://docs.julialang.org/en/v1/manual/performance-tips/)
- [Julia Style Guide](https://docs.julialang.org/en/v1/manual/style-guide/)
- [Think Julia Book](https://benlauwens.github.io/ThinkJulia.jl/latest/book.html)