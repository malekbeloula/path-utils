const path = require("path");
const chalk = require("chalk");

// Utility function for logging output
const log = (title, value) =>
  console.log(`\x1b[33m\n▶ ${title}:\n\x1b[0m`, `\x1b[32m${value}\x1b[0m`);

console.log("===== Path Module Utility Funcions =====");

// 1. Get the base filename of the current script
log("File Name", path.basename(__filename));

// 2. Get the directory name of the current script
log("Directory Name", path.dirname(__filename));

// 3. Get the file extension
log("File Extension", path.extname(__filename));

// 4. Join multiple path segments into a single path
log("Joined Path", path.join(__dirname, "folder", "subfolder", "file.txt"));

// 5. Resolve an absolute from a relative path
log("Resolved Path", path.resolve("folder", "subfolder", "file.txt"));

// 6. Parse a file path into its components (root, dir, base, ext, name)
const parsedPath = path.parse(__filename);
log('Base Name', parsedPath.base);
log('Directory Name', parsedPath.dir);
log('Extension Name', parsedPath.ext);
log('File Name', parsedPath.name);
log('Root Name', parsedPath.root);

// 7. Format a path from a parsed object
log('Formatted Path', path.format(parsedPath));

// 8. Check if a path is absolute
log('Is Absolute Path', path.isAbsolute('/user/local/bin'));

// 9. Normalize a path by resolving `..` and redundant `/`
log('Normalized Path', path.normalize('/folder//subfolder//file.txt'));

// 10. Find the relative path between two directories
log('Relative Path', path.relative('/data/user/docs', '/data/user/images/photo.jpg'));

// 11. Get the system-specific path delimiter (used in PATH environment variable)
log('Path Delimiter', path.delimiter);

// 12. Get the system-specific path separator (used in file paths)
log('Path Separator', path.sep);