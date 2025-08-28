# Rhino 3D Comprehensive Reference

## Interface and Navigation

### Viewport Navigation
```bash
Mouse Navigation:
Right Mouse Drag  # Rotate view (in perspective)
Shift + Right     # Pan view
Ctrl + Right      # Zoom view
Ctrl + Shift + Right # Zoom window

View Controls:
F3                # Named views
F4                # Toggle selected objects
F5                # Refresh shaded display
F6                # Turn camera on/off
Home              # Zoom extents
End               # Zoom extents all viewports
```

### Viewport Display
```bash
Display Modes:
Wireframe         # Default wireframe display
Shaded           # Solid shaded view  
Rendered         # Full rendered view
Ghosted          # Transparent shaded
X-Ray            # See-through display

View Manipulation:
Zoom Window      # Zoom to rectangular region
Zoom Selected    # Zoom to selected objects
Zoom Target      # Zoom to cursor location
Pan              # Move view position
Rotate View      # 3D view rotation
```

## Selection Methods

### Basic Selection
```bash
Selection Tools:
Left Click       # Select single object
Ctrl + Click     # Toggle object selection
Shift + Click    # Add to selection
Ctrl + A         # Select all
Ctrl + Shift + A # Select none
Escape           # Deselect all

Window/Crossing Selection:
Left to Right    # Window selection (completely inside)
Right to Left    # Crossing selection (partially inside)
Ctrl + Drag     # Force crossing selection
Shift + Drag    # Force window selection
```

### Advanced Selection
```bash
Selection Filters:
SelAll           # Select all objects
SelNone          # Deselect all
SelLast          # Select last created object
SelPrev          # Select previous selection
Invert           # Invert selection
SelSimilar       # Select similar objects
SelDup           # Select duplicate objects
SelSmall         # Select small objects
SelBadObjects    # Select invalid objects

By Properties:
SelColor         # Select by color
SelLayer         # Select by layer  
SelType          # Select by object type
SelName          # Select by object name
SelCrv           # Select all curves
SelSrf           # Select all surfaces
SelPolysrf       # Select all polysurfaces
SelMesh          # Select all meshes
SelLight         # Select all lights
```

## Drawing and Creation Commands

### Point and Line Creation
```bash
Point Commands:
Point            # Create single point
Points           # Create multiple points  
PointCloud       # Create point cloud
Divide           # Divide curve by number
DivideByLength   # Divide curve by distance
MarkFOD          # Mark focus of deformation

Line Commands:
Line             # Line between two points
Lines            # Multiple connected lines
Polyline         # Connected line segments
Rectangle        # Rectangular boundary
Polygon          # Multi-sided polygon
```

### Curve Creation
```bash
Curve Tools:
Circle           # Circle by center/radius
Arc              # Arc by center/start/end
Ellipse          # Elliptical curve
Curve            # Free-form curve
InterpCrv        # Interpolated curve
Spiral           # Spiral curve
Helix            # Helical curve

NURBS Curves:
ControlPtCrv     # Curve by control points
InterpCrv        # Curve through points
Sketch           # Hand-drawn curve
FitCrv           # Fit curve to points
Rebuild          # Rebuild curve structure
```

### Surface Creation
```bash
Basic Surfaces:
PlaneSrf         # Planar surface
Patch            # Patch surface
NetworkSrf       # Network of curves
Sweep1           # Sweep along one rail
Sweep2           # Sweep along two rails
Revolve          # Surface of revolution
Extrude          # Extrude curve/surface

Advanced Surfaces:
Loft             # Loft through curves
BlendSrf         # Blend between surfaces
MatchSrf         # Match surface edges
FilletSrf        # Fillet between surfaces
OffsetSrf        # Offset surface
Pipe             # Pipe around curve
```

## Solid Modeling

### Primitive Solids
```bash
Basic Solids:
Box              # Rectangular box
Cylinder         # Cylindrical solid
Cone             # Conical solid
Sphere           # Spherical solid
Torus            # Toroidal solid
Pyramid          # Pyramidal solid
Truncated Cone   # Truncated cone
Ellipsoid        # Ellipsoidal solid
```

### Boolean Operations
```bash
Boolean Commands:
BooleanUnion     # Union solids
BooleanDifference # Subtract solids
BooleanIntersection # Intersect solids
BooleanSplit     # Split with surface
Trim             # Trim with curve/surface
Split            # Split object
```

### Solid Modification
```bash
Editing Solids:
FilletEdge       # Fillet solid edges
ChamferEdge      # Chamfer solid edges
Shell            # Hollow solid
OffsetSrf        # Offset surface
Cap              # Cap planar holes
ExtractSrf       # Extract surface from solid
MergeAllFaces    # Merge coplanar faces
```

## Transformation Commands

### Move and Copy
```bash
Basic Transforms:
Move             # Move objects
Copy             # Copy objects
Rotate           # Rotate objects
Scale            # Scale objects
Mirror           # Mirror objects
Orient           # Orient by reference

Advanced Transforms:
Gumball          # Interactive transform widget
Transform        # Custom transformation
ArrayLinear      # Linear array
ArrayPolar       # Polar array
ArrayRectangular # Rectangular array
ArrayAlongCrv    # Array along curve
```

### Precision Tools
```bash
Constraint Tools:
Ortho            # Orthogonal constraint (F8)
Snap             # Object snap
Grid Snap        # Grid point snap
Smart Track      # Intelligent tracking
Planar           # Planar constraint
Record History   # Parametric updates

Input Methods:
Distance         # Exact distance input
Coordinates      # Absolute coordinates  
Relative         # Relative coordinates (@)
Polar            # Polar coordinates (<)
```

## Surface and Curve Analysis

### Analysis Tools
```bash
Geometric Analysis:
Distance         # Measure distance
Angle            # Measure angle
Area             # Calculate area
Volume           # Calculate volume
Length           # Measure length
Radius           # Check radius
EvaluatePt       # Point coordinates

Curve Analysis:
CrvDeviation     # Check deviation
Curvature        # Display curvature
CurvatureGraph   # Curvature graph
Osculating       # Osculating circle
Torsion          # Torsion analysis
```

### Surface Analysis
```bash
Surface Quality:
Dir              # Surface direction
What             # Object information
List             # Detailed object data
SrfSeam          # Show surface seam
CheckNewObjects  # Auto-check new geometry

Continuity Analysis:
ZebraStripes     # Zebra stripe analysis
EnvironmentMap   # Environment mapping
Curvature        # Surface curvature
GaussianCurvature # Gaussian curvature
MeanCurvature    # Mean curvature
```

## Editing and Modification

### Curve Editing
```bash
Curve Modifications:
Trim             # Trim curve
Extend           # Extend curve
Join             # Join curves
Explode          # Break apart
Simplify         # Simplify curve
Fair             # Fair curve
Smooth           # Smooth curve

Point Editing:
PointsOn         # Show control points
PointsOff        # Hide control points
InsertKnot       # Insert knot
RemoveKnot       # Remove knot
Rebuild          # Rebuild curve
```

### Surface Editing
```bash
Surface Modifications:
Trim             # Trim surface
Untrim           # Remove trim
Extend           # Extend surface
Merge            # Merge surfaces
Join             # Join surfaces
Explode          # Explode polysurface

Surface Points:
PointsOn         # Show control points
PointsOff        # Hide control points
InsertKnot       # Insert surface knot
Rebuild          # Rebuild surface
```

## Layer Management

### Layer Operations
```bash
Layer Commands:
Layer            # Layer panel
NewLayer         # Create new layer
DeleteLayer      # Delete layer
PurgeLayer       # Remove unused layers
LayerStateManager # Manage layer states

Layer Tools:
ChangeLayer      # Move to different layer
CopyToLayer      # Copy to layer
CurrentLayer     # Set current layer
MatchLayer       # Match layer properties
LayerOn/Off      # Turn layer on/off
LayerLock/Unlock # Lock/unlock layer
```

### Layer Properties
```bash
Layer Settings:
LayerColor       # Set layer color
LayerLinetype    # Set line type
LayerPrintColor  # Set print color
LayerPrintWidth  # Set print width
LayerMaterial    # Assign material
```

## Annotation and Dimensioning

### Dimension Tools
```bash
Dimensioning:
DimLinear        # Linear dimension
DimAligned       # Aligned dimension
DimRadius        # Radius dimension
DimDiameter      # Diameter dimension
DimAngle         # Angular dimension
DimArc           # Arc length dimension
DimOrdinate      # Ordinate dimension

Text Tools:
Text             # Single line text
Dot              # Leader dot
Leader           # Leader line
TextObject       # Editable text
```

### Annotation Settings
```bash
Dimension Styles:
DimStyle         # Dimension style manager
DimScale         # Scale dimensions
DimReassociate   # Reassociate dimensions
DimRegen         # Regenerate dimensions
```

## Rendering and Visualization

### Materials and Lighting
```bash
Material Tools:
MaterialEditor   # Material editor
AssignMaterial   # Apply material
RemoveMaterial   # Remove material
MatchMaterial    # Match materials
MaterialLibrary  # Material library

Lighting:
Light            # Place light
Sun              # Sun light setup
EnvironmentEditor # Environment settings
```

### Rendering
```bash
Render Commands:
Render           # Render current view
RenderPreview    # Quick preview render
RenderWindow     # Render in window
SaveRendering    # Save rendered image
RenderSettings   # Render options

Display Options:
SetView          # Set view angle
NamedView        # Save/restore views
Perspective      # Perspective view
Parallel         # Parallel view
```

## Import and Export

### File Operations
```bash
Import Formats:
Import           # Import various formats
ImportWithOrigin # Import with origin point

Common Imports:
- 3DM (Rhino)
- DWG/DXF (AutoCAD)
- STEP/IGES (CAD)
- STL (3D Printing)
- OBJ (Mesh)
- SKP (SketchUp)

Export Formats:
Export           # Export to various formats
SaveAs           # Save as different format

Common Exports:
- 3DM (Rhino native)
- DWG/DXF (AutoCAD)
- STEP/IGES (CAD exchange)
- STL (3D printing)
- PDF (2D documentation)
- AI (Adobe Illustrator)
```

## Advanced Tools

### Analysis and Utilities
```bash
Geometry Tools:
CheckMesh        # Validate mesh
ShowEdges        # Display naked edges
ShowNakedEdges   # Show open edges
Audit3dmFile     # Check file integrity
Pack             # Embed bitmaps
Purge            # Remove unused data

Mesh Tools:
MeshFromNURBS    # Convert to mesh
QuadRemesh       # Quad-based remesh
Smooth           # Smooth mesh
Weld             # Weld mesh vertices
UnifyMeshNormals # Fix mesh normals
```

### Plugins and Extensions
```bash
Popular Plugins:
Grasshopper      # Parametric modeling
KeyShot          # Rendering
RhinoCAM         # CNC machining
Brazil           # Rendering engine
Flamingo        # Rendering
T-Splines        # SubD modeling
PanelingTools    # Architectural paneling
```

## Keyboard Shortcuts

### Essential Shortcuts
```bash
View Controls:
F1               # Help
F2               # Command history
F3               # Properties panel
F4               # Layers panel
F5               # Render preview
F6               # Camera on/off
F7               # Grid on/off
F8               # Ortho on/off
F9               # Grid snap
F10              # Control point snap
F11              # End snap
F12              # Perspective/parallel

Edit Commands:
Ctrl + A         # Select all
Ctrl + C         # Copy
Ctrl + V         # Paste
Ctrl + X         # Cut
Ctrl + Z         # Undo
Ctrl + Y         # Redo
Delete           # Delete objects
Ctrl + D         # Deselect
Tab              # Ortho toggle
Escape           # Cancel command
Enter            # Repeat last command
```

### Function Keys
```bash
F1-F12 Functions:
F1               # Help system
F2               # Command line
F3               # Properties
F4               # Layers
F5               # Render preview  
F6               # Camera
F7               # Grid
F8               # Ortho
F9               # Grid snap
F10              # Point snap
F11              # End snap
F12              # View toggle
```

## Precision and Modeling Tips

### Best Practices
```bash
Precision Modeling:
- Always model at real-world scale
- Use appropriate units (File > Properties > Units)
- Turn on relevant snaps for precision
- Use construction lines and planes
- Check geometry with analysis tools
- Maintain good layer organization

Quality Control:
- Check for naked edges regularly
- Validate mesh objects before export
- Use appropriate tolerances
- Keep backup versions
- Purge unused data periodically
```

### Common Workflows
```bash
Typical Processes:
1. Sketch/Import 2D reference
2. Create 3D framework
3. Build surfaces/solids
4. Check geometry quality
5. Apply materials/lighting
6. Render/Export final output

For 3D Printing:
1. Model as closed solid
2. Check for naked edges
3. Verify printable thickness
4. Export as STL/3MF
5. Check mesh quality
```

This comprehensive Rhino 3D reference covers essential NURBS modeling workflows from basic geometry creation to advanced surface analysis and rendering.