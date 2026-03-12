const path = require('path')
const fs = require('fs')

// Check for sharp availability
let sharp
try {
  sharp = require('sharp')
} catch (e) {
  console.error('Error: sharp is required for favicon generation')
  console.error('   Consider installing: npm install sharp --save-dev')
  process.exit(1)
}

const projectRoot = path.join(__dirname, '..')
const svgPath = path.join(projectRoot, 'assets/icons/logomark.svg')
const staticDir = path.join(projectRoot, 'bskyweb/static')

// Ensure static directory exists
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true })
}

const favicons = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
]

async function generateFavicons() {
  try {
    if (!fs.existsSync(svgPath)) {
      console.error(`SVG not found: ${svgPath}`)
      process.exit(1)
    }

    console.log('Generating favicons from', path.relative(projectRoot, svgPath))

    const svgBuffer = fs.readFileSync(svgPath)

    for (const favicon of favicons) {
      try {
        await sharp(svgBuffer)
          .resize(favicon.size, favicon.size, { fit: 'cover', background: 'white' })
          .png()
          .toFile(path.join(staticDir, favicon.name))
        
        console.log(`Generated ${favicon.name} (${favicon.size}x${favicon.size})`)
      } catch (err) {
        console.error(`Failed to generate ${favicon.name}:`, err.message)
        throw err
      }
    }

    console.log('Favicons generated successfully!')
  } catch (err) {
    console.error('Favicon generation failed:', err.message)
    console.warn('Continuing build without favicons...')
  }
}

generateFavicons()
