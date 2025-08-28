# Blender 3D Comprehensive Reference

## Interface and Navigation

### 3D Viewport Navigation
```bash
Middle Mouse Navigation:
MMB Drag          # Rotate view (Orbit)
Shift + MMB       # Pan view
Scroll Wheel      # Zoom in/out
Ctrl + MMB        # Zoom (alternative)
Home              # View all objects
. (Period)        # View selected
/ (Numpad)        # Local view (isolate selection)

Numpad Navigation:
1 (Numpad)        # Front view
3 (Numpad)        # Right view  
7 (Numpad)        # Top view
Ctrl + 1          # Back view
Ctrl + 3          # Left view
Ctrl + 7          # Bottom view
0 (Numpad)        # Camera view
5 (Numpad)        # Toggle orthographic/perspective
9 (Numpad)        # Flip view
2/4/6/8 (Numpad)  # Rotate view in steps
```

### Interface Controls
```bash
Workspace Management:
Ctrl + Page Up/Down  # Switch workspaces
T                    # Toggle toolbar (left panel)
N                    # Toggle properties panel (right)
Shift + A            # Add menu
Ctrl + Alt + Q       # Quad view toggle
Alt + F10            # Maximize viewport area

View Options:
Z                 # Shading mode pie menu
Shift + Z         # Toggle wireframe
Alt + Z           # Toggle X-ray mode
Ctrl + Space      # Toggle maximize area
Shift + Space     # Play animation
```

## Selection and Object Operations

### Selection Methods
```bash
Basic Selection:
Left Click        # Select object
Shift + Click     # Add to selection
A                 # Select all
Alt + A           # Deselect all
Ctrl + I          # Invert selection
B                 # Box select
C                 # Circle select
Ctrl + Left Click # Lasso select

Advanced Selection:
Shift + G         # Select similar
Ctrl + G          # Select grouped
[ / ]             # Select more/less
Ctrl + + / -      # Expand/contract selection
L                 # Select linked (mesh edit mode)
Shift + L         # Deselect linked
```

### Object Manipulation
```bash
Transform Tools:
G                 # Grab/Move
R                 # Rotate  
S                 # Scale
Shift + D         # Duplicate
Alt + D           # Linked duplicate

Constrain to Axis:
G + X/Y/Z         # Move along axis
R + X/Y/Z         # Rotate around axis
S + X/Y/Z         # Scale along axis
S + Shift + Z     # Scale excluding Z axis

Precision Controls:
Shift + Transform # Precision mode
Ctrl + Transform  # Snap to grid
Tab + Number      # Numeric input
```

## Modeling Operations

### Edit Mode Basics
```bash
Tab               # Toggle Edit/Object mode
Ctrl + Tab        # Mode switching pie menu
1/2/3             # Vertex/Edge/Face select mode
Alt + 1/2/3       # Toggle select modes

Mesh Selection:
Alt + Right Click # Select edge/face loop
Alt + Shift + Click # Add to loop selection  
Ctrl + Alt + Click # Select edge ring
Ctrl + Plus/Minus # Expand/contract selection
Ctrl + L          # Select linked
P                 # Separate mesh
J                 # Join objects (Object mode)
```

### Basic Mesh Operations
```bash
Extrude and Inset:
E                 # Extrude
I                 # Inset faces
Alt + E           # Extrude menu
Shift + I         # Inset individual faces

Cut and Divide:
K                 # Knife tool
Ctrl + R          # Loop cut
Shift + Ctrl + R  # Offset edge slide
F                 # Fill/Create face
Alt + F           # Fill with beauty
Grid Fill         # Ctrl + F > Grid Fill

Delete and Remove:
X                 # Delete menu
Delete            # Delete selected
Ctrl + X          # Dissolve menu
M                 # Merge vertices
Alt + M           # Merge menu
```

### Advanced Modeling
```bash
Subdivision:
Ctrl + 1/2/3/4    # Subdivision levels
Shift + Ctrl + S  # Smooth vertices
Alt + S           # Shrink/fatten along normals

Modifiers:
Ctrl + Shift + A  # Add modifier
Ctrl + A          # Apply modifier
H                 # Hide selected
Alt + H           # Unhide all
Shift + H         # Hide unselected

UV Unwrapping:
U                 # UV unwrap menu
Ctrl + E          # Mark seams
Alt + E           # Clear seams
L (in UV editor)  # Select island
```

## Materials and Shading

### Material Operations
```bash
Material Properties:
New Material      # Add new material slot
Assign            # Assign material to selection
Select            # Select faces with material
Deselect          # Deselect material faces

Shader Editor:
Shift + A         # Add node
Ctrl + Shift + T  # Add Texture node
Ctrl + T          # Add Color Ramp
X                 # Delete node
Ctrl + G          # Group nodes
Tab               # Enter/exit group
```

### Texturing Workflow
```bash
UV Editing:
Tab (UV Editor)   # Toggle sync selection
L                 # Select island  
P                 # Pin vertices
Alt + P           # Unpin vertices
E                 # Extrude (in UV editor)
S                 # Scale island
R                 # Rotate island

Texture Paint:
F                 # Brush size
Shift + F         # Brush strength
X                 # Flip colors
Ctrl + Z          # Undo stroke
S                 # Sample color
T                 # Texture properties
```

## Animation and Rigging

### Timeline and Keyframes
```bash
Animation Playback:
Spacebar          # Play/pause animation
Left/Right Arrow  # Previous/next frame
Shift + Left/Right # Jump to keyframe
Up/Down Arrow     # First/last frame
Alt + Scroll      # Scrub timeline

Keyframe Operations:
I                 # Insert keyframe menu
Alt + I           # Delete keyframe
Shift + E         # Set keyframe type
Ctrl + D          # Duplicate keyframe
G (Graph Editor)  # Move keyframe
S (Graph Editor)  # Scale keyframe timing
```

### Rigging Essentials
```bash
Armature Operations:
Ctrl + Alt + A    # Add armature
E (Edit mode)     # Extrude bone
Alt + P           # Clear parent
Ctrl + P          # Make parent
Shift + I         # Bone settings

Weight Painting:
Ctrl + Tab        # Weight paint mode
+/-               # Increase/decrease weight
X                 # Flip brush weight
Shift + K         # Select bone
Ctrl + L          # Select connected
```

### Animation Tools  
```bash
Pose Mode:
Ctrl + Tab        # Pose mode
Alt + G/R/S       # Clear transform
I                 # Insert keyframe
Alt + I           # Clear keyframes
Shift + E         # Push/relax pose
Ctrl + C/V        # Copy/paste pose

Constraints:
Ctrl + Shift + C  # Add constraint
Track To          # Point at target
Copy Location     # Copy position
Copy Rotation     # Copy rotation
IK Solver         # Inverse kinematics
```

## Rendering and Output

### Render Settings
```bash
Render Operations:
F12               # Render image
Ctrl + F12        # Render animation
F3                # Render image (alternative)
Esc               # Cancel render

Render Views:
F11               # Show render result
Alt + F11         # Show render in new window
J                 # Toggle render border
Ctrl + B          # Set render border
Ctrl + Alt + B    # Clear render border
```

### Camera and Lighting
```bash
Camera Controls:
Ctrl + Alt + 0    # Set active camera
0 (Numpad)        # Camera view
Shift + F         # Fly mode
Alt + F           # Walk mode
G + MMB           # Move camera on plane

Lighting:
Shift + A > Light # Add light
Ctrl + L          # Make links (data)
Alt + D           # Duplicate linked
Ctrl + Shift + D  # Make single user
```

## Sculpting Mode

### Sculpting Tools
```bash
Sculpting Basics:
Ctrl + Tab        # Sculpting mode
F                 # Brush size
Shift + F         # Brush strength
Ctrl + F          # Brush falloff
Alt + A           # Brush angle

Brush Controls:
X                 # Draw brush
G                 # Grab brush
S                 # Smooth brush
Ctrl + Drag       # Subtract/smooth
Shift + Drag      # Smooth brush
T                 # Texture properties
```

### Dynamic Topology
```bash
Dyntopo Controls:
Ctrl + D          # Toggle dyntopo
Ctrl + R          # Remesh
F9                # Brush settings
Ctrl + Shift + D  # Mask menu
Alt + M           # Mask border
Ctrl + I          # Invert mask
```

## Simulation and Physics

### Physics Properties
```bash
Physics Systems:
Rigid Body        # Object physics
Soft Body         # Deformable physics
Cloth             # Fabric simulation
Fluid             # Liquid simulation
Smoke             # Gas simulation

Particle Systems:
Hair              # Fur/grass system
Emitter           # Particle emitter
Reactor           # Collision particles
Delete            # Remove particles
```

### Simulation Controls
```bash
Simulation Baking:
Spacebar          # Play simulation
Alt + A           # Play from start
Shift + Ctrl + Spacebar # Reverse play
Ctrl + Spacebar   # Play every frame
Esc               # Stop simulation
```

## Node Editors

### Geometry Nodes
```bash
Geometry Node Editor:
Shift + A         # Add node
Tab               # Enter/exit group
Ctrl + G          # Make group
Ctrl + Shift + G  # Ungroup nodes
X                 # Delete node
M                 # Mute node
H                 # Hide node
```

### Compositor
```bash
Compositing Nodes:
Shift + A         # Add node menu
Ctrl + Shift + Click # Add viewer node
B                 # Backdrop toggle
V                 # Viewer node
Ctrl + T          # Add texture node
Alt + V           # Viewer border
```

## File Operations and Data Management

### File Management
```bash
File Operations:
Ctrl + N          # New file
Ctrl + O          # Open file
Ctrl + S          # Save file
Shift + Ctrl + S  # Save as
Ctrl + Shift + O  # Revert to saved
F2                # Save as menu

Import/Export:
Ctrl + Alt + O    # Open recent
File > Import     # Import formats
File > Export     # Export formats
Shift + Ctrl + I  # Import image as plane
```

### Data Management
```bash
Outliner Operations:
H                 # Hide object
Shift + H         # Hide others  
Alt + H           # Show all
M                 # Move to collection
Shift + M         # Link to collection
G                 # Move to new collection

Library Management:
Shift + F1        # Link/Append
File > Link       # Link external data
File > Append     # Append external data
Ctrl + Alt + P    # Make proxy
```

## Shortcuts by Workspace

### Modeling Workspace
```bash
Essential Modeling:
Tab               # Edit/Object mode toggle
E                 # Extrude
I                 # Inset
Ctrl + R          # Loop cut
K                 # Knife tool
F                 # Fill face
Alt + E           # Extrude options
Shift + A         # Add mesh
```

### Shading Workspace
```bash
Node Editor:
Shift + A         # Add node
Ctrl + Shift + T  # Add texture node with coordinates
Tab               # Enter/exit node group
Ctrl + T          # Add ColorRamp
Ctrl + H          # Hide unused sockets
M                 # Mute node
```

### Animation Workspace
```bash
Timeline Controls:
I                 # Insert keyframe
Alt + I           # Delete keyframe  
Shift + D         # Duplicate keyframes
T                 # Set interpolation mode
R                 # Set extrapolation
V                 # Set handle type
```

### Rendering Workspace
```bash
Render Controls:
F12               # Render image
F3                # Render image (alternative)
Ctrl + F12        # Render animation
Z                 # Viewport shading
Shift + Z         # Rendered shading
```

## Advanced Features

### Add-ons and Extensions
```bash
Popular Add-ons:
Extra Objects     # Additional primitives
LoopTools         # Mesh utilities
3D Print Toolbox  # 3D printing tools
Import Images     # Plane from image
Rigify            # Auto-rigging system
Animation Nodes   # Visual scripting
```

### Customization
```bash
Preferences:
F4, P             # Preferences (old shortcut)
Edit > Preferences # Access preferences
Keymap            # Customize shortcuts
Themes            # Interface themes
Add-ons           # Enable extensions
Input             # Mouse/tablet settings
```

## Performance and Optimization

### Viewport Performance
```bash
Performance Tips:
- Use wireframe for heavy scenes (Z key)
- Enable backface culling
- Reduce subdivision levels for viewport
- Use simplified display for modifiers
- Hide objects not being worked on (H key)
- Use collections to organize scene
```

### Memory Management
```bash
System Optimization:
- Save incremental versions regularly
- Pack external data (File > External Data)
- Use linked libraries for repeated objects
- Purge unused data blocks
- Enable auto-save in preferences
- Monitor system resources
```

This comprehensive reference covers Blender's essential workflows from basic navigation to advanced features like geometry nodes and simulation systems.