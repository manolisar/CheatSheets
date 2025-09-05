# Fusion 360 Cheatsheet

## Quick Reference
- **Version**: Latest (Cloud-based updates)
- **Platform**: Windows/macOS (Cloud-based)
- **License**: Commercial/Personal/Educational
- **Official Docs**: https://help.autodesk.com/view/fusion360/

## Essential Shortcuts

### General Navigation
| Action | Shortcut | Description |
|--------|----------|-------------|
| Pan | Middle mouse drag | Pan view |
| Orbit | Shift+Middle mouse | Rotate view |
| Zoom | Mouse wheel | Zoom in/out |
| Zoom Fit | Shift+F | Fit model to view |
| Zoom to Selection | Shift+S | Zoom to selected objects |
| View Cube | Click faces | Standard orthographic views |
| Home View | Ctrl+H | Return to home position |

### File Operations
| Action | Shortcut | Description |
|--------|----------|-------------|
| New Design | Ctrl+N | Create new design |
| Save | Ctrl+S | Save to cloud |
| Export | Ctrl+E | Export file |
| Undo | Ctrl+Z | Undo last action |
| Redo | Ctrl+Y | Redo action |
| Search Commands | S | Open command search |

### Workspace Switching
| Action | Shortcut | Description |
|--------|----------|-------------|
| Design Workspace | Ctrl+1 | 3D modeling and sketching |
| Render Workspace | Ctrl+2 | Photorealistic rendering |
| Animation Workspace | Ctrl+3 | Motion studies |
| Simulation Workspace | Ctrl+4 | Stress analysis |
| CAM Workspace | Ctrl+5 | Manufacturing toolpaths |
| Drawing Workspace | Ctrl+6 | 2D documentation |

## Sketching Tools

### Basic Sketch Commands
| Action | Shortcut | Description |
|--------|----------|-------------|
| Line | L | Draw line segments |
| Rectangle | R | Draw rectangle |
| Circle | C | Draw circle |
| Arc | A | Draw arc |
| Spline | Ctrl+Shift+S | Draw spline curve |
| Polygon | P | Draw polygon |
| Ellipse | E | Draw ellipse |
| Mirror | M | Mirror sketch entities |
| Offset | O | Offset curves |
| Trim | T | Trim sketch geometry |
| Extend | X | Extend sketch lines |
| Fillet | F | Sketch fillet |
| Project | P (in sketch) | Project 3D edges to sketch |

### Sketch Constraints
```
Geometric Constraints:
- Coincident: Points touch
- Collinear: Lines on same line
- Parallel: Lines remain parallel
- Perpendicular: 90-degree angle
- Horizontal/Vertical: Align to axes
- Tangent: Smooth curve connection
- Equal: Same size/length
- Symmetric: Mirror about line
- Fix/Unfix: Lock position

Dimensional Constraints:
- Linear dimension
- Angular dimension
- Radial dimension
- Diameter dimension
```

### Sketch Best Practices
```
Fully Constrained Sketches:
- All geometry black (fully defined)
- Blue = under-constrained
- Red = over-constrained
- Use construction lines for reference
- Start with basic shape, add details
- Dimension to origin when possible
```

## 3D Modeling Features

### Create Features
| Command | Description | Key Points |
|---------|-------------|------------|
| Extrude | Add/remove material along path | Distance, angle, or to object |
| Revolve | Rotate sketch around axis | Full or partial revolution |
| Sweep | Follow sketch along path | Profile + path required |
| Loft | Connect multiple profiles | Guide rails for shape control |
| Coil | Helical/spiral features | Springs, threads, spirals |

### Modify Features
| Command | Description | Key Points |
|---------|-------------|------------|
| Fillet | Round edges | Constant or variable radius |
| Chamfer | Beveled edges | Distance-distance or distance-angle |
| Shell | Hollow out solid | Remove faces, set thickness |
| Draft | Tapered surfaces | Manufacturing draft angles |
| Rib | Thin structural features | Web-like supports |
| Mirror | Reflect features | About plane or face |
| Circular Pattern | Radial repetition | Around axis |
| Rectangular Pattern | Linear repetition | Along axes |
| Pattern on Path | Follow curve | Complex pattern paths |

### Assembly Tools
```
Component Operations:
- Insert: Add existing designs
- New Component: Create in-place
- Copy/Paste: Duplicate components
- Replace: Substitute components
- Activate: Edit component in context

Joints:
- Rigid: Fixed connection
- Revolute: Rotation about axis
- Slider: Linear motion
- Pin-Slot: Guided linear motion
- Planar: Motion in plane
- Ball: Spherical rotation
- Cylindrical: Rotation + translation

Motion Study:
- Define motion types
- Set driving constraints
- Animate assemblies
- Export animations
```

## CAM Manufacturing

### Setup Operations
```
Manufacturing Model:
- Select stock material
- Define setup orientation
- Set work coordinate system (WCS)
- Define tool library
- Material removal simulation

Setup Types:
- Milling: 3-axis, multi-axis
- Turning: Lathe operations
- Cutting: Plasma, laser, waterjet
- Additive: 3D printing preparation
```

### Milling Operations
```
2D Operations:
- Face: Surface finishing
- Adaptive Clearing: Rough material removal
- Pocket Clearing: Internal features
- Contour: Profile cutting
- Slot: Channel cutting
- Drill: Hole operations
- Tap: Threaded holes
- Bore: Precision holes
- Thread Mill: Large threaded features

3D Operations:
- Adaptive Clearing: 3D roughing
- Parallel: Finishing passes
- Contour: 3D profiling
- Ramp: Gradual entry
- Spiral: Circular toolpaths
- Radial: Spoke patterns
- Scallop: Stepped finishing

Multi-axis:
- Swarf: 5-axis surfacing
- Multi-axis Contour: Complex curves
- Flow: Surface flowing
```

### Toolpath Optimization
```
Cutting Parameters:
- Spindle speed (RPM)
- Feed rate (IPM/mm/min)
- Stepdown/stepover
- Climb vs conventional milling
- Tool engagement angles

Tool Selection:
- End mills: Slot, ball, bull nose
- Face mills: Large flat surfaces
- Drills: Various sizes and types
- Specialty: Thread mills, chamfer mills
- Tool libraries: Manufacturer catalogs

Workholding:
- Vise: Standard rectangular stock
- Fixtures: Complex part shapes
- Clamps: Secure workpiece
- Soft jaws: Custom vise jaws
```

## Simulation and Analysis

### Static Stress Analysis
```
Study Setup:
1. Apply materials to components
2. Define constraints (fixed, pinned)
3. Apply loads (force, pressure, moment)
4. Generate mesh
5. Solve and review results

Load Types:
- Force: Concentrated loads
- Pressure: Distributed surface load
- Moment: Rotational loads
- Bearing Load: Pin connections
- Body Force: Gravity, acceleration
- Thermal: Temperature effects

Results Display:
- von Mises Stress: Failure criteria
- Displacement: Deformation
- Safety Factor: Design margin
- Principal Stress: Maximum stresses
- Strain: Material deformation
```

### Modal Analysis
```
Natural Frequency:
- Find resonant frequencies
- Mode shapes visualization
- Avoid operational frequencies
- Design modifications for stiffness

Setup Requirements:
- Material properties required
- Constraints define boundary conditions
- Mass participation factors
- Modal effective mass
```

### Thermal Analysis
```
Heat Transfer:
- Conduction through materials
- Convection to fluids
- Radiation to environment
- Contact conductance

Boundary Conditions:
- Temperature: Fixed temperatures
- Heat Flux: Applied heat sources
- Convection: Fluid cooling/heating
- Radiation: Environmental exchange
```

## Rendering and Visualization

### Materials and Appearances
```
Material Types:
- Metal: Aluminum, steel, brass
- Plastic: Various colors and finishes
- Glass: Transparent materials
- Ceramic: Non-metallic materials
- Fabric: Textiles and soft goods
- Custom: User-defined properties

Appearance Properties:
- Color: Base color selection
- Roughness: Surface finish
- Metallic: Metallic vs non-metallic
- Opacity: Transparency level
- Bump: Surface texture simulation
- Cutouts: Transparency patterns
```

### Lighting and Environment
```
Environment Settings:
- HDRI: High dynamic range images
- Sky: Procedural sky generation
- Studio: Controlled lighting
- Custom: User-defined environments

Lighting Types:
- Directional: Sun-like lighting
- Point: Light bulb simulation
- Spot: Focused beam
- Area: Soft, diffused lighting

Camera Settings:
- Field of view
- Depth of field
- Exposure controls
- Image resolution
```

## Collaboration Features

### Data Management
```
Fusion 360 Hub:
- Cloud storage and sync
- Version history and branching
- Access permissions
- Team collaboration
- Design reviews and markup

Sharing Options:
- Public link: View-only access
- Invite users: Collaborative editing
- Export formats: Step, STL, etc.
- Live review: Real-time collaboration
```

### Version Control
```
Version Management:
- Auto-save to cloud
- Named versions
- Version comparison
- Restore previous versions
- Branch and merge workflows

File Formats:
- .f3d: Native Fusion 360
- .step/.stp: CAD standard
- .iges/.igs: Legacy CAD
- .stl: 3D printing
- .obj: 3D graphics
- .3mf: Advanced 3D printing
```

## Keyboard Shortcuts Summary

### Most Used Shortcuts
| Action | Shortcut | Context |
|--------|----------|---------|
| Extrude | E | Modeling |
| Revolve | R | Modeling |
| Fillet | F | Modeling |
| Shell | Shift+H | Modeling |
| Mirror | M | Modeling |
| Pattern | Ctrl+R | Modeling |
| Joint | J | Assembly |
| Sketch | Shift+S | Create sketch |
| Finish Sketch | Enter | Exit sketch |
| Hide/Show | V | Visibility |
| Isolate | I | Hide others |
| Measure | M | Inspection |

### Advanced Shortcuts
| Action | Shortcut | Context |
|--------|----------|---------|
| Section Analysis | Alt+S | Analysis |
| Appearance | A | Rendering |
| Decal | D | Rendering |
| Scene Settings | Ctrl+L | Rendering |
| Capture Image | Ctrl+Alt+I | Documentation |
| Animation | Ctrl+Alt+A | Motion |
| Simulation | Shift+F | Analysis |

## Tips & Best Practices

### Modeling Strategy
- Start with simple shapes, add complexity gradually
- Use parameters for design intent
- Capture design history in timeline
- Use construction geometry for references
- Plan for manufacturing constraints

### Performance Optimization
- Use bodies vs components appropriately  
- Minimize complex surface operations
- Control detail level for large assemblies
- Use derived components for references
- Optimize mesh density in simulation

### CAM Best Practices
- Verify stock setup before programming
- Use appropriate speeds and feeds
- Minimize tool changes
- Consider workholding early in design
- Simulate all toolpaths before machining

### Collaboration Tips
- Use meaningful file names and versions
- Add comments to design timeline
- Share design intent with parameters
- Use consistent material libraries
- Document manufacturing requirements

## Troubleshooting

### Common Modeling Issues
| Problem | Cause | Solution |
|---------|-------|----------|
| Feature fails to update | Geometry changes | Check parent features |
| Sketch over-constrained | Too many dimensions | Remove redundant constraints |
| Boolean operation fails | Self-intersecting geometry | Check sketch validity |
| Performance slow | Complex timeline | Simplify or suppress features |
| Joint fails | Misaligned geometry | Check component positioning |

### CAM Issues
| Problem | Cause | Solution |
|---------|-------|----------|
| Toolpath warnings | Invalid geometry | Check surface continuity |
| Excessive machining time | Poor strategy selection | Optimize cutting parameters |
| Tool crashes | Incorrect setup | Verify WCS and stock |
| Poor surface finish | Wrong feeds/speeds | Adjust cutting parameters |

## Resources
- [Fusion 360 Help](https://help.autodesk.com/view/fusion360/)
- [Fusion 360 Blog](https://www.autodesk.com/products/fusion-360/blog)
- [Lars Christensen YouTube](https://www.youtube.com/user/cadcamstuff)
- [Fusion 360 Academy](https://academy.autodesk.com/software/fusion-360)
- [Community Forums](https://forums.autodesk.com/t5/fusion-360/ct-p/1234)
- [Manufacturing Documentation](https://cam.autodesk.com/)