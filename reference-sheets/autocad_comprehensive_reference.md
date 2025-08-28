# AutoCAD Comprehensive Reference Guide

## Interface and Navigation

### AutoCAD Interface Components
```
Main Interface Elements:
- Application Menu: File operations, recent documents, options
- Quick Access Toolbar: Save, Undo, Redo, Plot, etc.
- Ribbon: Command tabs organized by function
- Drawing Area: Main workspace for creating drawings
- Command Line: Text input for commands and responses
- Status Bar: Coordinates, drawing aids, annotation scale
- Navigation Bar: Pan, Zoom, SteeringWheel, ViewCube
- Model/Layout Tabs: Switch between model space and paper space

Ribbon Tabs:
- Home: Draw, Modify, Annotation, Layers, Properties
- Insert: Block, Reference, Import, Point Cloud
- Annotate: Text, Dimensions, Leaders, Tables, Markup
- Parametric: Geometric and Dimensional constraints
- View: Model Views, Visual Styles, Palettes
- Manage: CAD Standards, Data Extraction, Applications
- Output: Plot, Publish, 3D Print, Export
- Express Tools: Additional productivity tools
- Featured Apps: Add-on applications and plugins
```

### Essential Keyboard Shortcuts
```
File Operations:
Ctrl + N          New drawing
Ctrl + O          Open drawing
Ctrl + S          Save drawing
Ctrl + Shift + S  Save As
Ctrl + P          Plot/Print
Ctrl + Z          Undo
Ctrl + Y          Redo
Ctrl + Q          Exit AutoCAD

Edit Operations:
Ctrl + C          Copy
Ctrl + X          Cut
Ctrl + V          Paste
Ctrl + A          Select all
Delete            Delete selected objects
Ctrl + Shift + C  Copy with base point
Ctrl + Shift + V  Paste as block
Ctrl + D          Toggle drawing aids
Ctrl + G          Toggle grid
Ctrl + E          Cycle through isometric planes

View Operations:
Ctrl + 1          Properties palette
Ctrl + 2          Design Center
Ctrl + 3          Tool palettes
Ctrl + 8          Calculator
Ctrl + 9          Command line
F1                Help
F2                Text window
F3                Object snap toggle
F8                Ortho mode toggle
F9                Snap mode toggle
F10               Polar tracking toggle
F11               Object snap tracking
F12               Dynamic input toggle

Navigation:
Mouse wheel       Zoom in/out
Middle click + drag  Pan
Double middle click  Zoom extents
Ctrl + mouse wheel   Pan horizontally
Shift + middle click + drag  3D orbit
```

## Drawing Commands

### Basic Drawing Commands
```
LINE Command:
Command: LINE (or L)
- Specify first point: Click or enter coordinates
- Specify next point: Continue clicking points
- Options while drawing:
  - Undo (U): Remove last segment
  - Close (C): Close the polyline
  - Enter or Space: End command

Coordinate Input Methods:
- Absolute: 5,10 (X,Y coordinates)
- Relative: @5,10 (relative to last point)
- Polar: @10<45 (distance<angle)
- Direct distance: Point direction, type distance

CIRCLE Command:
Command: CIRCLE (or C)
Options:
- Center, Radius (default): Pick center, specify radius
- Center, Diameter (D): Pick center, specify diameter
- 2-Point (2P): Define circle by two points on circumference
- 3-Point (3P): Define circle by three points on circumference
- Tangent Tangent Radius (TTR): Tangent to two objects with given radius
- Tangent Tangent Tangent (3T): Tangent to three objects

ARC Command:
Command: ARC (or A)
Default: 3-Point arc
Options:
- Start, Center, End (SCE)
- Start, Center, Angle (SCA)
- Start, Center, Length (SCL)
- Start, End, Angle (SEA)
- Start, End, Direction (SED)
- Start, End, Radius (SER)
- Center, Start, End (CSE)
- Center, Start, Angle (CSA)
- Center, Start, Length (CSL)

RECTANGLE Command:
Command: RECTANGLE (or REC)
- Specify first corner: Click first point
- Specify opposite corner: Click opposite point
Options during command:
- Chamfer (C): Set chamfer distances
- Elevation (E): Set Z elevation
- Fillet (F): Set corner radius
- Thickness (T): Set 3D thickness
- Width (W): Set line width
- Area (A): Specify by area and dimension
- Dimensions (D): Specify by length and width
- Rotation (R): Rotate rectangle
```

### Advanced Drawing Commands
```
POLYLINE Command:
Command: POLYLINE (or PL)
- Creates connected line and arc segments
- Can have varying widths
- Treated as single object

Polyline Options:
- Arc (A): Switch to arc mode
- Close (C): Close polyline
- Halfwidth (H): Set half-width
- Length (L): Continue with specified length
- Undo (U): Remove last segment
- Width (W): Set starting and ending widths

SPLINE Command:
Command: SPLINE (or SPL)
- Creates smooth curves through points
- NURBS (Non-Uniform Rational B-Spline) curves
- Control vertices or fit points method

Spline Options:
- Degree: 1-10 (higher = smoother curves)
- Fit tolerance: How closely spline follows fit points
- Tangent direction: Control start/end tangency
- Convert: Convert spline-fit polylines to true splines

ELLIPSE Command:
Command: ELLIPSE (or EL)
Default method: Axis endpoints
- Specify first axis endpoint
- Specify second axis endpoint  
- Specify distance to define minor axis

Ellipse Options:
- Arc (A): Create elliptical arc
- Center (C): Define by center point
- Rotation (R): Define by rotation angle
- Isocircle (I): Create isometric circles

HATCH Command:
Command: HATCH (or H)
- Fill enclosed areas with patterns or solid fills

Hatch Options:
- Pattern: Choose hatch pattern from library
- Solid: Solid color fill
- Gradient: Gradient fills
- User defined: Custom line patterns
- Angle: Pattern rotation angle
- Scale: Pattern scale factor
- Spacing: Line spacing for user-defined patterns

Hatch Boundaries:
- Pick Points: Click inside closed areas
- Select Objects: Select boundary objects
- Remove Islands: Remove internal boundaries
- Boundary Set: Limit boundary detection area
```

### 3D Drawing Commands
```
3D Primitive Commands:
BOX: Creates 3D rectangular solids
- Corner method: Specify opposite corners and height
- Center method: Specify center point and dimensions
- Cube: Equal length, width, height

CYLINDER: Creates cylindrical solids
- Center of base, radius, height
- Elliptical option for elliptical cylinders

SPHERE: Creates spherical solids
- Center point and radius
- 3-Point option: Define by three points
- 2-Point option: Define diameter

CONE: Creates conical solids
- Center of base, radius, height
- Elliptical base option
- Top radius for truncated cones

WEDGE: Creates wedge-shaped solids
- Similar to box but with slanted face

TORUS: Creates donut-shaped solids
- Center point, torus radius, tube radius

PYRAMID: Creates pyramid solids
- Polygonal base with specified number of sides
- Ridge option for roof-like shapes

3D Polyline Commands:
3DPOLY: Creates 3D polylines
- Can have vertices at any Z-elevation
- Only straight segments (no arcs)

HELIX: Creates helical spirals
- Base radius, top radius, height
- Number of turns or turn height
- Clockwise or counterclockwise
```

## Modify Commands

### Basic Modify Commands
```
MOVE Command:
Command: MOVE (or M)
1. Select objects
2. Specify base point (reference point)
3. Specify second point (destination)
- Use displacement method: @x,y,z

COPY Command:
Command: COPY (or CO or CP)
1. Select objects
2. Specify base point
3. Specify second point(s)
Options:
- Multiple (M): Make multiple copies
- Array (A): Create array pattern
- Undo (U): Remove last copy

ROTATE Command:
Command: ROTATE (or RO)
1. Select objects
2. Specify base point (rotation center)
3. Specify rotation angle or reference
Options:
- Copy (C): Keep original and rotate copy
- Reference (R): Use reference angle

SCALE Command:
Command: SCALE (or SC)
1. Select objects
2. Specify base point (scale center)
3. Specify scale factor or reference
Options:
- Copy (C): Keep original and scale copy
- Reference (R): Use reference length

STRETCH Command:
Command: STRETCH (or S)
1. Select objects with crossing window
2. Specify base point
3. Specify second point
- Only stretches objects that cross selection window
- Moves objects completely inside window

TRIM Command:
Command: TRIM (or TR)
1. Select cutting edges (or press Enter for all)
2. Select objects to trim
Options:
- Fence (F): Select with fence line
- Crossing (C): Select with crossing window
- Project (P): Trim based on projection
- Edge (E): Extend cutting edges
- eRase (R): Erase instead of trim
- Undo (U): Undo last trim

EXTEND Command:
Command: EXTEND (or EX)
1. Select boundary edges (or press Enter for all)
2. Select objects to extend
- Similar options to TRIM command
- Extends objects to boundary edges

BREAK Command:
Command: BREAK (or BR)
1. Select object to break
2. Specify first break point
3. Specify second break point
Options:
- First point (F): Reselect first break point
- @ symbol: Break at selection point only
```

### Advanced Modify Commands
```
FILLET Command:
Command: FILLET (or F)
- Creates rounded corners between two objects
1. Set radius: R, then enter radius value
2. Select first object
3. Select second object

Fillet Options:
- Radius (R): Set fillet radius (0 = sharp corner)
- Trim (T): Trim/No trim original lines
- Multiple (M): Fillet multiple pairs
- Polyline (P): Fillet all vertices of polyline
- Chain (H): Fillet chain of objects

CHAMFER Command:
Command: CHAMFER (or CHA)
- Creates beveled corners between two objects

Chamfer Methods:
- Distance: Set two distances from corner
- Angle: Set distance and angle
- Trim/No trim options like Fillet

OFFSET Command:
Command: OFFSET (or O)
1. Specify offset distance or through point
2. Select object to offset
3. Specify side to offset
Options:
- Through (T): Offset through specified point
- Erase (E): Erase source object
- Layer (L): Current or source layer
- Multiple (M): Multiple offsets

MIRROR Command:
Command: MIRROR (or MI)
1. Select objects
2. Specify first point of mirror line
3. Specify second point of mirror line
4. Delete source objects? (Y/N)
- MIRRTEXT system variable controls text mirroring

ARRAY Command:
Command: ARRAY (or AR)
Array Types:
- Rectangular Array: Rows and columns
- Path Array: Along a path curve
- Polar Array: Around a center point

Rectangular Array:
- Rows: Number and spacing
- Columns: Number and spacing
- Levels: 3D array levels
- Angle: Array angle

Polar Array:
- Center point: Rotation center
- Items: Number of items or angle between
- Fill angle: Total angle to fill
- Rotate items: Rotate objects as arrayed

Path Array:
- Select path curve
- Items: Number or spacing
- Align items: Align to path tangent
- Z direction: For 3D paths

EXPLODE Command:
Command: EXPLODE (or X)
- Breaks complex objects into component parts
- Polylines → individual lines and arcs
- Blocks → individual objects
- Dimensions → lines, arcs, and text
- Hatches → individual lines (if not solid)
```

## Object Snaps and Precision

### Object Snap (OSNAP) Modes
```
Running Object Snaps:
F3 or Ctrl+F        Toggle object snaps on/off
Right-click snap button: Object snap settings

Snap Modes:
ENDpoint (END)      Snap to endpoints of lines, arcs
MIDpoint (MID)      Snap to midpoints of lines, arcs  
CENter (CEN)        Snap to centers of circles, arcs, ellipses
NODe (NOD)          Snap to point objects
QUAdrant (QUA)      Snap to quadrant points of circles, ellipses
INTersection (INT)  Snap to intersections
APParent (APP)      Snap to apparent intersections
EXTension (EXT)     Snap to extension paths
PERpendicular (PER) Snap perpendicular to objects
TANgent (TAN)       Snap tangent to circles, arcs, ellipses
NEArest (NEA)       Snap to nearest point on objects
PARallel (PAR)      Snap parallel to objects
INSertion (INS)     Snap to insertion points of blocks, text

Temporary Overrides:
Hold Shift + right-click: Snap override menu
- Temporarily use different snap mode for one pick
- Useful when running snaps would interfere

Object Snap Tracking (OTRACK):
F11 or              Toggle object snap tracking
- Acquire tracking points by hovering over snap points
- Shows alignment paths from acquired points  
- Combine with polar tracking for precise positioning

AutoSnap Settings:
- Marker: Show snap symbol at snap points
- Magnet: Pull cursor to snap points
- Display snap tooltip: Show snap mode name
- Display AutoSnap aperture box: Show snap target area
```

### Coordinate Systems and Input
```
World Coordinate System (WCS):
- Default coordinate system
- X-axis: horizontal, positive to right
- Y-axis: vertical, positive up  
- Z-axis: out of screen (3D)

User Coordinate System (UCS):
UCS Command: Modify coordinate system
- 3-Point: Define by origin and axes
- Object: Align with selected object
- Face: Align with 3D face
- View: Align with current view
- Origin: Move origin point
- Z-Axis Vector: Define by Z direction
- X/Y/Z: Rotate around specified axis

UCS Icon:
UCSICON Command: Control UCS icon display
- ON/OFF: Show/hide icon
- All/Noorigin: Display options
- Origin: Show icon at UCS origin

Dynamic Input:
F12 or              Toggle dynamic input
- Shows coordinate input near cursor
- Length and angle input for second points
- Tab between input fields
- Transparent commands available

Input Methods:
Absolute Coordinates:
- Cartesian: X,Y,Z (5,10,0)
- Spherical: distance<angle<elevation (10<45<30)
- Cylindrical: distance<angle,Z (10<45,5)

Relative Coordinates (from last point):
- Cartesian: @X,Y,Z (@5,10,0)
- Polar: @distance<angle (@10<45)
- Spherical: @distance<angle<elevation (@10<45<30)

Direct Distance Entry:
1. Point cursor in direction
2. Type distance value
3. Press Enter
- Works with ortho, polar tracking, object snap tracking
```

### Drawing Aids and Precision Tools
```
Grid and Snap:
GRID Command: Toggle grid display
- Spacing: Set grid spacing
- Aspect: Different X and Y spacing
- Type: Lines or dots
- Follow Dynamic UCS

SNAP Command: Toggle snap mode
- Spacing: Set snap increment
- Aspect: Different X and Y snap
- Angle: Rotate snap grid
- Type: Grid or Polar snap
- Base: Set snap base point

Ortho Mode:
F8 or ORTHO        Toggle orthogonal mode
- Constrains cursor movement to horizontal/vertical
- 90-degree increments from last point
- Affected by UCS orientation

Polar Tracking:
F10                Toggle polar tracking
- Tracks at specified angle increments
- Default: 90, 45, 30, 22.5, 18, 15, 10, 5 degrees
- Additional angles: Add custom angles
- Combine with object snap tracking

Drawing Limits:
LIMITS Command: Set drawing boundaries
- Lower left corner: Usually 0,0
- Upper right corner: Set maximum area
- LIMCHECK: Toggle limit checking on/off

Drawing Units:
UNITS Command: Set drawing units
- Length Type: Decimal, Engineering, Architectural, Fractional, Scientific
- Precision: Number of decimal places or fraction denominator
- Angle Type: Decimal degrees, Deg/Min/Sec, Gradians, Radians, Surveyor
- Angle Precision: Decimal places for angles
- Clockwise: Positive angle direction
- Base Angle: Zero angle direction

Drawing Scale:
- Model space: Draw at actual size (1:1)
- Scale in layout/paper space for plotting
- Annotation scaling handles text and dimension sizes
```

## Layers and Properties

### Layer Management
```
LAYER Command:
Command: LAYER (or LA)
Opens Layer Properties Manager

Layer Properties Manager:
- New Layer: Create new layers
- Delete Layer: Remove unused layers
- Set Current: Make layer active for new objects
- Layer States: Save/restore layer configurations

Layer Properties:
Name: Layer identifier (up to 255 characters)
On/Off: Layer visibility (lightbulb icon)
- Off layers: Not visible, not plotted, can't select
- Frozen vs Off: Frozen layers ignored by regen

Freeze/Thaw: Layer visibility with performance benefit
- Frozen layers: Ignored by regeneration
- Thaw: Make layer visible again
- Current viewport freeze: Layout-specific freezing
- New viewport freeze: Auto-freeze in new viewports

Lock/Unlock: Prevent/allow editing
- Locked layers: Visible but can't be modified
- Can be used as reference layers

Color: Layer display and plot color
- Index colors: 1-255 standard colors
- True colors: RGB values
- Color books: Pantone, RAL, etc.

Linetype: Line pattern for layer objects
- Continuous: Solid lines (default)
- Hidden: Dashed lines
- Center: Center mark lines
- Custom: User-defined linetypes

Lineweight: Line thickness for display and plotting
- Default: 0.25mm
- ISO and inch standard weights available
- Display: Show lineweights on screen

Plot Style: Controls plotting appearance
- Color-dependent or named plot styles
- Affects final printed output

Plot: Control whether layer plots
- No Plot: Layer visible but won't print
```

### Layer Tools and Management
```
Layer States:
- Save current layer settings as named state
- Restore saved layer configurations
- Import/Export layer states
- Useful for different drawing phases or standards

Layer Filters:
- Properties Filter: Filter by layer properties
- Group Filter: Manual grouping of layers
- Standards Filter: Show non-standard layers
- Used in Model: Show layers with objects

Layer Tools (Express Tools):
LAYDEL: Delete layer and all objects on it
LAYMRG: Merge layers (move objects, delete source)
LAYISO: Isolate selected layers (freeze all others)
LAYUNISO: Unfreeze all layers
LAYWALK: Walk through layers individually
LAYMCH: Match layer properties
LAYFRZ: Freeze selected object's layer
LAYOFF: Turn off selected object's layer
LAYLCK: Lock selected object's layer

Quick Layer Tools:
- Layer dropdown in Home ribbon
- Layer Previous: Undo layer changes
- Make Object's Layer Current: Set active layer from selected object
- Match: Copy layer properties from one object to another

Layer Naming Conventions:
Standard naming helps organization:
- A-WALL: Architectural walls
- A-DOOR: Architectural doors  
- A-WIND: Architectural windows
- E-LITE: Electrical lighting
- M-HVAC: Mechanical HVAC
- Numbers for phases: A-WALL-DEMO, A-WALL-NEW
```

### Object Properties
```
PROPERTIES Command:
Ctrl+1 or PROPERTIES: Open Properties palette
- Shows properties of selected objects
- Modify properties directly in palette
- Multi-select shows common properties

Common Object Properties:
General:
- Color: Override layer color
- Layer: Change object's layer
- Linetype: Override layer linetype
- Linetype Scale: Scale linetype pattern
- Lineweight: Override layer lineweight
- Transparency: Object transparency (0-90%)
- Hyperlink: Link to files or web pages

Geometry (varies by object):
- Lines: Start/end points, length, angle
- Circles: Center point, radius, circumference, area
- Text: Content, height, rotation, justification
- Dimensions: Text override, precision, style

3D Properties:
- Thickness: Extrude 2D objects in Z direction
- Elevation: Z-coordinate of object base

MATCHPROPERTIES Command:
Command: MATCHPROP (or MA)
1. Select source object (properties to copy)
2. Select destination object(s)
- Settings: Choose which properties to match
- Default: All properties except content

Quick Properties:
- Hover over object to see properties
- Toggle: QPMODE system variable
- Customizable: Choose which properties display
- Edit directly from quick properties panel

Property Overrides:
- ByLayer: Use layer's property setting
- ByBlock: Use block's property setting  
- Explicit: Override with specific value
- Color: Red, Green, Blue, etc.
- Linetype: Continuous, Hidden, Center, etc.
```

## Text and Annotations

### Text Creation and Editing
```
TEXT Command (Single Line Text):
Command: TEXT (or DT)
1. Specify start point
2. Specify height
3. Specify rotation angle
4. Enter text content

Text Options:
- Justify: Change text alignment
  - Left (default)
  - Center, Middle, Right
  - Top Left, Top Center, Top Right
  - Middle Left, Middle Center, Middle Right
  - Bottom Left, Bottom Center, Bottom Right
  - Align: Fit between two points
  - Fit: Fit text with specified height

MTEXT Command (Multiline Text):
Command: MTEXT (or MT)
1. Specify first corner of text boundary
2. Specify opposite corner or height
3. Enter text in editor

MText Editor Features:
- Text Formatting toolbar
- Font, size, color, bold, italic, underline
- Bullets and numbering
- Indentation and tabs
- Special characters and symbols
- Field insertion
- Background mask
- Paragraph alignment
- Line spacing
- Width factor (character width scaling)

Text Editing:
DDEDIT: Edit single-line text
- Double-click text to edit
- Change content in place

Edit MText:
- Double-click to open editor
- Modify formatting and content
- Right-click for additional options

Text Styles:
STYLE Command: Create and modify text styles
- Font: TrueType or SHX fonts
- Height: Text size (0 = variable height)
- Width Factor: Character width scaling
- Oblique Angle: Text slant
- Backwards: Mirror text horizontally
- Upside Down: Flip text vertically
- Vertical: Stack text vertically

Standard Text Styles:
- Standard: Default style (TXT.SHX font)
- Annotative: Automatically scales with drawing scale
- Create styles for different purposes (titles, notes, dimensions)
```

### Special Text Features
```
Text Fields:
INSERT → Field (or FIELD command)
- Dynamic text that updates automatically
- Date/Time: Current date, plot date, etc.
- Document: Filename, saved by, etc.
- Objects: Area, length of selected objects
- Other: System variables, diesel expressions
- Plot: Sheet set data, layout information

Field Categories:
- Date & Time: Current date/time, creation date, save date
- Document: Author, filename, keywords, subject, title
- Linked: Hyperlinks to other documents
- Objects: Object properties (area, length, etc.)
- Other: Calculator, diesel expression, system variable
- Plot: Plot date, device name, paper size
- SheetSet: Sheet data, view data

Text Symbols and Special Characters:
%%c: Diameter symbol (Ø)
%%d: Degree symbol (°)
%%p: Plus/minus symbol (±)
%%u: Start/stop underline
%%o: Start/stop overline
%%%: Single percent sign

Unicode Characters:
\U+xxxx: Unicode character code
- Greek letters, mathematical symbols
- International characters
- Special technical symbols

Text Variables:
$(variable): System variables in text
- $(getvar,dwgname): Drawing name
- $(getvar,date): System date
- $(getvar,users): Current user

Background Mask:
- Available in MText
- Fills background behind text
- Uses background color or specific color
- Border offset factor for mask size

Text Boundary:
- Invisible boundary for MText
- Controls text wrapping
- Resize with grips
- Can be non-rectangular using TEXTTOFRONT
```

### Dimensioning
```
Dimension Types:
DIMLINEAR: Linear dimensions
DIMALIGNED: Aligned with angled objects
DIMANGULAR: Angular dimensions
DIMDIAMETER: Circle and arc diameters
DIMRADIUS: Circle and arc radii
DIMCENTER: Center marks for circles
DIMORDINATE: X or Y coordinate dimensions
DIMCONTINUE: Continue dimension chains
DIMBASELINE: Baseline dimension series

Linear Dimensions:
Command: DIMLINEAR (or DLI)
1. Specify first extension line origin
2. Specify second extension line origin  
3. Specify dimension line location
Options:
- MText (M): Override dimension text
- Text (T): Override dimension text
- Angle (A): Rotate dimension text
- Horizontal (H): Force horizontal dimension
- Vertical (V): Force vertical dimension
- Rotated (R): Rotate dimension at angle

Dimension Styles:
DIMSTYLE Command: Create and modify dimension styles
- Lines: Extension lines, dimension lines, arrowheads
- Symbols and Arrows: Arrowhead styles, center marks
- Text: Text style, height, placement, alignment
- Fit: Text and arrow placement when space is tight
- Primary Units: Unit format, precision, prefix/suffix
- Alternate Units: Secondary unit display
- Tolerances: Plus/minus tolerances

Dimension Style Components:
Lines Tab:
- Color: Dimension and extension line colors
- Linetype: Line patterns for dimension elements
- Lineweight: Thickness of dimension lines
- Extension line extension: Beyond dimension line
- Extension line offset: Gap from object
- Baseline spacing: Distance between baseline dimensions
- Suppress extension lines: Hide if needed

Symbols and Arrows:
- Arrowheads: First, second, leader styles
- Arrow size: Arrowhead dimensions
- Center marks: Style and size for circles
- Break size: Gap size for broken dimension lines

Text Tab:
- Text style: Associated text style
- Text color: Override text color
- Fill color: Background fill for text
- Text height: Dimension text size
- Fraction height scale: Relative size of fractions
- Draw frame around text: Box around dimension text
- Text placement: Vertical and horizontal positioning
- Text alignment: With dimension line or horizontal

Fit Tab:
- Fit options: Text and arrows, arrows, text, leader
- Text placement: Move text freely or keep with line
- Scale for dimension features: Manual or automatic scaling
- Fine tuning: Manual positioning options

Primary Units:
- Unit format: Decimal, scientific, architectural, etc.
- Precision: Number of decimal places
- Fraction format: Horizontal, diagonal, not stacked
- Decimal separator: Period, comma, space
- Round off: Round dimensions to nearest value
- Prefix/Suffix: Add text before/after dimension value
- Measurement scale: Scale factor for measurements
- Zero suppression: Remove leading/trailing zeros

Dimension Editing:
DIMEDIT: Edit dimension text and extension lines
- Home: Return text to default position
- New: Change dimension text
- Rotate: Rotate dimension text
- Oblique: Slant extension lines

DIMTEDIT: Edit dimension text position
- Left, right, center, home positions
- Angle: Rotate text to specified angle

Associative Dimensions:
- DIMASSOC system variable controls associativity
- 2: Fully associative (update with geometry changes)
- 1: Non-associative but explodable
- 0: Exploded dimensions (individual objects)

Quick Dimension:
QDIM Command: Create multiple dimensions quickly
- Select objects to dimension
- Choose dimension type: Continuous, baseline, ordinate, radius, diameter, datum point
- Automatically places multiple dimensions
```

## Blocks and References

### Block Creation and Management
```
Creating Blocks:
BLOCK Command: Create block definition
1. Enter block name
2. Specify base point (insertion point)
3. Select objects to include
4. Choose whether to retain, convert, or delete objects

Block Definition Options:
- Name: Block identifier (no spaces recommended)
- Base Point: Reference point for insertion
- Objects: Select geometry to include
- Settings:
  - Retain: Keep original objects
  - Convert to block: Replace selection with block reference
  - Delete: Remove original objects
- Block unit: Specify units for scaling
- Description: Optional block description

WBLOCK Command: Write block to file
- Save block as separate DWG file
- Can be inserted into other drawings
- Options:
  - Block: Export existing block definition
  - Entire drawing: Export whole drawing
  - Objects: Create new block from selection

Block Insertion:
INSERT Command: Insert block references
1. Specify insertion point
2. Set X, Y, Z scale factors
3. Specify rotation angle

Insert Options:
- Name: Choose block to insert
- Path: Specify file location for external blocks
- Insertion point: Where to place block
- Scale: X, Y, Z scale factors
- Rotation: Angle of rotation
- Explode: Break block into individual objects on insertion
- Uniform Scale: Lock X, Y, Z scales together

DesignCenter:
ADCENTER (Ctrl+2): Browse and insert content
- Navigate folder structure
- Preview blocks, layers, linetypes
- Drag and drop insertion
- Batch insertion of multiple blocks
- Access online content and libraries

Block Properties:
- Insertion point: Reference point for positioning
- Scale: X, Y, Z scaling factors
- Rotation: Angle from base orientation
- Layer: Layer assignment (ByBlock vs explicit)
- Color: Color assignment (ByBlock vs explicit)
- Linetype: Linetype assignment (ByBlock vs explicit)
```

### Block Attributes
```
Creating Attributes:
ATTDEF Command: Define attribute template
- Tag: Attribute identifier (no spaces)
- Prompt: Text shown during insertion
- Default: Default attribute value
- Text options: Height, justification, style
- Mode options: Invisible, constant, verify, preset
- Lock position: Prevent grip editing of position

Attribute Modes:
- Invisible: Attribute not displayed (but still in drawing)
- Constant: Fixed value, no prompt during insertion
- Verify: Prompts to verify value during insertion
- Preset: Uses default value, can be changed in dialog
- Lock Position: Prevents moving attribute with grips
- Multiple Lines: Allow multi-line attribute text

Block with Attributes:
1. Create geometry and attribute definitions
2. Use BLOCK command to create block
3. Include both geometry and attributes in selection
4. Attributes will prompt for values during insertion

Editing Attributes:
ATTEDIT: Edit attribute values
- Single: Edit individual attribute
- Global: Edit multiple attributes with find/replace
- Block name: Specify which blocks to edit
- Attribute tag: Specify which attributes to edit
- Attribute value: Find and replace values

EATTEDIT: Enhanced attribute editor
- Select block reference to edit attributes
- Modify values in dialog box
- Change text options and properties

ATTDISP: Control attribute visibility
- Normal: Display attributes as defined
- ON: Display all attributes (including invisible)
- OFF: Hide all attributes

Extracting Attribute Data:
EATTEXT: Extract attribute data to external file
- Create data extraction wizard
- Select drawings and blocks
- Choose attributes to extract
- Output to table, external file, or both
- Formats: CSV, TXT, XLS, MDB, XML

Data Extraction Wizard:
1. Begin: Create new or use existing extraction
2. Define Data Source: Select drawings
3. Select Objects: Choose blocks and objects
4. Select Properties: Choose attributes and properties
5. Refine Data: Sort, filter, combine columns
6. Choose Output: Table in drawing and/or external file
7. Table Style: Format output table
8. Finish: Create extraction
```

### External References (Xrefs)
```
Attaching Xrefs:
XATTACH Command: Attach external reference
- Select DWG file to reference
- Specify insertion point, scale, rotation
- Choose attachment vs overlay type

Attachment vs Overlay:
- Attachment: Xref and its nested xrefs display
- Overlay: Only first-level xref displays (nested xrefs hidden)
- Use overlay to prevent circular references

Xref Manager:
XREF Command: Manage external references
- List all xrefs in current drawing
- Reload: Update xref if source file changed
- Unload: Temporarily remove xref display
- Bind: Convert xref to block or insert objects
- Detach: Permanently remove xref reference

Xref States:
- Loaded: Xref displayed normally
- Unloaded: Reference exists but not displayed
- Not Found: Source file missing or moved
- Unresolved: Circular reference or other issue
- Orphaned: Nested xref whose parent is unloaded

Binding Xrefs:
- Bind: Convert xref to block definition
- Insert: Merge xref objects into drawing
- Layer naming: XREF$0$LAYERNAME becomes LAYERNAME
- Block naming: Nested blocks renamed to avoid conflicts

Xref Notification:
- Balloon notification when xref files change
- Reload to see changes
- External Reference palette shows status
- XNOTIFYTIME: Control notification timing

Xref Clipping:
XCLIP Command: Create clipping boundary
- Rectangular, polygonal, or invert clip
- Hide portions of xref outside boundary
- Multiple clips per xref allowed
- Clips can be edited with grips

Xref Editing:
REFEDIT: Edit xref in place
- Select xref to edit
- Choose objects to edit in reference
- Working set: Objects available for editing
- Reference toolbar appears
- Save or discard changes to reference
```

## 3D Modeling

### 3D Coordinate Systems and Views
```
3D Coordinate Entry:
- Cartesian: X,Y,Z (5,10,15)
- Cylindrical: Distance<Angle,Z (10<45,5)  
- Spherical: Distance<Angle<Elevation (15<30<45)

Viewing 3D Models:
3DORBIT: Interactive 3D navigation
- Left click + drag: Rotate view
- Right click: Context menu with options
- Shift + click + drag: Pan view
- Ctrl + click + drag: Zoom view

VPOINT: Set viewing direction
- Specify point to view from
- Rotate: Interactive compass and tripod
- Presets: Plan views and isometric views

VIEW Command: Named views for 3D
- Save current 3D viewpoint
- Camera position and target
- Useful for consistent viewing angles

ViewCube:
- 3D navigation tool in upper right
- Click faces for orthogonal views
- Click edges for edge views  
- Click corners for isometric views
- Home view returns to default

Standard 3D Views:
- Plan views: Top, Bottom, Left, Right, Front, Back
- Isometric: SW, SE, NE, NW isometric
- Custom: User-defined viewpoints

Visual Styles:
VSCURRENT: Set current visual style
- 2D Wireframe: Traditional wireframe display
- 3D Wireframe: 3D wireframe with perspective
- 3D Hidden: Hidden line removal
- Realistic: Materials and lighting
- Conceptual: Artistic rendering style
- Shaded: Basic shading without materials
- Shaded with Edges: Shading with visible edges
- Sketchy: Hand-drawn appearance
- X-Ray: Transparent objects
```

### 3D Solid Modeling
```
Boolean Operations:
UNION: Combine solids into single object
1. Select objects to union
2. Press Enter to complete

SUBTRACT: Remove one solid from another
1. Select objects to subtract from
2. Press Enter
3. Select objects to subtract
4. Press Enter

INTERSECT: Keep only intersecting volume
1. Select first set of objects
2. Press Enter  
3. Select second set of objects
4. Press Enter

INTERFERE: Check for solid intersections
- Detects overlapping volumes
- Creates interference solids
- Useful for clash detection

Solid Editing:
SOLIDEDIT: Edit faces, edges, and bodies
- Face editing: Extrude, move, rotate, offset, taper, delete, copy, color
- Edge editing: Copy, color
- Body editing: Imprint, separate, shell, clean

3D Grips:
- Move: Relocate solid
- Rotate: Rotate around grip axis
- Scale: Resize proportionally
- Mirror: Create mirrored copy

Solid History:
- Records modeling operations
- SOLIDHIST system variable (0=off, 1=on)
- Show History: Display original profile
- Delete/suppress history as needed

Mesh Modeling:
MESH: Create mesh objects
- More organic, sculptural forms
- Subdivision surfaces
- Convert between mesh and solid

Mesh Primitives:
- Box, Cone, Cylinder, Pyramid, Sphere, Wedge, Torus
- Similar to solid primitives but mesh objects
- Smoothness level controls detail

Mesh Editing:
- Add/remove faces
- Extrude faces
- Split faces
- Merge faces
- Smooth/unsmooth faces
```

### Surface Modeling
```
Creating Surfaces:
PLANESURF: Create flat surfaces
- Rectangular planar surfaces
- From closed curves or regions

REVOLVE: Create surface by revolution
- Select profile curve
- Specify axis of revolution
- Specify angle of revolution

SWEEP: Create surface along path
- Select cross-section profile
- Select sweep path
- Options for alignment and banking

LOFT: Create surface through cross-sections
- Select multiple cross-section curves
- Surface passes through all sections
- Guide curves for shape control
- Cross sections only, Guides, Path

EXTRUDE: Create surface by extrusion
- Select profile curve
- Specify extrusion height and taper angle
- Direction can be normal to profile

NETWORKSURF: Create surface from network of curves
- U direction curves
- V direction curves  
- Surface follows curve network

Surface Analysis:
ANALYSISZEBRA: Zebra stripe analysis
- Shows surface continuity
- Stripe patterns reveal surface quality

ANALYSISDRAFT: Draft angle analysis
- Color-codes surfaces by draft angle
- Useful for manufacturing analysis

Surface Editing:
SURFEXTEND: Extend surface edges
SURFFILLETL: Fillet between surfaces
SURFTRIM: Trim surface with other objects
SURFUNTRIM: Remove surface trims
SURFPATCH: Fill surface holes
```

### 3D Mesh and Point Clouds
```
Mesh Objects:
- Subdivision surfaces for organic modeling
- Faceted surfaces with controllable smoothness
- Convert from solids or surfaces

Mesh Smoothness:
- Level 0: No smoothing (faceted)
- Level 1-4: Increasing smoothness
- MESHSMOOTHMORE: Increase smoothness
- MESHSMOOTHLESS: Decrease smoothness

Point Clouds:
POINTCLOUDATTACH: Attach point cloud files
- RCS, RCP file formats (Autodesk ReCap)
- LAS, LAZ file formats (LIDAR data)
- PLY, XYZ file formats

Point Cloud Display:
- Intensity: Show point intensity values
- Classification: Color by point classification
- Normal: Show surface normal vectors
- Elevation: Color by height values

Point Cloud Tools:
POINTCLOUDCROP: Crop point cloud data
- Rectangular, polygonal, circular cropping
- Inside/outside options

POINTCLOUDSECTION: Create 2D sections
- Extract cross-sections from point cloud
- Generate 2D drawings from 3D scan data

Working with Point Clouds:
- Use as reference for modeling
- Snap to points in cloud
- Extract geometric features
- Create surfaces from point data
```

## Layouts and Plotting

### Layout (Paper Space) Setup
```
Layout Tabs:
- Model: Model space for actual drawing
- Layout1, Layout2: Paper space for plotting
- Right-click tabs: Layout options menu

Creating Layouts:
LAYOUT Command: Layout management
- New: Create new layout
- Copy: Duplicate existing layout
- Delete: Remove layout  
- Rename: Change layout name
- Save as Template: Create layout template

Layout Setup:
PAGESETUP: Configure layout for plotting
- Printer/Plotter: Select output device
- Paper Size: Choose paper dimensions  
- Plot Area: What to plot (Layout, Window, etc.)
- Plot Scale: Scale factor for output
- Plot Style Table: Control line weights and colors
- Plot Options: Additional plotting settings

Layout Components:
- Title Block: Border and drawing information
- Viewports: Windows into model space
- Annotations: Text, dimensions, leaders
- Revision Clouds: Mark drawing changes
- North Arrow: Orientation indicator
- Scale Notation: Drawing scale information

Switching Spaces:
- MSPACE (MS): Make model space active
- PSPACE (PS): Make paper space active  
- Double-click inside viewport: Switch to model space
- Double-click outside viewport: Switch to paper space
- TILEMODE: Control model/paper space mode

Layout Background:
- Usually white or light color for printing
- BACKGROUNDPLOT: Control plot background

Working in Layouts:
- Paper space units typically in mm or inches
- Model space units can be any scale
- Viewports show scaled views of model
- Annotations added in paper space at plot size
```

### Viewport Management
```
Creating Viewports:
MVIEW Command: Create model space viewports
- Rectangular: Standard rectangular viewport
- Polygonal: Custom shaped viewport  
- Object: Convert closed object to viewport
- Restore: Restore saved viewport configuration

Viewport Properties:
- Scale: Zoom factor from model to paper
- Layer: Viewport can have its own layer
- Lineweight: Viewport border thickness
- Display: On/off viewport display
- Plot: Include viewport in plot

Viewport Scale:
- Standard scales: 1:100, 1:50, 1:20, etc.
- Custom scale: Any zoom factor
- Annotation scale: Automatic scaling for text/dimensions
- Scale list: Predefined scale factors

Viewport Layer Overrides:
VPLAYER Command: Control layer display per viewport
- Freeze/thaw layers in specific viewports
- Turn layers on/off per viewport
- Useful for showing different information in each view

Locking Viewports:
- Prevents accidental zoom/pan in viewport
- Lock viewport after setting scale
- Unlock to adjust view
- MVIEW → Lock option

Viewport-Specific Properties:
- Visual style per viewport
- UCS per viewport  
- Layer states per viewport
- Different views of same model

Standard Viewport Arrangements:
- Single viewport: Full layout view
- Two viewports: Plan and elevation
- Three viewports: Plan, front, side elevations  
- Four viewports: Plan and three elevations
- Detail viewports: Enlarged details at larger scale
```

### Plotting and Publishing
```
Plot Dialog:
PLOT Command (Ctrl+P): Open plot dialog
- Page Setup: Named plot configurations
- Printer/Plotter: Output device selection
- Paper Size: Available paper sizes
- Plot Area: What to plot
- Plot Offset: Position on paper
- Plot Scale: Size scaling
- Plot Style Table: Line weight and color control
- Plot Options: Additional settings
- Preview: Show plot preview

Plot Settings:
Printer/Plotter Configuration:
- System printer: Windows printer drivers
- PC3 file: AutoCAD plotter configuration
- Plot to file: Create plot file for later printing

Paper Size:
- Standard sizes: A4, A3, A2, A1, A0
- Architectural: Arch A, B, C, D, E
- ANSI: A, B, C, D, E sizes
- Custom sizes: User-defined dimensions

Plot Area Options:
- Layout: Plot entire layout
- Extents: Plot all drawing objects
- Display: Plot current screen view
- Window: Plot selected area
- Previous plot area: Last plot area used

Plot Scale:
- Scale: 1:1, 1:2, 1:10, 1:50, 1:100, etc.
- Fit to paper: Automatically scale to fit
- Custom: User-defined scale factor
- Scale lineweights: Proportional lineweight scaling

Plot Style Tables:
Color-Dependent (CTB):
- Based on object colors
- Color 1 = Black, Color 2 = Red, etc.
- Plot properties assigned to colors

Named (STB):
- Based on named plot styles
- Plot styles assigned to objects/layers
- More flexible than color-dependent

Plot Styles:
PLOTSTYLE: Assign plot styles to objects
- Color: Plot color
- Dithering: Color blending for photos
- Grayscale: Convert colors to grayscale  
- Pen number: Physical pen assignment
- Virtual pen: Logical pen assignment
- Screening: Lightness percentage
- Linetype: Override object linetype
- Adaptive adjustment: Adjust for pen width
- Line weight: Override object lineweight
- Line end style: Cap style for lines
- Line join style: Corner style for polylines
- Fill style: Solid, pattern, or outline fills

Publishing:
PUBLISH Command: Plot multiple layouts
- Sheet list: Select layouts to plot
- Plot settings: Override plot settings per sheet
- Sheet Set Data: Include sheet information
- Plot to file or printer
- Plot stamp: Add plot information to sheets

Batch Plot:
- Select multiple drawings
- Apply consistent plot settings
- Unattended plotting
- Error reporting and logs

Plot Quality:
- Draft: Fastest plotting, lower quality
- Normal: Standard quality
- Presentation: Highest quality
- Maximum: Maximum device resolution
- DPI settings for raster output
```

### Sheet Sets
```
Sheet Set Manager:
SHEETSET: Open Sheet Set Manager
- Organize drawings by project
- Consistent title blocks and borders
- Automatic sheet numbering
- Plot multiple sheets together

Creating Sheet Sets:
- New Sheet Set wizard
- Example sheet set: Use template
- Existing drawings: Create from folder structure  
- Sheet set data: Project information

Sheet Set Components:
- Sheets: Individual drawing layouts
- Subsets: Organize sheets by category
- Views: Model space views for referencing
- Sheet list table: Automatic sheet index
- View list table: Automatic view index

Sheet Properties:
- Sheet number: Automatic or manual
- Sheet title: Descriptive name
- File path: Location of drawing file
- Custom properties: Project-specific data

View Categories:
- Organize views by type (plans, elevations, sections)
- Consistent view naming
- View thumbnails and descriptions

Publishing Sheet Sets:
- Plot all sheets with one command
- Consistent plot settings across project
- Archive to PDF or DWF
- Electronic distribution
```

## Advanced Features

### Parametric Constraints
```
Geometric Constraints:
GEOMCONSTRAINT: Apply geometric relationships
- Coincident: Points coincide
- Collinear: Objects on same line
- Concentric: Circles/arcs share center
- Fix: Lock object position
- Parallel: Objects parallel
- Perpendicular: Objects at 90 degrees
- Horizontal: Object horizontal
- Vertical: Object vertical
- Tangent: Objects tangent to each other
- Smooth: Smooth connection between curves
- Symmetric: Objects symmetric about line
- Equal: Objects equal size

Dimensional Constraints:
DIMCONSTRAINT: Apply dimensional relationships
- Linear: Distance between points
- Horizontal: Horizontal distance
- Vertical: Vertical distance
- Aligned: Distance along line
- Angular: Angle between objects
- Radial: Radius of circles/arcs
- Diameter: Diameter of circles

Constraint Parameters:
PARAMETERS: Manage constraint variables
- User parameters: Custom variables
- Dimensional parameters: From dimensional constraints
- Expressions: Mathematical relationships between parameters
- Example: Length = Width * 2

Constraint Display:
- Show/hide constraint icons
- Constraint bar: Dimensional constraint values
- Color coding: Satisfied vs unsatisfied constraints
- Dynamic constraints: Edit values directly

Auto Constrain:
AUTOCONSTRAIN: Automatically apply constraints
- Analyzes geometry and applies appropriate constraints
- Settings: Distance tolerance, angle tolerance
- Priority: Order of constraint application
```

### Dynamic Blocks
```
Block Editor:
BEDIT: Edit blocks with dynamic properties
- Enter block editing mode
- Add parameters and actions
- Test dynamic behavior
- Save changes to block definition

Dynamic Block Parameters:
Point Parameter: Reference point for actions
- Base point for move, scale, rotate actions
- Grip appears at parameter location

Linear Parameter: Distance and direction
- Distance constraint between two points
- Used with move, scale, stretch actions

Polar Parameter: Distance and angle
- Combined distance and angle constraint
- Used with polar stretch, move actions

XY Parameter: X and Y distances
- Independent X and Y movement
- Used with move, scale, stretch actions

Rotation Parameter: Angular constraint
- Rotation about specified point
- Used with rotate action

Alignment Parameter: Automatic alignment
- Aligns block with selected objects
- No action required, automatic behavior

Flip Parameter: Mirror geometry
- Flip state (flipped/not flipped)
- Used with flip action

Visibility Parameter: Show/hide geometry
- Control which geometry is visible
- Create multiple block appearances

Lookup Parameter: Predefined combinations
- Lookup table with property combinations
- Dropdown list for parameter selection

Dynamic Block Actions:
Move Action: Move objects based on parameter
- Associate with point, linear, polar, XY parameters
- Select objects to move

Scale Action: Scale objects based on parameter
- Uniform or independent X/Y scaling
- Associate with linear, polar, XY parameters

Stretch Action: Stretch objects in frame
- Stretch frame defines affected area
- Objects crossing frame stretch, others move

Rotate Action: Rotate objects around point
- Associate with rotation parameter
- Specify rotation point and objects

Flip Action: Mirror objects about axis
- Associate with flip parameter  
- Specify reflection line and objects

Array Action: Create array of objects
- Linear or polar arrays
- Column/row count and spacing

Lookup Action: Use lookup table values
- Associate with lookup parameter
- Define property combinations in table

Block Authoring Palette:
- Parameters tab: Add constraint parameters
- Actions tab: Add parameter actions  
- Parameter Sets tab: Combined parameter/action
- Visibility mode: Control visibility states

Testing Dynamic Blocks:
- Test Block window in Block Editor
- Preview dynamic behavior
- Adjust parameters and actions
- Save and close to complete
```

### Customization
```
User Interface Customization:
CUI Command: Customize User Interface
- Toolbars: Create custom tool collections
- Menus: Modify pull-down and context menus  
- Ribbon: Customize ribbon tabs and panels
- Keyboard shortcuts: Assign commands to keys
- Mouse buttons: Configure mouse functions
- Tablet menus: Digitizer tablet configuration

Tool Palettes:
TOOLPALETTES (Ctrl+3): Tool palette window
- Drag and drop tools
- Organize by project or function
- Custom commands and blocks
- Hatch patterns and fill options

Creating Tool Palettes:
- Right-click palette area: New palette
- Drag commands from ribbon to palette
- Drag blocks from DesignCenter
- Add custom commands and macros

Workspace Customization:
WORKSPACE: Save interface configurations
- Save current ribbon, toolbar, and panel state
- Switch between different workspace setups
- Share workspaces between users

Command Aliases:
ALIASEDIT: Edit command shortcuts
- Create short aliases for frequent commands
- Example: L = LINE, C = CIRCLE, M = MOVE
- Store in acad.pgp file

AutoLISP Programming:
- Custom commands and functions
- Automate repetitive tasks  
- Integrate with external applications
- LISP file loading and management

Script Files:
SCRIPT: Run command sequences
- Text files with command sequences
- Automate drawing creation
- Batch processing operations

Template Customization:
- Create custom drawing templates
- Include standard layers, styles, blocks
- Set default units and limits
- Company standards compliance

System Variables:
SETVAR: Modify AutoCAD behavior
- Control default settings
- Customize program operation
- Store in registry or drawing file
- Examples: OSMODE, GRIDMODE, LTSCALE
```

### External Applications and APIs
```
AutoCAD APIs:
ActiveX/COM: Windows automation interface
- Control AutoCAD from other applications
- VBA (Visual Basic for Applications) programming
- Integration with Office applications

.NET API: Modern programming interface
- C# and VB.NET development
- ObjectARX alternative for managed code
- Access to full AutoCAD functionality

ObjectARX: Native C++ API
- Highest performance custom applications
- Custom objects and entities
- Deep AutoCAD integration

AutoLISP: Built-in scripting language
- Text-based programming
- Custom commands and functions
- Drawing automation and customization

External References:
- Link to other CAD files
- Database connectivity (ODBC)
- Raster image insertion and management
- Point cloud integration

File Formats:
Import/Export:
- DXF: Drawing Exchange Format
- DWF: Design Web Format (view-only)
- PDF: Portable Document Format  
- 3DS: 3D Studio mesh format
- STL: Stereolithography format
- IGES: Initial Graphics Exchange Specification
- STEP: Standard for Exchange of Product Data
- SAT: ACIS solid modeling format

Collaboration:
- Design Review: Markup and review drawings
- A360: Cloud-based collaboration
- BIM 360: Building Information Modeling
- Autodesk Drive: Cloud file storage
- Reference Manager: Manage external references
```

This comprehensive AutoCAD reference covers everything from basic commands and shortcuts to advanced 3D modeling and customization. Use it as both a learning resource and a professional reference guide for efficient CAD drafting and design!