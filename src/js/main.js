// Main JavaScript for CheatSheets Collection Index
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadCheatsheets();
    setupFilters();
    setupSearch();
    setupTheme();
    setupKeyboardShortcuts();
    setupAnalytics();
}

// Complete cheatsheet data matching actual directory structure
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
            description: 'macOS network diagnostic commands and tools for troubleshooting connectivity issues.',
            type: 'commands',
            file: 'network_macos_cheat_sheet.html',
            stats: { count: '30+ commands', tech: 'macOS' },
            keywords: ['network', 'macos', 'troubleshooting', 'ping', 'traceroute', 'netstat']
        },
        {
            title: 'Network Windows Troubleshooting',
            description: 'Windows network diagnostic commands and tools for troubleshooting connectivity issues.',
            type: 'commands',
            file: 'network_windows_cheat_sheet.html',
            stats: { count: '35+ commands', tech: 'Windows' },
            keywords: ['network', 'windows', 'troubleshooting', 'ping', 'tracert', 'netstat']
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
            title: 'NumPy Numerical Computing',
            description: 'NumPy arrays, mathematical functions, and numerical operations for scientific computing.',
            type: 'commands',
            file: 'numpy_cheat_sheet.html',
            stats: { count: '75+ functions', tech: 'Library' },
            keywords: ['numpy', 'arrays', 'numerical', 'scientific computing', 'mathematics', 'linear algebra']
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
            stats: { count: '50+ methods', tech: 'Python' },
            keywords: ['openpyxl', 'python', 'excel', 'automation', 'spreadsheet']
        },
        {
            title: 'Python in Excel',
            description: 'Using Python within Excel for advanced data analysis and automation.',
            type: 'commands',
            file: 'python_in_excel_cheat_sheet.html',
            stats: { count: '40+ examples', tech: 'Integration' },
            keywords: ['python', 'excel', 'integration', 'data analysis', 'automation']
        }
    ],
    system: [
        {
            title: 'Unix/macOS Commands',
            description: 'Essential Unix and macOS terminal commands for file management and system administration.',
            type: 'commands',
            file: 'unix_macos_cheat_sheet.html',
            stats: { count: '80+ commands', tech: 'Terminal' },
            keywords: ['unix', 'macos', 'terminal', 'command line', 'system administration']
        },
        {
            title: 'Windows Command Line',
            description: 'Windows CMD and PowerShell commands for system management and automation.',
            type: 'commands',
            file: 'windows_cmd_cheat_sheet.html',
            stats: { count: '70+ commands', tech: 'CMD' },
            keywords: ['windows', 'cmd', 'powershell', 'command line', 'system management']
        }
    ]
};

function loadCheatsheets() {
    Object.entries(cheatsheetData).forEach(([category, sheets]) => {
        const grid = document.getElementById(`${category}-grid`);
        if (grid) {
            grid.innerHTML = sheets.map(sheet => createCheatsheetCard(sheet, category)).join('');
        }
        
        // Update category count
        const countElement = document.querySelector(`[data-category="${category}"] .category-count`);
        if (countElement) {
            countElement.textContent = `${sheets.length} sheet${sheets.length !== 1 ? 's' : ''}`;
        }
    });
    
    // Update total count in page
    updateTotalStats();
}

function updateTotalStats() {
    const totalSheets = Object.values(cheatsheetData).flat().length;
    const shortcutsCount = Object.values(cheatsheetData).flat().filter(sheet => sheet.type === 'shortcuts').length;
    const commandsCount = Object.values(cheatsheetData).flat().filter(sheet => sheet.type === 'commands').length;
    
    // Update page title with count
    document.title = `CheatSheets Collection - ${totalSheets} Developer References`;
    
    // Add stats to footer if not already present
    const footer = document.querySelector('.footer .container');
    if (footer && !footer.querySelector('.stats-summary')) {
        const statsDiv = document.createElement('div');
        statsDiv.className = 'stats-summary';
        statsDiv.innerHTML = `
            <p><strong>${totalSheets} Cheat Sheets</strong> • ${shortcutsCount} Shortcuts • ${commandsCount} Commands</p>
        `;
        statsDiv.style.marginTop = '1rem';
        statsDiv.style.fontSize = '0.875rem';
        statsDiv.style.opacity = '0.8';
        footer.insertBefore(statsDiv, footer.firstChild);
    }
}

function createCheatsheetCard(sheet, category) {
    return `
        <div class="cheatsheet-card ${category}" 
             data-type="${sheet.type}" 
             data-category="${category}"
             data-keywords="${sheet.keywords.join(' ')}"
             onclick="openCheatsheet('${category}/${sheet.file}')"
             role="button"
             tabindex="0"
             onkeypress="handleCardKeypress(event, '${category}/${sheet.file}')">
            <div class="card-header">
                <h3 class="card-title">${sheet.title}</h3>
                <span class="card-type">${sheet.type}</span>
            </div>
            <p class="card-description">${sheet.description}</p>
            <div class="card-stats">
                <span>${sheet.stats.count}</span>
                <span>${sheet.stats.tech}</span>
            </div>
        </div>
    `;
}

function openCheatsheet(path) {
    // Add analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cheatsheet_open', {
            'cheatsheet_name': path,
            'event_category': 'engagement'
        });
    }
    
    window.location.href = `src/cheatsheets/${path}`;
}

function handleCardKeypress(event, path) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCheatsheet(path);
    }
}

function setupFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const categorySections = document.querySelectorAll('.category-section');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.dataset.category;
            filterByCategory(category, categorySections);
            
            // Add analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'filter_used', {
                    'filter_type': category,
                    'event_category': 'navigation'
                });
            }
        });
        
        // Keyboard support for tabs
        tab.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tab.click();
            }
        });
    });
}

function filterByCategory(category, sections) {
    sections.forEach(section => {
        if (category === 'all') {
            section.style.display = 'block';
            const cards = section.querySelectorAll('.cheatsheet-card');
            cards.forEach(card => card.style.display = 'block');
        } else if (category === 'shortcuts' || category === 'commands') {
            const hasType = section.querySelector(`[data-type="${category}"]`);
            section.style.display = hasType ? 'block' : 'none';
            if (hasType) {
                const cards = section.querySelectorAll('.cheatsheet-card');
                cards.forEach(card => {
                    card.style.display = card.dataset.type === category ? 'block' : 'none';
                });
            }
        } else {
            section.style.display = section.dataset.category === category ? 'block' : 'none';
            if (section.dataset.category === category) {
                const cards = section.querySelectorAll('.cheatsheet-card');
                cards.forEach(card => card.style.display = 'block');
            }
        }
    });
    
    // Update URL without reload
    const url = new URL(window.location);
    if (category === 'all') {
        url.searchParams.delete('filter');
    } else {
        url.searchParams.set('filter', category);
    }
    window.history.replaceState({}, '', url);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const cheatsheetCards = document.querySelectorAll('.cheatsheet-card');
    const categorySections = document.querySelectorAll('.category-section');
    
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase().trim();
            performSearch(searchTerm, cheatsheetCards, categorySections);
        }, 300); // Debounce search
    });
    
    // Load search term from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
        searchInput.value = searchParam;
        performSearch(searchParam.toLowerCase(), cheatsheetCards, categorySections);
    }
}

function performSearch(searchTerm, cards, sections) {
    if (searchTerm === '') {
        cards.forEach(card => card.style.display = 'block');
        sections.forEach(section => section.style.display = 'block');
        
        // Clear URL search parameter
        const url = new URL(window.location);
        url.searchParams.delete('search');
        window.history.replaceState({}, '', url);
        
        // Clear no results message
        showNoResultsMessage(false);
        return;
    }

    let hasResults = false;
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        const keywords = card.dataset.keywords || '';
        
        const isMatch = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       keywords.includes(searchTerm);
        
        card.style.display = isMatch ? 'block' : 'none';
        if (isMatch) hasResults = true;
    });

    // Show/hide categories based on visible cards
    sections.forEach(section => {
        const visibleCards = section.querySelectorAll('.cheatsheet-card:not([style*="none"])');
        section.style.display = visibleCards.length > 0 ? 'block' : 'none';
    });
    
    // Show no results message
    showNoResultsMessage(!hasResults, searchTerm);
    
    // Update URL with search term
    const url = new URL(window.location);
    url.searchParams.set('search', searchTerm);
    window.history.replaceState({}, '', url);
    
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'search', {
            'search_term': searchTerm,
            'results_found': hasResults,
            'event_category': 'engagement'
        });
    }
}

function showNoResultsMessage(show, searchTerm = '') {
    let noResultsMsg = document.getElementById('no-results-message');
    
    if (show && !noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.id = 'no-results-message';
        noResultsMsg.className = 'no-results-message';
        noResultsMsg.innerHTML = `
            <div class="no-results-content">
                <h3>No cheat sheets found for "${searchTerm}"</h3>
                <p>Try different keywords or browse our categories above.</p>
                <button onclick="clearSearch()" class="clear-search-btn">Clear Search</button>
            </div>
        `;
        
        // Style the no results message
        noResultsMsg.style.cssText = `
            text-align: center;
            padding: 4rem 2rem;
            color: var(--text-secondary);
        `;
        
        const clearBtn = noResultsMsg.querySelector('.clear-search-btn');
        clearBtn.style.cssText = `
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        
        document.querySelector('.main-container').appendChild(noResultsMsg);
    } else if (!show && noResultsMsg) {
        noResultsMsg.remove();
    }
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
}

function setupTheme() {
    const savedTheme = localStorage.getItem('cheatsheets-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeButton();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    localStorage.setItem('cheatsheets-theme', isDark ? 'dark' : 'light');
    updateThemeButton();
    
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'theme_toggle', {
            'theme': isDark ? 'dark' : 'light',
            'page': 'index',
            'event_category': 'user_preference'
        });
    }
}

function updateThemeButton() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDark ? '☀️' : '🌙';
        themeToggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    }
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (document.activeElement === searchInput && searchInput.value) {
                clearSearch();
            }
        }
        
        // Ctrl/Cmd + D for dark mode toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

function setupAnalytics() {
    // Track page view
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'CheatSheets Collection',
            page_location: window.location.href
        });
    }
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
            maxScroll = scrollPercent;
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    'scroll_depth': scrollPercent,
                    'event_category': 'engagement'
                });
            }
        }
    });
    
    // Track time on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (typeof gtag !== 'undefined' && timeSpent > 10) {
            gtag('event', 'time_on_page', {
                'time_spent': timeSpent,
                'page_type': 'index',
                'event_category': 'engagement'
            });
        }
    });
}

// Load filter from URL on page load
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    
    if (filterParam) {
        const filterTab = document.querySelector(`[data-category="${filterParam}"]`);
        if (filterTab) {
            filterTab.click();
        }
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterByCategory,
        performSearch,
        createCheatsheetCard,
        cheatsheetData,
        toggleTheme
    };
}