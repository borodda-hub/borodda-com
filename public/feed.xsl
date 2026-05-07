<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><xsl:value-of select="/rss/channel/title"/> — RSS Feed</title>
        <style>
          :root {
            --paper: #F0EEE6;
            --ink: #1A1A1A;
            --ink-muted: #5A5A55;
            --rule: #C8C2B6;
            --accent: #A0522D;
            --accent-hover: #C26B3F;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --paper: #1A1814;
              --ink: #E8E4DC;
              --ink-muted: #9A958B;
              --rule: #3A352D;
            }
          }
          html { -webkit-text-size-adjust: 100%; }
          body {
            background: var(--paper);
            color: var(--ink);
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 18px;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          .feed {
            max-width: 720px;
            margin: 0 auto;
            padding: 4rem 1.5rem;
          }
          @media (min-width: 768px) {
            .feed { padding: 6rem 2rem; }
          }
          .feed-eyebrow {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: 0.8125rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--ink-muted);
            margin: 0 0 1rem;
          }
          .feed-eyebrow::before {
            content: '';
            display: inline-block;
            width: 60px;
            height: 1px;
            background: var(--accent);
            margin-right: 1rem;
            vertical-align: middle;
          }
          h1 {
            font-size: 2.4rem;
            font-weight: 700;
            letter-spacing: -0.015em;
            line-height: 1.15;
            margin: 0 0 1rem;
          }
          .feed-description {
            color: var(--ink-muted);
            font-size: 1.15rem;
            line-height: 1.5;
            margin: 0 0 2rem;
            max-width: 60ch;
          }
          .feed-callout {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: 0.95rem;
            line-height: 1.55;
            background: rgba(160, 82, 45, 0.06);
            border-left: 2px solid var(--accent);
            padding: 1rem 1.25rem;
            margin: 0 0 3rem;
            color: var(--ink);
          }
          .feed-callout strong { font-weight: 600; }
          .feed-callout code {
            font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace;
            font-size: 0.85em;
            background: rgba(0, 0, 0, 0.05);
            padding: 0.1em 0.35em;
            border-radius: 2px;
          }
          @media (prefers-color-scheme: dark) {
            .feed-callout { background: rgba(160, 82, 45, 0.12); }
            .feed-callout code { background: rgba(255, 255, 255, 0.06); }
          }
          .feed-actions {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: 0.9rem;
            margin: 0 0 3rem;
          }
          .feed-actions a {
            color: var(--accent);
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 0.2em;
            margin-right: 1.5rem;
          }
          .feed-actions a:hover { color: var(--accent-hover); }
          hr {
            border: 0;
            border-top: 1px solid var(--accent);
            margin: 3rem 0;
            max-width: 80px;
          }
          h2 {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: 0.8125rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--ink-muted);
            margin: 0 0 1.5rem;
          }
          .feed-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 2.5rem;
          }
          .feed-item {
            border-bottom: 1px solid var(--rule);
            padding-bottom: 2.5rem;
          }
          .feed-item:last-child { border-bottom: 0; }
          .feed-item-title {
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.3;
            margin: 0 0 0.5rem;
          }
          .feed-item-title a {
            color: var(--ink);
            text-decoration: none;
          }
          .feed-item-title a:hover {
            color: var(--accent-hover);
          }
          .feed-item-date {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: 0.8125rem;
            color: var(--ink-muted);
            letter-spacing: 0.02em;
            margin: 0 0 0.75rem;
          }
          .feed-item-description {
            color: var(--ink);
            line-height: 1.55;
            margin: 0;
          }
          .feed-empty {
            color: var(--ink-muted);
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <main class="feed">
          <p class="feed-eyebrow">RSS Feed</p>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="feed-description"><xsl:value-of select="/rss/channel/description"/></p>

          <div class="feed-callout">
            <strong>This is a feed file.</strong> Copy the URL of this page (<code>/feed.xml</code>) into your reader of choice — <a href="https://netnewswire.com/" target="_blank" rel="noopener">NetNewsWire</a>, <a href="https://feedly.com/" target="_blank" rel="noopener">Feedly</a>, <a href="https://reederapp.com/" target="_blank" rel="noopener">Reeder</a>, or any other RSS app — to receive new essays as they're published.
          </div>

          <p class="feed-actions">
            <a href="/">← Back to borodda.com</a>
            <a href="/writing/">All writing →</a>
          </p>

          <hr />
          <h2>Recent essays</h2>
          <ul class="feed-list">
            <xsl:for-each select="/rss/channel/item">
              <li class="feed-item">
                <h3 class="feed-item-title">
                  <a>
                    <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                </h3>
                <p class="feed-item-date"><xsl:value-of select="pubDate"/></p>
                <p class="feed-item-description"><xsl:value-of select="description"/></p>
              </li>
            </xsl:for-each>
            <xsl:if test="not(/rss/channel/item)">
              <li class="feed-empty">No essays published yet — the first ones will land here. Subscribe now to be notified.</li>
            </xsl:if>
          </ul>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
