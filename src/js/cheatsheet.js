// Complete CheatSheet JavaScript - All functionality for cheatsheet pages
document.addEventListener('DOMContentLoaded', function() {
    initializeCheatsheet();
});

function initializeCheatsheet() {
    addHeaderControls();
    addCopyButtons();
    updateFooterStats();
    loadTheme();
    setupKeyboardShortcuts();
}

// Add header control buttons
function addHeaderControls() {
    const header = document.querySelector('.header');
    if (!header) return;

    // Create left controls container (Home button only)
    const leftControlsContainer = document.createElement('div');
    leftControlsContainer.className = 'header-controls-left';
    leftControlsContainer.innerHTML = `
        <button onclick="goBackToIndex()" class="header-btn back-btn" title="Back to Main Page" aria-label="Back to Main Page">
            ← Home
        </button>
    `;
    
    // Create right controls container (Print and Theme buttons together)
    const rightControlsContainer = document.createElement('div');
    rightControlsContainer.className = 'header-controls';
    rightControlsContainer.innerHTML = `
        <button onclick="printCheatsheet()" class="header-btn print-btn" title="Print CheatSheet" aria-label="Print CheatSheet">
            🖨 Print
        </button>
        <button onclick="toggleTheme()" class="header-btn theme-btn" id="themeToggle" title="Toggle Light/Dark Mode" aria-label="Toggle Theme">
            🌙 Dark
        </button>
    `;
    
    header.appendChild(leftControlsContainer);
    header.appendChild(rightControlsContainer);
}

// Navigation function - back to index
function goBackToIndex() {
    window.location.href = '../../../index.html';
}

// Print function with optimized styling
function printCheatsheet() {
    // Add print-specific styling temporarily
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .header-controls, .header-controls-left, .copy-btn { display: none !important; }
            body { font-size: 9px !important; }
            .container { grid-template-columns: 1fr 1fr !important; }
            .section { break-inside: avoid !important; }
            .command-line { break-inside: avoid !important; }
            .header { background: #333 !important; color: white !important; }
            .footer { background: #f5f5f5 !important; color: #333 !important; }
        }
    `;
    
    document.head.appendChild(printStyles);
    
    // Print the page
    window.print();
    
    // Clean up temporary styles
    setTimeout(() => {
        if (printStyles.parentNode) {
            printStyles.parentNode.removeChild(printStyles);
        }
    }, 1000);
}

// Theme toggle function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    // Save theme preference
    localStorage.setItem('cheatsheet-theme', isDark ? 'dark' : 'light');
    
    // Update button text
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
        themeToggle.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('cheatsheet-theme');
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '☀️ Light';
            themeToggle.title = 'Switch to Light Mode';
        }
    }
}

// Add copy buttons to all command lines
function addCopyButtons() {
    const commandLines = document.querySelectorAll('.command-line');
    
    commandLines.forEach(commandLine => {
        const commandElement = commandLine.querySelector('.command, .shortcut, .shortcut-keys');
        if (!commandElement) return;
        
        // Skip if copy button already exists
        if (commandLine.querySelector('.copy-btn')) return;
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '📋';
        copyButton.title = 'Copy to clipboard';
        copyButton.setAttribute('aria-label', 'Copy to clipboard');
        
        copyButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const commandText = commandElement.textContent.trim();
            
            // Try modern clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(commandText).then(() => {
                    showCopyFeedback(copyButton, true);
                }).catch(() => {
                    fallbackCopyTextToClipboard(commandText, copyButton);
                });
            } else {
                fallbackCopyTextToClipboard(commandText, copyButton);
            }
        });
        
        commandLine.appendChild(copyButton);
    });
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        showCopyFeedback(button, successful);
    } catch (err) {
        console.error('Copy failed:', err);
        showCopyFeedback(button, false);
    }
    
    document.body.removeChild(textArea);
}

// Show copy feedback animation
function showCopyFeedback(button, success = true) {
    const originalContent = button.innerHTML;
    const originalTitle = button.title;
    
    button.innerHTML = success ? '✅' : '❌';
    button.title = success ? 'Copied!' : 'Copy failed';
    button.classList.add('copied');
    
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.title = originalTitle;
        button.classList.remove('copied');
    }, 1500);
}

// Count different types of content on the page
function countPageContent() {
    const commands = document.querySelectorAll('.command').length;
    const shortcuts = document.querySelectorAll('.shortcut, .shortcut-keys').length;
    const workflows = document.querySelectorAll('.workflow').length;
    const tips = document.querySelectorAll('.tip').length;
    const examples = document.querySelectorAll('.example').length;
    const sections = document.querySelectorAll('.section').length;
    
    // Calculate total references (workflows + tips + examples)
    const references = workflows + tips + examples;
    
    return {
        commands: commands,
        shortcuts: shortcuts,
        references: references,
        sections: sections,
        total: commands + shortcuts + references
    };
}

// Update footer with dynamic statistics
function updateFooterStats() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    const stats = countPageContent();
    const pageTitle = document.querySelector('h1')?.textContent || 'CheatSheet';
    
    // Build stats text
    let statsText = [];
    if (stats.commands > 0) {
        statsText.push(`${stats.commands} command${stats.commands !== 1 ? 's' : ''}`);
    }
    if (stats.shortcuts > 0) {
        statsText.push(`${stats.shortcuts} shortcut${stats.shortcuts !== 1 ? 's' : ''}`);
    }
    if (stats.references > 0) {
        statsText.push(`${stats.references} reference${stats.references !== 1 ? 's' : ''}`);
    }
    
    const statsString = statsText.length > 0 ? statsText.join(' • ') : `${stats.total} items`;
    const sectionsText = `${stats.sections} section${stats.sections !== 1 ? 's' : ''}`;
    
    // Update footer content with home button on the left
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-nav">
                <a href="../../../index.html" class="footer-link">← Home</a>
                <div class="footer-stats">
                    <strong>${pageTitle}</strong> • ${statsString} • ${sectionsText}
                </div>
            </div>
        </div>
    `;
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            printCheatsheet();
        }
        
        // Ctrl/Cmd + H for home
        if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
            e.preventDefault();
            goBackToIndex();
        }
        
        // Ctrl/Cmd + D for dark mode toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Escape to go back to home
        if (e.key === 'Escape') {
            goBackToIndex();
        }
    });
}

// Search functionality for pages (if search input exists)
function initializeSearch() {
    const searchInput = document.querySelector('#pageSearch, .page-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const commandLines = document.querySelectorAll('.command-line');
        const sections = document.querySelectorAll('.section');
        
        // Hide all sections first
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        let visibleCount = 0;
        
        commandLines.forEach(commandLine => {
            const command = commandLine.querySelector('.command, .shortcut, .shortcut-keys');
            const description = commandLine.querySelector('.description');
            const commandText = command ? command.textContent.toLowerCase() : '';
            const descriptionText = description ? description.textContent.toLowerCase() : '';
            
            const isVisible = commandText.includes(searchTerm) || descriptionText.includes(searchTerm);
            commandLine.style.display = isVisible ? 'flex' : 'none';
            
            if (isVisible) {
                // Show parent section
                const parentSection = commandLine.closest('.section');
                if (parentSection) {
                    parentSection.style.display = 'block';
                }
                visibleCount++;
            }
        });
        
        // Show all sections if search is empty
        if (searchTerm === '') {
            sections.forEach(section => {
                section.style.display = 'block';
            });
        }
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeSearch, 100); // Small delay to ensure elements are rendered
});

// Debug function to check page content
function debugPageContent() {
    const stats = countPageContent();
    console.log('Page Content Statistics:', stats);
    console.log('Commands found:', document.querySelectorAll('.command'));
    console.log('Shortcuts found:', document.querySelectorAll('.shortcut, .shortcut-keys'));
    console.log('References found:', {
        workflows: document.querySelectorAll('.workflow'),
        tips: document.querySelectorAll('.tip'),
        examples: document.querySelectorAll('.example')
    });
}

// Utility functions for external use
window.cheatsheetUtils = {
    goBackToIndex,
    printCheatsheet,
    toggleTheme,
    countPageContent,
    updateFooterStats: updateFooterStats,
    debugPageContent,
    refreshStats: updateFooterStats
};