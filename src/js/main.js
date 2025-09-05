// Updated cheatsheetData object with Arduino IDE added to development category
const cheatsheetData = {
    development: [
        {
            title: 'Git Commands',
            description: 'Essential Git commands for version control, branching, merging, and collaboration workflows.',
            type: 'commands',
            file: 'git_cheat_sheet.html',
            stats: { count: '50+ commands', tech: 'Terminal' },
            keywords: ['git', 'version control', 'github', 'commit', 'branch', 'merge']
        },
        {
            title: 'Network macOS Troubleshooting',
            description: 'Network diagnostic commands and tools for troubleshooting macOS connectivity issues.',
            type: 'commands',
            file: 'network_macos_cheat_sheet.html',
            stats: { count: '30+ commands', tech: 'Terminal' },
            keywords: ['network', 'troubleshooting', 'macos', 'ping', 'traceroute', 'netstat']
        },
        {
            title: 'Network Windows Troubleshooting',
            description: 'Network diagnostic commands and tools for troubleshooting Windows connectivity issues.',
            type: 'commands',
            file: 'network_windows_cheat_sheet.html',
            stats: { count: '30+ commands', tech: 'Terminal' },
            keywords: ['network', 'troubleshooting', 'windows', 'ping', 'traceroute', 'netstat']
        },
        {
            title: 'Arduino IDE Programming',
            description: 'Arduino IDE shortcuts, programming syntax, board configurations, and microcontroller development commands.',
            type: 'commands',
            file: 'arduino_cheat_sheet.html',
            stats: { count: '80+ commands', tech: 'IDE' },
            keywords: ['arduino', 'ide', 'microcontroller', 'programming', 'embedded', 'serial', 'analog', 'digital']
        }
    ],
    'python-data-science': [
        {
            title: 'Python Programming',
            description: 'Core Python syntax, data structures, functions, and object-oriented programming concepts.',
            type: 'commands',
            file: 'python_programming_cheat_sheet.html',
            stats: { count: '100+ examples', tech: 'Code' },
            keywords: ['python', 'programming', 'syntax', 'functions', 'classes', 'data structures']
        },
        {
            title: 'NumPy Arrays',
            description: 'NumPy array operations, mathematical functions, and numerical computing with Python.',
            type: 'commands',
            file: 'numpy_cheat_sheet.html',
            stats: { count: '70+ functions', tech: 'Library' },
            keywords: ['numpy', 'arrays', 'mathematical', 'numerical', 'python', 'scientific computing']
        },
        {
            title: 'Pandas Data Analysis',
            description: 'DataFrame operations, data cleaning, manipulation, and analysis with Pandas library.',
            type: 'commands',
            file: 'pandas_cheat_sheet.html',
            stats: { count: '80+ methods', tech: 'Library' },
            keywords: ['pandas', 'dataframe', 'data analysis', 'python', 'csv', 'data cleaning']
        },
        {
            title: 'Matplotlib Visualization',
            description: 'Creating plots, charts, and visualizations with Matplotlib and Seaborn.',
            type: 'commands',
            file: 'matplotlib_cheat_sheet.html',
            stats: { count: '60+ plots', tech: 'Library' },
            keywords: ['matplotlib', 'plotting', 'visualization', 'charts', 'graphs', 'seaborn']
        },
        {
            title: 'SciPy Scientific Computing',
            description: 'Scientific computing functions, statistics, optimization, and signal processing.',
            type: 'commands',
            file: 'scipy_cheat_sheet.html',
            stats: { count: '70+ functions', tech: 'Library' },
            keywords: ['scipy', 'scientific computing', 'statistics', 'optimization', 'signal processing']
        },
        {
            title: 'R Programming',
            description: 'Statistical computing, data manipulation with dplyr/tidyr, ggplot2 visualization, and R data analysis workflows.',
            type: 'commands',
            file: 'r_programming_cheat_sheet.html',
            stats: { count: '120+ functions', tech: 'Language' },
            keywords: ['r programming', 'statistics', 'ggplot2', 'dplyr', 'tidyr', 'data analysis', 'rstudio']
        },
        {
            title: 'Julia Programming',
            description: 'High-performance computing, scientific programming, multiple dispatch, and Julia ecosystem for data science.',
            type: 'commands',
            file: 'julia_cheat_sheet.html',
            stats: { count: '150+ commands', tech: 'Language' },
            keywords: ['julia', 'high-performance', 'scientific computing', 'repl', 'dataframes', 'plots', 'multiple dispatch']
        }
    ],
    mathematical: [
        {
            title: 'MATLAB Programming',
            description: 'MATLAB syntax, matrix operations, plotting, and numerical computing functions.',
            type: 'commands',
            file: 'matlab_cheat_sheet.html',
            stats: { count: '90+ functions', tech: 'IDE' },
            keywords: ['matlab', 'matrix', 'numerical computing', 'plotting', 'engineering']
        },
        {
            title: 'Tableau Analytics',
            description: 'Tableau keyboard shortcuts and data visualization best practices.',
            type: 'shortcuts',
            file: 'tableau_cheat_sheet.html',
            stats: { count: '40+ shortcuts', tech: 'Software' },
            keywords: ['tableau', 'data visualization', 'analytics', 'dashboard', 'shortcuts']
        }
    ],
    'design-cad': [
        {
            title: 'Photoshop Shortcuts',
            description: 'Essential Photoshop keyboard shortcuts for photo editing and graphic design.',
            type: 'shortcuts',
            file: 'photoshop_shortcuts_cheat_sheet.html',
            stats: { count: '120+ shortcuts', tech: 'Creative' },
            keywords: ['photoshop', 'photo editing', 'graphic design', 'shortcuts', 'adobe']
        },
        {
            title: 'AutoCAD Commands',
            description: 'AutoCAD drawing commands, shortcuts, and 2D/3D modeling techniques.',
            type: 'shortcuts',
            file: 'autocad_cheat_sheet.html',
            stats: { count: '80+ commands', tech: 'CAD' },
            keywords: ['autocad', 'cad', 'drawing', '2d', '3d', 'modeling']
        },
        {
            title: '3ds Max Shortcuts',
            description: '3ds Max keyboard shortcuts for 3D modeling, animation, and rendering.',
            type: 'shortcuts',
            file: '3dsmax_cheat_sheet.html',
            stats: { count: '100+ shortcuts', tech: '3D' },
            keywords: ['3ds max', '3d modeling', 'animation', 'rendering', 'shortcuts']
        },
        {
            title: 'After Effects',
            description: 'After Effects shortcuts for motion graphics, compositing, and video effects.',
            type: 'shortcuts',
            file: 'after_effects_cheat_sheet.html',
            stats: { count: '90+ shortcuts', tech: 'Motion' },
            keywords: ['after effects', 'motion graphics', 'video effects', 'compositing', 'adobe']
        },
        {
            title: 'Blender 3D',
            description: 'Blender keyboard shortcuts for 3D modeling, sculpting, and animation.',
            type: 'shortcuts',
            file: 'blender_cheat_sheet.html',
            stats: { count: '150+ shortcuts', tech: 'Open Source' },
            keywords: ['blender', '3d modeling', 'sculpting', 'animation', 'open source']
        },
        {
            title: 'Revit Architecture',
            description: 'Revit shortcuts for architectural design, BIM modeling, and documentation.',
            type: 'shortcuts',
            file: 'revit_cheat_sheet.html',
            stats: { count: '70+ shortcuts', tech: 'BIM' },
            keywords: ['revit', 'architecture', 'bim', 'building design', 'autodesk']
        },
        {
            title: 'Rhino 3D Modeling',
            description: 'Rhino commands and shortcuts for NURBS-based 3D modeling and design.',
            type: 'shortcuts',
            file: 'rhino_cheat_sheet.html',
            stats: { count: '85+ commands', tech: 'NURBS' },
            keywords: ['rhino', 'nurbs', '3d modeling', 'design', 'cad']
        },
        {
            title: 'SketchUp Pro',
            description: 'SketchUp shortcuts for 3D architectural and product design modeling.',
            type: 'shortcuts',
            file: 'sketchup_cheat_sheet.html',
            stats: { count: '60+ shortcuts', tech: 'Modeling' },
            keywords: ['sketchup', '3d modeling', 'architecture', 'design', 'shortcuts']
        }
    ],
    productivity: [
        {
            title: 'Excel Shortcuts',
            description: 'Excel keyboard shortcuts for data analysis, formulas, and spreadsheet navigation.',
            type: 'shortcuts',
            file: 'excel_shortcuts_cheat_sheet.html',
            stats: { count: '100+ shortcuts', tech: 'Spreadsheet' },
            keywords: ['excel', 'spreadsheet', 'shortcuts', 'formulas', 'data analysis']
        },
        {
            title: 'OpenPyXL Library',
            description: 'Python OpenPyXL library for reading, writing, and manipulating Excel files.',
            type: 'commands',
            file: 'openpyxl_cheat_sheet.html',
            stats: { count: '50+ methods', tech: 'Library' },
            keywords: ['openpyxl', 'python', 'excel', 'automation', 'spreadsheet']
        },
        {
            title: 'Python in Excel',
            description: 'Advanced Excel automation and data analysis using Python integration.',
            type: 'commands',
            file: 'python_in_excel_cheat_sheet.html',
            stats: { count: '40+ examples', tech: 'Integration' },
            keywords: ['python', 'excel', 'automation', 'data analysis', 'integration']
        }
    ],
    system: [
        {
            title: 'Unix/macOS Commands',
            description: 'Essential Unix and macOS terminal commands for system administration and file management.',
            type: 'commands',
            file: 'unix_macos_cheat_sheet.html',
            stats: { count: '80+ commands', tech: 'Terminal' },
            keywords: ['unix', 'macos', 'terminal', 'bash', 'shell', 'commands']
        },
        {
            title: 'Windows Command Line',
            description: 'Windows CMD and PowerShell commands for system administration and automation.',
            type: 'commands',
            file: 'windows_cmd_cheat_sheet.html',
            stats: { count: '70+ commands', tech: 'Terminal' },
            keywords: ['windows', 'cmd', 'powershell', 'terminal', 'batch', 'commands']
        }
    ]
};