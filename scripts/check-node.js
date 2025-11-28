const requiredMinVersion = 24;

const [major] = process.versions.node.split('.').map(Number);

if (major < requiredMinVersion) {
  console.error(`\x1b[31m⚠️ Node.js ${requiredMinVersion} or higher is required! Current version: ${process.versions.node}\x1b[0m`);
  process.exit(1);
}