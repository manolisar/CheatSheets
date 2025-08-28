# CheatSheets Collection

Ultimate developer reference with shortcuts, commands, and quick guides for programming tools and technologies.

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd cheatsheets-collection

# Start development server
python3 -m http.server 8080
# Open: http://localhost:8080

# Alternative with Node.js
npx http-server -p 8080

# Build for production (if build script exists)
node scripts/build.js
```

## Features

- 21 curated cheatsheets across 6 categories
- Advanced search with keyword filtering
- Category-based organization with visual icons
- Print-optimized layouts for offline reference
- Fully responsive mobile design
- Dark/light theme toggle
- Keyboard shortcuts (Ctrl+K for search, Ctrl+D for theme)
- SEO-optimized with proper meta tags and sitemap
- Analytics tracking ready
- Accessibility features (WCAG compliant)

## Project Structure

```
cheatsheets-collection/
├── index.html              # Main landing page
├── sitemap.xml            # SEO sitemap
├── src/
│   ├── cheatsheets/       # Individual cheatsheet HTML files
│   │   ├── development/   # Git, Network troubleshooting
│   │   ├── python-data-science/  # Python, NumPy, Pandas, etc.
│   │   ├── mathematical/  # MATLAB, Tableau
│   │   ├── design-cad/   # Photoshop, AutoCAD, Blender, etc.
│   │   ├── productivity/ # Excel, OpenPyXL, Python in Excel
│   │   └── system/       # Unix/macOS, Windows commands
│   ├── styles/
│   │   └── main.css      # Main stylesheet with dark theme
│   └── js/
│       └── main.js       # Interactive functionality
├── reference-sheets/      # Markdown reference materials
├── docs/                 # Documentation
└── README.md            # This file
```

## Categories & Cheatsheets

### Development (3 sheets)
- **Git Commands** - Version control, branching, merging workflows
- **Network macOS Troubleshooting** - macOS network diagnostic tools
- **Network Windows Troubleshooting** - Windows network diagnostic tools

### Python & Data Science (5 sheets)
- **Python Programming** - Core syntax, data structures, OOP
- **NumPy** - Array operations and numerical computing
- **Pandas** - DataFrame operations and data analysis
- **Matplotlib** - Plotting and data visualization
- **SciPy** - Scientific computing and statistics

### Mathematical (2 sheets)
- **MATLAB** - Matrix operations and numerical computing
- **Tableau** - Data visualization and analytics shortcuts

### Design & CAD (8 sheets)
- **Photoshop Shortcuts** - Photo editing and graphic design
- **AutoCAD Commands** - 2D/3D CAD drawing and modeling
- **3ds Max Shortcuts** - 3D modeling and animation
- **After Effects** - Motion graphics and video effects
- **Blender 3D** - Open-source 3D modeling and animation
- **Revit Architecture** - BIM and architectural design
- **Rhino 3D** - NURBS-based 3D modeling
- **SketchUp Pro** - Architectural and product design

### Productivity (3 sheets)
- **Excel Shortcuts** - Spreadsheet navigation and formulas
- **OpenPyXL Library** - Python Excel file manipulation
- **Python in Excel** - Advanced Excel automation

### System (2 sheets)
- **Unix/macOS Commands** - Terminal and system administration
- **Windows Command Line** - CMD and PowerShell commands

## Usage

### Navigation
- Use the search bar (Ctrl+K) to find specific commands or tools
- Filter by category using the tabs below the search
- Filter by type (shortcuts vs commands) using the type filters
- Click any card to open the detailed cheatsheet

### Keyboard Shortcuts
- `Ctrl+K` (or `Cmd+K`) - Focus search box
- `Ctrl+D` (or `Cmd+D`) - Toggle dark/light theme
- `Escape` - Clear search when focused

### Customization
The project uses CSS custom properties for easy theme customization. Key variables in `main.css`:

```css
:root {
  --primary: #000000;        /* Header/footer background */
  --secondary: #1a1a1a;      /* Secondary theme color */
  --development: #f97316;     /* Development category color */
  --python-data-science: #10b981;  /* Python category color */
  /* ... other category colors ... */
}
```

## Development

### Local Development
```bash
# Serve locally on port 8080
python3 -m http.server 8080

# Or use Node.js http-server
npx http-server -p 8080 -o
```

### Adding New Cheatsheets
1. Create new HTML file in appropriate category folder
2. Update `cheatsheetData` object in `src/js/main.js`
3. Add entry to `sitemap.xml`
4. Update category count in `index.html` if needed

### File Naming Convention
- Use lowercase with underscores: `tool_name_cheat_sheet.html`
- Place in appropriate category folder
- Include descriptive keywords for search functionality

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: ~50KB total (CSS + JS)
- Fast loading with critical CSS inlined
- Optimized images and icons
- Service Worker ready for PWA implementation

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- XML sitemap included
- Structured data ready
- Print stylesheets for offline use

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new cheatsheets following the existing format
4. Update documentation and sitemap
5. Test locally before submitting PR

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Roadmap

- [ ] PWA implementation with offline support
- [ ] PDF export functionality
- [ ] More cheatsheets (VS Code, Docker, Kubernetes)
- [ ] Interactive examples for code snippets
- [ ] Community contributions system
- [ ] Multi-language support

---

Built with modern web standards for fast, accessible developer reference.