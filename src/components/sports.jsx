import React, { useState } from 'react'
import { Link } from 'react-router'

import { newsData } from '../data/newsData'

const times = ['২১ মিনিট আগে', '১ ঘণ্টা আগে', '২ ঘণ্টা আগে', '৩ ঘণ্টা আগে', '৪ ঘণ্টা আগে', '৫ ঘণ্টা আগে']

const tabConfig = {
  pothhit: { label: 'পঠিত', category: 'desh' },
  alochit: { label: 'আলোচিত', category: 'international' },
  sukhobor: { label: 'সুখবর', category: 'sports' },
}

// ---- Sub-components ----

const RankedList = ({ items }) => (
  <div style={{ padding: '0 12px' }}>
    {items.map((item, i) => (
      <Link
        key={item.id}
        to={`/news/news/${item.id}`}
        style={{
          display: 'flex',
          gap: 10,
          padding: '10px 0',
          borderBottom: '1px solid var(--sports-soft-line)',
          alignItems: 'flex-start',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            fontSize: 22,
            color: 'var(--sports-rank)',
            fontWeight: 700,
            minWidth: 26,
            lineHeight: 1.1,
            fontFamily: 'serif',
          }}
        >
          {toBanglaNum(i + 1)}
        </span>
        <span style={{ fontSize: 19, color: 'var(--sports-text)', lineHeight: 1.6, flex: 1 }}>
          {item.title}
        </span>
      </Link>
    ))}
  </div>
)

const HeroCard = ({ item }) => (
  <Link to={`/news/news/${item.id}`} style={{ position: 'relative', marginBottom: 12, cursor: 'pointer', display: 'block' }}>
    <img
      src={item.img}
      alt={item.title}
      style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
        padding: '24px 14px 14px',
      }}
    >
      <div style={{ color: '#fff', fontSize: 28, fontWeight: 700, lineHeight: 1.5 }}>
        {item.title}
      </div>
      <div style={{ color: '#ccc', fontSize: 11, marginTop: 4 }}>{times[0]}</div>
    </div>
  </Link>
)

const SubCard = ({ item, timeIndex }) => (
  <Link to={`/news/news/${item.id}`} style={{ cursor: 'pointer', display: 'block' }}>
    <img
      src={item.img}
      alt={item.title}
      style={{ width: '100%', height: 130, objectFit: 'cover', display: 'block' }}
    />
    <div style={{ fontSize: 17, color: 'var(--sports-text)', lineHeight: 1.5, padding: '6px 2px 0', fontWeight: 600 }}>
      {item.title}
    </div>
    <div style={{ fontSize: 11, color: 'var(--sports-muted)', marginTop: 3, padding: '0 2px' }}>
      {times[timeIndex]}
    </div>
  </Link>
)

const RightCard = ({ item, isLive }) => (
  <Link
    to={`/news/news/${item.id}`}
    style={{
      display: 'flex',
      gap: 8,
      padding: '8px 0',
      borderBottom: '1px solid var(--sports-soft-line)',
      alignItems: 'flex-start',
      cursor: 'pointer',
    }}
  >
    <div style={{ flex: 1 }}>
      {isLive && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 3 }}>
          <LiveDot />
          <span style={{ color: '#d0021b', fontSize: 10, fontWeight: 700 }}>সরাসরি</span>
        </div>
      )}
      <div style={{ fontSize: 17, color: 'var(--sports-text)', lineHeight: 1.5, fontWeight: 600 }}>
        {item.title}
      </div>
    </div>
    <img
      src={item.img}
      alt={item.title}
      style={{ width: 70, height: 52, objectFit: 'cover', flexShrink: 0 }}
    />
  </Link>
)

const LiveDot = () => (
  <span
    style={{
      display: 'inline-block',
      width: 7,
      height: 7,
      background: '#d0021b',
      borderRadius: '50%',
      animation: 'pulse 1.2s infinite',
    }}
  />
)

// ---- Helpers ----

function toBanglaNum(n) {
  const d = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
  return String(n)
    .split('')
    .map((c) => d[parseInt(c)] ?? c)
    .join('')
}

// ---- Main Component ----

const Sports = () => {
  const [activeTab, setActiveTab] = useState('pothhit')

  const sportsNews = newsData.filter((n) => n.category === 'sports')
  const heroNews = sportsNews[0]
  const subNews = sportsNews.slice(1, 3)
  const rightNews = sportsNews.slice(3, 7)

  const tabItems = newsData
    .filter((n) => n.category === tabConfig[activeTab].category)
    .slice(0, 5)

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .rank-item:hover span:last-child { color: #d0021b; }
        .tab-btn { transition: color 0.2s, border-color 0.2s; }
        .tab-btn:hover { color: #d0021b !important; }
        .sports-section {
          --sports-heading: #111;
          --sports-text: #222;
          --sports-muted: #888;
          --sports-rank: #ccc;
          --sports-tab: #555;
          --sports-line: #e0e0e0;
          --sports-soft-line: #f0f0f0;
        }
        .dark .sports-section {
          --sports-heading: #f8fafc;
          --sports-text: #e5e7eb;
          --sports-muted: #94a3b8;
          --sports-rank: #64748b;
          --sports-tab: #cbd5e1;
          --sports-line: rgba(148, 163, 184, 0.36);
          --sports-soft-line: rgba(148, 163, 184, 0.24);
        }
      `}</style>

     <div
        className="sports-section
          grid
          grid-cols-1
         
          xl:grid-cols-[240px_1fr_245px]
          border-t-2 border-[#07186b]
          max-w-[1230px]
          mx-auto
          mt-6
          gap-6
        "
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ borderRight: '1px solid var(--sports-line)', padding: '12px 0' }}>
          {/* Tab Bar */}
          <div
            style={{
              display: 'flex',
              
              margin: '0 12px 10px',
            }}
          >
            {Object.entries(tabConfig).map(([key, { label }]) => (
              <button
                key={key}
                className="tab-btn"
                onClick={() => setActiveTab(key)}
                style={{
                  flex: 1,
                  padding: '7px 4px',
                  fontSize: 13,
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === key ? '2px solid #d0021b' : '2px solid transparent',
                  marginBottom: -2,
                  cursor: 'pointer',
                  color: activeTab === key ? '#d0021b' : 'var(--sports-tab)',
                  fontWeight: activeTab === key ? 700 : 500,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Ranked list */}
          <RankedList items={tabItems} />
        </div>

        {/* ── CENTER COLUMN ── */}
        <div style={{ padding: '12px 16px', borderRight: '1px solid var(--sports-line)' }}>
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: '1px solid var(--sports-line)',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: '#d0021b',
                borderRadius: '50%',
              }}
            />
            <span style={{ fontSize: 18, fontWeight: 700, color: '#111' }}>খেলা</span>
          </div>

          {/* Hero Card */}
          <HeroCard item={heroNews} />

          {/* Sub Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {subNews.map((item, i) => (
              <SubCard key={item.id} item={item} timeIndex={i + 1} />
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ padding: '12px 8px' }}>
          {rightNews.map((item, i) => (
            <RightCard key={item.id} item={item} isLive={i === 0} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Sports
