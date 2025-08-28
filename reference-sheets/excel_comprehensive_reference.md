# Excel Comprehensive Reference - Functions and Shortcuts

## Essential Keyboard Shortcuts

### Navigation and Selection
```
Basic Navigation:
Ctrl + Home         Go to cell A1
Ctrl + End          Go to last used cell
Ctrl + G            Go to specific cell (Go To dialog)
F5                  Go to specific cell (Go To dialog)
Ctrl + Page Up/Down Switch between worksheets
Alt + Page Up/Down  Move one screen left/right

Arrow Key Combinations:
Ctrl + Arrow        Jump to edge of data region
Ctrl + Shift + Arrow Select to edge of data region
Home                Go to beginning of row
Ctrl + Home         Go to cell A1
End                 Navigate to end of row (toggle)

Selection Shortcuts:
Ctrl + A            Select all / current region
Ctrl + Shift + End  Select to last used cell
Ctrl + Space        Select entire column
Shift + Space       Select entire row
Ctrl + Shift + Space Select entire worksheet
Shift + Click       Extend selection
Ctrl + Click        Add to selection (non-contiguous)
```

### Editing and Data Entry
```
Basic Editing:
F2                  Edit active cell
Escape             Cancel edit/entry
Delete             Clear cell contents
Ctrl + Delete      Delete to end of line
Backspace          Delete character to left
Ctrl + Z           Undo
Ctrl + Y           Redo
F4                 Repeat last action

Data Entry:
Enter              Confirm entry and move down
Tab                Confirm entry and move right
Shift + Enter      Confirm entry and move up
Shift + Tab        Confirm entry and move left
Ctrl + Enter       Fill selected cells with same entry
Ctrl + D           Fill down
Ctrl + R           Fill right
Ctrl + ;           Insert current date
Ctrl + Shift + ;   Insert current time
Alt + Enter        Line break within cell
```

### Formatting Shortcuts
```
Text Formatting:
Ctrl + B           Bold
Ctrl + I           Italic
Ctrl + U           Underline
Ctrl + 5           Strikethrough
Ctrl + Shift + F   Font dialog
Ctrl + Shift + P   Font size dialog

Cell Formatting:
Ctrl + 1           Format Cells dialog
Ctrl + Shift + $   Currency format
Ctrl + Shift + %   Percentage format
Ctrl + Shift + #   Date format
Ctrl + Shift + @   Time format
Ctrl + Shift + !   Number format (2 decimals, thousands separator)
Ctrl + Shift + ^   Scientific notation
Ctrl + Shift + &   Add border
Ctrl + Shift + _   Remove border
```

### File Operations
```
File Management:
Ctrl + N           New workbook
Ctrl + O           Open file
Ctrl + S           Save
F12                Save As
Ctrl + W           Close workbook
Ctrl + F4          Close workbook
Alt + F4           Close Excel
Ctrl + P           Print
Ctrl + F2          Print Preview
```

### Working with Formulas
```
Formula Shortcuts:
=                  Start formula
F4                 Toggle absolute/relative references ($)
Ctrl + Shift + Enter Array formula
Ctrl + `           Show formulas (toggle)
F9                 Calculate now
Shift + F9         Calculate active sheet
Ctrl + Shift + F9  Calculate selection
F3                 Insert name/function
Shift + F3         Insert function dialog
Ctrl + Shift + A   Insert function arguments
```

### Advanced Shortcuts
```
Data Operations:
Ctrl + T           Create table
Ctrl + L           Create table (alternative)
Alt + D + S        Sort dialog
Ctrl + Shift + L   AutoFilter toggle
Alt + ↓            Open filter dropdown
F11                Create chart on new sheet
Alt + F1           Create embedded chart

Window Operations:
Ctrl + Tab         Switch between workbooks
Ctrl + F6          Switch between workbooks
Alt + Tab          Switch between applications
F6                 Move between panes
Ctrl + F9          Minimize workbook
Ctrl + F10         Maximize/restore window
Alt + Space        Control menu for Excel window
```

## Mathematical and Statistical Functions

### Basic Math Functions
```
Arithmetic Operations:
SUM(A1:A10)                Sum of range
AVERAGE(A1:A10)            Average of range
COUNT(A1:A10)              Count of numeric values
COUNTA(A1:A10)             Count of non-empty cells
MAX(A1:A10)                Maximum value
MIN(A1:A10)                Minimum value
PRODUCT(A1:A10)            Product of range
SUMPRODUCT(A1:A10,B1:B10)  Sum of products

Advanced Math:
ABS(-5)                    Absolute value → 5
SQRT(16)                   Square root → 4
POWER(2,3)                 2 raised to power 3 → 8
EXP(1)                     e raised to power 1
LN(10)                     Natural logarithm
LOG(100,10)                Logarithm base 10 → 2
LOG10(100)                 Base 10 logarithm → 2
MOD(10,3)                  Remainder → 1
QUOTIENT(10,3)             Integer division → 3
GCD(12,18)                 Greatest common divisor → 6
LCM(12,18)                 Least common multiple → 36
```

### Rounding Functions
```
Rounding:
ROUND(3.14159,2)           Round to 2 decimals → 3.14
ROUNDUP(3.14159,2)         Round up → 3.15
ROUNDDOWN(3.14159,2)       Round down → 3.14
CEILING(3.2,1)             Round up to nearest integer → 4
FLOOR(3.8,1)               Round down to nearest integer → 3
INT(3.8)                   Integer part → 3
TRUNC(3.8)                 Truncate decimals → 3
MROUND(23,5)               Round to nearest multiple → 25

Even/Odd Rounding:
EVEN(3.2)                  Round up to nearest even → 4
ODD(3.2)                   Round up to nearest odd → 5
```

### Statistical Functions
```
Central Tendency:
MEDIAN(A1:A10)             Middle value
MODE(A1:A10)               Most frequent value
MODE.SNGL(A1:A10)          Single mode (Excel 2010+)
MODE.MULT(A1:A10)          Multiple modes (Excel 2010+)
GEOMEAN(A1:A10)            Geometric mean
HARMEAN(A1:A10)            Harmonic mean

Variability:
STDEV(A1:A10)              Standard deviation (sample)
STDEV.S(A1:A10)            Standard deviation (sample) - newer
STDEV.P(A1:A10)            Standard deviation (population)
VAR(A1:A10)                Variance (sample)
VAR.S(A1:A10)              Variance (sample) - newer
VAR.P(A1:A10)              Variance (population)
DEVSQ(A1:A10)              Sum of squared deviations

Distribution:
PERCENTILE(A1:A10,0.9)     90th percentile
PERCENTILE.INC(A1:A10,0.9) 90th percentile (inclusive)
PERCENTILE.EXC(A1:A10,0.9) 90th percentile (exclusive)
QUARTILE(A1:A10,1)         First quartile
RANK(B2,B:B,0)             Rank in descending order
RANK.EQ(B2,B:B,0)          Rank with ties (equal)
RANK.AVG(B2,B:B,0)         Average rank with ties
```

### Trigonometric Functions
```
Basic Trigonometry:
SIN(RADIANS(30))           Sine of 30 degrees → 0.5
COS(RADIANS(60))           Cosine of 60 degrees → 0.5
TAN(RADIANS(45))           Tangent of 45 degrees → 1
ASIN(0.5)                  Arcsine → returns radians
ACOS(0.5)                  Arccosine → returns radians
ATAN(1)                    Arctangent → returns radians
ATAN2(y,x)                 Arctangent with quadrant

Conversion:
DEGREES(PI())              Convert radians to degrees → 180
RADIANS(180)               Convert degrees to radians → π
PI()                       Pi constant → 3.14159...

Hyperbolic:
SINH(1)                    Hyperbolic sine
COSH(1)                    Hyperbolic cosine
TANH(1)                    Hyperbolic tangent
```

## Text and String Functions

### Text Manipulation
```
Text Extraction:
LEFT(A1,5)                 First 5 characters from left
RIGHT(A1,3)                Last 3 characters from right
MID(A1,3,4)                4 characters starting at position 3
LEN(A1)                    Length of text
FIND("text",A1)            Position of "text" (case-sensitive)
SEARCH("text",A1)          Position of "text" (not case-sensitive)
SUBSTITUTE(A1,"old","new") Replace "old" with "new"
REPLACE(A1,3,2,"new")      Replace 2 chars at position 3

Text Combination:
CONCATENATE(A1,B1)         Combine text (older method)
CONCAT(A1:C1)              Combine range (Excel 2016+)
TEXTJOIN(",",TRUE,A1:C1)   Join with delimiter (Excel 2016+)
A1&B1                      Simple concatenation with &

Text Case:
UPPER(A1)                  Convert to uppercase
LOWER(A1)                  Convert to lowercase  
PROPER(A1)                 Convert to title case
TRIM(A1)                   Remove extra spaces
CLEAN(A1)                  Remove non-printable characters
```

### Text Analysis
```
Text Information:
EXACT(A1,B1)               Compare text exactly
ISTEXT(A1)                 Check if cell contains text
ISNUMBER(A1)               Check if cell contains number
ISBLANK(A1)                Check if cell is empty
LEN(A1)                    Count characters
CODE(A1)                   ASCII code of first character
CHAR(65)                   Character from ASCII code → "A"

Text Formatting:
TEXT(A1,"mm/dd/yyyy")      Format number as text
VALUE("123")               Convert text to number
NUMBERVALUE("1,234.56")    Convert formatted text to number
DOLLAR(1234.5,2)           Format as currency → $1,234.50
FIXED(1234.567,2)          Format number with decimals → 1,234.57
```

## Date and Time Functions

### Date Functions
```
Current Date/Time:
TODAY()                    Current date
NOW()                      Current date and time

Date Creation:
DATE(2024,12,25)           Create date from year, month, day
TIME(14,30,0)              Create time from hour, minute, second
DATEVALUE("12/25/2024")    Convert text to date
TIMEVALUE("2:30 PM")       Convert text to time

Date Extraction:
YEAR(A1)                   Extract year
MONTH(A1)                  Extract month (1-12)
DAY(A1)                    Extract day
WEEKDAY(A1)                Day of week (1=Sunday)
WEEKDAY(A1,2)              Day of week (1=Monday)
WEEKNUM(A1)                Week number in year
HOUR(A1)                   Extract hour
MINUTE(A1)                 Extract minute
SECOND(A1)                 Extract second
```

### Date Calculations
```
Date Arithmetic:
A1+30                      Add 30 days to date
EDATE(A1,3)                Add 3 months to date
EOMONTH(A1,0)              End of current month
EOMONTH(A1,1)              End of next month
WORKDAY(A1,10)             Add 10 working days
WORKDAY.INTL(A1,10,7)      Add 10 working days (custom weekend)
NETWORKDAYS(A1,B1)         Count working days between dates
NETWORKDAYS.INTL(A1,B1,7)  Count working days (custom weekend)

Date Differences:
DATEDIF(A1,B1,"d")         Days between dates
DATEDIF(A1,B1,"m")         Months between dates
DATEDIF(A1,B1,"y")         Years between dates
DATEDIF(A1,B1,"md")        Days ignoring months/years
DATEDIF(A1,B1,"ym")        Months ignoring years
DATEDIF(A1,B1,"yd")        Days ignoring years

Age Calculations:
DATEDIF(A1,TODAY(),"y")    Age in years
DATEDIF(A1,TODAY(),"m")    Age in months
DATEDIF(A1,TODAY(),"d")    Age in days
```

## Logical Functions

### Basic Logic
```
IF Functions:
IF(A1>100,"High","Low")              Simple IF
IF(A1>100,"High",IF(A1>50,"Medium","Low"))  Nested IF
IFS(A1>100,"High",A1>50,"Medium",TRUE,"Low") Multiple conditions (Excel 2016+)

Boolean Operations:
AND(A1>50,B1<100)          Both conditions true
OR(A1>100,B1>100)          Either condition true  
NOT(A1>100)                Opposite of condition
XOR(A1>50,B1>50)           Exactly one condition true (Excel 2013+)

Advanced IF Functions:
IFERROR(A1/B1,"Error")     Return value or error message
IFNA(VLOOKUP(...),0)       Return value or handle #N/A error
IFBLANK(A1,"Empty")        Handle blank cells (Excel 365)
```

### Information Functions
```
Cell Testing:
ISBLANK(A1)                Cell is empty
ISERROR(A1)                Cell contains error
ISERR(A1)                  Cell contains error (not #N/A)
ISNA(A1)                   Cell contains #N/A error
ISNUMBER(A1)               Cell contains number
ISTEXT(A1)                 Cell contains text
ISLOGICAL(A1)              Cell contains TRUE/FALSE
ISEVEN(A1)                 Number is even
ISODD(A1)                  Number is odd

Type Information:
TYPE(A1)                   Data type (1=number, 2=text, 4=boolean, 16=error, 64=array)
N(A1)                      Convert to number (0 for text, dates to serial numbers)
T(A1)                      Convert to text (empty for numbers)
```

## Lookup and Reference Functions

### VLOOKUP and HLOOKUP
```
Basic VLOOKUP:
VLOOKUP(A1,B:E,3,FALSE)          Exact match lookup
VLOOKUP(A1,B:E,3,TRUE)           Approximate match lookup
VLOOKUP(A1,Sheet2!B:E,3,FALSE)   Lookup from another sheet

HLOOKUP (Horizontal Lookup):
HLOOKUP(A1,B1:E5,2,FALSE)        Lookup in horizontal table

VLOOKUP with IFERROR:
IFERROR(VLOOKUP(A1,B:E,3,FALSE),"Not Found")
```

### INDEX and MATCH
```
INDEX Function:
INDEX(B:B,5)                     Return 5th value in column B
INDEX(B1:D10,3,2)               Return value at row 3, column 2

MATCH Function:
MATCH(A1,B:B,0)                 Find exact position of A1 in column B
MATCH(A1,B:B,1)                 Find largest value ≤ A1 (ascending order)
MATCH(A1,B:B,-1)                Find smallest value ≥ A1 (descending order)

INDEX-MATCH Combination:
INDEX(C:C,MATCH(A1,B:B,0))      More flexible than VLOOKUP
INDEX(B1:D10,MATCH(A1,A1:A10,0),MATCH(B1,B1:D1,0))  Two-way lookup
```

### Advanced Lookup Functions
```
XLOOKUP (Excel 365):
XLOOKUP(A1,B:B,C:C)             Modern replacement for VLOOKUP
XLOOKUP(A1,B:B,C:C,"Not Found") With custom error message
XLOOKUP(A1,B:B,C:C,,,-1)        Return last match

FILTER (Excel 365):
FILTER(A:C,B:B>100)             Filter table where column B > 100
FILTER(A:C,(B:B>100)*(C:C<50))  Multiple criteria

Other Reference Functions:
INDIRECT("A"&ROW())             Dynamic reference
OFFSET(A1,2,1)                  Reference offset from A1
CHOOSE(2,"A","B","C")           Choose from list → "B"
HYPERLINK("www.example.com","Link")  Create hyperlink
```

## Database and Summary Functions

### Database Functions
```
Database Functions (require criteria range):
DSUM(database,field,criteria)     Sum with criteria
DAVERAGE(database,field,criteria) Average with criteria
DCOUNT(database,field,criteria)   Count with criteria
DCOUNTA(database,field,criteria)  Count non-empty with criteria
DMAX(database,field,criteria)     Maximum with criteria
DMIN(database,field,criteria)     Minimum with criteria
DGET(database,field,criteria)     Single value with criteria

Example:
Database: A1:C10 (headers in row 1)
Criteria: E1:E2 (header + criteria)
DSUM(A1:C10,"Sales",E1:E2)
```

### SUMIF Family
```
Single Criteria:
SUMIF(A:A,">100",B:B)          Sum B where A > 100
SUMIF(A:A,"Product*",B:B)      Sum B where A starts with "Product"
COUNTIF(A:A,">100")            Count cells > 100
AVERAGEIF(A:A,">100",B:B)      Average B where A > 100

Multiple Criteria:
SUMIFS(C:C,A:A,">100",B:B,"<50")     Sum C where A>100 AND B<50
COUNTIFS(A:A,">100",B:B,"<50")       Count where A>100 AND B<50
AVERAGEIFS(C:C,A:A,">100",B:B,"<50") Average C where A>100 AND B<50

Advanced Criteria:
SUMIF(A:A,"<>"&D1,B:B)         Sum where A is not equal to D1
SUMIF(A:A,">="&TODAY(),B:B)    Sum where A is today or later
```

## Financial Functions

### Basic Financial Functions
```
Present Value Calculations:
PV(rate,nper,pmt,fv,type)      Present value
FV(rate,nper,pmt,pv,type)      Future value
PMT(rate,nper,pv,fv,type)      Payment amount
NPER(rate,pmt,pv,fv,type)      Number of periods
RATE(nper,pmt,pv,fv,type)      Interest rate

Example Loan Calculation:
PMT(5%/12,30*12,200000)        Monthly payment for $200k loan
                               Rate: 5% annual (5%/12 monthly)
                               Periods: 30 years (30*12 months)
                               Present Value: $200,000

Depreciation:
SLN(cost,salvage,life)         Straight-line depreciation
DB(cost,salvage,life,period)   Declining balance depreciation
DDB(cost,salvage,life,period)  Double declining balance
SYD(cost,salvage,life,period)  Sum of years digits
```

### Investment Functions
```
Net Present Value:
NPV(rate,value1,value2,...)    Net present value of cash flows
IRR(values,guess)              Internal rate of return
XIRR(values,dates,guess)       IRR with irregular periods
XNPV(rate,values,dates)        NPV with irregular periods

Bond Functions:
PRICE(settlement,maturity,rate,yld,redemption,frequency)  Bond price
YIELD(settlement,maturity,rate,pr,redemption,frequency)   Bond yield
DURATION(settlement,maturity,rate,yld,frequency)          Duration
MDURATION(settlement,maturity,rate,yld,frequency)         Modified duration
```

## Array Formulas and Dynamic Arrays

### Traditional Array Formulas
```
Array Formula Entry:
Ctrl+Shift+Enter              Enter as array formula (shows {})

Array Operations:
{=SUM(A1:A10*B1:B10)}         Sum of products (array formula)
{=MAX(IF(A1:A10="Apple",B1:B10))}  Maximum where condition met
{=SMALL(A1:A10,{1;2;3})}      1st, 2nd, and 3rd smallest values

Matrix Operations:
MMULT(A1:C3,E1:G3)            Matrix multiplication
TRANSPOSE(A1:C5)              Transpose matrix
MINVERSE(A1:C3)               Matrix inverse
MDETERM(A1:C3)                Matrix determinant
```

### Dynamic Arrays (Excel 365)
```
Spill Functions:
UNIQUE(A1:A10)                Unique values from range
SORT(A1:B10,1)                Sort by first column
SORTBY(A1:B10,B1:B10)         Sort A1:B10 by values in B1:B10
FILTER(A1:C10,B1:B10>100)     Filter where column B > 100
SEQUENCE(10,1,1)              Generate sequence 1 to 10
RANDARRAY(5,3)                5x3 array of random numbers

Spill Range Reference:
A1#                           Entire spilled range from A1
SUM(A1#)                      Sum entire spilled range

Dynamic Formula Examples:
=SORT(UNIQUE(FILTER(A:C,B:B<>"")))  Unique, filtered, sorted list
=SEQUENCE(COUNTA(A:A)-1,1,2)  Numbers 2 through count of data
```

## Data Analysis Functions

### Frequency and Distribution
```
Frequency Analysis:
FREQUENCY(data_array,bins_array)    Frequency distribution
PERCENTRANK(array,x)                Percentile rank of x
PERCENT.RANK.INC(array,x)           Percentile rank (inclusive)
PERCENT.RANK.EXC(array,x)           Percentile rank (exclusive)
NORM.DIST(x,mean,std_dev,cumulative) Normal distribution
NORM.INV(probability,mean,std_dev)   Inverse normal distribution

Regression:
SLOPE(known_y,known_x)              Slope of regression line
INTERCEPT(known_y,known_x)          Y-intercept of regression line
RSQ(known_y,known_x)                R-squared value
CORREL(array1,array2)               Correlation coefficient
PEARSON(array1,array2)              Pearson correlation coefficient
```

### Error Functions
```
Error Handling:
ISERROR(value)                 Check if value is any error
ISERR(value)                   Check if error (not #N/A)
ISNA(value)                    Check if #N/A error
ERROR.TYPE(error_val)          Return error type number
IFERROR(value,value_if_error)  Replace error with value
IFNA(value,value_if_na)        Replace #N/A with value
AGGREGATE(function,options,array) Aggregate with error handling
```

## Conditional Formatting Functions
```
Highlight Rules:
Greater Than                   Highlight cells > value
Less Than                      Highlight cells < value
Between                        Highlight cells between values
Equal To                       Highlight cells = value
Text that Contains             Highlight cells containing text
Duplicate Values               Highlight duplicate/unique values

Top/Bottom Rules:
Top 10 Items                   Highlight top N values
Top 10%                        Highlight top N percent
Bottom 10 Items                Highlight bottom N values
Below Average                  Highlight below average values
Above Average                  Highlight above average values

Custom Formulas:
=MOD(ROW(),2)=0               Alternate row coloring
=AND($B2<>"",$C2="")          Highlight where B has value but C is empty
=COUNTIF($A$2:$A2,$A2)>1      Highlight first duplicate
=$B2=MAX($B$2:$B$10)          Highlight maximum value
```

## PivotTable Functions

### GETPIVOTDATA Function
```
Basic GETPIVOTDATA:
GETPIVOTDATA("Sum of Sales",A3)                    Get total from PivotTable
GETPIVOTDATA("Sum of Sales",A3,"Region","East")    Get value for East region
GETPIVOTDATA("Sum of Sales",A3,"Region","East","Product","Chairs")  Multiple criteria

Disable GETPIVOTDATA:
File → Options → Formulas → Use GetPivotData functions for PivotTable references (uncheck)

Alternative Manual Reference:
='Sheet1'!$B$5                 Direct cell reference instead of GETPIVOTDATA
```

## Power Query and Power Pivot Functions

### Power Query M Functions
```
Common M Functions (in Power Query Editor):
Table.SelectColumns(table,{"Column1","Column2"})    Select specific columns
Table.AddColumn(table,"NewCol",each [Col1]*[Col2])  Add calculated column
Table.FilterRows(table,each [Sales]>100)            Filter rows
Table.Group(table,{"Category"},{{"Total",each List.Sum([Sales]),type number}}) Group by
Text.Proper([Column1])                              Proper case
Date.Year([DateColumn])                              Extract year
Number.Round([Sales],2)                              Round numbers

Data Types:
type text                      Text data type
type number                    Number data type  
type date                      Date data type
type datetime                  DateTime data type
type logical                   Boolean data type
```

### Power Pivot DAX Functions
```
Basic DAX Functions:
SUM(Sales[Amount])                    Sum column
AVERAGE(Sales[Amount])                Average column
COUNT(Sales[OrderID])                 Count non-blank
COUNTA(Sales[OrderID])                Count non-blank
DISTINCTCOUNT(Sales[CustomerID])      Count unique values

Time Intelligence:
TOTALYTD(SUM(Sales[Amount]),Calendar[Date])          Year to date
SAMEPERIODLASTYEAR(Calendar[Date])                   Previous year same period
DATESYTD(Calendar[Date])                             Year to date dates
CALCULATE(SUM(Sales[Amount]),PREVIOUSYEAR(Calendar[Date])) Previous year total

Context Functions:
CALCULATE(SUM(Sales[Amount]),Sales[Region]="East")   Calculate with filter
ALL(Sales[Region])                                   Remove filter from Region
VALUES(Sales[Region])                                Get unique values
RELATED(Customers[CustomerName])                     Get related table value
```

## Advanced Techniques

### Dynamic Named Ranges
```
Create Dynamic Range:
=OFFSET(Sheet1!$A$1,0,0,COUNTA(Sheet1!$A:$A),1)    Dynamic list based on count
=INDIRECT("A1:A"&COUNTA(A:A))                       Dynamic range using INDIRECT
=TABLE[Column1]                                      Table column reference

Using Named Ranges:
Formulas → Name Manager → New                        Create named range
Use in formulas: =SUM(SalesData)                    Reference by name
Scope: Workbook or specific worksheet               Set scope appropriately
```

### Advanced Formula Techniques
```
Multiple Criteria Lookups:
INDEX(MATCH(1,(A:A=E1)*(B:B=F1),0))                Two-criteria lookup
SUMPRODUCT((A:A=E1)*(B:B=F1)*C:C)                  Sum with multiple criteria

Text to Columns in Formula:
TRIM(MID(SUBSTITUTE(A1," ",REPT(" ",100)),100*1-99,100))  Extract 1st word
TRIM(MID(SUBSTITUTE(A1,",",REPT(" ",100)),100*2-99,100))  Extract 2nd item

Array Constants:
SUM({1,2,3,4,5})                                    Sum array constant
INDEX({"Red","Green","Blue"},2)                     Return "Green"
CHOOSE({1,2,3},"A","B","C")                         Return array of choices

Volatile Functions (recalculate frequently):
NOW(), TODAY(), RAND(), RANDBETWEEN(), INDIRECT(), OFFSET(), INFO()
```

## Troubleshooting and Best Practices

### Common Formula Errors
```
Error Types:
#DIV/0!     Division by zero
#N/A        Value not available (lookup functions)
#NAME?      Excel doesn't recognize formula name
#NULL!      Incorrect range operator (space instead of comma)
#NUM!       Invalid numeric operation
#REF!       Invalid cell reference
#VALUE!     Wrong data type for operation
#SPILL!     Array formula blocked (Excel 365)

Error Prevention:
IFERROR(formula,"Error message")       Handle any error
IFNA(VLOOKUP(...),"Not found")        Handle #N/A specifically
IF(B1=0,"Cannot divide",A1/B1)        Prevent division by zero
ISERROR(formula)                       Test if formula returns error
```

### Formula Auditing
```
Auditing Tools (Formulas tab):
Trace Precedents        Show cells that formula depends on
Trace Dependents        Show cells that depend on current cell
Remove Arrows           Clear tracing arrows
Show Formulas          Display formulas instead of results (Ctrl+`)
Error Checking          Find and fix formula errors
Evaluate Formula        Step through formula calculation

Formula Debugging:
F9 in formula bar       Evaluate selected portion of formula
Alt + M + P            Trace precedents
Alt + M + D            Trace dependents
Ctrl + [               Navigate to precedent cells
Ctrl + ]               Navigate to dependent cells
```

### Performance Optimization
```
Efficient Formulas:
Use SUMIFS instead of array formulas when possible
Use INDEX/MATCH instead of VLOOKUP for better performance
Avoid volatile functions (NOW, TODAY, RAND, INDIRECT, OFFSET)
Use structured references in tables
Limit use of entire column references (A:A)

Calculation Options:
Formulas → Calculation Options:
- Automatic: Recalculates when changes made
- Automatic except for Data Tables: Faster for large models
- Manual: Only calculates when F9 pressed

Memory Management:
Close unused workbooks
Use efficient data types
Avoid unnecessary formatting
Consider Power Pivot for large datasets
Regular file cleanup and optimization
```

This comprehensive Excel reference covers essential shortcuts, functions, and advanced techniques to boost your productivity and analytical capabilities. Use it as both a learning resource and a quick reference guide!