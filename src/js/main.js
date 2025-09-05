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

// Updated cheatsheetData object with new additions
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
            file: 'arduino_cheatsheet.html',
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
            description: 'Data manipulation and analysis with pandas DataFrames, Series, and advanced operations.',
            type: 'commands',
            file: 'pandas_cheat_sheet.html',
            stats: { count: '80+ functions', tech: 'Library' },
            keywords: ['pandas', 'dataframe', 'data analysis', 'python', 'csv', 'excel']
        },
        {
            title: 'Matplotlib Plotting',
            description: 'Data visualization and plotting with matplotlib for charts, graphs, and scientific plots.',
            type: 'commands',
            file: 'matplotlib_cheat_sheet.html',
            stats: { count: '60+ functions', tech: 'Library' },
            keywords: ['matplotlib', 'plotting', 'visualization', 'charts', 'graphs', 'python']
        },
        {
            title: 'SciPy Scientific Computing',
            description: 'Scientific computing with SciPy for optimization, statistics, and signal processing.',
            type: 'commands',
            file: 'scipy_cheat_sheet.html',
            stats: { count: '70+ functions', tech: 'Library' },
            keywords: ['scipy', 'scientific computing', 'statistics', 'optimization', 'signal processing']
        },
        {
            title: 'R Programming',
            description: 'Statistical computing, data manipulation with dplyr/tidyr, ggplot2 visualization, and R data analysis workflows.',
            type: 'commands',
            file: 'r_programming_cheatsheet.html',
            stats: { count: '120+ functions', tech: 'Language' },
            keywords: ['r programming', 'statistics', 'ggplot2', 'dplyr', 'tidyr', 'data analysis', 'rstudio']
        },
        {
            title: 'Julia Programming',
            description: 'High-performance computing, scientific programming, multiple dispatch, and Julia ecosystem for data science.',
            type: 'commands',
            file: 'julia_cheatsheet.html',
            stats: { count: '150+ commands', tech: 'Language' },
            keywords: ['julia', 'high-performance', 'scientific computing', 'repl', 'dataframes', 'plots', 'multiple dispatch']
        }
    ],
    mathematical: [
        {
            title: 'LaTeX Mathematical Notation',
            description: 'LaTeX commands for mathematical equations, symbols, and document formatting.',
            type: 'commands',
            file: 'latex_math_cheat_sheet.html',
            stats: { count: '100+ symbols', tech: 'Markup' },
            keywords: ['latex', 'math', 'equations', 'symbols', 'scientific writing', 'tex']
        },
        {
            title: 'Wolfram Alpha Queries',
            description: 'Query syntax and examples for Wolfram Alpha computational intelligence.',
            type: 'commands',
            file: 'wolfram_alpha_cheat_sheet.html',
            stats: { count: '60+ examples', tech: 'Query' },
            keywords: ['wolfram alpha', 'computational', 'mathematics', 'queries', 'calculator', 'analysis']
        }
    ],
    'design-cad': [
        {
            title: 'Blender 3D Modeling',
            description: 'Blender keyboard shortcuts for 3D modeling, animation, and rendering workflows.',
            type: 'shortcuts',
            file: 'blender_cheat_sheet.html',
            stats: { count: '120+ shortcuts', tech: '3D Software' },
            keywords: ['blender', '3d', 'modeling', 'animation', 'rendering', 'shortcuts']
        },
        {
            title: 'Figma Design',
            description: 'Figma keyboard shortcuts for UI/UX design, prototyping, and collaborative workflows.',
            type: 'shortcuts',
            file: 'figma_cheat_sheet.html',
            stats: { count: '80+ shortcuts', tech: 'Design Tool' },
            keywords: ['figma', 'ui', 'ux', 'design', 'prototyping', 'collaboration']
        },
        {
            title: 'Adobe Photoshop',
            description: 'Photoshop keyboard shortcuts for photo editing, digital art, and graphic design.',
            type: 'shortcuts',
            file: 'photoshop_cheat_sheet.html',
            stats: { count: '100+ shortcuts', tech: 'Adobe' },
            keywords: ['photoshop', 'photo editing', 'digital art', 'graphics', 'adobe', 'design']
        },
        {
            title: 'Autodesk Fusion 360',
            description: 'Fusion 360 keyboard shortcuts for 3D CAD modeling, simulation, and manufacturing workflows.',
            type: 'shortcuts',
            file: 'fusion360_cheat_sheet.html',
            stats: { count: '90+ shortcuts', tech: 'CAD' },
            keywords: ['fusion360', 'cad', '3d modeling', 'autodesk', 'manufacturing', 'simulation']
        },
        {
            title: 'SolidWorks CAD',
            description: 'SolidWorks keyboard shortcuts for 3D CAD design, assemblies, and engineering drawings.',
            type: 'shortcuts',
            file: 'solidworks_cheat_sheet.html',
            stats: { count: '85+ shortcuts', tech: 'CAD' },
            keywords: ['solidworks', 'cad', '3d design', 'assemblies', 'drawings', 'engineering']
        },
        {
            title: 'KiCad PCB Design',
            description: 'KiCad keyboard shortcuts for electronic schematic capture and PCB layout design.',
            type: 'shortcuts',
            file: 'kicad_cheat_sheet.html',
            stats: { count: '70+ shortcuts', tech: 'EDA' },
            keywords: ['kicad', 'pcb', 'electronics', 'schematic', 'layout', 'eda']
        },
        {
            title: 'DaVinci Resolve Video',
            description: 'DaVinci Resolve keyboard shortcuts for video editing, color grading, and post-production.',
            type: 'shortcuts',
            file: 'davinci_resolve_cheat_sheet.html',
            stats: { count: '95+ shortcuts', tech: 'Video Editor' },
            keywords: ['davinci resolve', 'video editing', 'color grading', 'post production', 'blackmagic']
        },
        {
            title: 'Ableton Live Music',
            description: 'Ableton Live keyboard shortcuts for music production, recording, and live performance.',
            type: 'shortcuts',
            file: 'ableton_live_cheat_sheet.html',
            stats: { count: '80+ shortcuts', tech: 'DAW' },
            keywords: ['ableton live', 'music production', 'daw', 'recording', 'live performance', 'audio']
        }
    ],
    productivity: [
        {
            title: 'Microsoft Excel Functions',
            description: 'Essential Excel formulas, functions, and shortcuts for data analysis and spreadsheet automation.',
            type: 'commands',
            file: 'excel_cheat_sheet.html',
            stats: { count: '80+ functions', tech: 'Spreadsheet' },
            keywords: ['excel', 'formulas', 'functions', 'spreadsheet', 'data analysis', 'pivot tables']
        },
        {
            title: 'Python OpenPyXL Excel',
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