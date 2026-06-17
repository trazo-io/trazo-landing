/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 restricts the <Image quality> prop to this allowlist.
    // 95 is used for the text-heavy consumer mockups (product-showcase) so
    // fine UI text stays crisp; 75 remains the default for everything else.
    qualities: [75, 95],
  },
}

export default nextConfig
