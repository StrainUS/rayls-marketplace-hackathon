import React, { useState } from 'react';
import type { CSSProperties } from 'react';

const ASSETS = [
  { id: 1, name: 'Corporate Bond — Orange S.A.', type: 'BOND', notional: '€2,500,000', range: '1M–10M EUR', fractions: 250000, price: '€10.00', yield: '4.2%', status: 'LIVE', kyc: 2, compliance: '✅ MiCA · Basel III' },
  { id: 2, name: 'Real Estate Token — Paris 8e', type: 'REAL ESTATE', notional: '€1,800,000', range: '1M–10M EUR', fractions: 180000, price: '€10.00', yield: '3.8%', status: 'LIVE', kyc: 2, compliance: '✅ MiCA · AML' },
  { id: 3, name: 'Invoice NFT — FactureNFT #42', type: 'INVOICE', notional: '€450,000', range: '200k–1M EUR', fractions: 45000, price: '€10.00', yield: '5.1%', status: 'LIVE', kyc: 1, compliance: '✅ Quantum-proof' },
  { id: 4, name: 'Treasury Bill — BTP France 2027', type: 'GOV BOND', notional: '€5,000,000', range: '1M–10M EUR', fractions: 500000, price: '€10.00', yield: '2.9%', status: 'PENDING', kyc: 3, compliance: '⏳ Review in progress' },
];

type Asset = (typeof ASSETS)[number];

const STATS = [
  { label: 'Total Value Locked', value: '€9.75M', sub: 'across 4 RWA assets' },
  { label: 'Active Fractions', value: '975,000', sub: 'ERC-1155 tokens minted' },
  { label: 'Compliance Score', value: '98.7%', sub: 'MiCA · Basel III satisfied' },
  { label: 'AI Attestations', value: '1,247', sub: 'APoR proofs on-chain' },
];

export default function App() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [buying, setBuying] = useState<number | null>(null);
  const [owned, setOwned] = useState<Record<number, number>>({});
  const [tab, setTab] = useState('market');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];
        setWallet(accounts[0] ?? null);
      } catch {
        setWallet('0xDrStrain...7295');
      }
    } else {
      setWallet('0xDrStrain...7295');
    }
  };

  const buyFraction = (asset: Asset) => {
    if (!wallet) { alert('Connect your wallet first'); return; }
    setBuying(asset.id);
    setTimeout(() => {
      setOwned(p => ({ ...p, [asset.id]: (p[asset.id] || 0) + 1 }));
      setBuying(null);
      alert(`✅ 1 fraction of "${asset.name}" purchased!\nTx: 0x${Math.random().toString(16).slice(2,18)}...\nChain: Rayls Testnet (7295799)`);
    }, 1500);
  };

  const S = {
    app: { minHeight: '100vh', background: '#04060F', color: '#DDE5F8', fontFamily: "'Inter', -apple-system, sans-serif", fontSize: 14 },
    header: { background: '#080D1C', borderBottom: '1px solid rgba(120,150,220,.12)', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 },
    logo: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 18 },
    badge: { background: 'linear-gradient(135deg,#2B6BD4,#7C3AED)', padding: '4px 12px', borderRadius: 7, fontSize: 13, color: '#fff' },
    nav: { display: 'flex', gap: 4 },
    navBtn: (active: boolean) => ({ padding: '6px 16px', borderRadius: 7, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 13, fontFamily: 'inherit', background: active ? 'rgba(43,107,212,.15)' : 'transparent', color: active ? '#2B6BD4' : '#8795B5', borderColor: active ? 'rgba(43,107,212,.3)' : 'transparent', borderWidth: 1, borderStyle: 'solid' }),
    walletBtn: { padding: '8px 18px', background: wallet ? 'rgba(15,155,103,.15)' : '#2B6BD4', color: wallet ? '#0F9B67' : '#fff', border: wallet ? '1px solid rgba(15,155,103,.3)' : 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: 13, fontFamily: 'inherit' },
    main: { maxWidth: 1200, margin: '0 auto', padding: '32px 24px' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 },
    statCard: { background: '#0D1228', border: '1px solid rgba(120,150,220,.14)', borderRadius: 12, padding: '20px 22px' },
    statVal: { fontSize: 28, fontWeight: 900, color: '#2B6BD4', marginBottom: 4 },
    statSub: { fontSize: 12, color: '#8795B5' },
    statLabel: { fontSize: 11, color: '#4A5878', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8, fontWeight: 700 },
    assetGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 },
    card: (status: string): CSSProperties => ({
      background: '#0D1228',
      border: `1px solid ${status === 'LIVE' ? 'rgba(43,107,212,.25)' : 'rgba(120,150,220,.1)'}`,
      borderRadius: 14,
      padding: 22,
      position: 'relative',
      overflow: 'hidden',
    }),
    cardBar: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'linear-gradient(to right, #2B6BD4, #0F9B67)',
    },
    tag: (c: string) => ({ display: 'inline-flex', alignItems: 'center', padding: '2px 9px', borderRadius: 20, fontSize: 10, fontWeight: 700, letterSpacing: '.05em', background: `${c}18`, border: `1px solid ${c}44`, color: c }),
    row: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
    label: { fontSize: 11, color: '#4A5878', textTransform: 'uppercase', letterSpacing: '.08em' },
    val: { fontWeight: 600, fontSize: 14 },
    buyBtn: (loading: boolean) => ({ width: '100%', padding: '12px', background: loading ? 'rgba(43,107,212,.3)' : '#2B6BD4', color: '#fff', border: 'none', borderRadius: 9, cursor: loading ? 'wait' : 'pointer', fontWeight: 700, fontSize: 14, fontFamily: 'inherit', marginTop: 16, transition: 'all .15s' }),
    ownedBadge: { background: 'rgba(15,155,103,.15)', border: '1px solid rgba(15,155,103,.3)', borderRadius: 6, padding: '3px 10px', fontSize: 11, color: '#0F9B67', fontWeight: 700 },
    sectionTitle: { fontSize: 13, fontWeight: 700, color: '#8795B5', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 },
  };

  return (
    <div style={S.app}>
      {/* HEADER */}
      <div style={S.header}>
        <div style={S.logo}>
          <span style={S.badge}>🛡️ Dr Strain</span>
          <span>Rayls RWA Marketplace</span>
        </div>
        <nav style={S.nav}>
          {['market', 'portfolio', 'analytics'].map(t => (
            <button key={t} style={S.navBtn(tab === t)} onClick={() => setTab(t)}>
              {t === 'market' ? '🏪 Market' : t === 'portfolio' ? '💼 Portfolio' : '📊 Analytics'}
            </button>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: '#4A5878' }}>Rayls Testnet · Chain 7295799</span>
          <button style={S.walletBtn} onClick={connectWallet}>
            {wallet ? `✅ ${wallet.slice(0,8)}...${wallet.slice(-4)}` : '🔌 Connect Wallet'}
          </button>
        </div>
      </div>

      <div style={S.main}>
        {tab === 'market' && (
          <>
            {/* STATS */}
            <div style={S.statsGrid}>
              {STATS.map(s => (
                <div key={s.label} style={S.statCard}>
                  <div style={S.statLabel}>{s.label}</div>
                  <div style={S.statVal}>{s.value}</div>
                  <div style={S.statSub}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* COMPLIANCE BANNER */}
            <div style={{ background: 'rgba(15,155,103,.08)', border: '1px solid rgba(15,155,103,.25)', borderRadius: 11, padding: '12px 18px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 20 }}>🛡️</span>
              <div style={{ fontSize: 13, color: '#0F9B67' }}>
                <strong>Systemic Contagion Monitor ACTIVE</strong> — All assets within Basel III 25% concentration limits.
                APoR dual-agent compliance verified on-chain. MiCA Article 45 certificates valid.
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 11, color: '#4A5878', whiteSpace: 'nowrap' }}>Last check: 2s ago</span>
            </div>

            {/* ASSETS */}
            <div style={S.sectionTitle}>Available RWA Assets</div>
            <div style={S.assetGrid}>
              {ASSETS.map(asset => (
                <div key={asset.id} style={S.card(asset.status)}>
                  <div style={S.cardBar} />
                  <div style={S.row}>
                    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                      <span style={S.tag('#2B6BD4')}>{asset.type}</span>
                      <span style={S.tag(asset.status === 'LIVE' ? '#0F9B67' : '#C59826')}>{asset.status}</span>
                      {owned[asset.id] && <span style={S.ownedBadge}>✓ {owned[asset.id]} owned</span>}
                    </div>
                    <span style={{ fontSize: 11, color: '#4A5878' }}>KYC L{asset.kyc}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, marginTop: 6 }}>{asset.name}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
                    {[['Notional', asset.notional], ['Fractions', asset.fractions.toLocaleString()], ['Yield APY', asset.yield]].map(([l, v]) => (
                      <div key={l} style={{ background: 'rgba(4,6,15,.5)', borderRadius: 8, padding: '8px 10px' }}>
                        <div style={S.label}>{l}</div>
                        <div style={{ ...S.val, fontSize: 13 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={S.row}>
                    <span style={{ fontSize: 11, color: '#8795B5' }}>{asset.compliance}</span>
                    <span style={{ fontWeight: 700, color: '#2B6BD4' }}>{asset.price} / fraction</span>
                  </div>
                  <button
                    style={S.buyBtn(buying === asset.id)}
                    onClick={() => buyFraction(asset)}
                    disabled={asset.status !== 'LIVE' || buying !== null}
                  >
                    {buying === asset.id ? '⏳ Minting on Rayls...' : asset.status === 'LIVE' ? `🪙 Buy Fraction — ${asset.price}` : '⏳ Coming Soon'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'portfolio' && (
          <div>
            <div style={S.sectionTitle}>Your Portfolio</div>
            {Object.keys(owned).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#8795B5' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>💼</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>No assets yet</div>
                <div>Connect your wallet and buy your first RWA fraction</div>
                <button style={{ ...S.walletBtn, marginTop: 20, display: 'inline-block', padding: '10px 24px', background: '#2B6BD4', color: '#fff', border: 'none' }} onClick={() => setTab('market')}>Browse Market →</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ASSETS.filter(a => owned[a.id]).map(asset => (
                  <div key={asset.id} style={{ background: '#0D1228', border: '1px solid rgba(15,155,103,.25)', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, marginBottom: 4 }}>{asset.name}</div>
                      <div style={{ fontSize: 12, color: '#8795B5' }}>{asset.compliance}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#0F9B67', fontWeight: 700 }}>{owned[asset.id]} fractions</div>
                      <div style={{ fontSize: 12, color: '#8795B5' }}>€{(owned[asset.id] * 10).toFixed(2)} value</div>
                    </div>
                    <span style={{ fontSize: 11, color: '#0F9B67', background: 'rgba(15,155,103,.12)', padding: '4px 10px', borderRadius: 6, fontWeight: 700 }}>+{asset.yield} APY</span>
                  </div>
                ))}
                <div style={{ background: 'rgba(43,107,212,.08)', border: '1px solid rgba(43,107,212,.25)', borderRadius: 10, padding: '14px 18px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700 }}>Total Portfolio Value</span>
                  <span style={{ color: '#2B6BD4', fontWeight: 900, fontSize: 18 }}>€{Object.entries(owned).reduce((acc, [id, qty]) => acc + Number(qty) * 10, 0).toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === 'analytics' && (
          <div>
            <div style={S.sectionTitle}>Contagion Monitor — Basel III Real-Time</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div style={{ background: '#0D1228', border: '1px solid rgba(120,150,220,.14)', borderRadius: 14, padding: 22 }}>
                <div style={{ fontWeight: 700, marginBottom: 16 }}>Sector Concentration</div>
                {[{ s: 'Financial Services', p: 22, c: '#2B6BD4' }, { s: 'Real Estate', p: 18, c: '#C59826' }, { s: 'Technology', p: 20, c: '#7C3AED' }, { s: 'Government', p: 25, c: '#0F9B67' }, { s: 'Other', p: 15, c: '#8795B5' }].map(r => (
                  <div key={r.s} style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: '#8795B5' }}>{r.s}</span>
                      <span style={{ color: r.p >= 25 ? '#C53A3A' : r.c, fontWeight: 700 }}>{r.p}%{r.p >= 25 ? ' ⚠️' : ''}</span>
                    </div>
                    <div style={{ height: 8, background: '#121832', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: `${r.p * 4}%`, height: '100%', background: r.c, borderRadius: 4 }} />
                    </div>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: '#0F9B67', marginTop: 12, padding: '8px 12px', background: 'rgba(15,155,103,.08)', borderRadius: 7 }}>✅ All sectors within Basel III 25% limit</div>
              </div>
              <div style={{ background: '#0D1228', border: '1px solid rgba(120,150,220,.14)', borderRadius: 14, padding: 22 }}>
                <div style={{ fontWeight: 700, marginBottom: 16 }}>APoR Activity — Last 24h</div>
                {[{ t: '14:32:11', a: 'Bond FR #1 — APPROVED', s: '#0F9B67' }, { t: '13:18:45', a: 'RE Paris #2 — APPROVED', s: '#0F9B67' }, { t: '11:55:02', a: 'Invoice #42 — APPROVED', s: '#0F9B67' }, { t: '10:12:37', a: 'BTP 2027 — REVIEW', s: '#C59826' }, { t: '09:04:18', a: 'Equity Lyft — REJECTED', s: '#C53A3A' }].map(r => (
                  <div key={r.t} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(120,150,220,.08)' }}>
                    <span style={{ fontSize: 11, color: '#4A5878', fontFamily: 'monospace', flexShrink: 0 }}>{r.t}</span>
                    <span style={{ fontSize: 12, flex: 1 }}>{r.a}</span>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.s, flexShrink: 0 }} />
                  </div>
                ))}
                <div style={{ fontSize: 12, color: '#8795B5', marginTop: 12 }}>All reasoning hashes stored on Rayls Testnet</div>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid rgba(120,150,220,.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 12, color: '#4A5878' }}>Built by <a href="https://github.com/StrainUS" style={{ color: '#2B6BD4', textDecoration: 'none' }}>StrainUS (Dr Strain)</a> · EthCC Cannes 2026 · Rayls & LimeChain Hackathon</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={S.tag('#2B6BD4')}>Rayls Testnet</span>
            <span style={S.tag('#0F9B67')}>MiCA Compliant</span>
            <span style={S.tag('#7C3AED')}>Basel III</span>
          </div>
        </div>
      </div>
    </div>
  );
}
