# OpenPyXL Comprehensive Reference Guide

## Installation and Setup

### Installation
```bash
# Basic installation
pip install openpyxl

# With additional dependencies for images and charts
pip install openpyxl[images,charts]

# Alternative installation methods
conda install openpyxl
pip install openpyxl==3.1.2  # Specific version

# Required for certain features
pip install Pillow  # For image handling
pip install et_xmlfile  # XML parsing (usually included)
```

### Basic Imports
```python
import openpyxl
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, Fill, Border, Alignment, PatternFill
from openpyxl.styles.borders import Side
from openpyxl.chart import BarChart, LineChart, PieChart, Reference
from openpyxl.formatting.rule import ColorScaleRule, CellIsRule
from openpyxl.utils import get_column_letter, column_index_from_string
from openpyxl.utils.dataframe import dataframe_to_rows
import pandas as pd
from datetime import datetime, date
```

## File Operations

### Creating and Opening Workbooks
```python
# Create new workbook
wb = Workbook()
ws = wb.active  # Get active worksheet
ws.title = "My Sheet"  # Rename worksheet

# Create additional worksheets
ws2 = wb.create_sheet("Data")
ws3 = wb.create_sheet("Summary", 0)  # Insert at beginning

# Save workbook
wb.save("example.xlsx")

# Open existing workbook
wb = load_workbook("example.xlsx")

# Open with data_only=True to get calculated values instead of formulas
wb = load_workbook("example.xlsx", data_only=True)

# Open with keep_vba=True to preserve macros
wb = load_workbook("example.xlsx", keep_vba=True)
```

### Worksheet Management
```python
# List all worksheets
sheet_names = wb.sheetnames
print(sheet_names)

# Access worksheets
ws = wb["Sheet1"]  # By name
ws = wb.worksheets[0]  # By index
ws = wb.active  # Active sheet

# Create and configure worksheets
ws = wb.create_sheet("NewSheet")
ws.sheet_properties.tabColor = "FF0000"  # Red tab color

# Copy worksheet
ws_copy = wb.copy_worksheet(ws)
ws_copy.title = "Copy of " + ws.title

# Delete worksheet
del wb["SheetToDelete"]
# or
wb.remove(ws)

# Move worksheet
wb.move_sheet("Sheet1", offset=2)  # Move 2 positions right
```

## Cell Operations

### Basic Cell Access and Manipulation
```python
# Access single cells
cell = ws['A1']
cell = ws.cell(row=1, column=1)  # Same as A1

# Set cell values
ws['A1'] = "Hello World"
ws['B1'] = 42
ws['C1'] = 3.14159
ws['D1'] = datetime.now()
ws['E1'] = date.today()
ws['F1'] = True

# Get cell values
value = ws['A1'].value
print(f"Cell A1 contains: {value}")

# Cell properties
print(f"Cell coordinate: {cell.coordinate}")
print(f"Cell row: {cell.row}")
print(f"Cell column: {cell.column}")
print(f"Cell column letter: {get_column_letter(cell.column)}")
```

### Working with Ranges
```python
# Access ranges
cell_range = ws['A1:C3']
cell_range = ws[1:3]  # Rows 1-3
cell_range = ws['A:C']  # Columns A-C

# Iterate through ranges
for row in ws['A1:C3']:
    for cell in row:
        print(cell.value)

# Alternative iteration
for row in ws.iter_rows(min_row=1, max_row=3, min_col=1, max_col=3):
    for cell in row:
        print(cell.value)

# Get values only
for row in ws.iter_rows(min_row=1, max_row=3, min_col=1, max_col=3, values_only=True):
    print(row)

# Set range values
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "New York"],
    ["Bob", 30, "London"],
    ["Charlie", 35, "Tokyo"]
]

for row_idx, row_data in enumerate(data, 1):
    for col_idx, value in enumerate(row_data, 1):
        ws.cell(row=row_idx, column=col_idx, value=value)
```

### Advanced Cell Operations
```python
# Append data to worksheet
data = [["John", 28, "Paris"], ["Jane", 32, "Berlin"]]
for row in data:
    ws.append(row)

# Insert and delete rows/columns
ws.insert_rows(2, 3)  # Insert 3 rows starting at row 2
ws.insert_cols(2, 2)  # Insert 2 columns starting at column B
ws.delete_rows(5, 2)  # Delete 2 rows starting at row 5
ws.delete_cols(3, 1)  # Delete 1 column starting at column C

# Merge and unmerge cells
ws.merge_cells('A1:C1')
ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=3)
ws.unmerge_cells('A1:C1')

# Get merged cell ranges
merged_ranges = ws.merged_cells.ranges
for merged_range in merged_ranges:
    print(merged_range)
```

## Formatting and Styling

### Font Formatting
```python
from openpyxl.styles import Font

# Basic font formatting
font_bold = Font(bold=True)
font_italic = Font(italic=True)
font_underline = Font(underline='single')
font_strikethrough = Font(strike=True)

# Font with multiple properties
custom_font = Font(
    name='Arial',
    size=14,
    bold=True,
    italic=False,
    vertAlign=None,
    underline='none',
    strike=False,
    color='FF0000'  # Red color
)

# Apply font to cell
ws['A1'].font = custom_font

# Apply to range
for row in ws['A1:C3']:
    for cell in row:
        cell.font = Font(bold=True, size=12)
```

### Fill and Background Colors
```python
from openpyxl.styles import PatternFill

# Solid fill
red_fill = PatternFill(start_color='FFFF0000', end_color='FFFF0000', fill_type='solid')
green_fill = PatternFill(start_color='FF00FF00', end_color='FF00FF00', fill_type='solid')
blue_fill = PatternFill(start_color='FF0000FF', end_color='FF0000FF', fill_type='solid')

# Gradient fill
gradient_fill = PatternFill(fill_type='lightUp', start_color='FFFFFF', end_color='000000')

# Apply fills
ws['A1'].fill = red_fill
ws['B1'].fill = green_fill
ws['C1'].fill = blue_fill

# RGB color helper function
def rgb_to_hex(r, g, b):
    return f"FF{r:02X}{g:02X}{b:02X}"

light_blue = PatternFill(start_color=rgb_to_hex(173, 216, 230), 
                        end_color=rgb_to_hex(173, 216, 230), 
                        fill_type='solid')
ws['D1'].fill = light_blue
```

### Borders
```python
from openpyxl.styles import Border, Side

# Define border styles
thin_border = Border(
    left=Side(style='thin'),
    right=Side(style='thin'),
    top=Side(style='thin'),
    bottom=Side(style='thin')
)

thick_border = Border(
    left=Side(style='thick', color='FF000000'),
    right=Side(style='thick', color='FF000000'),
    top=Side(style='thick', color='FF000000'),
    bottom=Side(style='thick', color='FF000000')
)

# Border styles available
border_styles = [
    'dashDot', 'dashDotDot', 'dashed', 'dotted', 'double', 
    'hair', 'medium', 'mediumDashDot', 'mediumDashDotDot', 
    'mediumDashed', 'slantDashDot', 'thick', 'thin'
]

# Apply borders
ws['A1'].border = thin_border

# Apply to range
for row in ws['A1:C5']:
    for cell in row:
        cell.border = thin_border
```

### Alignment
```python
from openpyxl.styles import Alignment

# Text alignment options
center_alignment = Alignment(horizontal='center', vertical='center')
left_alignment = Alignment(horizontal='left', vertical='top')
right_alignment = Alignment(horizontal='right', vertical='bottom')

# Text wrapping and rotation
wrap_alignment = Alignment(wrap_text=True)
rotated_alignment = Alignment(text_rotation=45)

# Apply alignment
ws['A1'].alignment = center_alignment
ws['B1'].alignment = wrap_alignment
ws['C1'].alignment = rotated_alignment

# Alignment options
alignment_options = {
    'horizontal': ['general', 'left', 'center', 'right', 'fill', 'justify', 'centerContinuous', 'distributed'],
    'vertical': ['top', 'center', 'bottom', 'justify', 'distributed']
}
```

### Number Formatting
```python
# Built-in number formats
ws['A1'].number_format = '0.00'           # Two decimal places
ws['A2'].number_format = '0.00%'          # Percentage
ws['A3'].number_format = '$#,##0.00'      # Currency
ws['A4'].number_format = 'mm/dd/yyyy'     # Date
ws['A5'].number_format = 'h:mm:ss'        # Time
ws['A6'].number_format = '#,##0'          # Thousands separator

# Custom number formats
ws['B1'].number_format = '0.000E+00'      # Scientific notation
ws['B2'].number_format = '[Red]0.00'      # Red negative numbers
ws['B3'].number_format = '0.00_);[Red](0.00)'  # Positive/negative formatting
ws['B4'].number_format = '"$"#,##0.00_);[Red]("$"#,##0.00)'  # Currency with colors

# Conditional number formatting
ws['C1'].number_format = '[>1000]0.00,"K";0.00'  # Show K for thousands
```

## Working with Formulas

### Basic Formulas
```python
# Simple formulas
ws['A1'] = 10
ws['A2'] = 20
ws['A3'] = '=A1+A2'  # Sum
ws['A4'] = '=A1*A2'  # Product
ws['A5'] = '=A2/A1'  # Division

# Function formulas
ws['B1'] = '=SUM(A1:A2)'
ws['B2'] = '=AVERAGE(A1:A10)'
ws['B3'] = '=MAX(A1:A10)'
ws['B4'] = '=MIN(A1:A10)'
ws['B5'] = '=COUNT(A1:A10)'

# Text functions
ws['C1'] = 'Hello'
ws['C2'] = 'World'
ws['C3'] = '=CONCATENATE(C1," ",C2)'
ws['C4'] = '=LEN(C1)'
ws['C5'] = '=UPPER(C1)'

# Date functions
ws['D1'] = '=TODAY()'
ws['D2'] = '=NOW()'
ws['D3'] = '=YEAR(TODAY())'
ws['D4'] = '=MONTH(TODAY())'
```

### Advanced Formulas
```python
# Logical functions
ws['E1'] = '=IF(A1>A2,"A1 is larger","A2 is larger")'
ws['E2'] = '=AND(A1>0,A2>0)'
ws['E3'] = '=OR(A1>15,A2>15)'

# Lookup functions
ws['F1'] = '=VLOOKUP(A1,A1:B10,2,FALSE)'
ws['F2'] = '=INDEX(B1:B10,MATCH(A1,A1:A10,0))'

# Array formulas (use with caution)
ws['G1'] = '=SUM(A1:A10*B1:B10)'

# Reference other sheets
ws['H1'] = '=Sheet2!A1'
ws['H2'] = '=SUM(Sheet2!A1:A10)'

# Named ranges (define first, then use)
wb.defined_names.append(openpyxl.workbook.defined_name.DefinedName('SalesData', attr_text='Sheet1!$A$1:$A$10'))
ws['I1'] = '=SUM(SalesData)'
```

## Charts and Visualizations

### Bar Charts
```python
from openpyxl.chart import BarChart, Reference

# Create sample data
data = [
    ["Category", "Sales"],
    ["A", 100],
    ["B", 150],
    ["C", 200],
    ["D", 120]
]

for row_idx, row_data in enumerate(data, 1):
    for col_idx, value in enumerate(row_data, 1):
        ws.cell(row=row_idx, column=col_idx, value=value)

# Create bar chart
chart = BarChart()
chart.type = "col"  # Column chart
chart.style = 10    # Chart style
chart.title = "Sales by Category"
chart.y_axis.title = "Sales"
chart.x_axis.title = "Category"

# Define data ranges
data_range = Reference(ws, min_col=2, min_row=1, max_row=5, max_col=2)
categories = Reference(ws, min_col=1, min_row=2, max_row=5)

chart.add_data(data_range, titles_from_data=True)
chart.set_categories(categories)

# Add chart to worksheet
ws.add_chart(chart, "E2")

# Horizontal bar chart
hbar_chart = BarChart()
hbar_chart.type = "bar"
hbar_chart.style = 12
hbar_chart.title = "Horizontal Sales Chart"
ws.add_chart(hbar_chart, "E18")
```

### Line Charts
```python
from openpyxl.chart import LineChart, Reference

# Create time series data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [100, 120, 140, 110, 160, 180]
profit = [20, 25, 30, 22, 35, 40]

# Add data to worksheet
ws['A1'] = "Month"
ws['B1'] = "Sales"
ws['C1'] = "Profit"

for i, (month, sale, prof) in enumerate(zip(months, sales, profit), 2):
    ws[f'A{i}'] = month
    ws[f'B{i}'] = sale
    ws[f'C{i}'] = prof

# Create line chart
line_chart = LineChart()
line_chart.title = "Sales and Profit Trends"
line_chart.style = 13
line_chart.y_axis.title = "Amount"
line_chart.x_axis.title = "Month"

# Add data series
data = Reference(ws, min_col=2, min_row=1, max_col=3, max_row=7)
categories = Reference(ws, min_col=1, min_row=2, max_row=7)

line_chart.add_data(data, titles_from_data=True)
line_chart.set_categories(categories)

# Customize line styles
line_chart.series[0].graphicalProperties.line.solidFill = "FF0000"  # Red line
line_chart.series[1].graphicalProperties.line.solidFill = "00FF00"  # Green line

ws.add_chart(line_chart, "E2")
```

### Pie Charts
```python
from openpyxl.chart import PieChart, Reference

# Create pie chart
pie_chart = PieChart()
pie_chart.title = "Market Share"

# Define data (assuming data exists in A1:B5)
data = Reference(ws, min_col=2, min_row=2, max_row=5)
labels = Reference(ws, min_col=1, min_row=2, max_row=5)

pie_chart.add_data(data)
pie_chart.set_categories(labels)

# Customize pie chart
pie_chart.dataLabels = openpyxl.chart.data_source.DataLabelList()
pie_chart.dataLabels.showPercent = True
pie_chart.dataLabels.showVal = True

ws.add_chart(pie_chart, "G2")
```

### Chart Customization
```python
# Advanced chart customization
chart = BarChart()

# Chart properties
chart.title = "Advanced Chart"
chart.style = 15
chart.width = 20
chart.height = 10

# Axis customization
chart.x_axis.title = "X Axis Label"
chart.y_axis.title = "Y Axis Label"
chart.x_axis.majorGridlines = None  # Remove gridlines
chart.y_axis.scaling.min = 0        # Set minimum value
chart.y_axis.scaling.max = 300      # Set maximum value

# Legend
chart.legend.position = 'r'  # Right position
chart.legend.overlay = False

# Data labels
from openpyxl.chart.label import DataLabelList
chart.dataLabels = DataLabelList()
chart.dataLabels.showVal = True
chart.dataLabels.showPercent = False

# Series customization
chart.series[0].graphicalProperties.solidFill = "FF5733"  # Orange
chart.series[0].graphicalProperties.line.solidFill = "000000"  # Black border
```

## Conditional Formatting

### Basic Conditional Formatting
```python
from openpyxl.formatting.rule import ColorScaleRule, CellIsRule, FormulaRule

# Color scale rule
color_scale = ColorScaleRule(start_type='min', start_color='FF0000',  # Red
                            mid_type='percentile', mid_value=50, mid_color='FFFF00',  # Yellow
                            end_type='max', end_color='00FF00')  # Green

ws.conditional_formatting.add('A1:A10', color_scale)

# Cell value rules
red_text = Font(color="9C0006")
red_fill = PatternFill(start_color='FFC7CE', end_color='FFC7CE')

# Highlight cells greater than 100
rule1 = CellIsRule(operator='greaterThan', formula=['100'], stopIfTrue=True, font=red_text, fill=red_fill)
ws.conditional_formatting.add('B1:B10', rule1)

# Highlight cells between values
rule2 = CellIsRule(operator='between', formula=['50', '100'], stopIfTrue=True, 
                  font=Font(color="000000"), fill=PatternFill(start_color='FFEB9C', end_color='FFEB9C'))
ws.conditional_formatting.add('B1:B10', rule2)
```

### Advanced Conditional Formatting
```python
# Formula-based rules
formula_rule = FormulaRule(formula=['MOD(ROW(),2)=0'], stopIfTrue=True,
                          fill=PatternFill(start_color='E0E0E0', end_color='E0E0E0'))
ws.conditional_formatting.add('A1:C10', formula_rule)  # Zebra striping

# Highlight duplicates
duplicate_rule = FormulaRule(formula=['COUNTIF($A$1:$A$10,$A1)>1'], stopIfTrue=True,
                            font=Font(color="FF0000"), fill=PatternFill(start_color='FFCCCC', end_color='FFCCCC'))
ws.conditional_formatting.add('A1:A10', duplicate_rule)

# Data bars
from openpyxl.formatting.rule import DataBarRule
data_bar_rule = DataBarRule(start_type='min', start_value=0, end_type='max', end_value=100,
                           color="FF638EC6", showValue=True, minLength=None, maxLength=None)
ws.conditional_formatting.add('D1:D10', data_bar_rule)

# Icon sets
from openpyxl.formatting.rule import IconSetRule
icon_set_rule = IconSetRule('3TrafficLights1', 'percent', [67, 33], showValue=None, percent=True, reverse=False)
ws.conditional_formatting.add('E1:E10', icon_set_rule)
```

## Data Validation

### Basic Data Validation
```python
from openpyxl.worksheet.datavalidation import DataValidation

# Create validation rules
# Whole number validation
dv1 = DataValidation(type="whole", operator="between", formula1=1, formula2=100)
dv1.error = 'Your entry is not valid'
dv1.errorTitle = 'Invalid Entry'
dv1.prompt = 'Please enter a number between 1 and 100'
dv1.promptTitle = 'Enter a number'

# Add validation to range
ws.add_data_validation(dv1)
dv1.add('A1:A10')

# List validation (dropdown)
dv2 = DataValidation(type="list", formula1='"Red,Green,Blue,Yellow"')
dv2.prompt = 'Please select a color'
dv2.promptTitle = 'Color Selection'
ws.add_data_validation(dv2)
dv2.add('B1:B10')

# Date validation
dv3 = DataValidation(type="date", operator="between", 
                    formula1=datetime(2024, 1, 1), formula2=datetime(2024, 12, 31))
dv3.prompt = 'Please enter a date in 2024'
ws.add_data_validation(dv3)
dv3.add('C1:C10')
```

### Advanced Data Validation
```python
# Text length validation
dv4 = DataValidation(type="textLength", operator="lessThan", formula1=50)
dv4.prompt = 'Text must be less than 50 characters'
dv4.error = 'Text too long!'
ws.add_data_validation(dv4)
dv4.add('D1:D10')

# Custom formula validation
dv5 = DataValidation(type="custom", formula1='ISNUMBER(E1)')
dv5.prompt = 'Please enter a number only'
dv5.error = 'Entry must be a number'
ws.add_data_validation(dv5)
dv5.add('E1:E10')

# Validation based on other cells
dv6 = DataValidation(type="list", formula1='$G$1:$G$5')  # Reference to range
dv6.prompt = 'Select from the list in column G'
ws.add_data_validation(dv6)
dv6.add('F1:F10')
```

## Integration with Pandas

### Reading Excel to Pandas
```python
import pandas as pd
from openpyxl import load_workbook

# Read Excel file into pandas DataFrame
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# Read specific range
df = pd.read_excel('data.xlsx', sheet_name='Sheet1', usecols='A:D', skiprows=1, nrows=100)

# Read multiple sheets
dfs = pd.read_excel('data.xlsx', sheet_name=['Sheet1', 'Sheet2'])

# Using OpenPyXL engine specifically
df = pd.read_excel('data.xlsx', engine='openpyxl')
```

### Writing Pandas to Excel with OpenPyXL
```python
from openpyxl.utils.dataframe import dataframe_to_rows

# Create sample DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['New York', 'London', 'Tokyo', 'Paris'],
    'Salary': [50000, 60000, 75000, 55000]
}
df = pd.DataFrame(data)

# Method 1: Using pandas to_excel with OpenPyXL
with pd.ExcelWriter('output.xlsx', engine='openpyxl') as writer:
    df.to_excel(writer, sheet_name='Data', index=False)
    
    # Access the workbook and worksheet
    workbook = writer.book
    worksheet = writer.sheets['Data']
    
    # Apply formatting
    for cell in worksheet[1]:  # Header row
        cell.font = Font(bold=True)
        cell.fill = PatternFill(start_color='CCCCCC', end_color='CCCCCC', fill_type='solid')

# Method 2: Using OpenPyXL directly
wb = Workbook()
ws = wb.active
ws.title = "DataFrame Data"

# Add DataFrame to worksheet
for r in dataframe_to_rows(df, index=False, header=True):
    ws.append(r)

# Format header row
for cell in ws[1]:
    cell.font = Font(bold=True, color='FFFFFF')
    cell.fill = PatternFill(start_color='366092', end_color='366092', fill_type='solid')

# Auto-adjust column widths
for column in ws.columns:
    max_length = 0
    column_letter = get_column_letter(column[0].column)
    
    for cell in column:
        try:
            if len(str(cell.value)) > max_length:
                max_length = len(str(cell.value))
        except:
            pass
    
    adjusted_width = min(max_length + 2, 50)
    ws.column_dimensions[column_letter].width = adjusted_width

wb.save('formatted_output.xlsx')
```

### Advanced Pandas Integration
```python
# Multiple DataFrames to different sheets
df1 = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
df2 = pd.DataFrame({'X': [7, 8, 9], 'Y': [10, 11, 12]})

with pd.ExcelWriter('multiple_sheets.xlsx', engine='openpyxl') as writer:
    df1.to_excel(writer, sheet_name='Sheet1', index=False)
    df2.to_excel(writer, sheet_name='Sheet2', index=False)
    
    # Format both sheets
    for sheet_name in writer.sheets:
        worksheet = writer.sheets[sheet_name]
        for cell in worksheet[1]:
            cell.font = Font(bold=True)

# Append to existing Excel file
with pd.ExcelWriter('existing_file.xlsx', engine='openpyxl', mode='a') as writer:
    df.to_excel(writer, sheet_name='NewSheet', index=False)

# Complex formatting with pandas and OpenPyXL
def format_excel_report(filename, df, sheet_name='Report'):
    wb = Workbook()
    ws = wb.active
    ws.title = sheet_name
    
    # Add title
    ws['A1'] = f"{sheet_name} - {datetime.now().strftime('%Y-%m-%d')}"
    ws['A1'].font = Font(bold=True, size=16)
    ws.merge_cells('A1:D1')
    
    # Add DataFrame starting from row 3
    start_row = 3
    for r_idx, r in enumerate(dataframe_to_rows(df, index=False, header=True)):
        for c_idx, value in enumerate(r, 1):
            cell = ws.cell(row=start_row + r_idx, column=c_idx, value=value)
            
            if r_idx == 0:  # Header row
                cell.font = Font(bold=True, color='FFFFFF')
                cell.fill = PatternFill(start_color='366092', end_color='366092', fill_type='solid')
            elif r_idx % 2 == 0:  # Alternating row colors
                cell.fill = PatternFill(start_color='F2F2F2', end_color='F2F2F2', fill_type='solid')
    
    # Add borders
    thin_border = Border(
        left=Side(style='thin'), right=Side(style='thin'),
        top=Side(style='thin'), bottom=Side(style='thin')
    )
    
    for row in ws[f'A{start_row}:{get_column_letter(len(df.columns))}{start_row + len(df)}']:
        for cell in row:
            cell.border = thin_border
    
    wb.save(filename)

# Usage
format_excel_report('formatted_report.xlsx', df, 'Sales Report')
```

## Images and Media

### Working with Images
```python
from openpyxl.drawing.image import Image
from PIL import Image as PILImage

# Add image to worksheet
img = Image('logo.png')
img.width = 200  # Resize width
img.height = 100  # Resize height
ws.add_image(img, 'A1')

# Position image precisely
img.anchor = 'B2'  # Anchor to specific cell

# Resize image proportionally
def resize_image(image_path, max_width=None, max_height=None):
    pil_img = PILImage.open(image_path)
    original_width, original_height = pil_img.size
    
    if max_width and max_height:
        # Calculate scaling factor
        width_ratio = max_width / original_width
        height_ratio = max_height / original_height
        scale_factor = min(width_ratio, height_ratio)
    elif max_width:
        scale_factor = max_width / original_width
    elif max_height:
        scale_factor = max_height / original_height
    else:
        scale_factor = 1
    
    new_width = int(original_width * scale_factor)
    new_height = int(original_height * scale_factor)
    
    img = Image(image_path)
    img.width = new_width
    img.height = new_height
    return img

# Usage
resized_img = resize_image('large_image.jpg', max_width=300)
ws.add_image(resized_img, 'D5')
```

## Protection and Security

### Worksheet Protection
```python
# Protect worksheet
ws.protection.sheet = True
ws.protection.password = 'mypassword'
ws.protection.formatCells = False      # Allow formatting
ws.protection.formatColumns = False    # Allow column formatting
ws.protection.formatRows = False       # Allow row formatting
ws.protection.insertColumns = False    # Prevent column insertion
ws.protection.insertRows = False       # Prevent row insertion
ws.protection.deleteColumns = False    # Prevent column deletion
ws.protection.deleteRows = False       # Prevent row deletion

# Unlock specific cells for editing
for row in ws['A1:C10']:
    for cell in row:
        cell.protection = Protection(locked=False)

# Protect workbook structure
wb.security.workbookPassword = 'workbookpassword'
wb.security.lockStructure = True
wb.security.lockWindows = False
```

## Automation and Batch Processing

### Processing Multiple Files
```python
import os
import glob
from pathlib import Path

def process_excel_files(directory_path, output_file):
    """Process multiple Excel files and combine into summary"""
    all_data = []
    
    # Find all Excel files
    excel_files = glob.glob(os.path.join(directory_path, "*.xlsx"))
    
    for file_path in excel_files:
        try:
            # Read each file
            wb = load_workbook(file_path, data_only=True)
            ws = wb.active
            
            # Extract data (assuming data starts at A1)
            file_data = []
            for row in ws.iter_rows(values_only=True):
                if any(row):  # Skip empty rows
                    file_data.append(list(row) + [Path(file_path).stem])  # Add filename
            
            all_data.extend(file_data)
            wb.close()
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    # Create summary workbook
    wb_summary = Workbook()
    ws_summary = wb_summary.active
    ws_summary.title = "Combined Data"
    
    # Add headers
    if all_data:
        headers = ["Col1", "Col2", "Col3", "Source_File"]
        ws_summary.append(headers)
        
        # Format headers
        for cell in ws_summary[1]:
            cell.font = Font(bold=True)
            cell.fill = PatternFill(start_color='CCCCCC', end_color='CCCCCC', fill_type='solid')
        
        # Add data
        for row_data in all_data:
            ws_summary.append(row_data)
    
    wb_summary.save(output_file)
    print(f"Combined data saved to {output_file}")

# Usage
process_excel_files("input_folder", "combined_report.xlsx")
```

### Template-Based Report Generation
```python
def generate_report_from_template(template_path, data, output_path):
    """Generate report from template with dynamic data"""
    
    # Load template
    wb = load_workbook(template_path)
    ws = wb.active
    
    # Replace placeholders in template
    for row in ws.iter_rows():
        for cell in row:
            if cell.value and isinstance(cell.value, str):
                # Replace placeholders like {{COMPANY_NAME}}
                for key, value in data.items():
                    placeholder = f"{{{{{key}}}}}"
                    if placeholder in cell.value:
                        cell.value = cell.value.replace(placeholder, str(value))
    
    # Add dynamic data table if placeholder exists
    for row in ws.iter_rows():
        for cell in row:
            if cell.value == "{{DATA_TABLE}}":
                start_row = cell.row
                start_col = cell.column
                
                # Clear placeholder
                cell.value = ""
                
                # Add table data
                if 'table_data' in data:
                    table_data = data['table_data']
                    for r_idx, row_data in enumerate(table_data):
                        for c_idx, value in enumerate(row_data):
                            ws.cell(row=start_row + r_idx, 
                                   column=start_col + c_idx, 
                                   value=value)
    
    # Save generated report
    wb.save(output_path)
    wb.close()

# Usage example
report_data = {
    'COMPANY_NAME': 'Acme Corporation',
    'REPORT_DATE': datetime.now().strftime('%Y-%m-%d'),
    'TOTAL_SALES': 1250000,
    'table_data': [
        ['Product', 'Sales', 'Profit'],
        ['Product A', 500000, 100000],
        ['Product B', 750000, 150000]
    ]
}

generate_report_from_template('report_template.xlsx', report_data, 'monthly_report.xlsx')
```

### Automated Formatting Functions
```python
def apply_corporate_style(ws, data_range=None):
    """Apply corporate styling to worksheet"""
    
    # Define corporate colors
    corporate_blue = 'FF1F4E79'
    light_gray = 'FFF2F2F2'
    dark_gray = 'FFD9D9D9'
    
    # Header styling
    if data_range:
        # Find header row (assume first row of range)
        header_row = ws[data_range.split(':')[0][0] + data_range.split(':')[0][1:]]
        for cell in header_row:
            cell.font = Font(bold=True, color='FFFFFF')
            cell.fill = PatternFill(start_color=corporate_blue, end_color=corporate_blue, fill_type='solid')
            cell.alignment = Alignment(horizontal='center', vertical='center')
    
    # Auto-adjust column widths
    for column in ws.columns:
        max_length = 0
        column_letter = get_column_letter(column[0].column)
        
        for cell in column:
            try:
                if len(str(cell.value)) > max_length:
                    max_length = len(str(cell.value))
            except:
                pass
        
        adjusted_width = min(max_length + 2, 50)
        ws.column_dimensions[column_letter].width = adjusted_width
    
    # Add alternating row colors if data_range provided
    if data_range:
        range_start = data_range.split(':')[0]
        range_end = data_range.split(':')[1]
        start_row = int(''.join(filter(str.isdigit, range_start))) + 1  # Skip header
        end_row = int(''.join(filter(str.isdigit, range_end)))
        start_col = column_index_from_string(range_start[0])
        end_col = column_index_from_string(range_end[0])
        
        for row_num in range(start_row, end_row + 1):
            if row_num % 2 == 0:  # Even rows
                for col_num in range(start_col, end_col + 1):
                    cell = ws.cell(row=row_num, column=col_num)
                    cell.fill = PatternFill(start_color=light_gray, end_color=light_gray, fill_type='solid')

def create_dashboard_sheet(wb, title="Dashboard"):
    """Create a dashboard sheet with KPI layout"""
    
    ws = wb.create_sheet(title)
    
    # Title
    ws.merge_cells('A1:E1')
    ws['A1'] = title
    ws['A1'].font = Font(bold=True, size=18, color='FFFFFF')
    ws['A1'].fill = PatternFill(start_color='FF1F4E79', end_color='FF1F4E79', fill_type='solid')
    ws['A1'].alignment = Alignment(horizontal='center', vertical='center')
    ws.row_dimensions[1].height = 30
    
    # KPI boxes
    kpi_positions = [('A3', 'B4'), ('D3', 'E4'), ('A6', 'B7'), ('D6', 'E7')]
    kpi_labels = ['Total Sales', 'Total Orders', 'Average Order', 'Growth Rate']
    
    for i, (start_cell, end_cell) in enumerate(kpi_positions):
        ws.merge_cells(f'{start_cell}:{end_cell}')
        ws[start_cell] = kpi_labels[i]
        ws[start_cell].font = Font(bold=True, size=14)
        ws[start_cell].fill = PatternFill(start_color='FFE6E6E6', end_color='FFE6E6E6', fill_type='solid')
        ws[start_cell].alignment = Alignment(horizontal='center', vertical='center')
        ws[start_cell].border = Border(
            left=Side(style='thin'), right=Side(style='thin'),
            top=Side(style='thin'), bottom=Side(style='thin')
        )
    
    return ws

# Usage
wb = Workbook()
ws = wb.active
# ... add data ...
apply_corporate_style(ws, 'A1:D10')
dashboard = create_dashboard_sheet(wb)
wb.save('styled_workbook.xlsx')
```

## Performance Optimization and Best Practices

### Efficient Data Handling
```python
# Efficient ways to handle large datasets

def efficient_data_write(ws, data, start_row=1, start_col=1):
    """Write large amounts of data efficiently"""
    
    # Method 1: Batch cell updates
    for row_idx, row_data in enumerate(data):
        for col_idx, value in enumerate(row_data):
            ws.cell(row=start_row + row_idx, column=start_col + col_idx, value=value)
    
    # Method 2: Direct assignment (faster for simple data)
    for row_idx, row_data in enumerate(data):
        ws.append(row_data)

def read_large_file_efficiently(file_path, chunk_size=1000):
    """Read large Excel files in chunks"""
    
    wb = load_workbook(file_path, read_only=True)
    ws = wb.active
    
    data_chunks = []
    current_chunk = []
    
    for row_idx, row in enumerate(ws.iter_rows(values_only=True)):
        current_chunk.append(row)
        
        if len(current_chunk) >= chunk_size:
            data_chunks.append(current_chunk)
            current_chunk = []
    
    if current_chunk:  # Add remaining data
        data_chunks.append(current_chunk)
    
    wb.close()
    return data_chunks

# Memory-efficient processing
def process_large_excel_memory_efficient(input_path, output_path, process_function):
    """Process large Excel file without loading everything into memory"""
    
    wb_input = load_workbook(input_path, read_only=True)
    ws_input = wb_input.active
    
    wb_output = Workbook(write_only=True)
    ws_output = wb_output.create_sheet()
    
    # Process row by row
    for row in ws_input.iter_rows(values_only=True):
        processed_row = process_function(row)
        ws_output.append(processed_row)
    
    wb_input.close()
    wb_output.save(output_path)
    wb_output.close()

# Example processing function
def clean_row(row):
    """Clean and process a single row of data"""
    cleaned_row = []
    for cell_value in row:
        if isinstance(cell_value, str):
            cleaned_row.append(cell_value.strip().upper())
        elif cell_value is None:
            cleaned_row.append("")
        else:
            cleaned_row.append(cell_value)
    return cleaned_row
```

This comprehensive OpenPyXL reference provides everything you need to programmatically work with Excel files, from basic operations to advanced automation and enterprise-level report generation!