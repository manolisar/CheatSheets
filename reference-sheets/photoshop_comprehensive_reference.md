# Adobe Photoshop Comprehensive Reference Guide

## Interface and Navigation

### Workspace Layout
```
Default Photoshop Interface:
- Menu Bar: File, Edit, Image, Layer, Select, Filter, 3D, View, Window, Help
- Options Bar: Context-sensitive tool options
- Tools Panel: Selection, painting, editing tools (left side)
- Document Window: Active image canvas
- Panels: Layers, Properties, Adjustments, etc. (right side)
- Status Bar: Document info, zoom level (bottom)

Workspace Presets:
Window → Workspace → [Preset Name]
- Essentials (default)
- Photography
- Painting
- Typography
- Motion
- 3D
- Web
```

### Essential Keyboard Shortcuts

#### File Operations
```
File Management:
Ctrl + N          New document
Ctrl + O          Open file
Ctrl + Alt + O    Open As
Ctrl + W          Close document
Ctrl + Shift + W  Close all documents
Ctrl + S          Save
Ctrl + Shift + S  Save As
Ctrl + Alt + S    Save for Web & Devices
Ctrl + Shift + Alt + S  Export As

Recent Files:
Ctrl + Alt + Shift + O  Browse in Bridge
```

#### Edit Operations
```
Basic Editing:
Ctrl + Z          Undo (toggle last action)
Ctrl + Alt + Z    Step backward
Ctrl + Shift + Z  Step forward
Ctrl + C          Copy
Ctrl + X          Cut
Ctrl + V          Paste
Ctrl + Shift + V  Paste Special
Ctrl + Alt + V    Paste in Place
Ctrl + J          Duplicate layer
Ctrl + Shift + J  Cut to new layer

Transform:
Ctrl + T          Free Transform
Ctrl + Shift + T  Transform Again
Ctrl + Alt + T    Transform copy
```

#### Selection Shortcuts
```
Selection Tools:
M                 Rectangular Marquee
Shift + M         Cycle marquee tools
L                 Lasso Tool
Shift + L         Cycle lasso tools
W                 Quick Selection/Magic Wand
Q                 Quick Mask Mode

Selection Modifiers:
Shift + Click     Add to selection
Alt + Click       Subtract from selection
Shift + Alt + Click  Intersect selection
Ctrl + A          Select All
Ctrl + D          Deselect
Ctrl + Shift + I  Inverse Selection
Ctrl + Alt + R    Refine Edge/Select and Mask

Feather and Modify:
Ctrl + Alt + D    Feather Selection
Shift + F6        Feather Selection (alternative)
```

#### Layer Operations
```
Layer Management:
Ctrl + Shift + N  New Layer
Ctrl + J          Duplicate Layer
Ctrl + E          Merge Down
Ctrl + Shift + E  Merge Visible
Ctrl + Alt + E    Merge Visible to new layer
Ctrl + G          Group Layers
Ctrl + Shift + G  Ungroup Layers

Layer Visibility:
Alt + Click eye   Show/hide all other layers
Ctrl + ;          Show/hide guides
Ctrl + '          Show/hide grid
Ctrl + H          Show/hide extras

Layer Blending:
Shift + Plus      Next blend mode
Shift + Minus     Previous blend mode
Alt + Shift + N   Normal mode
Alt + Shift + M   Multiply mode
Alt + Shift + S   Screen mode
Alt + Shift + O   Overlay mode
```

#### Navigation and View
```
Zoom and Pan:
Ctrl + Plus       Zoom In
Ctrl + Minus      Zoom Out
Ctrl + 0          Fit on Screen
Ctrl + Alt + 0    Actual Pixels (100%)
Ctrl + 1          100% zoom
H                 Hand Tool (pan)
Space             Temporary Hand Tool

View Options:
F                 Cycle screen modes
Tab               Hide/show panels
Shift + Tab       Hide/show panels except tools
R                 Rotate View Tool
```

## Tools and Their Functions

### Selection Tools
```
Marquee Tools (M):
- Rectangular Marquee: Basic rectangular selections
- Elliptical Marquee: Circular and oval selections  
- Single Row/Column: Select 1-pixel rows/columns

Options:
- New Selection (default)
- Add to Selection (hold Shift)
- Subtract from Selection (hold Alt)
- Intersect with Selection (hold Shift+Alt)
- Feather: Soft edge (0-1000 pixels)
- Style: Normal, Fixed Ratio, Fixed Size

Lasso Tools (L):
- Lasso Tool: Freehand selections
- Polygonal Lasso: Straight-edge selections (click points)
- Magnetic Lasso: Edge-detection selection

Magnetic Lasso Options:
- Width: Edge detection distance (1-256)
- Contrast: Edge sensitivity (1-100%)
- Frequency: Anchor point placement (0-100)

Quick Selection Tools (W):
- Quick Selection: Paint to select similar areas
- Magic Wand: Click to select similar colors

Magic Wand Options:
- Tolerance: Color similarity (0-255)
- Anti-alias: Smooth edges
- Contiguous: Select connected pixels only
- Sample All Layers: Consider all visible layers
```

### Painting and Drawing Tools
```
Brush Tool (B):
- Standard brush for painting
- Pressure-sensitive with tablets
- Numerous blending modes
- Opacity and Flow controls

Brush Options:
- Size: 1-5000 pixels
- Hardness: 0-100% (soft to hard edge)
- Opacity: 0-100% (transparency)
- Flow: 0-100% (paint application rate)
- Blending Mode: Normal, Multiply, Screen, etc.

Brush Shortcuts:
[ or ]            Decrease/increase brush size
Shift + [ or ]    Decrease/increase brush hardness
Number keys (1-9) Set opacity (10%-90%)
Shift + Numbers   Set flow percentage

Pencil Tool (B):
- Hard-edged painting tool
- No anti-aliasing
- Good for pixel art

Clone Stamp Tool (S):
- Sample and paint from another area
- Alt + Click to set sample point
- Aligned vs Non-aligned sampling

Healing Brush (J):
- Sample texture, lighting, and shading
- Blends seamlessly with target area
- Alt + Click to set sample point

Spot Healing Brush (J):
- Automatic healing without sampling
- Content-Aware fill technology
- Good for removing small imperfections
```

### Adjustment and Retouching Tools
```
Dodge Tool (O):
- Lighten specific areas
- Range: Shadows, Midtones, Highlights
- Exposure: 1-100% strength

Burn Tool (O):
- Darken specific areas  
- Same range options as Dodge
- Protect Tones option preserves color

Sponge Tool (O):
- Saturate or Desaturate colors
- Mode: Desaturate or Saturate
- Flow: 1-100% intensity

Blur Tool:
- Reduces focus/sharpness
- Strength: 1-100%
- Sample All Layers option

Sharpen Tool:
- Increases focus/contrast
- Strength: 1-100% 
- Protect Detail option

Smudge Tool:
- Pushes pixels around
- Strength: 1-100%
- Finger Painting mode
```

### Text Tools
```
Type Tool (T):
- Horizontal Type: Standard text entry
- Vertical Type: Top-to-bottom text
- Type Mask Tools: Create selections shaped like text

Text Options:
- Font Family: Choose typeface
- Font Style: Regular, Bold, Italic, etc.
- Size: Point size or pixels
- Anti-aliasing: None, Sharp, Crisp, Strong, Smooth
- Color: Text color picker
- Alignment: Left, Center, Right, Justify

Character Panel (Window → Character):
- Leading: Line spacing
- Kerning: Space between characters
- Tracking: Space across text range
- Vertical/Horizontal Scale: Stretch text
- Baseline Shift: Move text up/down

Paragraph Panel (Window → Paragraph):
- Alignment options
- Indentation controls
- Space before/after paragraphs
- Hyphenation settings
```

### Shape and Path Tools
```
Shape Tools (U):
- Rectangle Tool
- Rounded Rectangle Tool
- Ellipse Tool
- Polygon Tool
- Line Tool
- Custom Shape Tool

Shape Options:
- Shape Layer: Creates vector shape layer
- Work Path: Creates temporary path
- Fill Pixels: Paints on current layer
- Fill: Solid color, gradient, or pattern
- Stroke: Outline with color and width

Pen Tools (P):
- Pen Tool: Create precise paths and shapes
- Freeform Pen: Draw paths freehand
- Add Anchor Point: Add points to paths
- Delete Anchor Point: Remove points from paths
- Convert Point: Change smooth/corner points

Path Operations:
- Make Selection: Convert path to selection
- Fill Path: Fill path with color
- Stroke Path: Outline path with brush
```

## Layers System

### Layer Types
```
Layer Types:
- Background Layer: Default bottom layer, locked
- Image/Pixel Layer: Contains pixel data
- Adjustment Layer: Non-destructive color/tone adjustments
- Fill Layer: Solid color, gradient, or pattern
- Shape Layer: Vector-based shapes
- Text Layer: Editable text
- Smart Object: Embedded/linked file that preserves original
- Group: Folder containing multiple layers

Layer Properties:
- Opacity: 0-100% transparency
- Blend Mode: How layer interacts with layers below
- Fill: Opacity of layer content (not effects)
- Lock: Protect various layer properties
```

### Blend Modes
```
Normal Group:
- Normal: Default blending
- Dissolve: Random pixel transparency

Darken Group:
- Darken: Keeps darkest pixels
- Multiply: Darkens by multiplying colors
- Color Burn: Increases contrast, darkens
- Linear Burn: Similar to multiply but more intense
- Darker Color: Compares RGB and uses darkest

Lighten Group:  
- Lighten: Keeps lightest pixels
- Screen: Lightens by inverting, multiplying, inverting again
- Color Dodge: Brightens based on blend color
- Linear Dodge (Add): Adds color values
- Lighter Color: Uses lightest RGB values

Contrast Group:
- Overlay: Combines multiply and screen
- Soft Light: Subtle contrast enhancement
- Hard Light: Stronger contrast effect
- Vivid Light: Combines color burn and dodge
- Linear Light: Combines linear burn and dodge
- Pin Light: Combines darken and lighten
- Hard Mix: Reduces colors to primary values

Comparative Group:
- Difference: Subtracts colors from each other
- Exclusion: Similar to difference but lower contrast
- Subtract: Subtracts blend color from base
- Divide: Divides base color by blend color

Color Group:
- Hue: Uses hue of blend color
- Saturation: Uses saturation of blend color  
- Color: Uses hue and saturation of blend color
- Luminosity: Uses lightness of blend color
```

### Layer Effects and Styles
```
Layer Effects (Double-click layer):

Drop Shadow:
- Blend Mode: How shadow interacts
- Color: Shadow color
- Opacity: Shadow transparency
- Angle: Direction of light source
- Distance: How far shadow extends
- Spread: Shadow edge softness
- Size: Shadow blur amount

Inner Shadow:
- Similar to drop shadow but inside object
- Creates inset/recessed appearance

Outer/Inner Glow:
- Blend Mode: Glow interaction
- Opacity: Glow transparency
- Color/Gradient: Glow color options
- Technique: Softer vs Precise
- Spread/Choke: Glow expansion
- Size: Glow blur radius

Bevel & Emboss:
- Style: Inner/Outer Bevel, Emboss, Pillow Emboss
- Technique: Smooth, Chisel Hard, Chisel Soft
- Depth: Effect intensity
- Direction: Up or Down
- Size: Bevel width
- Soften: Edge blur amount
- Angle/Altitude: Lighting direction
- Gloss Contour: Highlight/shadow curve
- Highlight/Shadow Mode: Blend modes and colors

Satin:
- Creates curved, satiny appearance
- Blend Mode: Color interaction
- Color: Effect color
- Opacity: Effect transparency
- Angle: Effect direction
- Distance: Effect offset
- Size: Effect blur

Color/Gradient/Pattern Overlay:
- Overlay entire layer with color/gradient/pattern
- Blend Mode: How overlay interacts
- Opacity: Overlay transparency
- Scale: Pattern/gradient size (for gradient/pattern)

Stroke:
- Size: Stroke width in pixels
- Position: Outside, Inside, Center
- Blend Mode: Stroke interaction
- Opacity: Stroke transparency
- Fill Type: Color, Gradient, Pattern
```

## Color Correction and Adjustments

### Adjustment Layers
```
Create Adjustment Layer:
Layer → New Adjustment Layer → [Type]
Or: Adjustments panel → Click adjustment icon

Brightness/Contrast:
- Brightness: -150 to +150 (lightens/darkens)
- Contrast: -50 to +100 (flattens/increases contrast)
- Legacy: Use old algorithm (not recommended)

Levels:
- Input Levels: Black point, Gamma, White point
- Output Levels: Restrict output range
- Channel: RGB, Red, Green, Blue individual adjustments
- Auto: Automatic level correction
- Options: Auto Color Correction Options

Curves:
- Point curve: Click and drag on curve
- Add points: Click on curve
- Remove points: Drag off curve or Ctrl+click
- Auto: Automatic curve adjustment
- Channel: Individual color channel curves
- Presets: Contrast, Color corrections, etc.

Hue/Saturation:
- Edit: Master or individual color ranges
- Hue: -180 to +180 (color shift)
- Saturation: -100 to +100 (color intensity)  
- Lightness: -100 to +100 (brightness)
- Colorize: Convert to monochrome with color tint

Color Balance:
- Tone Balance: Shadows, Midtones, Highlights
- Color Level: Cyan-Red, Magenta-Green, Yellow-Blue
- Preserve Luminosity: Maintain brightness

Photo Filter:
- Filter: Color temperature presets or custom color
- Density: 1-100% effect strength
- Preserve Luminosity: Maintain brightness

Channel Mixer:
- Output Channel: Choose channel to modify
- Source Channels: Mix percentages from other channels
- Constant: Add or subtract brightness
- Monochrome: Convert to black and white
```

### Direct Adjustments (Image Menu)
```
Auto Adjustments:
Image → Auto Tone (Ctrl+Shift+L)
Image → Auto Contrast (Ctrl+Alt+Shift+L)
Image → Auto Color (Ctrl+Shift+B)

Manual Adjustments:
Image → Adjustments → [Adjustment Type]
- Applies directly to pixels (destructive)
- Cannot be easily modified later
- Use adjustment layers when possible

Shadow/Highlight:
- Shadows Amount: 0-100% (lighten shadows)
- Highlights Amount: 0-100% (darken highlights)
- Tonal Width: Range of tones affected
- Radius: Local adjustment area
- Color Correction: Adjust color in corrected areas
- Midtone Contrast: Adjust midtone contrast

Exposure:
- Exposure: -9.99 to +9.99 stops (like camera exposure)
- Offset: -0.5000 to +0.5000 (midtones/shadows)
- Gamma Correction: 0.01 to 9.99 (midtone contrast)

Vibrance:
- Vibrance: -100 to +100 (intelligent saturation)
- Saturation: -100 to +100 (uniform saturation)
- Vibrance protects skin tones and prevents clipping
```

### Color Management
```
Color Settings (Ctrl+Shift+K):

Working Spaces:
- RGB: sRGB, Adobe RGB (1998), ProPhoto RGB
- CMYK: Print-specific color spaces
- Gray: Grayscale working space
- Spot: Spot color handling

Color Management Policies:
- RGB: Off, Preserve Embedded, Convert to Working
- CMYK: Similar options for print
- Profile Mismatches: Ask when opening, Ask when pasting
- Missing Profiles: Ask when opening

Conversion Options:
- Engine: Adobe (ACE), Microsoft ICM, etc.
- Intent: Perceptual, Relative Colorimetric, Saturation, Absolute
- Black Point Compensation: Preserve shadow detail
- Dither: Smooth gradations when converting

Proof Setup (View → Proof Setup):
- Custom: Set up soft proofing
- Working CMYK/RGB: Preview in working space
- Monitor RGB: Preview in monitor space
- Simulate Paper Color: Show paper color in proof
- Simulate Black Ink: Show maximum black in proof
```

## Filters and Effects

### Filter Categories
```
Blur Filters:
- Gaussian Blur: Soft, uniform blur
- Motion Blur: Directional blur effect
- Radial Blur: Circular or zoom blur
- Smart Blur: Edge-preserving blur
- Surface Blur: Skin-smoothing blur
- Lens Blur: Depth-of-field simulation

Sharpen Filters:
- Unsharp Mask: Professional sharpening
  Amount: 50-150% typical
  Radius: 0.5-2.0 pixels typical
  Threshold: 0-10 levels typical
- Smart Sharpen: Advanced edge detection
- Sharpen/Sharpen Edges/Sharpen More: Basic options

Noise Filters:
- Add Noise: Introduce grain/texture
  Amount: 0.1-400%
  Distribution: Uniform or Gaussian
  Monochromatic: Grayscale noise only
- Despeckle: Remove small imperfections
- Dust & Scratches: Remove scanning artifacts
- Median: Remove impulse noise
- Reduce Noise: Advanced noise reduction

Distort Filters:
- Lens Correction: Fix lens distortions
- Liquify: Warp and reshape images
- Perspective: Correct perspective problems
- Pinch: Squeeze or expand center
- Polar Coordinates: Rectangular to polar conversion
- Ripple: Water-like distortion
- Twirl: Spiral distortion
- Wave: Complex wave distortions

Render Filters:
- Clouds: Random cloud patterns
- Difference Clouds: High-contrast clouds  
- Fibers: Textile-like patterns
- Lens Flare: Camera lens flare effects
- Lighting Effects: 3D-style lighting
```

### Smart Filters
```
Converting to Smart Object:
Filter → Convert for Smart Filters
Or: Layer → Smart Objects → Convert to Smart Object

Benefits:
- Non-destructive filtering
- Editable filter settings
- Blending modes for filters
- Filter masks for selective application

Using Smart Filters:
1. Convert layer to Smart Object
2. Apply filter (appears as Smart Filter)
3. Double-click filter name to edit settings
4. Use filter mask to hide/show effect areas
5. Change filter blend mode and opacity

Smart Filter Masks:
- White: Filter effect visible
- Black: Filter effect hidden  
- Gray: Partial filter effect
- Paint on mask to control filter visibility
```

### Filter Gallery
```
Filter → Filter Gallery:

Artistic Filters:
- Colored Pencil: Sketch-like appearance
- Cutout: Posterized color areas
- Dry Brush: Rough brush strokes
- Film Grain: Add grain texture
- Fresco: Rough plaster texture
- Neon Glow: Glowing color effect
- Paint Daubs: Various brush styles
- Palette Knife: Thick paint effect
- Plastic Wrap: Shiny plastic coating
- Poster Edges: Bold edge outlines
- Rough Pastels: Pastel drawing effect
- Smudge Stick: Soft charcoal effect
- Sponge: Textured sponge painting
- Underpainting: Canvas texture
- Watercolor: Wet paint bleeding

Brush Strokes:
- Accented Edges: Emphasize edges
- Angled Strokes: Diagonal brush marks
- Crosshatch: Cross-hatched lines
- Dark Strokes: Dark outline strokes
- Ink Outlines: Fine ink line work
- Spatter: Paint spatter texture
- Sprayed Strokes: Airbrush effect
- Sumi-e: Japanese brush painting

Distort:
- Diffuse Glow: Soft glowing effect
- Glass: View through textured glass
- Ocean Ripple: Water ripple distortion

Sketch:
- Bas Relief: Raised surface effect
- Chalk & Charcoal: Drawing materials
- Charcoal: Soft charcoal drawing
- Chrome: Metallic chrome effect
- Conte Crayon: Conte crayon texture
- Graphic Pen: Fine pen crosshatching
- Halftone Pattern: Print halftone dots
- Note Paper: Textured paper effect
- Photocopy: High-contrast copy effect
- Plaster: Carved plaster appearance
- Reticulation: Film grain effect
- Stamp: Rubber stamp effect
- Torn Edges: Rough torn paper
- Water Paper: Wet paper texture

Stylize:
- Glowing Edges: Neon edge outline

Texture:
- Craquelure: Cracked surface
- Grain: Various grain patterns
- Mosaic Tiles: Tile mosaic effect
- Patchwork: Quilted squares
- Stained Glass: Leaded glass effect
- Texturizer: Apply texture patterns
```

## Advanced Techniques

### Masking and Compositing
```
Layer Masks:
- Create: Layer → Layer Mask → Reveal All/Hide All
- Paint on mask: White reveals, black conceals
- Keyboard shortcut: Click layer mask thumbnail
- Disable/Enable: Shift+click mask thumbnail
- Delete: Drag mask to trash, or Layer → Layer Mask → Delete
- Apply: Layer → Layer Mask → Apply

Vector Masks:
- Based on paths instead of pixels
- Always crisp edges
- Create: Layer → Vector Mask → Reveal All/Hide All
- Edit with Pen Tool

Clipping Masks:
- Use one layer to mask the layer above
- Create: Alt+click between layers in Layers panel
- Or: Layer → Create Clipping Mask (Ctrl+Alt+G)
- Release: Layer → Release Clipping Mask (Ctrl+Alt+Shift+G)

Advanced Selection Techniques:
- Select and Mask (Ctrl+Alt+R):
  View Mode: Onion Skin, Marching Ants, Overlay, etc.
  Edge Detection: Radius and Smart Radius
  Global Refinements: Smooth, Feather, Contrast, Shift Edge
  Output Settings: New Layer, Layer Mask, New Document, etc.

Color Range Selection:
Select → Color Range
- Sampled Colors: Click to select color range
- Fuzziness: 0-200 tolerance
- Range: Specify color ranges (Reds, Yellows, etc.)
- Invert: Select opposite colors
- Skin Tones: Detect faces automatically
```

### Retouching and Healing
```
Content-Aware Tools:

Content-Aware Fill:
Edit → Content-Aware Fill
- Source: Where to sample replacement content
- Sampling Area: Control sampling region
- Fill Settings: Color Adaptation, Rotation, Scale, Mirror
- Output Settings: Current Layer, New Layer, Duplicate Layer

Content-Aware Move:
- Move objects and fill the space automatically
- Mode: Move or Extend
- Adaptation: Strict, Medium, Loose (blending quality)

Content-Aware Crop:
- Extend canvas and fill with content-aware technology
- Useful when straightening creates empty corners

Patch Tool:
- Select area to be patched
- Drag selection to source area
- Mode: Normal, Content-Aware, Destination, Source
- Adaptation settings for Content-Aware mode

Advanced Healing:
- Sample all layers for healing tools
- Use separate source layer for non-destructive healing
- Create "Healing" layer at top of stack
- Set healing tools to "Sample All Layers"
- Heal on empty layer preserving original data

Frequency Separation:
1. Duplicate layer twice
2. Bottom copy: Apply Gaussian Blur (high radius)
3. Top copy: Apply High Pass filter (same radius as blur)
4. Change top layer blend mode to Linear Light
5. Work on texture (top layer) and color (bottom layer) separately
```

### Advanced Layer Techniques
```
Smart Objects:
- Preserve original image data
- Non-destructive transformations
- Filter effects remain editable
- Update multiple instances simultaneously

Creating Smart Objects:
- Layer → Smart Objects → Convert to Smart Object
- Place file: File → Place Embedded/Place Linked
- Copy/paste from Illustrator (choose Smart Object)

Editing Smart Objects:
- Double-click thumbnail to edit original
- Save original file to update Smart Object
- Replace Contents: Select PSB file to change source

Smart Object Benefits:
- Transform multiple times without quality loss
- Apply filters non-destructively  
- Change blend modes and opacity on filter effects
- Link to external files for automatic updates

Layer Comps:
- Save layer visibility, position, and appearance
- Window → Layer Comps
- Create New Layer Comp (camera icon)
- Include: Layer Visibility, Layer Position, Layer Appearance
- Navigate between comps for different design variations

Advanced Blending:
Layer Style → Blending Options
- Blend If: Control blending based on luminosity
- This Layer: Affect current layer's blending
- Underlying Layer: Affect layers below
- Hold Alt while dragging sliders to split values
- Create smooth transitions between blend ranges
```

### Automation and Actions
```
Actions Panel (Window → Actions):
- Record series of commands
- Play back on multiple images
- Create droplets for drag-and-drop processing

Creating Actions:
1. Open Actions panel
2. Click Create New Action (folder icon)
3. Name action and assign function key (optional)
4. Click Record button (red circle)
5. Perform desired operations
6. Click Stop button (square) when finished

Action Tips:
- Use relative positioning when possible
- Include color settings in actions
- Test actions on different image sizes
- Save actions as .atn files for sharing
- Use Insert Menu Item for commands not recordable

Batch Processing:
File → Automate → Batch
- Set: Choose action set
- Action: Select specific action
- Source: Folder, Import, Opened Files, Bridge
- Destination: None, Save and Close, Folder
- Override "Open" and "Save As" commands
- Include all subfolders option

Image Processor:
File → Scripts → Image Processor
- Process multiple images
- Resize images  
- Convert file formats
- Run actions during processing
- Save in multiple formats simultaneously

Variables and Data Sets:
- Define variables in templates
- Import data from CSV files
- Generate multiple variations automatically
- Useful for business cards, certificates, etc.
```

### Professional Workflows
```
Color Grading Workflow:
1. Basic color correction (levels/curves)
2. Color grading layers (Color Balance, Photo Filter)
3. Luminosity masks for targeted adjustments
4. Final contrast and saturation tweaks
5. Output sharpening

Portrait Retouching Workflow:
1. Basic exposure and color correction
2. Blemish removal (healing tools)
3. Frequency separation for skin work
4. Dodge and burn for dimension
5. Eye and teeth enhancement
6. Hair and clothing cleanup
7. Final color grading

Product Photography Workflow:
1. Background removal/replacement
2. Color correction and white balance
3. Shadow/highlight detail recovery
4. Product-specific enhancements
5. Consistent lighting across products
6. Final sharpening and format optimization

Print Preparation:
1. Set up proper color profile
2. Soft proof with paper profile
3. Adjust for print conditions
4. Output sharpening for print size
5. Save in appropriate format (TIFF, PSD)
6. Include color profile in file

Web Optimization:
1. Resize for web dimensions
2. Sharpen for screen viewing
3. Convert to sRGB color space
4. Save for Web & Devices
5. Choose appropriate format (JPEG, PNG, WebP)
6. Optimize file size vs quality
```

## File Formats and Output

### Native Formats
```
PSD (Photoshop Document):
- Preserves all layers and effects
- Maximum compatibility option
- Large Document Format for >2GB files
- Include color profile
- Maximize backward compatibility

PSB (Photoshop Big):
- For files larger than 2GB
- Supports documents up to 300,000 pixels
- Not compatible with older Photoshop versions
- Same features as PSD format

TIFF (Tagged Image File Format):
- High-quality raster format
- Supports layers (with layer compression)
- Lossless LZW compression
- Widely compatible across platforms
- Good for print and archival storage
```

### Export Formats
```
JPEG:
- Lossy compression
- Quality settings 0-12 (12 = maximum quality)
- Progressive loading option
- Optimized/Baseline options
- Include color profile option
- Best for photographs

PNG:
- Lossless compression
- PNG-8: 256 colors, good for graphics
- PNG-24: Millions of colors, transparency support
- Interlaced option for progressive loading
- Best for graphics with transparency

WebP:
- Google's format for web
- Superior compression vs JPEG/PNG
- Supports transparency and animation
- Quality settings like JPEG
- Growing browser support

Export As (Ctrl+Alt+Shift+S):
- Modern export dialog
- Multiple format export simultaneously  
- Artboard support
- Consistent with other Adobe apps
- Preview and file size estimation

Save for Web & Devices:
- Legacy web export
- Side-by-side preview comparison
- Detailed optimization controls
- Color table editing for GIF/PNG-8
- Slice tool support for web layouts
```

### Print Output
```
Print Dialog (Ctrl+P):

Position and Size:
- Center Image: Auto-center on page
- Scale to Fit Media: Resize to fit page
- Custom size and position controls
- Print resolution display

Color Management:
- Photoshop Manages Colors: Use Photoshop color engine
- Printer Manages Colors: Use printer's color management
- No Color Management: Send raw RGB data

Print Quality:
- Proof Setup: Select paper/printer profile
- Match Print Colors: Soft proof on screen
- Gamut Warning: Show out-of-gamut colors
- Show Paper White: Simulate paper color

Output Options:
- Background Color: Set background if image doesn't fill page
- Border: Add border around image
- Bleed: Extend image beyond trim
- Screen: Halftone screen settings
- Transfer: Adjust ink density curves
- PostScript Options: For PostScript printers

Contact Sheet:
File → Automate → Contact Sheet II
- Create thumbnail overview of multiple images
- Customizable layout and labeling
- Useful for client proofs and image catalogs

Picture Package:
File → Automate → Picture Package  
- Print multiple sizes of same image on one page
- Various layout templates
- Custom layouts possible
- Add labels and borders
```

This comprehensive Photoshop reference covers everything from basic tools and shortcuts to advanced professional workflows. Use it as both a learning resource and a quick reference guide for efficient image editing!