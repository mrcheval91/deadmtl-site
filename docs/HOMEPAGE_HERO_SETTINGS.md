# Integration notes for configurable DeadMTL homepage hero

Add this import near the top of `src/pages/index.astro`:

```astro
import { siteSettings } from '../data/site-settings';

const hero = siteSettings.home.hero;
const serverStatus = siteSettings.serverStatus;
```

Then replace the hardcoded homepage image paths with:

```astro
<link
  slot="head"
  rel="preload"
  as="image"
  type="image/webp"
  href={hero.images.mobileWebp}
  media="(max-width: 900px)"
/>
<link
  slot="head"
  rel="preload"
  as="image"
  type="image/webp"
  href={hero.images.desktopWebp}
  media="(min-width: 901px)"
/>
```

In the `<picture>` block:

```astro
<source srcset={hero.images.mobileWebp} type="image/webp" media="(max-width: 900px)" />
<source srcset={hero.images.desktopWebp} type="image/webp" />
<img
  src={hero.images.fallbackJpg}
  alt=""
  class="dead-hero__bg-image"
  width="1920"
  height="1128"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

Replace fixed hero text with:

```astro
<div class="dead-hero__eyebrow">{hero.eyebrow}</div>
<h1 class="dead-hero__title">{hero.title}</h1>
<p class="dead-hero__tagline">{hero.tagline}</p>
<p class="dead-hero__body">{hero.body}</p>
```

Replace the fixed status grid items with:

```astro
<div class="dead-status-grid" role="status" aria-label="Server status">
  {serverStatus.map(item => (
    <div class="dsg__item">
      <span class="dsg__label">{item.label}</span>
      <span class={`dsg__value dsg__value--${item.tone}`}>{item.value}</span>
    </div>
  ))}
</div>
```

Replace the fixed CTA links with:

```astro
<div class="dead-hero__cta">
  {hero.ctas.map(cta => (
    <a href={cta.href} class={`term-btn term-btn--${cta.tone}`}>{cta.label}</a>
  ))}
</div>
```

Replace the caption with:

```astro
<div class="dead-hero__caption" aria-hidden="true">
  {hero.caption.map((line, index) => (
    <>
      {line}
      {index < hero.caption.length - 1 && <br />}
    </>
  ))}
</div>
```

To change the homepage banner later:
1. Put the optimized image derivatives in `public/images/home/`
2. Update `src/data/site-settings.ts`
3. Run `npm run build`
4. Commit and push
