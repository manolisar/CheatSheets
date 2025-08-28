# MATLAB Comprehensive Reference Guide

## MATLAB Basics

### Getting Started
```matlab
% Comments start with %
%% Section breaks (can be executed separately)

% Command window operations
clc              % Clear command window
clear            % Clear workspace variables
clear all        % Clear everything
close all        % Close all figures
whos             % List variables with details
who              % List variable names only

% Getting help
help function_name    % Help for specific function
doc function_name     % Open documentation
lookfor keyword       % Search for functions
which function_name   % Find function location
```

### Variables and Data Types
```matlab
% Variable assignment (no declaration needed)
x = 5;              % Scalar
name = 'MATLAB';    % String (character array)
str = "MATLAB";     % String (string array, R2016b+)
flag = true;        % Boolean
complex_num = 3 + 4i; % Complex number

% Display variables
x                   % Display without semicolon
disp(x)            % Display with disp function
fprintf('Value: %d\n', x)  % Formatted output

% Data types
class(x)           % Get data type
whos x             % Detailed variable info
```

## Arrays and Matrices

### Array Creation
```matlab
% Row vectors
row_vector = [1, 2, 3, 4, 5];
row_vector = [1 2 3 4 5];     % Commas optional

% Column vectors
col_vector = [1; 2; 3; 4; 5];

% Matrices
matrix = [1, 2, 3; 4, 5, 6; 7, 8, 9];

% Special matrices
zeros_mat = zeros(3, 4);      % 3x4 matrix of zeros
ones_mat = ones(2, 3);        % 2x3 matrix of ones
identity = eye(4);            % 4x4 identity matrix
random_mat = rand(3, 3);      % 3x3 random matrix [0,1]
randn_mat = randn(3, 3);      % 3x3 normal distribution

% Sequences
seq1 = 1:10;                  % 1 to 10, step 1
seq2 = 0:0.1:1;              % 0 to 1, step 0.1
seq3 = linspace(0, 10, 100); % 100 points from 0 to 10
seq4 = logspace(1, 3, 50);   % 50 points from 10^1 to 10^3
```

### Array Operations
```matlab
% Array dimensions
A = rand(3, 4, 2);
size(A)                % Get dimensions
length(A)              % Length of largest dimension
numel(A)               % Total number of elements
ndims(A)               % Number of dimensions

% Indexing and slicing
matrix = magic(4);
element = matrix(2, 3);        % Single element
row = matrix(2, :);            % Entire row 2
col = matrix(:, 3);            % Entire column 3
submatrix = matrix(1:2, 2:4);  % Submatrix
diagonal = diag(matrix);       % Main diagonal

% Linear indexing
element = matrix(6);           % 6th element (column-wise)

% Logical indexing
positive = matrix(matrix > 5); % Elements greater than 5
matrix(matrix < 0) = 0;        % Set negative values to 0
```

### Array Manipulation
```matlab
% Reshaping
A = 1:12;
B = reshape(A, 3, 4);         % Reshape to 3x4
C = A(:);                     % Column vector

% Concatenation
A = [1, 2; 3, 4];
B = [5, 6; 7, 8];
horizontal = [A, B];          % Horizontal concatenation
vertical = [A; B];            % Vertical concatenation
cat_result = cat(3, A, B);    % Concatenate along 3rd dimension

% Transposition
A_transpose = A';             % Complex conjugate transpose
A_transpose = A.';            % Simple transpose

% Sorting
vec = [3, 1, 4, 1, 5];
sorted_vec = sort(vec);       % Sort ascending
[sorted_vec, indices] = sort(vec); % Get sort indices
```

## Mathematical Operations

### Basic Arithmetic
```matlab
% Element-wise operations
A = [1, 2; 3, 4];
B = [2, 0; 1, 3];

addition = A + B;             % Addition
subtraction = A - B;          % Subtraction
element_mult = A .* B;        % Element-wise multiplication
element_div = A ./ B;         % Element-wise division
element_power = A .^ 2;       % Element-wise power

% Matrix operations
matrix_mult = A * B;          % Matrix multiplication
matrix_power = A^2;           % Matrix power
matrix_div = A / B;           % Right matrix division (A * inv(B))
left_div = A \ B;             % Left matrix division (inv(A) * B)
```

### Mathematical Functions
```matlab
% Trigonometric functions
angles = 0:pi/4:2*pi;
sin_vals = sin(angles);
cos_vals = cos(angles);
tan_vals = tan(angles);

% Inverse trigonometric
asin_vals = asin(sin_vals);
acos_vals = acos(cos_vals);
atan_vals = atan(tan_vals);

% Exponential and logarithmic
exp_vals = exp(1:5);          % e^x
log_vals = log(exp_vals);     % Natural logarithm
log10_vals = log10([10, 100, 1000]); % Base-10 logarithm

% Rounding and absolute values
x = [-2.7, -1.3, 1.3, 2.7];
rounded = round(x);           % Round to nearest integer
floored = floor(x);           % Round down
ceiled = ceil(x);             % Round up
absolute = abs(x);            % Absolute value
```

### Statistics and Analysis
```matlab
data = randn(100, 5);         % Random data

% Basic statistics
mean_val = mean(data);        % Column means
std_val = std(data);          % Standard deviation
var_val = var(data);          % Variance
median_val = median(data);    % Median
min_val = min(data);          % Minimum
max_val = max(data);          % Maximum
sum_val = sum(data);          % Sum
prod_val = prod(data);        % Product

% Correlation and covariance
corr_matrix = corrcoef(data); % Correlation matrix
cov_matrix = cov(data);       % Covariance matrix
```

## Control Flow

### Conditional Statements
```matlab
% if-elseif-else
score = 85;
if score >= 90
    grade = 'A';
elseif score >= 80
    grade = 'B';
elseif score >= 70
    grade = 'C';
else
    grade = 'F';
end

% Logical operators
if (score >= 80) && (score <= 90)
    fprintf('Good score: %d\n', score);
end

% Conditional assignment
grade = (score >= 60) * 'Pass' + (score < 60) * 'Fail'; % Not recommended
```

### Loops
```matlab
% for loops
for i = 1:10
    fprintf('Iteration %d\n', i);
end

% Loop through array
data = [1, 4, 7, 2, 9];
for value = data
    fprintf('Value: %d\n', value);
end

% while loops
count = 1;
while count <= 5
    fprintf('Count: %d\n', count);
    count = count + 1;
end

% Loop control
for i = 1:10
    if i == 3
        continue;  % Skip iteration
    end
    if i == 7
        break;     % Exit loop
    end
    fprintf('%d ', i);
end
```

### Switch Statements
```matlab
day = 3;
switch day
    case 1
        day_name = 'Monday';
    case 2
        day_name = 'Tuesday';
    case {3, 4, 5}
        day_name = 'Midweek';
    otherwise
        day_name = 'Weekend';
end
```

## Functions

### Creating Functions
```matlab
% Function in separate file (save as myFunction.m)
function result = myFunction(x, y)
    % MYFUNCTION - Example function
    % Usage: result = myFunction(x, y)
    result = x^2 + y^2;
end

% Multiple outputs
function [mean_val, std_val] = myStats(data)
    mean_val = mean(data);
    std_val = std(data);
end

% Variable number of inputs/outputs
function varargout = flexibleFunction(varargin)
    narginchk(1, 3);  % Check number of inputs
    x = varargin{1};
    if nargin >= 2
        y = varargin{2};
    else
        y = 1;
    end
    
    varargout{1} = x + y;
    if nargout >= 2
        varargout{2} = x - y;
    end
end
```

### Anonymous Functions
```matlab
% Simple anonymous functions
square = @(x) x.^2;
add = @(x, y) x + y;
quadratic = @(x, a, b, c) a*x.^2 + b*x + c;

% Using anonymous functions
x = 1:10;
y = square(x);
z = quadratic(x, 2, -3, 1);
```

### Function Handles
```matlab
% Function handles
fh = @sin;                    % Handle to sin function
result = fh(pi/2);

% Array of function handles
funcs = {@sin, @cos, @tan};
x = pi/4;
results = cellfun(@(f) f(x), funcs);
```

## Plotting and Visualization

### 2D Plotting
```matlab
% Basic line plots
x = 0:0.1:2*pi;
y1 = sin(x);
y2 = cos(x);

figure;
plot(x, y1, 'r-', 'LineWidth', 2);  % Red solid line
hold on;
plot(x, y2, 'b--', 'LineWidth', 2); % Blue dashed line
xlabel('x');
ylabel('y');
title('Sine and Cosine Functions');
legend('sin(x)', 'cos(x)');
grid on;
hold off;

% Multiple plots in subplots
figure;
subplot(2, 2, 1); plot(x, y1); title('sin(x)');
subplot(2, 2, 2); plot(x, y2); title('cos(x)');
subplot(2, 2, 3); plot(x, y1.*y2); title('sin(x)*cos(x)');
subplot(2, 2, 4); plot(x, y1.^2 + y2.^2); title('sin²(x) + cos²(x)');
```

### Specialized 2D Plots
```matlab
% Scatter plots
x = randn(100, 1);
y = randn(100, 1);
colors = rand(100, 1);
figure;
scatter(x, y, 50, colors, 'filled');
colorbar;

% Bar plots
categories = {'A', 'B', 'C', 'D'};
values = [23, 45, 56, 78];
figure;
bar(values);
set(gca, 'XTickLabel', categories);

% Histograms
data = randn(1000, 1);
figure;
histogram(data, 30);
xlabel('Value');
ylabel('Frequency');

% Error bars
x = 1:10;
y = x + randn(size(x));
err = 0.5 * ones(size(x));
figure;
errorbar(x, y, err);
```

### 3D Plotting
```matlab
% 3D line plots
t = 0:0.1:4*pi;
x = cos(t);
y = sin(t);
z = t;
figure;
plot3(x, y, z, 'LineWidth', 2);
xlabel('x'); ylabel('y'); zlabel('z');

% Surface plots
[X, Y] = meshgrid(-2:0.1:2, -2:0.1:2);
Z = X.^2 + Y.^2;
figure;
surf(X, Y, Z);
xlabel('x'); ylabel('y'); zlabel('z');
colorbar;

% Contour plots
figure;
contour(X, Y, Z, 20);  % 20 contour levels
xlabel('x'); ylabel('y');
colorbar;

% 3D scatter
figure;
scatter3(randn(100,1), randn(100,1), randn(100,1), 50, randn(100,1), 'filled');
```

### Plot Customization
```matlab
figure;
x = 0:0.1:2*pi;
y = sin(x);
h = plot(x, y);

% Customize line properties
set(h, 'LineWidth', 3);
set(h, 'Color', [0.8, 0.2, 0.2]);  % RGB color
set(h, 'LineStyle', '--');

% Customize axes
ax = gca;  % Get current axes
set(ax, 'FontSize', 14);
set(ax, 'XLim', [0, 2*pi]);
set(ax, 'YLim', [-1.2, 1.2]);
set(ax, 'XTick', 0:pi/2:2*pi);
set(ax, 'XTickLabel', {'0', 'π/2', 'π', '3π/2', '2π'});

% Annotations
text(pi/2, 1, 'Maximum', 'FontSize', 12, 'HorizontalAlignment', 'center');
arrow = annotation('arrow', [0.3, 0.4], [0.8, 0.9]);
```

## File I/O and Data Import/Export

### Text Files
```matlab
% Writing to text files
data = rand(5, 3);
dlmwrite('data.txt', data, 'delimiter', '\t');  % Tab-delimited
csvwrite('data.csv', data);                      % CSV format

% Reading from text files
loaded_data = dlmread('data.txt', '\t');         % Tab-delimited
csv_data = csvread('data.csv');                  % CSV format

% Using textscan for more control
fid = fopen('data.txt', 'r');
data = textscan(fid, '%f %f %f');
fclose(fid);
```

### Excel Files
```matlab
% Writing to Excel
data = rand(10, 5);
headers = {'Col1', 'Col2', 'Col3', 'Col4', 'Col5'};
xlswrite('data.xlsx', [headers; num2cell(data)]);

% Reading from Excel
[num_data, txt_data, raw_data] = xlsread('data.xlsx');
```

### MAT Files (MATLAB format)
```matlab
% Save variables
x = 1:10;
y = sin(x);
save('mydata.mat', 'x', 'y');       % Save specific variables
save('all_data.mat');               % Save all workspace variables

% Load variables
load('mydata.mat');                 % Load all variables
load('mydata.mat', 'x');           % Load specific variable
data_struct = load('mydata.mat');   % Load into structure
```

### Binary Files
```matlab
% Write binary data
fid = fopen('binary_data.bin', 'wb');
data = rand(100, 1);
fwrite(fid, data, 'double');
fclose(fid);

% Read binary data
fid = fopen('binary_data.bin', 'rb');
loaded_data = fread(fid, 100, 'double');
fclose(fid);
```

## Signal Processing

### Basic Signal Operations
```matlab
% Generate signals
Fs = 1000;                          % Sampling frequency
t = 0:1/Fs:1-1/Fs;                 % Time vector
f1 = 50; f2 = 150;                 % Frequencies
signal = sin(2*pi*f1*t) + 0.5*sin(2*pi*f2*t) + randn(size(t))*0.1;

% FFT
Y = fft(signal);
f = (0:length(Y)-1)*Fs/length(Y);   % Frequency vector
P = abs(Y).^2/length(Y);            % Power spectrum

figure;
subplot(2,1,1); plot(t(1:200), signal(1:200)); title('Time Domain');
subplot(2,1,2); plot(f(1:length(f)/2), P(1:length(P)/2)); title('Frequency Domain');
```

### Filtering
```matlab
% Design filters
Fs = 1000;
Fc = 100;                           % Cutoff frequency
order = 4;

% Butterworth filter
[b, a] = butter(order, Fc/(Fs/2), 'low');    % Low-pass
[b, a] = butter(order, [50 200]/(Fs/2), 'bandpass'); % Band-pass

% Apply filter
filtered_signal = filter(b, a, signal);

% Zero-phase filtering
filtered_signal = filtfilt(b, a, signal);

% Filter visualization
figure;
freqz(b, a, 512, Fs);
```

## Image Processing

### Basic Image Operations
```matlab
% Read and display images
img = imread('image.jpg');
figure; imshow(img);
title('Original Image');

% Convert to grayscale
gray_img = rgb2gray(img);
figure; imshow(gray_img);

% Image information
[rows, cols, channels] = size(img);
img_info = imfinfo('image.jpg');

% Basic manipulations
rotated = imrotate(img, 45);
resized = imresize(img, 0.5);
cropped = img(100:300, 150:350, :);
```

### Image Enhancement
```matlab
% Histogram equalization
enhanced = histeq(gray_img);
figure;
subplot(2,2,1); imshow(gray_img); title('Original');
subplot(2,2,2); imshow(enhanced); title('Enhanced');
subplot(2,2,3); imhist(gray_img); title('Original Histogram');
subplot(2,2,4); imhist(enhanced); title('Enhanced Histogram');

% Filtering
blurred = imgaussfilt(gray_img, 2);     % Gaussian blur
sharpened = imsharpen(gray_img);        % Sharpen
edges = edge(gray_img, 'canny');       % Edge detection
```

## Statistics and Probability

### Probability Distributions
```matlab
% Normal distribution
mu = 0; sigma = 1;
x = -3:0.1:3;
pdf_normal = normpdf(x, mu, sigma);
cdf_normal = normcdf(x, mu, sigma);

figure;
subplot(2,1,1); plot(x, pdf_normal); title('Normal PDF');
subplot(2,1,2); plot(x, cdf_normal); title('Normal CDF');

% Generate random samples
samples = normrnd(mu, sigma, 1000, 1);

% Other distributions
exponential_samples = exprnd(2, 1000, 1);    % Exponential
uniform_samples = unifrnd(0, 1, 1000, 1);    % Uniform
poisson_samples = poissrnd(3, 1000, 1);      % Poisson
```

### Hypothesis Testing
```matlab
% t-test
group1 = normrnd(10, 2, 50, 1);
group2 = normrnd(12, 2, 50, 1);

[h, p, ci, stats] = ttest2(group1, group2);
fprintf('t-test: h=%d, p=%.4f\n', h, p);

% ANOVA
data = [group1; group2; normrnd(11, 2, 50, 1)];
groups = [ones(50,1); 2*ones(50,1); 3*ones(50,1)];
[p, tbl, stats] = anova1(data, groups);
```

## Optimization

### Finding Minima
```matlab
% Minimize function
objective = @(x) (x-2)^2 + 1;
x_min = fminunc(objective, 0);

% Constrained optimization
objective = @(x) x(1)^2 + x(2)^2;
A = [1, 1]; b = 1;              % Linear constraint: x1 + x2 <= 1
x_min = fmincon(objective, [0, 0], A, b);

% Multiple variables
rosenbrock = @(x) 100*(x(2) - x(1)^2)^2 + (1 - x(1))^2;
x_min = fminunc(rosenbrock, [-1, 1]);
```

### Root Finding
```matlab
% Find roots
equation = @(x) x^3 - 2*x - 5;
root = fzero(equation, 2);

% System of equations
equations = @(x) [x(1)^2 + x(2)^2 - 1; x(1) - x(2)];
solution = fsolve(equations, [0.5, 0.5]);
```

## Linear Algebra

### Matrix Operations
```matlab
A = rand(4, 4);
b = rand(4, 1);

% Solve linear system Ax = b
x = A \ b;                      % Efficient solution
x = inv(A) * b;                 % Less efficient but explicit

% Matrix decompositions
[L, U, P] = lu(A);             % LU decomposition
[Q, R] = qr(A);                % QR decomposition
[U, S, V] = svd(A);            % Singular Value Decomposition

% Eigenvalues and eigenvectors
[eigenvectors, eigenvalues] = eig(A);
lambda = diag(eigenvalues);     % Extract eigenvalues

% Matrix properties
det_A = det(A);                 % Determinant
trace_A = trace(A);             % Trace
rank_A = rank(A);               % Rank
cond_A = cond(A);               % Condition number
```

## Numerical Integration and Differentiation

### Integration
```matlab
% Numerical integration
f = @(x) exp(-x.^2);           % Gaussian function

% Single integration
integral_result = integral(f, 0, 1);
quad_result = quad(f, 0, 1);   % Alternative method

% Multiple integration
f2d = @(x, y) exp(-x.^2 - y.^2);
integral_2d = integral2(f2d, -1, 1, -1, 1);

% Trapezoidal rule
x = 0:0.01:1;
y = f(x);
trap_result = trapz(x, y);
```

### Differentiation
```matlab
% Numerical differentiation
x = 0:0.1:2*pi;
y = sin(x);
dy_dx = diff(y) ./ diff(x);    % First derivative

% Gradient
[fx, fy] = gradient(peaks(50)); % 2D gradient
```

## Ordinary Differential Equations (ODEs)

### Solving ODEs
```matlab
% First-order ODE: dy/dt = -2*y + 1
ode_func = @(t, y) -2*y + 1;
tspan = [0, 5];                 % Time span
y0 = 0;                         % Initial condition

[t, y] = ode45(ode_func, tspan, y0);
figure; plot(t, y); xlabel('t'); ylabel('y');

% System of ODEs (Lotka-Volterra equations)
lotka_volterra = @(t, y) [y(1)*(1 - y(2)); -y(2)*(1 - y(1))];
y0 = [1; 1];
[t, y] = ode45(lotka_volterra, [0, 15], y0);

figure;
subplot(2,1,1); plot(t, y); legend('Prey', 'Predator');
subplot(2,1,2); plot(y(:,1), y(:,2)); xlabel('Prey'); ylabel('Predator');
```

## Object-Oriented Programming

### Classes
```matlab
% Class definition (save as Person.m)
classdef Person < handle
    properties
        Name
        Age
    end
    
    properties (Access = private)
        ID
    end
    
    methods
        function obj = Person(name, age)
            obj.Name = name;
            obj.Age = age;
            obj.ID = randi(10000);
        end
        
        function introduce(obj)
            fprintf('Hi, I''m %s, %d years old.\n', obj.Name, obj.Age);
        end
        
        function setAge(obj, new_age)
            if new_age >= 0
                obj.Age = new_age;
            else
                error('Age must be non-negative');
            end
        end
    end
    
    methods (Static)
        function result = isAdult(age)
            result = age >= 18;
        end
    end
end

% Using the class
person = Person('Alice', 30);
person.introduce();
person.setAge(31);
adult_status = Person.isAdult(person.Age);
```

## App Development

### Simple GUI with App Designer
```matlab
% Create app programmatically (basic example)
function createSimpleApp()
    % Create figure
    fig = uifigure('Name', 'Simple Calculator');
    fig.Position = [100, 100, 300, 200];
    
    % Create input fields
    num1 = uieditfield(fig, 'numeric', 'Position', [50, 150, 80, 22]);
    num2 = uieditfield(fig, 'numeric', 'Position', [150, 150, 80, 22]);
    
    % Create button
    btn = uibutton(fig, 'push', 'Position', [100, 100, 80, 30]);
    btn.Text = 'Add';
    btn.ButtonPushedFcn = @(btn, event) addNumbers();
    
    % Create result field
    result = uieditfield(fig, 'numeric', 'Position', [100, 50, 80, 22]);
    result.Editable = 'off';
    
    function addNumbers()
        result.Value = num1.Value + num2.Value;
    end
end
```

## Best Practices and Tips

### Performance Optimization
```matlab
% Preallocation
tic;
x = [];
for i = 1:10000
    x = [x, i];  % Slow - growing array
end
toc;

tic;
x = zeros(1, 10000);  % Preallocate
for i = 1:10000
    x(i) = i;
end
toc;

% Vectorization
tic;
result = 0;
for i = 1:1000000
    result = result + sin(i);  % Slow loop
end
toc;

tic;
result = sum(sin(1:1000000));  % Vectorized
toc;
```

### Debugging
```matlab
% Debugging tools
dbstop if error        % Stop on errors
dbstop in myFunction   % Stop at function entry
dbstep                 % Step through code
dbcont                 % Continue execution
dbquit                 % Quit debug mode

% Profiling
profile on;
% Your code here
myExpensiveFunction();
profile viewer;
```

### Code Organization
```matlab
% Good practices
% 1. Use meaningful variable names
velocity_ms = distance_m / time_s;  % Good
v = d / t;                          % Less clear

% 2. Add comments and documentation
function result = calculateArea(radius)
    % CALCULATEAREA Calculate area of a circle
    % Input: radius - circle radius (numeric)
    % Output: result - area of the circle
    
    if radius < 0
        error('Radius must be non-negative');
    end
    
    result = pi * radius^2;
end

% 3. Use functions to avoid code repetition
% 4. Validate inputs
% 5. Handle errors gracefully
```

This comprehensive MATLAB reference covers the essential aspects of MATLAB programming, from basic syntax to advanced topics like ODEs, optimization, and object-oriented programming. Use it as both a learning resource and a quick reference guide!