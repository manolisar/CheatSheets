# SketchUp Pro Comprehensive Reference

## Interface and Navigation

### Basic Navigation
```bash
Mouse Navigation:
Scroll Wheel     # Zoom in/out
Middle Mouse     # Orbit view (3D rotation)
Shift + MMB      # Pan view
Two-finger drag  # Pan (trackpad)
Pinch            # Zoom (trackpad)

Keyboard Navigation:
Ctrl + Shift + E # Previous view
Ctrl + Shift + W # Next view
Shift + Z        # Zoom extents
Z                # Zoom selected
H                # Hide/unhide selected
```

### View Controls
```bash
Standard Views:
1                # Front view
2                # Back view  
3                # Left view
4                # Right view
5                # Top view
6                # Bottom view
7                # Iso view (isometric)

View Tools:
F                # Full screen
Ctrl + 2         # Wireframe
Ctrl + 3         # Hidden line
Ctrl + 4         # Shaded
Ctrl + 5         # Shaded with textures
Ctrl + 6         # Monochrome
Ctrl + 7         # X-ray mode
```

## Drawing and Selection Tools

### Selection Methods
```bash
Selection Tools:
Spacebar         # Select tool (default)
Left Click       # Select single object
Shift + Click    # Add to selection
Ctrl + Click     # Toggle selection
Ctrl + A         # Select all
Ctrl + Shift + A # Select none
Ctrl + I         # Select inverse

Advanced Selection:
Triple Click     # Select all connected faces
Double Click     # Select face and edges
Shift + Eraser   # Hide selected
Ctrl + Eraser    # Smooth/unsoften edges
```

### Basic Drawing Tools
```bash
Line and Shape:
L                # Line tool
R                # Rectangle tool
C                # Circle tool
A                # Arc tool  
P                # Polygon tool
F                # Freehand tool

3D Creation:
Spacebar + Push/Pull # Push/Pull tool (P)
M                # Move tool
Q                # Rotate tool
S                # Scale tool
```

## 3D Modeling Tools

### Push/Pull and Extrusion
```bash
Push/Pull Operations:
P                # Push/Pull tool
Double-click     # Repeat last push/pull distance
Ctrl + Push/Pull # Create new starting face
Alt + Push/Pull  # Push/pull without auto-fold

Move Tool Operations:
M                # Move tool
Ctrl + Move      # Copy while moving
Alt + Move       # Auto-fold toggle
Arrow Keys       # Constrain to axis (while moving)
```

### Follow Me and Path Tools
```bash
Follow Me:
1. Select profile face
2. Tools > Follow Me
3. Click path to extrude along

Path Extrusion:
- Select face to extrude
- Select Follow Me tool
- Click on path curve/edges
- Profile follows path geometry
```

### Components and Groups
```bash
Grouping:
Ctrl + G         # Make group
Right-click > Make Group
Ctrl + Shift + G # Make component
Edit Group       # Double-click or right-click > Edit Group
Exit Group       # Click outside or Esc

Component Operations:
G                # Make component
Ctrl + Shift + G # Make component (alternative)
F4               # Component browser
Shift + A        # Make unique component
```

## Precision and Measurement

### Measurement and Dimensioning
```bash
Measurement Tools:
T                # Tape measure tool
D                # Dimension tool
Protractor       # Angle measurement
Text tool        # Add text labels

Input Methods:
Type distance    # Numeric input during tool use
Tab              # Lock/unlock inference
Shift            # Lock to axis
Up/Down arrows   # Blue axis constraint
Left/Right arrows # Green/red axis constraint
```

### Inference System
```bash
Inference Types:
Red/Green/Blue lines # Axis directions
Yellow             # Parallel inference  
Magenta           # Perpendicular
Orange            # Tangent to curve
Light blue        # On face
Brown             # On edge
Cyan              # Midpoint
Purple            # Intersection

Inference Controls:
Hold Shift        # Lock inference direction
Arrow keys        # Constrain to specific axis
Tab               # Toggle inference lock
```

## Materials and Textures

### Material Application
```bash
Material Tools:
B                # Paint bucket (material tool)
Alt + Paint bucket # Sample material (eyedropper)
Ctrl + Paint bucket # Replace all instances
Shift + Paint bucket # Paint all connected

Material Editor:
Window > Materials # Materials panel
Create Material   # Custom materials
Edit Material     # Modify existing materials
Position Texture  # Right-click on face > Texture > Position
```

### Texture Positioning
```bash
Texture Tools:
Right-click > Texture > Position
- Move pin (reposition texture)
- Scale/rotate pins (transform texture)
- Fixed pin (set origin point)
- Sample material from model
```

## Layers and Organization

### Layer Management
```bash
Layer Operations:
Window > Layers  # Layers panel
Layer0          # Default layer (never delete)
New Layer       # Create layer
Delete Layer    # Remove layer
Layer visibility # Turn layers on/off
Layer lock      # Lock/unlock layers

Entity Info:
Window > Entity Info # Properties panel
Change layer    # Move selected to layer
Layer color     # Visual identification
```

### Outliner
```bash
Outliner Panel:
Window > Outliner # Hierarchical view
Expand/collapse  # Show/hide contents
Search          # Find objects by name
Visibility      # Control object visibility
```

## Advanced Modeling Techniques

### Solid Tools (Pro)
```bash
Boolean Operations:
Union           # Combine solids
Subtract        # Remove one solid from another
Intersect       # Keep only intersection
Trim            # Cut with another solid
Split           # Divide solid
Shell           # Hollow out solid

Requirements:
- Objects must be solid (no holes/gaps)
- Use Window > Entity Info to verify solids
- Groups or components work best
```

### Dynamic Components
```bash
Dynamic Components:
Component Options # Right-click on component
Interact tool    # Use dynamic features
Configure        # Set up dynamic properties
Animate         # Create animations

DC Functions:
- OnClick behaviors
- Size constraints  
- Position animations
- Custom attributes
- Formula-driven properties
```

## Scenes and Animation

### Scene Management
```bash
Scene Operations:
Window > Scenes  # Scenes panel
Add Scene       # Capture current view
Update Scene    # Modify existing scene
Slide transition # Smooth scene changes
Scene Manager   # Organize scenes

Scene Properties:
- Camera position
- Hidden geometry
- Active sections
- Layer visibility
- Styles and fog
```

### Animation Export
```bash
Animation Settings:
File > Export > Animation
- Frame rate (FPS)
- Resolution settings
- Format (AVI, MOV, etc.)
- Scene transitions
- Loop animations
```

## Styles and Visual Effects

### Style Settings
```bash
Style Controls:
Window > Styles  # Styles panel
Edge settings    # Line display options
Face settings    # Surface display
Background       # Sky/ground/watermark
Modeling         # Section cuts, guides

Edge Display:
- Profiles (thick outline edges)
- Depth cue (distance-based line weights)
- Extension (extend lines slightly)
- Endpoints (show line ends)
```

### Section Planes
```bash
Section Tools:
Tools > Section Plane # Create section cut
Double-click section # Activate section view
Right-click > Reverse # Flip cutting direction
Context menu > Active Cut # Toggle section on/off

Section Display:
- Cut line visibility
- Section fill color
- Cut line style
- Section plane visibility
```

### Fog and Background
```bash
Visual Effects:
Window > Styles > Edit > Fog
- Enable fog
- Start/end distance
- Color settings

Background Options:
- Sky color
- Ground color  
- Watermark images
- Transparent background
```

## Layout and Documentation (Pro)

### LayOut Integration
```bash
LayOut Workflow:
File > Send to LayOut # Export to LayOut
LayOut templates     # Professional layouts
Vector rendering     # Scalable graphics
Raster rendering     # Image-based export

LayOut Features:
- Multi-page documents
- Dimension tools
- Text and annotations
- Title blocks
- Scale drawings
```

### 2D Export Options
```bash
2D Export Formats:
File > Export > 2D Graphic
- PDF (vector/raster)
- EPS (vector)
- SVG (web vector)
- PNG/JPEG (raster)
- TIFF (high-res raster)
- DWG/DXF (CAD format)

Export Settings:
- Resolution (raster formats)
- Line weights
- Hidden line removal
- Transparency
- Anti-aliasing
```

## Import and Export

### 3D Import Formats
```bash
Supported Imports:
- SKP (SketchUp)
- 3DS (3D Studio)
- DWG/DXF (AutoCAD)
- DAE (Collada)
- KMZ (Google Earth)
- STL (3D printing)
- OBJ (mesh format)

Import Options:
File > Import
- Units preservation
- Merge coplanar faces
- Orient faces consistently
- Check validity
```

### 3D Export Formats
```bash
Export Options:
File > Export > 3D Model
- SKP (SketchUp native)
- DAE (Collada)
- 3DS (3D Studio)
- OBJ (mesh)
- STL (3D printing)
- VRML (web 3D)
- KMZ (Google Earth)

Export Settings:
- Triangulated meshes
- Materials/textures
- Units and scale
- Component instances
```

## Extensions and Plugins

### Extension Warehouse
```bash
Extension Management:
Window > Extension Manager
Extension Warehouse  # Browse online plugins
Install extension   # .rbz file installation
Enable/disable      # Control active extensions

Popular Extensions:
- CleanUp³ (geometry cleanup)
- Joint Push Pull (advanced extrusion)
- Curviloft (lofting)
- FredoScale (advanced scaling)
- QuadFaceTools (quad mesh modeling)
- Round Corner (filleting)
- Profile Builder (molding profiles)
```

### Ruby Console
```bash
Ruby Scripting:
Window > Ruby Console # Script interface
Load Ruby script    # Execute .rb files
Plugins folder      # Extension location

Basic Ruby Commands:
- Sketchup.active_model
- Selection methods
- Geometry creation
- Entity manipulation
```

## Keyboard Shortcuts

### Essential Shortcuts
```bash
File Operations:
Ctrl + N         # New file
Ctrl + O         # Open file
Ctrl + S         # Save file
Ctrl + Shift + S # Save as
Ctrl + I         # Import
Ctrl + E         # Export

Edit Commands:
Ctrl + Z         # Undo
Ctrl + Y         # Redo
Ctrl + X         # Cut
Ctrl + C         # Copy
Ctrl + V         # Paste
Delete           # Delete selected
Ctrl + A         # Select all
Esc              # Cancel/deselect
```

### View Shortcuts
```bash
Display Controls:
Alt + 1-6        # Standard views
Shift + Z        # Zoom extents
Z                # Zoom selected  
Shift + E        # Previous view
Shift + W        # Next view

Rendering Modes:
Ctrl + 1         # X-ray
Ctrl + 2         # Wireframe
Ctrl + 3         # Hidden line
Ctrl + 4         # Shaded
Ctrl + 5         # Shaded with textures
```

### Tool Shortcuts
```bash
Drawing Tools:
L                # Line
R                # Rectangle
C                # Circle
A                # Arc
P                # Push/pull
M                # Move
Q                # Rotate
S                # Scale
T                # Tape measure
B                # Paint bucket
E                # Eraser
F                # Offset
```

## Precision Techniques

### Accurate Modeling
```bash
Precision Methods:
- Type exact dimensions while using tools
- Use tape measure for construction lines
- Set up guide lines and points
- Use inference system effectively
- Work at appropriate zoom levels
- Check model units (Window > Model Info > Units)

Construction Techniques:
- Start with simple shapes
- Use groups/components to isolate geometry
- Keep geometry on Layer0
- Use layers for visibility control only
- Build from inside out
- Check for gaps and overlaps regularly
```

### Measurement and Analysis
```bash
Model Analysis:
Window > Model Info # File statistics
Entity Info       # Selected object properties
Instructor        # Tool guidance
Area calculation  # Right-click > Area
Volume           # Solid Inspector (requires solid)

Measurement Tools:
- Tape measure (construction lines)
- Dimensions (annotation)
- Protractor (angles)
- Text tool (labels)
```

## Professional Workflows

### Architectural Modeling
```bash
Building Process:
1. Import site plan/floor plan
2. Trace walls with rectangles
3. Push/pull walls to height
4. Add openings (doors/windows)
5. Create roof geometry
6. Add details and components
7. Apply materials
8. Set up scenes
9. Export to LayOut

Best Practices:
- Model to real-world scale
- Use components for repeated elements
- Organize with layers and groups
- Keep raw geometry on Layer0
- Use scenes for different views
```

### Product Design
```bash
Design Process:
1. Sketch basic forms
2. Use Follow Me for complex shapes
3. Apply solid tools for boolean operations
4. Add details with components
5. Apply materials and textures
6. Create exploded views
7. Dimension in LayOut
8. Export for manufacturing

Quality Control:
- Check solid validity
- Verify dimensions
- Test 3D printing readiness
- Export appropriate formats
```

## Troubleshooting and Performance

### Common Issues
```bash
Performance Tips:
- Purge unused components/materials
- Use simplified components for distant objects
- Turn off unnecessary edge styles
- Hide complex geometry when not needed
- Work in orthographic views when possible
- Break large models into smaller files

Geometry Problems:
- Reversed faces (blue showing)
- Tiny faces/lines causing issues  
- Non-manifold geometry
- Overlapping coplanar faces
- Missing faces in push/pull operations
```

### File Management
```bash
File Maintenance:
Window > Model Info > Statistics
- Purge unused components
- Fix problems automatically
- Show nested components
- Component definition count

Backup Strategies:
- Auto-save settings
- Incremental save naming
- Regular purging
- Component library organization
```

## Integration with Other Software

### CAD Workflow
```bash
CAD Integration:
- Import DWG/DXF as 2D reference
- Model 3D geometry in SketchUp
- Export back to CAD format
- Maintain scale accuracy
- Use appropriate units

BIM Integration:
- Export to IFC format
- Coordinate with Revit/ArchiCAD
- Maintain component hierarchy
- Use classification systems
```

### Rendering Integration
```bash
Rendering Engines:
- V-Ray for SketchUp
- Enscape
- Lumion LiveSync
- KeyShot
- Podium

Export Considerations:
- Materials and textures
- Component instances
- Scene organization
- Lighting setup
```

## Advanced Features (Pro)

### Style Builder
```bash
Custom Styles:
Style Builder application
- Create custom edge styles
- Scan hand-drawn lines
- Import stroke libraries
- Apply to SketchUp models

Process:
1. Scan or create line work
2. Process in Style Builder
3. Export style file
4. Import to SketchUp styles
```

### 3D Warehouse Integration
```bash
Warehouse Access:
File > 3D Warehouse # Direct access
Get Models         # Download components
Share Model        # Upload to warehouse

Best Practices:
- Check component quality
- Optimize for performance
- Maintain appropriate detail level
- Use proxy components for complex objects
```

This comprehensive SketchUp Pro reference covers essential modeling workflows from basic drawing to advanced professional documentation and rendering integration.