// Service Worker for CheatSheets Collection PWA
const CACHE_NAME = 'cheatsheets-v1.3.0';
const STATIC_CACHE_NAME = 'cheatsheets-static-v1.3.0';
const DYNAMIC_CACHE_NAME = 'cheatsheets-dynamic-v1.3.0';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/styles/main.css',
  '/src/js/main.js',
  '/manifest.json',
  
  // Development cheatsheets
  '/src/cheatsheets/development/git_cheat_sheet.html',
  '/src/cheatsheets/development/network_macos_cheat_sheet.html',
  '/src/cheatsheets/development/network_windows_cheat_sheet.html',
  
  // Python & Data Science cheatsheets
  '/src/cheatsheets/python-data-science/python_programming_cheat_sheet.html',
  '/src/cheatsheets/python-data-science/numpy_cheat_sheet.html',
  '/src/cheatsheets/python-data-science/pandas_cheat_sheet.html',
  '/src/cheatsheets/python-data-science/matplotlib_cheat_sheet.html',
  '/src/cheatsheets/python-data-science/scipy_cheat_sheet.html',
  
  // Mathematical cheatsheets
  '/src/cheatsheets/mathematical/matlab_cheat_sheet.html',
  '/src/cheatsheets/mathematical/tableau_cheat_sheet.html',
  
  // Design & CAD cheatsheets
  '/src/cheatsheets/design-cad/photoshop_shortcuts_cheat_sheet.html',
  '/src/cheatsheets/design-cad/autocad_cheat_sheet.html',
  '/src/cheatsheets/design-cad/3dsmax_cheat_sheet.html',
  '/src/cheatsheets/design-cad/after_effects_cheat_sheet.html',
  '/src/cheatsheets/design-cad/blender_cheat_sheet.html',
  '/src/cheatsheets/design-cad/revit_cheat_sheet.html',
  '/src/cheatsheets/design-cad/rhino_cheat_sheet.html',
  '/src/cheatsheets/design-cad/sketchup_cheat_sheet.html',
  
  // Productivity cheatsheets
  '/src/cheatsheets/productivity/excel_shortcuts_cheat_sheet.html',
  '/src/cheatsheets/productivity/openpyxl_cheat_sheet.html',
  '/src/cheatsheets/productivity/python_in_excel_cheat_sheet.html',
  
  // System cheatsheets
  '/src/cheatsheets/system/unix_macos_cheat_sheet.html',
  '/src/cheatsheets/system/windows_cmd_cheat_sheet.html'
];

// Assets to cache dynamically (when requested)
const DYNAMIC_ASSETS = [
  '/assets/',
  '/docs/',
  '/reference-sheets/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME &&
                cacheName.startsWith('cheatsheets-')) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Take control of all pages
      self.clients.claim()
    ])
  );
});

// Fetch event - serve cached content with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(
    cacheFirst(request)
      .catch(() => networkFirst(request))
      .catch(() => offlineFallback(request))
  );
});

// Cache-first strategy (for static assets)
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Update cache in background if online
    if (navigator.onLine) {
      updateCache(request);
    }
    return cachedResponse;
  }
  
  throw new Error('Not in cache');
}

// Network-first strategy (for dynamic content)
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error(`Network response not ok: ${networkResponse.status}`);
  } catch (error) {
    console.log('[SW] Network request failed:', error);
    throw error;
  }
}

// Update cache in background
async function updateCache(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      await cache.put(request, networkResponse);
      console.log('[SW] Updated cache for:', request.url);
    }
  } catch (error) {
    console.log('[SW] Failed to update cache:', error);
  }
}

// Offline fallback
async function offlineFallback(request) {
  const url = new URL(request.url);
  
  // Return cached index for navigation requests
  if (request.mode === 'navigate') {
    const cachedIndex = await caches.match('/index.html');
    if (cachedIndex) {
      return cachedIndex;
    }
  }
  
  // Return offline page for other requests
  return new Response(
    `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Offline - CheatSheets Collection</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
                color: white;
                text-align: center;
                padding: 2rem;
            }
            h1 { font-size: 2rem; margin-bottom: 1rem; }
            p { font-size: 1.1rem; opacity: 0.8; margin-bottom: 2rem; }
            button {
                background: white;
                color: #000;
                border: none;
                padding: 1rem 2rem;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s;
            }
            button:hover { transform: translateY(-2px); }
        </style>
    </head>
    <body>
        <h1>You're Offline</h1>
        <p>This page isn't available offline yet.<br>
           Check your connection and try again.</p>
        <button onclick="location.reload()">Try Again</button>
    </body>
    </html>
    `,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    }
  );
}

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered');
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Sync any pending data or refresh cache
      syncData()
    );
  }
});

async function syncData() {
  try {
    // Update critical resources when back online
    const cache = await caches.open(STATIC_CACHE_NAME);
    const criticalResources = ['/', '/src/styles/main.css', '/src/js/main.js'];
    
    for (const resource of criticalResources) {
      try {
        const response = await fetch(resource);
        if (response.ok) {
          await cache.put(resource, response);
        }
      } catch (error) {
        console.log('[SW] Failed to sync:', resource, error);
      }
    }
    
    console.log('[SW] Background sync completed');
  } catch (error) {
    console.log('[SW] Background sync failed:', error);
  }
}

// Push notification handling (for future updates)
self.addEventListener('push', (event) => {
  console.log('[SW] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New cheatsheets available!',
    icon: '/assets/icons/icon-192x192.png',
    badge: '/assets/icons/badge-72x72.png',
    tag: 'cheatsheets-update',
    requireInteraction: false,
    actions: [
      {
        action: 'open',
        title: 'View Updates',
        icon: '/assets/icons/action-open.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/assets/icons/action-dismiss.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('CheatSheets Collection', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle app shortcuts
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Periodic background sync for cache updates (when supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'cache-update') {
    event.waitUntil(
      updateStaticCache()
    );
  }
});

async function updateStaticCache() {
  try {
    console.log('[SW] Updating static cache...');
    const cache = await caches.open(STATIC_CACHE_NAME);
    
    // Update a subset of critical resources
    const criticalAssets = STATIC_ASSETS.slice(0, 5);
    await cache.addAll(criticalAssets);
    
    console.log('[SW] Static cache updated');
  } catch (error) {
    console.log('[SW] Failed to update static cache:', error);
  }
}