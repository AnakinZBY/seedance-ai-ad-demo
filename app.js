// ========== Character Data ==========
const characters = [
  { id: 'fanxian',      name: '范闲',     actor: '张若昀', role: '男主角', traits: ['现代穿越', '毒舌', '腹黑'],   img: 'assets/fanxian.webp',      price: 5.2, tier: 'A', gender: 'm', isLead: true  },
  { id: 'linwaner',     name: '林婉儿',   actor: '李沁',   role: '女主角', traits: ['鸡腿少女', '温柔', '病弱'],   img: 'assets/linwaner.webp',     price: 4.8, tier: 'A', gender: 'f', isLead: true  },
  { id: 'fanruoruo',    name: '范若若',   actor: '宋轶',   role: '女二号', traits: ['才女', '妹妹', '书卷气'],     img: 'assets/fanruoruo.webp',    price: 3.2, tier: 'A', gender: 'f', isLead: true  },
  { id: 'qingdi',       name: '庆帝',     actor: '陈道明', role: '大反派', traits: ['帝王心术', '深不可测'],       img: 'assets/qingdi.webp',       price: 8.5, tier: 'S', gender: 'm', isLead: true  },
  { id: 'fansize',      name: '范思辙',   actor: '郭麒麟', role: '配角',   traits: ['搞笑担当', '财迷', '热血'],   img: 'assets/fansize.webp',      price: 2.5, tier: 'B', gender: 'm', isLead: false },
  { id: 'wangqinian',   name: '王启年',   actor: '田雨',   role: '配角',   traits: ['鉴查院老油条', '家庭主男'],   img: 'assets/wangqinian.webp',   price: 2.2, tier: 'B', gender: 'm', isLead: false },
  { id: 'haitang',      name: '海棠朵朵', actor: '辛芷蕾', role: '女三号', traits: ['北齐圣女', '飒爽', '高冷'],   img: 'assets/haitang.webp',      price: 3.8, tier: 'A', gender: 'f', isLead: true  },
  { id: 'yanbingyun',   name: '言冰云',   actor: '肖战',   role: '男二号', traits: ['冷面', '忠义', '剑客'],       img: 'assets/yanbingyun.webp',   price: 4.5, tier: 'S', gender: 'm', isLead: true  },
  { id: 'wuzhu',        name: '五竹',     actor: '佟梦实', role: '配角',   traits: ['冷面杀神', '忠诚', '蒙眼'],   img: 'assets/wuzhu.webp',        price: 3.5, tier: 'B', gender: 'm', isLead: false },
  { id: 'chenpingping', name: '陈萍萍',   actor: '吴刚',   role: '配角',   traits: ['鉴查院院长', '老狐狸'],       img: 'assets/chenpingping.webp', price: 4.0, tier: 'A', gender: 'm', isLead: false },
  { id: 'fanjian',      name: '范建',     actor: '高曙光', role: '配角',   traits: ['户部侍郎', '严父'],           img: 'assets/fanjian.webp',      price: 2.8, tier: 'B', gender: 'm', isLead: false },
  { id: 'zhanggongzhu', name: '长公主',   actor: '李小冉', role: '反派',   traits: ['倾城', '心机', '复杂'],       img: 'assets/zhanggongzhu.webp', price: 4.2, tier: 'A', gender: 'f', isLead: false },
  { id: 'silili',       name: '司理理',   actor: '毛晓彤', role: '配角',   traits: ['北齐皇族', '聪慧', '柔情'],   img: 'assets/silili.webp',       price: 3.0, tier: 'B', gender: 'f', isLead: false },
  { id: 'tengzijin',    name: '滕梓荆',   actor: '赵柯',   role: '配角',   traits: ['忠心护卫', '兄弟情'],         img: 'assets/tengzijin.webp',    price: 2.3, tier: 'B', gender: 'm', isLead: false },
];
const charMap = Object.fromEntries(characters.map(c => [c.id, c]));

// ========== Variant Data ==========
const variants = {
  A: {
    id: 'A',
    label: '方案 A · 虐恋向',
    title: '《北齐月夜·长歌未尽》',
    cast: ['fanxian', 'haitang'],           // 范闲 + 海棠朵朵
    duration: 3,
    baseExposure: 380,
    phoneTitle: '北齐月夜·长歌未尽',
    phoneSub: '范闲北齐重逢海棠,参汤作别礼',
    phoneImg: 'assets/haitang.webp',
    scenes: [
      {
        title: '北齐王庭 · 重逢',
        dur: 60,
        desc: '范闲身着北齐使节服饰步入王庭偏殿,海棠朵朵立于月下,两人目光交汇,昔日纠葛尽在不言中。画外音:"从来相见,总是匆匆..."',
        kfs: [
          { img: 'assets/fanxian.webp',  tint: 'cool', label: '范闲推门 · 一袭黑衣', tc: '00:00:08' },
          { img: 'assets/haitang.webp',  tint: 'cool', label: '海棠月下 · 衣袂翻飞', tc: '00:00:24' },
          { img: 'assets/fanxian.webp',  tint: 'cool', label: '对视 · 一时无言',   tc: '00:00:50' },
        ],
        tags: ['场景:北齐王庭', '情绪:遗憾/克制']
      },
      {
        title: '参汤作别 · 言不尽意',
        dur: 75,
        desc: '海棠捧出一盏参汤,说这是北齐最后为你留下的温暖。范闲接过,一饮而尽。<b style="color:var(--accent)">特写 3 秒</b>:瓶身"东方参源"在月光下泛光。',
        kfs: [
          { img: 'assets/haitang.webp', tint: 'warm', label: '海棠递汤 · 指尖微颤',  tc: '00:01:12' },
          { img: 'assets/fanxian.webp', tint: 'glow', label: '接过 · 眉间松动',    tc: '00:01:34',  brand: true },
          { img: 'assets/fanxian.webp', tint: 'glow', label: '饮尽 · 瓶身特写',    tc: '00:01:52',  highlight: '品牌特写 3"' },
        ],
        tags: ['品牌露出:特写 3 秒', '情绪:隐忍/温情']
      },
      {
        title: '终章 · 月下长歌',
        dur: 45,
        desc: '范闲独自走出王庭,回首远望。旁白:"人各有难处,一盏参汤,道尽千言。"品牌 slogan 以水墨浮现。',
        kfs: [
          { img: 'assets/fanxian.webp', tint: 'poem', label: '远影 · 夜色沉沉', tc: '00:02:30' },
          { img: 'assets/haitang.webp', tint: 'poem', label: '海棠凭栏', tc: '00:02:48' },
          { caption: '一盏参汤 道尽千言', small: '东方参源 · 自然甘润', tint: 'ink', label: 'slogan 浮现', tc: '00:02:56' },
        ],
        tags: ['品牌露出:自然结尾', '情绪:留白']
      },
    ]
  },
  B: {
    id: 'B',
    label: '方案 B · 家常温情 · 推荐',
    title: '《一盏参汤暖人间》',
    cast: ['fanxian', 'fansize', 'fanruoruo'],
    duration: 3,
    baseExposure: 450,
    phoneTitle: '一盏参汤暖人间',
    phoneSub: '范思辙深夜给范闲送参汤,兄妹三人温情番外',
    phoneImg: 'assets/fanxian.webp',
    scenes: [
      {
        title: '鉴查院书房 · 子夜三更',
        dur: 45,
        desc: '月色透过雕花窗棂洒在书案上,范闲伏案批阅堆积如山的卷宗,眉头紧锁。烛火摇曳,他抬手揉了揉太阳穴,又低声咳了两声。画外音:"自北齐归来这一月,范闲几乎没有睡过一个整觉..."',
        kfs: [
          { img: 'assets/fanxian.webp', tint: 'night', label: '远景 · 书案堆卷 · 烛火摇曳', tc: '00:00:04' },
          { img: 'assets/fanxian.webp', tint: 'night', label: '中景 · 范闲伏案 · 揉眉疲态', tc: '00:00:18' },
          { img: 'assets/fanxian.webp', tint: 'night', label: '特写 · 侧脸 · 低声咳嗽',   tc: '00:00:36' },
        ],
        tags: ['场景:鉴查院书房', '情绪:疲惫/专注', '品牌植入:0 秒']
      },
      {
        title: '送参汤 · 兄弟情深',
        dur: 90,
        desc: '门外传来脚步声,范思辙端着托盘推门而入,盘中是一盏盛着琥珀色"人参水"的玻璃瓶。"大哥,你这身子,可不能再这么熬着了。"范若若跟进来打趣:"思辙这回倒是破天荒大方。"范闲举杯轻抿——<b style="color:var(--accent)">特写 3 秒</b>:瓶身"东方参源"标识。',
        kfs: [
          { img: 'assets/fansize.webp',  tint: 'warm', label: '范思辙推门 · 手捧托盘',  tc: '00:00:52' },
          { img: 'assets/fanruoruo.webp', tint: 'warm', label: '范若若轻笑 · 打趣',    tc: '00:01:24' },
          { img: 'assets/fanxian.webp',  tint: 'glow', label: '范闲举杯 · 瓶身特写', tc: '00:01:58', brand: true, highlight: '品牌特写 3"' },
        ],
        tags: ['场景:书房', '情绪:温情/烟火气', '品牌露出:特写 3 秒']
      },
      {
        title: '尾声 · 人间有味是清欢',
        dur: 45,
        desc: '范闲放下卷宗,三兄妹围坐窗前,各自捧着一瓶"人参水"。范若若念诗:"不是人间富贵花,偏爱山野一盏茶。"范闲笑着续:"一盏参汤暖人间。"品牌 slogan 以水墨浮现。',
        kfs: [
          { img: 'assets/fanruoruo.webp', tint: 'poem', label: '三人围坐 · 各捧一瓶', tc: '00:02:12' },
          { img: 'assets/fanxian.webp',   tint: 'poem', label: '范闲微笑',          tc: '00:02:38' },
          { caption: '一盏参汤暖人间', small: '东方参源 · 自然甘润 · 不上火', tint: 'ink', label: '水墨留白 · slogan', tc: '00:02:56' },
        ],
        tags: ['场景:书房远景', '情绪:治愈/诗意', '品牌露出:自然结尾']
      },
    ]
  },
  C: {
    id: 'C',
    label: '方案 C · 节日限定',
    title: '《除夕夜·范府团圆宴》',
    cast: ['fanxian', 'linwaner', 'fansize', 'fanruoruo', 'fanjian', 'wangqinian', 'tengzijin'],
    duration: 4,
    baseExposure: 680,
    phoneTitle: '除夕夜·范府团圆宴',
    phoneSub: '七位主演齐聚范府守岁 · 新春限定番外',
    phoneImg: 'assets/fansize.webp',
    scenes: [
      {
        title: '范府正堂 · 灯火通明',
        dur: 75,
        desc: '除夕夜,范府张灯结彩,七位家人陆续到齐。范建端坐主位,范闲领着婉儿从外堂进入,家仆端上年夜饭。镜头在每一张脸上流转,展现节日喜庆。',
        kfs: [
          { img: 'assets/fanjian.webp',    tint: 'warm', label: '范建坐镇 · 主位', tc: '00:00:12' },
          { img: 'assets/fanxian.webp',    tint: 'warm', label: '范闲携婉儿入席', tc: '00:00:38' },
          { img: 'assets/wangqinian.webp', tint: 'warm', label: '王启年拱手拜年', tc: '00:01:06' },
        ],
        tags: ['场景:范府正堂', '情绪:喜庆/团圆']
      },
      {
        title: '开宴 · 参汤破题',
        dur: 90,
        desc: '范思辙举起"人参水":"今年过年没搞到好酒,但我备了好东西——东方参源,给爹和大哥补补。"全场笑闹,纷纷举杯。<b style="color:var(--accent)">群像特写 5 秒</b>:七瓶整齐摆放于桌面。',
        kfs: [
          { img: 'assets/fansize.webp',   tint: 'glow', label: '范思辙举杯', tc: '00:01:55', brand: true },
          { img: 'assets/fanruoruo.webp', tint: 'glow', label: '若若抿笑', tc: '00:02:22' },
          { img: 'assets/fanxian.webp',   tint: 'glow', label: '七瓶同框', tc: '00:02:50', highlight: '群像 5"' },
        ],
        tags: ['品牌露出:群像 5 秒', '情绪:欢乐/大方']
      },
      {
        title: '守岁 · 辞旧迎新',
        dur: 75,
        desc: '饭后全家围坐火盆,范建举杯:"这一年辛苦各位。"众人碰杯。窗外烟花绽放,光影映在瓶身上。品牌 slogan:"一年辛劳,一盏温暖"。',
        kfs: [
          { img: 'assets/fanjian.webp', tint: 'poem', label: '围炉守岁', tc: '00:03:08' },
          { img: 'assets/linwaner.webp', tint: 'poem', label: '婉儿依偎范闲', tc: '00:03:32' },
          { caption: '一年辛劳 一盏温暖', small: '东方参源 · 新春限定', tint: 'ink', label: '烟花收尾', tc: '00:03:50' },
        ],
        tags: ['场景:庭院烟花', '情绪:温馨/团圆']
      },
    ]
  }
};

// ========== State ==========
const state = {
  selected: new Set(['fanxian', 'fansize', 'fanruoruo']),
  currentVariant: 'B',
  generated: false,
  filter: 'all',
  sliderDur: 3,
  sliderExp: 450,
  sliderActors: 3,
};

// ========== Toast ==========
let toastWrap;
function showToast(msg, duration = 2600) {
  if (!toastWrap) {
    toastWrap = document.createElement('div');
    toastWrap.className = 'toast-wrap';
    document.body.appendChild(toastWrap);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = msg;
  toastWrap.appendChild(t);
  setTimeout(() => {
    t.classList.add('fade-out');
    setTimeout(() => t.remove(), 220);
  }, duration);
}

// ========== Render Character Grid ==========
const grid = document.getElementById('charGrid');
function filterMatch(c, f) {
  if (f === 'all') return true;
  if (f === 'lead') return c.isLead;
  if (f === 'support') return !c.isLead;
  if (f === 'male') return c.gender === 'm';
  if (f === 'female') return c.gender === 'f';
  return true;
}
function renderChars() {
  grid.innerHTML = characters.map(c => {
    const isSel = state.selected.has(c.id);
    const hidden = !filterMatch(c, state.filter);
    return `
      <div class="char-card ${isSel ? 'selected' : ''} ${hidden ? 'hidden' : ''}" data-id="${c.id}">
        <span class="char-tier ${c.tier.toLowerCase()}" title="咖位 ${c.tier} 级">${c.tier}</span>
        <div class="char-img">
          <img src="${c.img}" alt="${c.name}" loading="lazy">
        </div>
        <div class="char-body">
          <div class="char-name">${c.name}</div>
          <div class="char-actor">${c.actor} 饰 · ${c.role}</div>
          <div class="char-traits">
            ${c.traits.slice(0,2).map(t => `<span class="tag tag-neutral">${t}</span>`).join('')}
          </div>
          <div class="char-price">
            <span>肖像授权</span>
            <b>¥ ${c.price.toFixed(1)} 万/条</b>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      if (state.selected.has(id)) state.selected.delete(id);
      else state.selected.add(id);
      renderChars();
      onCastChanged();
    });
  });
}

function selectedActors() {
  return Array.from(state.selected).map(id => charMap[id]).filter(Boolean);
}
function actorsPriceSum() {
  return selectedActors().reduce((s, c) => s + c.price, 0);
}
function actorsNameList() {
  return selectedActors().map(c => c.name).join(' / ') || '尚未选择';
}
function actorsRealNameList() {
  return selectedActors().map(c => c.actor).join(' / ') || '—';
}

// ========== When cast changes: update header + genBar + price ==========
function onCastChanged() {
  const count = state.selected.size;
  const sum = actorsPriceSum();
  document.getElementById('selCount').textContent = count;
  document.getElementById('selPriceSum').innerHTML = `¥ ${sum.toFixed(1)} 万`;
  document.getElementById('genBarActors').textContent = actorsNameList();
  // 同步演员数量滑杆(钳制到 1-5)
  const clamped = Math.min(5, Math.max(1, count || 1));
  const actorSlider = document.getElementById('actorSlider');
  if (actorSlider) {
    actorSlider.value = clamped;
    state.sliderActors = clamped;
  }
  // 如果已生成,同步更新报价
  if (state.generated) recalcPriceFromSliders();
  else recalcPriceFromSliders({ pulse: false });
}

// ========== Filter chips ==========
document.getElementById('charFilter').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('#charFilter .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  state.filter = btn.dataset.filter;
  renderChars();
});

// ========== Price calculator ==========
function recalcPriceFromSliders(opts = {}) {
  const pulse = opts.pulse !== false;
  const dur = parseFloat(document.getElementById('durSlider').value);
  const exp = parseFloat(document.getElementById('expSlider').value);
  const actorsCount = parseInt(document.getElementById('actorSlider').value);

  const actors = selectedActors();
  let actorCost;
  if (actors.length === actorsCount && actorsCount > 0) {
    actorCost = actors.reduce((s, c) => s + c.price, 0);
  } else if (actors.length > 0) {
    const avg = actors.reduce((s, c) => s + c.price, 0) / actors.length;
    actorCost = avg * actorsCount;
  } else {
    actorCost = 3.5 * actorsCount;
  }

  const baseCost = dur * 3.0;
  const ipCost = (baseCost + actorCost) * 0.264;  // IP 版权 ~ 15% 毛基数
  const expCost = exp * 0.0185;
  const total = baseCost + actorCost + ipCost + expCost;

  // 更新滑杆标签
  document.getElementById('durLabel').textContent = dur + ' 分钟';
  document.getElementById('expLabel').textContent = exp >= 1000 ? (exp/1000).toFixed(1) + ' 千万' : exp + ' 万';
  document.getElementById('actorLabel').textContent = actorsCount + ' 位';

  // 更新费用明细
  document.getElementById('rateBase').textContent = `${dur} 分钟 × ¥3万/分`;
  document.getElementById('valBase').textContent = '¥ ' + baseCost.toFixed(1) + ' 万';

  document.getElementById('rateActors').textContent = actors.length === actorsCount
    ? `按咖位求和 × ${actorsCount} 人`
    : `咖位加权均价 × ${actorsCount} 人`;
  document.getElementById('descActors').textContent = actors.length > 0
    ? `${actorsRealNameList()} · ${actors.length} 位主演`
    : `尚未选择演员`;
  document.getElementById('valActors').textContent = '¥ ' + actorCost.toFixed(1) + ' 万';

  document.getElementById('rateIp').textContent = '15% · 新丽传媒';
  document.getElementById('valIp').textContent = '¥ ' + ipCost.toFixed(1) + ' 万';

  document.getElementById('rateExp').textContent = `CPE × ${exp >= 1000 ? (exp/1000).toFixed(1)+'千' : exp}万`;
  document.getElementById('descExp').textContent = `番外专区推荐位 · 预估 ${exp} 万曝光`;
  document.getElementById('valExp').textContent = '¥ ' + expCost.toFixed(1) + ' 万';

  // 总报价
  const formatted = total.toFixed(1);
  const totalEl = document.getElementById('totalPrice');
  totalEl.innerHTML = `<span class="currency">¥</span>${formatted}<span style="font-size:22px">万</span>`;
  if (pulse) {
    totalEl.classList.remove('pulse');
    void totalEl.offsetWidth;
    totalEl.classList.add('pulse');
  }

  const roi = ((exp * 0.055) / total).toFixed(1);
  const cpe = (expCost * 10000 / (exp * 10000)).toFixed(3);
  document.getElementById('totalFoot').textContent =
    `预估 ROI ${roi}× · 平均 CPE ¥${cpe} · 预计 ${Math.ceil(dur*5)+10} 天内上线`;

  document.getElementById('resultPriceBig').innerHTML =
    `<span class="currency">¥</span>${formatted}<span style="font-size:22px">万</span>`;
  document.getElementById('btnConfirmPrice').textContent = `¥${formatted} 万`;
  const budgetInput = document.getElementById('budgetInput');
  if (document.activeElement !== budgetInput) budgetInput.value = formatted + ' 万';

  // 脉冲反馈
  if (pulse) {
    document.querySelectorAll('.price-row').forEach(r => {
      r.classList.remove('pulse');
      void r.offsetWidth;
      r.classList.add('pulse');
    });
  }

  return total;
}

// ========== Scene rendering ==========
function renderKf(k) {
  if (k.caption) {
    return `<div class="kf">
      <div class="kf-tint ${k.tint}"></div>
      <div class="kf-caption">${k.caption}<small>${k.small || ''}</small></div>
      <div class="kf-tc">${k.tc}</div>
      <div class="kf-label">${k.label}</div>
    </div>`;
  }
  return `<div class="kf">
    <div class="kf-img" style="background-image:url('${k.img}');background-position:center 10%;"></div>
    <div class="kf-tint ${k.tint}"></div>
    ${k.brand ? '<div class="kf-brand-bottle"></div>' : ''}
    ${k.highlight ? `<div class="kf-highlight">${k.highlight}</div>` : ''}
    <div class="kf-tc">${k.tc}</div>
    <div class="kf-label">${k.label}</div>
  </div>`;
}

function renderVariant() {
  const v = variants[state.currentVariant];
  const sb = document.getElementById('storyboard');
  const numChars = ['壹', '贰', '叁', '肆', '伍'];
  sb.innerHTML = v.scenes.map((s, i) => {
    const min = Math.floor(s.dur / 60);
    const sec = s.dur % 60;
    const durTxt = min ? `${min}'${String(sec).padStart(2, '0')}"` : `${sec}"`;
    return `
      <div class="scene">
        <div class="scene-num">${numChars[i] || (i+1)}</div>
        <div class="scene-body">
          <div class="scene-title">${s.title}</div>
          <div class="keyframes">${s.kfs.map(renderKf).join('')}</div>
          <div class="scene-desc">${s.desc}</div>
          <div class="scene-tags">
            ${s.tags.map(t => `<span class="tag ${t.includes('品牌') ? 'tag-primary' : t.includes('情绪') ? 'tag-gold' : 'tag-neutral'}">${t}</span>`).join('')}
          </div>
        </div>
        <div class="scene-right">
          <span class="scene-duration">${durTxt}</span>
          <span class="scene-duration-label">Duration</span>
          <div class="scene-actions">
            <button class="icon-btn" title="重新生成此幕" onclick="showToast('正在重新生成第 ${i+1} 幕…')">⟳</button>
            <button class="icon-btn" title="编辑此幕"   onclick="showToast('进入编辑模式 · 第 ${i+1} 幕')">✎</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 顶部结果卡标题
  document.getElementById('resultTitle').textContent = `${v.title} · 《庆余年》番外`;
  const totalDur = v.scenes.reduce((s, x) => s + x.dur, 0);
  const min = Math.floor(totalDur / 60), sec = totalDur % 60;
  document.getElementById('resultSub').textContent =
    `东方参源 · 人参水 品牌定制 · ${v.scenes.length} 幕 · 总时长 ${min} 分 ${String(sec).padStart(2,'0')} 秒`;
  document.getElementById('storyTitle').textContent = `分幕脚本 · ${v.title}`;
  document.getElementById('stickyVariant').textContent = `${v.label} · ${v.title}`;

  // 审核流演员名
  document.getElementById('apprActors').textContent = v.cast.map(id => charMap[id].actor).join(' / ');

  // C 端手机推荐卡
  document.getElementById('phoneRecTitle').textContent = v.phoneTitle;
  document.getElementById('phoneRecSub').textContent = v.phoneSub;
  document.getElementById('phoneRecImg').style.backgroundImage = `url('${v.phoneImg}')`;
}

// ========== Variant switching ==========
function switchVariant(id) {
  state.currentVariant = id;
  // 切方案 = 切主演阵容 + 切时长 + 切曝光
  const v = variants[id];
  state.selected = new Set(v.cast);
  document.getElementById('durSlider').value = v.duration;
  document.getElementById('expSlider').value = v.baseExposure;
  state.sliderActors = v.cast.length;
  document.getElementById('actorSlider').value = Math.min(5, v.cast.length);

  document.querySelectorAll('.variant').forEach(el => {
    el.classList.toggle('active', el.dataset.variant === id);
  });
  renderChars();
  onCastChanged();
  renderVariant();
  recalcPriceFromSliders();
  showToast(`已切换到${v.label}`);
}

document.getElementById('variantList').addEventListener('click', e => {
  const v = e.target.closest('.variant');
  if (!v) return;
  switchVariant(v.dataset.variant);
});

// ========== Sliders ==========
['durSlider', 'expSlider', 'actorSlider'].forEach(id => {
  document.getElementById(id).addEventListener('input', recalcPriceFromSliders);
});

// 预算反推
document.getElementById('budgetInput').addEventListener('change', e => {
  const val = parseFloat(e.target.value.replace(/[^\d.]/g, ''));
  if (val && val > 10) {
    const baseline = parseFloat(
      document.getElementById('totalPrice').textContent.replace(/[^\d.]/g, '')
    ) || 24.8;
    const ratio = val / baseline;
    const durS = document.getElementById('durSlider');
    const expS = document.getElementById('expSlider');
    durS.value = Math.min(5, Math.max(1, parseFloat(durS.value) * ratio)).toFixed(1);
    expS.value = Math.min(2000, Math.max(100, parseFloat(expS.value) * ratio)).toFixed(0);
    recalcPriceFromSliders();
    showToast(`AI 已按预算 ¥${val.toFixed(1)} 万优化时长与曝光量级`);
  }
});

// ========== Steps: scroll to section ==========
document.getElementById('stepsNav').addEventListener('click', e => {
  const step = e.target.closest('.step');
  if (!step || !step.dataset.target) return;
  // Step 4 (result) 在未生成前不可点击
  if (step.dataset.target === 'sec-result' && !state.generated) {
    showToast('请先在第 3 步点击「✨ AI 生成番外预览」');
    return;
  }
  document.getElementById(step.dataset.target).scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ========== Preset 风格切换 ==========
document.querySelectorAll('.preset').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.preset').forEach(pp => pp.classList.remove('active'));
    p.classList.add('active');
    const name = p.querySelector('.preset-name').textContent;
    if (state.generated) showToast(`风格切换为「${name}」· 可点击「再生成一批」刷新方案`);
  });
});

// ========== Generate flow ==========
const btnGenerate = document.getElementById('btnGenerate');
btnGenerate.addEventListener('click', async () => {
  if (state.selected.size === 0) {
    showToast('⚠️ 请先至少选择 1 个角色');
    document.getElementById('sec-cast').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  await runGenerationAnimation();
  state.generated = true;
  // step 4 变 done
  document.querySelectorAll('#stepsNav .step').forEach((s, i) => {
    s.classList.remove('pending');
    if (i === 3) { s.classList.remove('active'); s.classList.add('done'); }
  });
  // 显示结果
  document.getElementById('sec-result').hidden = false;
  renderVariant();
  recalcPriceFromSliders();
  setTimeout(() => {
    document.getElementById('sec-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
});

async function runGenerationAnimation() {
  const overlay = document.getElementById('genLoading');
  const steps = overlay.querySelectorAll('.gen-step');
  const progress = document.getElementById('genProgress');
  const eta = document.getElementById('genEta');
  steps.forEach(s => s.classList.remove('done', 'doing'));
  progress.style.width = '0%';
  overlay.hidden = false;

  const stages = [
    { pct: 18, ms: 600, eta: '25 秒' },
    { pct: 42, ms: 700, eta: '18 秒' },
    { pct: 68, ms: 800, eta: '10 秒' },
    { pct: 88, ms: 500, eta: '4 秒' },
    { pct: 100, ms: 400, eta: '完成' },
  ];

  for (let i = 0; i < stages.length; i++) {
    steps[i].classList.add('doing');
    await sleep(stages[i].ms);
    steps[i].classList.remove('doing');
    steps[i].classList.add('done');
    progress.style.width = stages[i].pct + '%';
    eta.textContent = '预计 ' + stages[i].eta;
  }
  await sleep(200);
  overlay.hidden = true;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ========== Generic toast buttons ==========
document.body.addEventListener('click', e => {
  const btn = e.target.closest('[data-toast]');
  if (btn) {
    e.preventDefault();
    showToast(btn.dataset.toast);
  }
});

// 返回修改按钮
document.getElementById('btnBack').addEventListener('click', () => {
  document.getElementById('sec-cast').scrollIntoView({ behavior: 'smooth' });
});

// 重新生成按钮
document.getElementById('btnRegenAll').addEventListener('click', async () => {
  await runGenerationAnimation();
  showToast('✓ 已重新生成 3 版候选,已为您自动选中最高匹配度方案');
});
document.getElementById('btnRegenScript').addEventListener('click', async () => {
  showToast('正在重新生成全部分幕…');
  await sleep(800);
  renderVariant();
  showToast('✓ 脚本已更新');
});

// 确认订单
document.getElementById('btnConfirm').addEventListener('click', () => {
  const price = document.getElementById('btnConfirmPrice').textContent;
  showToast(`🎉 订单已进入审核流程 · 金额 ${price} · 7-15 天内上线`, 3500);
});

// ========== Init ==========
renderChars();
onCastChanged();
recalcPriceFromSliders({ pulse: false });
