// Cache object
const pathCache = {};

function getDirname(filePath) {
  // Check cache first
  if (pathCache[filePath]) {
    return pathCache[filePath];
  }

  try {
    const dirName = path.dirname(filePath);
    // Store in cache
    pathCache[filePath] = dirName;
    return dirName;
  } catch (error) {
    // Handle errors (e.g., log them, throw custom error, etc.)
    console.error('Error getting directory name:', error);
    throw error; // or return a default value
  }
}

// Usage
const dirname = getDirname('path/to/file.js');
console.log(dirname); // 'path/to'
