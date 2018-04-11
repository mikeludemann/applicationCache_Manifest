window.addEventListener('load', function(e) {

    var applicationCache = window.applicationCache;

    // After the first cache.
    applicationCache.addEventListener('cached', handleCacheEvent, false);

    // Checking update.
    applicationCache.addEventListener('checking', handleCacheEvent, false);

    // Update founded - Fetching resources.
    applicationCache.addEventListener('downloading', handleCacheEvent, false);

    // Returns a status of 404 or 410 (Download failed or changing was in progress)
    applicationCache.addEventListener('error', handleCacheError, false);

    // After the first download.
    applicationCache.addEventListener('noupdate', handleCacheEvent, false);

    // Return a status of 404 or 410.
    // Results will be deleted.
    applicationCache.addEventListener('obsolete', handleCacheEvent, false);

    // Fetch every resource listed.
    applicationCache.addEventListener('progress', handleCacheEvent, false);

    // New download.
    applicationCache.addEventListener('updateready', handleCacheEvent, false);

}, false);

function handleCacheEvent(e) {
    log("Application Cache - " + e.type + " Event");
    console.log(e);
}

function handleCacheError(e) {
    log("Application Cache - Error: " + e.data);
}

function log(text){
    console.log(text);
}