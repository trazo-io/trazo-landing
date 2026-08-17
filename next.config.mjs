/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 restricts the <Image quality> prop to this allowlist. A value that is NOT
    // listed does not throw — it is silently ignored and the image falls back to 75, which
    // is how the hero and the three product-tour panels spent a while asking for 92 and
    // getting 75. If you add a `quality` anywhere, add it here in the same change.
    // 95: text-heavy consumer mockups (product-showcase), where fine UI text must stay crisp.
    // 92: photographs and app screenshots (hero, product tour, how-it-works steps).
    // 75: Next's default, everything else.
    qualities: [75, 92, 95],
  },
}

export default nextConfig
