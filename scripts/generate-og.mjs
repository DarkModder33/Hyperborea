/**
 * Build-time Open Graph images (static export compatible).
 * Uses next/og ImageResponse → writes PNG files under public/og/
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createElement } from 'react';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'og');

const insights = [
  {
    slug: 'what-a-299-website-includes',
    title: 'What a $299 website actually includes',
    category: 'BUILDS'
  },
  {
    slug: 'mail-in-phone-repair-checklist',
    title: 'Mail-in phone repair: checklist before you ship',
    category: 'REPAIRS'
  },
  {
    slug: 'scope-before-invoice',
    title: 'Why scope-before-invoice closes more work',
    category: 'OPERATIONS'
  }
];

function frame(title, subtitle, badge) {
  return createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(145deg, #030304 0%, #0a0f0c 45%, #12081a 100%)',
        padding: '64px 72px',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif'
      }
    },
    createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
      createElement(
        'div',
        {
          style: {
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #00ff9f, #a855f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontSize: '22px',
            fontWeight: 800
          }
        },
        'TH'
      ),
      createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column' } },
        createElement('div', { style: { color: '#f4f4f5', fontSize: '28px', fontWeight: 700 } }, 'TradeHax'),
        createElement('div', { style: { color: 'rgba(255,255,255,0.45)', fontSize: '18px' } }, 'Hyperion · Execution desk')
      )
    ),
    createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '980px' } },
      badge
        ? createElement(
            'div',
            {
              style: {
                display: 'flex',
                color: '#00ff9f',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }
            },
            badge
          )
        : null,
      createElement(
        'div',
        {
          style: {
            display: 'flex',
            color: '#ffffff',
            fontSize: title.length > 48 ? '52px' : '60px',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em'
          }
        },
        title
      ),
      subtitle
        ? createElement(
            'div',
            {
              style: {
                display: 'flex',
                color: 'rgba(255,255,255,0.55)',
                fontSize: '26px',
                lineHeight: 1.35,
                maxWidth: '900px'
              }
            },
            subtitle
          )
        : null
    ),
    createElement(
      'div',
      {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '28px'
        }
      },
      createElement('div', { style: { color: 'rgba(0,255,159,0.9)', fontSize: '22px', fontWeight: 600 } }, 'tradehax.net'),
      createElement(
        'div',
        { style: { color: 'rgba(255,255,255,0.35)', fontSize: '20px' } },
        'Repairs · Builds · Care · Lessons'
      )
    )
  );
}

async function writePng(filename, element) {
  const { ImageResponse } = await import('next/og');
  const res = new ImageResponse(element, {
    width: 1200,
    height: 630
  });
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(outDir, filename), buf);
  console.log('OG →', filename);
}

async function main() {
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  await writePng(
    'default.png',
    frame(
      'A desk that turns demand into paid scope.',
      'Instant estimates · Written scope · Remote + mail-in',
      'PREMIER EXECUTION'
    )
  );

  await writePng(
    'services.png',
    frame('Work that ships. Systems that stay up.', 'Repairs $50–200 · Builds from $299 · Care $250/mo', 'SERVICES')
  );

  await writePng(
    'care.png',
    frame('Care retainer — $250 / mo', 'Priority fixes, uptime checks, small updates.', 'RECURRING')
  );

  await writePng(
    'portfolio.png',
    frame('Proof over pitch decks.', 'Problem · range · result — same standard as this site.', 'PORTFOLIO')
  );

  await writePng(
    'contact.png',
    frame('Request a written scope.', '24h reply target · Greater Philadelphia + worldwide', 'CONTACT')
  );

  await writePng(
    'insights.png',
    frame('Guides that rank and convert.', 'Practical posts tied to repairs, builds, and retainers.', 'INSIGHTS')
  );

  for (const post of insights) {
    await writePng(
      `insight-${post.slug}.png`,
      frame(post.title, 'TradeHax Insights',
        post.category
      )
    );
  }

  console.log('Open Graph images generated in public/og/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
