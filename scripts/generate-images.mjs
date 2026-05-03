/**
 * Gemini AI Product Image Generator for J.N. Chemicals
 *
 * Usage:
 *   1. npm install @google/generative-ai
 *   2. set GEMINI_API_KEY=your_key_here   (Windows CMD)
 *   3. node scripts/generate-images.mjs
 *
 * Images saved to: public/images/products/
 * Get free API key: https://aistudio.google.com/app/apikey
 */

import { GoogleGenerativeAI } from '@google/generative-ai'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
if (!GEMINI_API_KEY) {
  console.error('Missing GEMINI_API_KEY. Run: set GEMINI_API_KEY=your_key_here')
  process.exit(1)
}

const outputDir = path.join(__dirname, '..', 'public', 'images', 'products')
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

const products = [
  {
    slug: 'alcocid',
    prompt: 'Professional studio product photo of a blue industrial disinfectant spray bottle, clean white background, sharp lighting, chemical product photography, photorealistic',
  },
  {
    slug: 'aldino',
    prompt: 'Professional studio product photo of a dark blue medical sterilant solution bottle, clean white background, sharp lighting, pharmaceutical product photography, photorealistic',
  },
  {
    slug: 'altimate',
    prompt: 'Professional studio product photo of a bright blue multi-surface cleaner spray bottle, clean white background, sharp lighting, commercial cleaning product, photorealistic',
  },
  {
    slug: 'handicide',
    prompt: 'Professional studio product photo of a green hand sanitizer pump bottle, clean white background, sharp lighting, healthcare hygiene product, photorealistic',
  },
  {
    slug: 'envaseptic',
    prompt: 'Professional studio product photo of a large blue environmental disinfectant container, clean white background, sharp lighting, industrial chemical product, photorealistic',
  },
  {
    slug: 'macirrium',
    prompt: 'Professional studio product photo of an orange industrial heavy-duty degreaser bottle, clean white background, sharp lighting, industrial cleaning chemical, photorealistic',
  },
  {
    slug: 'steriscope',
    prompt: 'Professional studio product photo of a medical instrument sterilant solution bottle, clean white background, sharp lighting, medical disinfectant product, photorealistic',
  },
]

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

async function generateImage(product) {
  console.log(`Generating image for ${product.slug}...`)
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp-image-generation' })
    const response = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: product.prompt }] }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
    })

    const parts = response.response.candidates?.[0]?.content?.parts ?? []
    const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'))

    if (!imagePart?.inlineData) {
      console.warn(`No image returned for ${product.slug}`)
      return
    }

    const buffer = Buffer.from(imagePart.inlineData.data, 'base64')
    const ext = imagePart.inlineData.mimeType.split('/')[1] || 'png'
    const filePath = path.join(outputDir, `${product.slug}.${ext}`)
    fs.writeFileSync(filePath, buffer)
    console.log(`Saved: public/images/products/${product.slug}.${ext}`)
  } catch (err) {
    console.error(`Failed for ${product.slug}:`, err.message)
  }
}

async function main() {
  console.log('J.N. Chemicals - Gemini Image Generator\n')
  for (const product of products) {
    await generateImage(product)
    await new Promise(r => setTimeout(r, 2000))
  }
  console.log('\nDone! Now update data/products.ts image paths to /images/products/<slug>.png')
}

main()
