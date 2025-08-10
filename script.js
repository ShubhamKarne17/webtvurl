// Website Hub JavaScript
class WebsiteHub {
    constructor() {
        this.websites = [];
        this.filteredWebsites = [];
        this.currentFilter = '';
        this.currentSearch = '';
        
        this.init();
    }
    
    init() {
        // Load websites from configuration
        this.loadWebsites();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initial render
        this.renderWebsites();
        
        // Setup categories
        this.setupCategories();
        
        // Hide loading spinner
        this.hideLoading();
    }
    
    loadWebsites() {
        // Check if websites data is available
        if (typeof websitesData !== 'undefined' && Array.isArray(websitesData)) {
            this.websites = websitesData;
            this.filteredWebsites = [...this.websites];
        } else {
            console.warn('No websites data found. Please check websites.js file.');
            this.websites = [];
            this.filteredWebsites = [];
        }
    }
    
    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentSearch = e.target.value.toLowerCase();
                this.filterWebsites();
            });
        }
        
        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                this.filterWebsites();
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Focus search on Ctrl/Cmd + K
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput?.focus();
            }
            
            // Clear search on Escape
            if (e.key === 'Escape' && searchInput === document.activeElement) {
                searchInput.value = '';
                this.currentSearch = '';
                this.filterWebsites();
            }
        });
    }
    
    setupCategories() {
        const categoryFilter = document.getElementById('categoryFilter');
        if (!categoryFilter) return;
        
        // Get unique categories
        const categories = [...new Set(this.websites.map(site => site.category))].filter(Boolean);
        
        // Clear existing options (except "All Categories")
        categoryFilter.innerHTML = '<option value="">All Categories</option>';
        
        // Add category options
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
    
    filterWebsites() {
        this.filteredWebsites = this.websites.filter(website => {
            const matchesSearch = !this.currentSearch || 
                website.title.toLowerCase().includes(this.currentSearch) ||
                website.description.toLowerCase().includes(this.currentSearch) ||
                website.url.toLowerCase().includes(this.currentSearch) ||
                (website.category && website.category.toLowerCase().includes(this.currentSearch));
            
            const matchesCategory = !this.currentFilter || website.category === this.currentFilter;
            
            return matchesSearch && matchesCategory;
        });
        
        this.renderWebsites();
    }
    
    renderWebsites() {
        const grid = document.getElementById('websitesGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!grid || !emptyState) return;
        
        // Clear existing content
        grid.innerHTML = '';
        
        if (this.filteredWebsites.length === 0) {
            // Show empty state
            grid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }
        
        // Hide empty state
        grid.style.display = 'grid';
        emptyState.style.display = 'none';
        
        // Render website cards
        this.filteredWebsites.forEach((website, index) => {
            const card = this.createWebsiteCard(website, index);
            grid.appendChild(card);
        });
    }
    
    createWebsiteCard(website, index) {
        const card = document.createElement('div');
        card.className = 'website-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Extract domain from URL for display
        const domain = this.extractDomain(website.url);
        
        // Generate favicon URL
        const faviconUrl = website.favicon || `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
        
        // Create card HTML
        card.innerHTML = `
            <div class="card-header">
                <div class="website-favicon" style="${website.color ? `background: ${website.color}` : ''}">
                    <img src="${faviconUrl}" alt="${website.title} favicon" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\"fas fa-globe\\"></i>';">
                </div>
                <div class="card-title-section">
                    <h3 class="website-title">${this.escapeHtml(website.title)}</h3>
                    <p class="website-url">${domain}</p>
                </div>
            </div>
            
            <p class="website-description">${this.escapeHtml(website.description)}</p>
            
            <div class="card-footer">
                ${website.category ? `<span class="website-category">${this.escapeHtml(website.category)}</span>` : '<span></span>'}
                <a href="${website.url}" target="_blank" rel="noopener noreferrer" class="visit-button">
                    Visit <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        
        // Add click handler for the entire card
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on the visit button
            if (!e.target.closest('.visit-button')) {
                this.openWebsite(website.url);
            }
        });
        
        // Add hover effect for better UX
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
        
        return card;
    }
    
    openWebsite(url) {
        // Add analytics or tracking here if needed
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    
    extractDomain(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname.replace('www.', '');
        } catch (e) {
            return url;
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    showLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.classList.add('show');
        }
    }
    
    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.classList.remove('show');
        }
    }
    
    // Public methods for external use
    addWebsite(website) {
        this.websites.push(website);
        this.filterWebsites();
        this.setupCategories();
    }
    
    removeWebsite(url) {
        this.websites = this.websites.filter(site => site.url !== url);
        this.filterWebsites();
        this.setupCategories();
    }
    
    updateWebsite(url, updatedData) {
        const index = this.websites.findIndex(site => site.url === url);
        if (index !== -1) {
            this.websites[index] = { ...this.websites[index], ...updatedData };
            this.filterWebsites();
            this.setupCategories();
        }
    }
    
    // Utility method to refresh the display
    refresh() {
        this.loadWebsites();
        this.renderWebsites();
        this.setupCategories();
    }
}

// Utility functions for smooth animations
function animateCards() {
    const cards = document.querySelectorAll('.website-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize the website hub when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create global instance
    window.websiteHub = new WebsiteHub();
    
    // Add some helpful console messages for developers
    console.log('🌐 Website Hub initialized successfully!');
    console.log('💡 Tip: You can manage websites by editing the websites.js file');
    console.log('🔧 Use websiteHub.refresh() to reload after changes');
});

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

