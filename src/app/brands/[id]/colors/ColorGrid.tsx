import { BrandGuidelineColor } from '@/interfaces/brandGuideline';

export default function ColorGrid({ colors }: { colors: BrandGuidelineColor[] }) {
  return (
    <ul className="color-grid">
      {colors.map((color, i) => (
        <li key={i} className="color-grid-item">
          <div
            className="color-box"
            style={{ backgroundColor: `${color.brandGuidelineHexCode}` }}
          />
          <span className="asset-label">{color.brandGuidelineColorName}</span>
          <span className="color-hex-code">{color.brandGuidelineHexCode}</span>
          <p className="color-description">{color.brandGuidelineColorDescription['en-US']}</p>
        </li>
      ))}
    </ul>
  );
}
