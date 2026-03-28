export function createSiteMeta() {
  return {
    docsRoot: '/docs/',
    locales: {
      root: { label: 'English', lang: 'en-US' },
      'zh-CN': { label: 'Simplified Chinese', lang: 'zh-CN' },
      'zh-TW': { label: 'Traditional Chinese', lang: 'zh-TW' },
      fa: { label: 'Persian', lang: 'fa-IR', dir: 'rtl' },
      'fa-Latn': { label: 'Persian Latin', lang: 'fa-Latn' },
    },
  };
}
