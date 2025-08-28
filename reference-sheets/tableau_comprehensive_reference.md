# Tableau Comprehensive Reference Guide

## Getting Started with Tableau

### Interface Overview
```
Tableau Desktop Interface Components:
- Menu Bar: File, Data, Worksheet, Dashboard, Story, Analysis, Map, Format, Server, Window, Help
- Toolbar: Undo, Redo, Save, New Worksheet, Clear, Swap, Sort, Group, Show Me
- Data Pane: Dimensions, Measures, Sets, Parameters
- Analytics Pane: Summarize, Model, Custom tabs
- Sheets Tab: Worksheets, Dashboards, Stories
- Shelves: Pages, Filters, Marks (Color, Size, Text, Detail, Tooltip, Path)
- Cards: Rows, Columns
- View: Main visualization area
- Show Me Panel: Chart type recommendations
```

### Basic Navigation
```
Essential Shortcuts:
Ctrl + N        New workbook
Ctrl + O        Open workbook
Ctrl + S        Save workbook
Ctrl + Z        Undo
Ctrl + Y        Redo
Ctrl + D        Duplicate sheet
F4              Show/hide sheets panel
F5              Refresh data
F9              Show/hide sidebar
Ctrl + E        Export image
Ctrl + Shift + B   Toggle Show Me panel
```

## Data Connections and Sources

### Connecting to Data Sources
```
File-based Connections:
- Excel (.xlsx, .xls)
- CSV/Text files
- Access databases
- PDF files
- Spatial files (Shapefile, KML, GeoJSON)
- Statistical files (SAS, SPSS, R)
- JSON files

Database Connections:
- MySQL, PostgreSQL, SQL Server
- Oracle, Amazon Redshift
- Google BigQuery, Snowflake
- MongoDB, Cassandra
- SAP HANA, Teradata

Cloud Connections:
- Tableau Server/Online
- Google Analytics, Salesforce
- ServiceNow, Marketo
- Box, Dropbox, OneDrive
```

### Data Source Management
```
Data Source Operations:
1. Connect to Data
   - From File menu or Start page
   - Choose appropriate connector
   - Configure connection parameters

2. Data Source Page
   - Preview data tables
   - Join/Union tables
   - Add calculated fields
   - Rename fields
   - Hide/unhide fields
   - Change data types

3. Extract vs Live Connection
   Live: Real-time data from source
   Extract: Snapshot stored locally
   
Extract Benefits:
   - Faster performance
   - Offline capability
   - Data optimization
   - Incremental refresh
```

## Data Preparation and Modeling

### Joins and Relationships
```
Join Types:
Inner Join    - Records matching in both tables
Left Join     - All records from left + matching from right
Right Join    - All records from right + matching from left
Full Outer    - All records from both tables

Join Clauses:
=   Equal
<>  Not equal
>   Greater than
<   Less than
>=  Greater than or equal
<=  Less than or equal

Relationships (Tableau 2020.2+):
- More flexible than joins
- Preserve detail level
- Reduce data duplication
- Better performance
```

### Data Cleaning and Transformation
```
Data Interpreter:
- Automatically detect data structure
- Remove formatting and empty cells
- Clean headers and data

Field Operations:
1. Rename Fields
   - Right-click field → Rename
   - Clear naming to reset

2. Change Data Types
   - String/Text (Abc)
   - Number (Decimal) (#)
   - Number (Whole) (#)
   - Date & Time
   - Date only
   - Boolean (T/F)
   - Geographic Role

3. Data Type Conversion
   STR() - Convert to string
   INT() - Convert to integer
   FLOAT() - Convert to decimal
   DATE() - Convert to date
   DATETIME() - Convert to datetime

4. Field Properties
   - Default Properties
   - Comments
   - Geographic Role
   - Number Format
   - Sort Order
```

### Calculated Fields
```
Basic Syntax:
Field Name: [Field Name]
Functions: FUNCTION(parameters)
Operators: +, -, *, /, %, ^, =, <>, <, >, <=, >=
Logic: IF, THEN, ELSE, END, AND, OR, NOT

Example Basic Calculations:
Profit Margin = [Profit] / [Sales]
Full Name = [First Name] + " " + [Last Name]
Discount Flag = [Discount] > 0
Category Code = LEFT([Category], 3)
```

## Building Visualizations

### Chart Types and When to Use Them

#### Text Tables and Crosstabs
```
Use Cases:
- Detailed data display
- Precise value comparison
- Small datasets

Creation:
1. Drag dimension to Rows
2. Drag measure to Text mark
3. Add more dimensions for crosstab

Formatting:
- Number format
- Alignment
- Cell sizing
- Borders and shading
```

#### Bar Charts
```
Horizontal Bar Chart:
- Drag dimension to Rows
- Drag measure to Columns
- Good for categorical comparisons

Vertical Bar Chart (Column Chart):
- Drag dimension to Columns  
- Drag measure to Rows
- Good for time series or rankings

Stacked Bars:
- Add dimension to Color
- Automatic stacking

Side-by-Side Bars:
- Analysis menu → Stack Marks → Off
```

#### Line Charts
```
Basic Line Chart:
- Continuous date/time on Columns
- Measure on Rows
- Perfect for trends over time

Multiple Line Chart:
- Add dimension to Color
- Each category gets own line

Dual Axis Lines:
- Right-click second measure → Dual Axis
- Right-click axis → Synchronize Axis
```

#### Scatter Plots
```
Basic Scatter Plot:
- Measure on Columns
- Measure on Rows
- Dimension on Detail or Color

Enhanced Scatter Plot:
- Size: Third measure for bubble chart
- Color: Dimension for categorization
- Path: For animated scatter plots
- Add trend lines: Analytics → Trend Line
```

#### Maps and Geographic Visualizations
```
Symbol Maps:
- Geographic field (Country, State, City)
- Measure determines size/color of symbols

Filled Maps:
- Geographic field on Detail
- Measure on Color
- Mark type: Map

Dual Axis Maps:
- Two geographic measures
- Right-click second measure → Dual Axis
- Useful for combining filled and symbol maps

Custom Geocoding:
- Create calculated field with coordinates
- MAKEPOINT([Longitude], [Latitude])
```

### Advanced Chart Types

#### Heat Maps
```
Basic Heat Map:
- Dimension on Rows
- Dimension on Columns  
- Measure on Color
- Square marks

Highlight Tables:
- Same as heat map but with Text on marks
- Shows both color intensity and values
```

#### Tree Maps
```
Tree Map Creation:
- Dimension(s) on Detail
- Measure on Size
- Optional: Measure on Color
- Mark type: Square

Hierarchical Tree Maps:
- Multiple dimensions create nested rectangles
- Size represents measure values
```

#### Histograms
```
Creating Histograms:
1. Right-click measure → Create → Bins
2. Drag bin field to Columns
3. Drag original measure (CNT) to Rows
4. Adjust bin size as needed

Bin Size Options:
- Suggest bin size (automatic)
- Set bin size manually
- Set number of bins
```

## Calculations and Functions

### Aggregation Functions
```
Basic Aggregations:
SUM([Sales])           - Sum of values
AVG([Profit])          - Average
MIN([Order Date])      - Minimum value
MAX([Sales])           - Maximum value
COUNT([Order ID])      - Count of records
COUNTD([Customer ID])  - Count distinct

Median and Percentiles:
MEDIAN([Sales])        - Median value
PERCENTILE([Sales], 0.95)  - 95th percentile

Conditional Aggregations:
SUM(IF [Region] = "East" THEN [Sales] END)
COUNT(IF [Profit] > 0 THEN 1 END)
```

### String Functions
```
Text Manipulation:
LEFT([Product Name], 5)     - First 5 characters
RIGHT([Product Name], 3)    - Last 3 characters  
MID([Product Name], 2, 4)   - 4 chars starting at position 2
LEN([Customer Name])        - Length of string
UPPER([Category])           - Convert to uppercase
LOWER([Region])             - Convert to lowercase
TRIM([Product Name])        - Remove leading/trailing spaces

String Operations:
CONTAINS([Product Name], "Chair")  - Check if contains text
STARTSWITH([Region], "North")      - Check if starts with
ENDSWITH([Product], "Table")       - Check if ends with
FIND([Product Name], "Office")     - Position of substring
REPLACE([Phone], "-", "")          - Replace characters
SPLIT([Customer Name], " ", 1)     - Split string, return part
```

### Date Functions
```
Date Creation:
DATE("2023-12-31")          - Create date
DATETIME("2023-12-31 15:30:00")  - Create datetime
TODAY()                     - Current date
NOW()                       - Current date and time

Date Parts:
YEAR([Order Date])          - Extract year
MONTH([Order Date])         - Extract month (1-12)
QUARTER([Order Date])       - Extract quarter (1-4)
WEEK([Order Date])          - Extract week number
DAY([Order Date])           - Extract day
WEEKDAY([Order Date])       - Day of week (1=Sunday)
HOUR([Order Time])          - Extract hour
MINUTE([Order Time])        - Extract minute

Date Arithmetic:
DATEADD('month', 3, [Order Date])     - Add 3 months
DATEDIFF('day', [Order Date], [Ship Date])  - Days between dates
DATETRUNC('month', [Order Date])      - Truncate to month start

Date Formatting:
DATENAME('month', [Order Date])       - Month name
DATENAME('weekday', [Order Date])     - Weekday name
```

### Logical Functions
```
IF Statements:
IF [Sales] > 1000 THEN "High" ELSE "Low" END
IF [Region] = "East" THEN [Sales] * 1.1 ELSE [Sales] END

Nested IF:
IF [Sales] > 2000 THEN "High"
ELSEIF [Sales] > 1000 THEN "Medium" 
ELSE "Low" END

CASE Statements:
CASE [Region]
    WHEN "East" THEN "Eastern Region"
    WHEN "West" THEN "Western Region"
    ELSE "Other Region"
END

Boolean Logic:
[Sales] > 1000 AND [Profit] > 100
[Region] = "East" OR [Region] = "West"
NOT ([Category] = "Technology")

Null Handling:
ISNULL([Discount])          - Check if null
IFNULL([Discount], 0)       - Replace null with 0
ZN([Profit])                - Zero if null (numbers only)
```

### Mathematical Functions
```
Basic Math:
ABS([Profit])               - Absolute value
ROUND([Sales], 2)           - Round to 2 decimal places
CEILING([Sales])            - Round up to integer
FLOOR([Sales])              - Round down to integer
SQRT([Sales])               - Square root
POWER([Sales], 2)           - Raise to power

Statistical Functions:
CORR([Sales], [Profit])     - Correlation coefficient
COVAR([Sales], [Profit])    - Covariance
STDEV([Sales])              - Standard deviation
VAR([Sales])                - Variance

Trigonometric Functions:
SIN([Angle])                - Sine
COS([Angle])                - Cosine  
TAN([Angle])                - Tangent
PI()                        - Pi constant
DEGREES([Radians])          - Convert radians to degrees
RADIANS([Degrees])          - Convert degrees to radians
```

## Table Calculations

### Quick Table Calculations
```
Right-click measure → Quick Table Calculation:

Running Total:
- Cumulative sum down the table
- Useful for cumulative sales, progressive totals

Difference:
- Shows change from previous value
- Period-over-period analysis

Percent Difference:
- Percentage change from previous value
- Growth rates, variance analysis

Percent of Total:
- Each value as percentage of grand total
- Market share, composition analysis

Rank:
- Assigns rank to values
- Top performers, bottom performers

Percentile:
- Position within distribution
- Performance benchmarking

Moving Average:
- Average over sliding window
- Trend smoothing, noise reduction

YTD Total (Year to Date):
- Cumulative sum within year
- Year-to-date performance tracking

Compound Growth Rate:
- Annualized growth rate
- CAGR calculations

Year over Year Growth:
- Percentage change vs same period last year
- Annual comparisons
```

### Custom Table Calculations
```
Window Functions Syntax:
WINDOW_SUM(expression, [start], [end])
WINDOW_AVG(expression, [start], [end])
WINDOW_MIN(expression, [start], [end])
WINDOW_MAX(expression, [start], [end])

Position Offsets:
-2  Two positions back
-1  Previous position  
0   Current position
1   Next position
2   Two positions ahead

Examples:
Running Total = WINDOW_SUM(SUM([Sales]))
Previous Month = LOOKUP(SUM([Sales]), -1)
Percent Change = (SUM([Sales]) - LOOKUP(SUM([Sales]), -1)) / LOOKUP(SUM([Sales]), -1)
3-Month Moving Average = WINDOW_AVG(SUM([Sales]), -2, 0)

Addressing and Partitioning:
- Table (across): Left to right, top to bottom
- Table (down): Top to bottom, left to right  
- Pane (across): Within each pane, left to right
- Pane (down): Within each pane, top to bottom
- Cell: Individual cells only
```

### Advanced Table Calculations
```
INDEX() - Position in partition
SIZE() - Number of marks in partition
FIRST() - Distance from first mark
LAST() - Distance from last mark

Example Uses:
First Value in Group = FIRST() = 0
Last Value in Group = LAST() = 0
Middle Value = INDEX() = ROUND(SIZE()/2)

Ranking Functions:
RANK(expression, ['asc'|'desc'])
RANK_DENSE(expression, ['asc'|'desc'])
RANK_MODIFIED(expression, ['asc'|'desc'])
RANK_PERCENTILE(expression, ['asc'|'desc'])
RANK_UNIQUE(expression, ['asc'|'desc'])

Example:
Sales Rank = RANK(SUM([Sales]), 'desc')
Top 10 Filter = RANK(SUM([Sales]), 'desc') <= 10
```

## Level of Detail (LOD) Expressions

### Fixed LOD
```
Syntax: {FIXED [Dimension] : Aggregation}

Examples:
Total Sales by Region = {FIXED [Region] : SUM([Sales])}
Overall Average = {FIXED : AVG([Sales])}
Customer Total = {FIXED [Customer ID] : SUM([Sales])}

Use Cases:
- Calculate grand totals
- Create cohort analysis
- Compare individual vs group performance
- Remove dimension influence on calculation
```

### Include LOD
```
Syntax: {INCLUDE [Dimension] : Aggregation}

Examples:
Sales by Customer and Category = {INCLUDE [Customer ID] : SUM([Sales])}
Daily Sales with Monthly Average = {INCLUDE [Month] : AVG([Sales])}

Use Cases:
- Add granularity to calculation
- Calculate at finer level than view
- Drill down without changing visualization
```

### Exclude LOD
```
Syntax: {EXCLUDE [Dimension] : Aggregation}

Examples:
Total Without Region = {EXCLUDE [Region] : SUM([Sales])}
Average Excluding Category = {EXCLUDE [Category] : AVG([Profit])}

Use Cases:
- Remove dimension influence
- Calculate aggregates ignoring certain groupings
- Create percentage of total calculations
```

### LOD Best Practices
```
Performance Tips:
1. Use FIXED for better performance
2. Avoid nested LOD expressions
3. Consider using data source filters
4. Use context filters when appropriate

Common Patterns:
Percentage of Total:
SUM([Sales]) / {FIXED : SUM([Sales])}

Difference from Average:
AVG([Sales]) - {FIXED : AVG([Sales])}

Customer Acquisition by Cohort:
{FIXED [Customer ID] : MIN([Order Date])}

New vs Returning Customers:
IF {FIXED [Customer ID] : MIN([Order Date])} = [Order Date]
THEN "New" ELSE "Returning" END
```

## Parameters and Sets

### Parameters
```
Creating Parameters:
1. Right-click in Data pane → Create Parameter
2. Configure:
   - Name and data type
   - Current value
   - Display format
   - Allowable values (All, List, Range)

Parameter Types:
String - Text values
Integer - Whole numbers
Float - Decimal numbers
Boolean - True/false
Date - Date values
Date & Time - DateTime values

Using Parameters in Calculations:
Top N Filter = RANK(SUM([Sales])) <= [Top N Parameter]
Dynamic Measure = 
CASE [Measure Parameter]
    WHEN "Sales" THEN SUM([Sales])
    WHEN "Profit" THEN SUM([Profit])
    WHEN "Quantity" THEN SUM([Quantity])
END

Parameter Actions:
- Change parameter value through dashboard interactions
- Filter actions, highlight actions
- URL actions with parameter values
```

### Sets
```
Creating Sets:
1. Right-click dimension → Create → Set
2. Three types:
   - General tab: Manual selection
   - Condition tab: Formula-based
   - Top tab: Top/Bottom N based on measure

Dynamic Sets:
Condition: [Region] = "East" AND SUM([Sales]) > 10000
Top N: Top 10 customers by sales
Bottom N: Bottom 5 products by profit

Using Sets:
In/Out Filtering:
IF [Customer Set] THEN "In Set" ELSE "Out of Set" END

Set Actions:
- Add/remove items from sets via dashboard
- Create interactive filtering
- Change set membership dynamically

Combined Sets:
- Intersection (AND): Members in both sets
- Union (OR): Members in either set
- Difference (NOT): Members in first but not second set
```

## Dashboard Design

### Dashboard Basics
```
Dashboard Components:
- Worksheets (visualizations)
- Text objects
- Images
- Web pages
- Blank objects (spacers)
- Navigation objects
- Extension objects

Layout Containers:
Horizontal: Objects arranged left to right
Vertical: Objects arranged top to bottom
Floating: Objects positioned freely

Sizing Options:
Fixed: Set pixel dimensions
Automatic: Size based on content
Range: Min/max pixel constraints
```

### Dashboard Interactivity
```
Filter Actions:
1. Dashboard → Actions → Add Action → Filter
2. Configure:
   - Source sheet (what triggers)
   - Target sheet (what's filtered)  
   - Source field (what filters by)
   - Target field (what gets filtered)
   - Run on: Select, Hover, Menu

Highlight Actions:
- Highlight related marks across sheets
- Visual emphasis without filtering
- Better for exploration than filtering

URL Actions:
- Open web pages
- Pass parameters to external systems
- Link to external reports/documents

Go to Sheet Actions:
- Navigate between sheets
- Create drill-down experiences
- Build navigation systems

Change Parameter Actions:
- Change parameter values via interaction
- Dynamic what-if analysis
- Interactive scenario planning
```

### Dashboard Performance
```
Performance Best Practices:
1. Limit number of marks
   - Use data source filters
   - Aggregate data appropriately
   - Consider extracts for large datasets

2. Optimize calculations
   - Use basic calculations over table calcs when possible
   - Minimize nested calculations
   - Use context filters strategically

3. Reduce query complexity
   - Limit joins and data source complexity
   - Use appropriate data types
   - Index frequently filtered fields

4. Dashboard design
   - Limit number of sheets per dashboard
   - Use containers efficiently
   - Optimize image sizes

Performance Indicators:
- Query time in status bar
- Performance recording (Help → Settings and Performance → Start Performance Recording)
- Server monitoring (for Tableau Server)
```

## Advanced Features

### Analytics Pane
```
Summarize Tab:
Constant Line: Add reference lines
Average Line: Show average across view
Median with Quartiles: Box plot elements
Box Plot: Full box and whisker plots
Totals: Grand totals and subtotals

Model Tab:
Average with 95% CI: Confidence intervals
Median with 95% CI: Non-parametric confidence intervals
Trend Line: Linear, logarithmic, exponential, polynomial, power
Forecast: Exponential smoothing forecasting
Cluster: K-means clustering (scatter plots only)

Custom Tab:
Reference Line: Custom reference lines
Reference Band: Shaded regions
Distribution Band: Percentile distributions
Box Plot: Custom box plots
```

### Forecasting
```
Automatic Forecasting:
1. Must have date dimension
2. At least one measure
3. Analytics → Forecast → Trend Line/Forecast

Forecast Options:
- Forecast Length: Periods to forecast
- Source Data: What data to use
- Forecast Model: Automatic or custom
- Seasonality: None, automatic, or custom
- Prediction Intervals: Show uncertainty bands

Quality Indicators:
- Prediction intervals (confidence bands)
- Quality indicators in tooltip
- Model details in Describe Forecast

Best Practices:
- Need sufficient historical data
- Regular time intervals work best
- Account for business cycles/seasonality
- Validate forecasts with holdout data
```

### Statistical Functions
```
Correlation:
CORR([Measure1], [Measure2])

Covariance:
COVAR([Measure1], [Measure2])

Statistical Summary:
MEDIAN([Sales])
PERCENTILE([Sales], 0.25)  # First quartile
PERCENTILE([Sales], 0.75)  # Third quartile

Variance and Standard Deviation:
VAR([Sales])    # Population variance
VARP([Sales])   # Sample variance  
STDEV([Sales])  # Population standard deviation
STDEVP([Sales]) # Sample standard deviation
```

### Data Densification and Data Blending
```
Data Densification:
- Tableau automatically creates marks for missing combinations
- Controlled by continuous/discrete field usage
- Can create unexpected nulls

Data Blending:
- Combine data from multiple sources
- Primary vs Secondary data sources
- Linking fields (shared dimensions)
- Limitations: Some functions not available, aggregation at source level

Best Practices:
- Use relationships/joins when possible
- Ensure proper linking fields
- Understand aggregation implications
- Test calculations carefully
```

## Publishing and Sharing

### Tableau Server/Online
```
Publishing Workbooks:
1. Server → Publish Workbook
2. Configure:
   - Project location
   - Workbook name and description
   - Permissions
   - Data source options

Data Source Publishing:
1. Data → Publish to Server
2. Benefits:
   - Centralized data sources
   - Consistent calculations
   - Easier maintenance
   - Security control

Permission Levels:
- Viewer: View and interact
- Interactor: View, interact, download
- Editor: Create and edit content
- Publisher: Publish content
- Leader: Manage projects
- Administrator: Full control
```

### Embedding and Integration
```
Embed Codes:
- Share button → Embed Code
- Copy iframe code for web integration
- Configure size and interaction options

Tableau Public:
- Free platform for public sharing
- No data privacy
- Limited to 15GB storage
- Great for portfolios and public analysis

API Integration:
- REST API for administration
- JavaScript API for web embedding
- Extract API for data preparation
- Extensions API for custom functionality
```

## Best Practices and Tips

### Design Principles
```
Visual Design:
1. Choose right chart type for data
2. Use consistent colors and formatting
3. Minimize chart junk
4. Direct attention with color and size
5. Make text readable (font size, contrast)

Dashboard Layout:
1. Follow visual hierarchy principles
2. Group related information
3. Use white space effectively
4. Design for target device/screen size
5. Test on different screen sizes

Interactivity:
1. Make interactions intuitive
2. Provide clear feedback
3. Don't over-filter
4. Use progressive disclosure
5. Include reset/clear options
```

### Performance Optimization
```
Data Level:
- Use extracts for better performance
- Filter at data source level
- Aggregate data appropriately
- Use proper data types
- Index frequently filtered fields

Calculation Level:
- Use basic calcs over table calcs when possible
- Avoid nested calculations
- Use LOD expressions judiciously
- Context filters for calculation performance
- Minimize number of marks

Dashboard Level:
- Limit number of sheets
- Use containers efficiently
- Optimize images and logos
- Consider device-specific dashboards
- Test with realistic data volumes

Server Level:
- Schedule extract refreshes during off-hours
- Monitor server performance
- Use site and project structure effectively
- Implement proper security/permissions
```

### Troubleshooting Common Issues
```
Data Issues:
- Null values: Check data source, use IFNULL()
- Unexpected aggregation: Check field types
- Missing marks: Check filters and data densification
- Incorrect joins: Verify join conditions and types

Calculation Errors:
- Division by zero: Add IF statement protection
- Type mismatch: Use proper conversion functions
- Syntax errors: Check parentheses and commas
- Performance issues: Simplify complex calculations

Dashboard Problems:
- Slow loading: Check data volume and calculations
- Layout issues: Verify container settings
- Filter interactions: Check action configurations
- Mobile display: Test on target devices
```

This comprehensive Tableau reference covers everything from basic connections to advanced analytics and dashboard design. Use it as both a learning resource and a quick reference guide for your Tableau projects!