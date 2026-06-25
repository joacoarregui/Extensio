<?php
// Router for php -S to support .html files with PHP includes
// Run with: php -S localhost:8000 router.php

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$file = __DIR__ . $uri;

if (is_file($file)) {
    // If it's an HTML file, force PHP parsing so includes work
    if (pathinfo($file, PATHINFO_EXTENSION) === 'html') {
        include $file;
        exit;
    }
    // Otherwise serve static files (css, js, images...)
    return false;
}

// Fallback for clean URLs or root
if ($uri === '/' || $uri === '') {
    include __DIR__ . '/index.html';
    exit;
}

// If file not found, let it 404 naturally or fallback
http_response_code(404);
echo "Not found";
