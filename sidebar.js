(function () {
  const NAV = [
    {
      label: '创作',
      items: [
        { key: 'new',       text: '新建番外广告', href: 'index.html' },
        { key: 'drafts',    text: '我的草稿',     href: 'drafts.html' },
        { key: 'published', text: '已投放',       href: 'published.html' },
      ],
    },
    {
      label: '数据',
      items: [
        { key: 'dashboard', text: '投放看板',     href: 'dashboard.html' },
        { key: 'analytics', text: '成效分析',     href: 'analytics.html' },
      ],
    },
    {
      label: '账户',
      items: [
        { key: 'enterprise', text: '企业认证',    href: 'enterprise.html' },
        { key: 'billing',    text: '发票 & 结算', href: 'billing.html' },
      ],
    },
  ];

  const current = document.body.dataset.page || 'new';

  const html = `
    <aside class="sidebar">
      <a href="index.html" style="text-decoration:none;color:inherit;">
        <div class="logo">腾讯视频</div>
        <div class="logo-sub">AD STUDIO · BETA</div>
      </a>

      ${NAV.map(group => `
        <div class="nav-group">
          <div class="nav-label">${group.label}</div>
          ${group.items.map(it => {
            const active = it.key === current;
            return `<a class="nav-item ${active ? 'active' : ''}" href="${it.href}">
              <span class="dot" ${active ? '' : 'style="opacity:0.3"'}></span>${it.text}
            </a>`;
          }).join('')}
        </div>
      `).join('')}

      <div class="sidebar-footer">
        <div class="avatar">参</div>
        <div class="user-info">
          <div class="user-name">东方参源</div>
          <div class="user-type">企业账户 · VIP</div>
        </div>
      </div>
    </aside>
  `;

  const mount = document.getElementById('sidebar-mount');
  if (mount) mount.outerHTML = html;
})();
