"use client";
import { useState } from "react";

const sections = [
  {
    id: "safe",
    emoji: "🏛️",
    title: "SAFE Act",
    color: "#1a3a5c",
    accent: "#4a9eff",
    items: [
      {
        title: "SAFE Act Basics",
        mnemonic: "🧠 'SAFE = State + Federal Together'",
        facts: [
          "Signed into law: July 30, 2008",
          "Effective date: August 1, 2009 (states had 1 year)",
          "Full name: Secure and Fair Enforcement for Mortgage Licensing Act",
          "Purpose: Create nationwide licensing/registration system for MLOs",
          "Administered by: CFPB (since Dodd-Frank 2011)",
          "Registry: NMLS (Nationwide Multistate Licensing System)",
        ],
      },
      {
        title: "Who Needs a License?",
        mnemonic: "🧠 'ROME' = Residential, Originate, Money, Employment",
        facts: [
          "MLO = takes residential mortgage loan applications AND offers/negotiates terms",
          "Must be licensed if employed by non-bank (state-chartered)",
          "Must be registered if employed by federally chartered bank/credit union",
          "Loan Processors: Generally do NOT need license (if clerical only)",
          "Underwriters: Generally do NOT need license",
          "Exceptions: If processor exercises independent judgment = needs license",
        ],
      },
      {
        title: "License Requirements",
        mnemonic: "🧠 '20-3-8-80' — Numbers to Tattoo on Your Brain",
        facts: [
          "20 hours pre-licensing education (REQUIRED)",
          "  → 3 hrs federal law, 3 hrs ethics, 2 hrs non-traditional lending",
          "  → 12 hrs electives",
          "8 hours annual continuing education",
          "  → 3 hrs federal law, 2 hrs ethics, 2 hrs non-traditional, 1 hr elective",
          "75% passing score on SAFE MLO test",
          "Background check + credit report required",
          "Can retake exam: 3 attempts → 30-day wait → 3 more → 6-month wait",
        ],
      },
      {
        title: "Surety Bond & Net Worth",
        mnemonic: "🧠 'Bond = Protection for Borrowers'",
        facts: [
          "States set their own surety bond amounts",
          "Purpose: Protect consumers from MLO fraud/misconduct",
          "Unique identifier: Required on all loan documents",
          "License renewal: Annual (Dec 31 deadline typical)",
          "Temporary authority: 120 days if changing from bank to non-bank",
        ],
      },
    ],
  },
  {
    id: "trid",
    emoji: "📋",
    title: "TRID (RESPA/TILA)",
    color: "#1a3a2a",
    accent: "#4aff8a",
    items: [
      {
        title: "TRID Key Dates & Numbers",
        mnemonic: "🧠 '3-3-3-7-3' = TRID Timeline",
        facts: [
          "Loan Estimate: Delivered within 3 business days of application",
          "Loan Estimate: Valid for 10 business days (borrower can accept)",
          "Closing Disclosure: Delivered 3 business days BEFORE closing",
          "Right to rescind: 3 business days after closing (refinance only)",
          "Tolerance: 0% on origination charges (zero tolerance)",
          "Tolerance: 10% on certain third-party services",
          "Tolerance: Unlimited on non-required services borrower shops for",
        ],
      },
      {
        title: "6 Triggers for Application (ALIENS)",
        mnemonic: "🧠 'ALIENS' = triggers complete application",
        facts: [
          "A – Address of property",
          "L – Loan amount",
          "I – Income",
          "E – Estimated value of property",
          "N – Name of borrower",
          "S – Social Security Number",
          "→ Once all 6 collected = APPLICATION EXISTS → 3-day clock starts",
        ],
      },
      {
        title: "RESPA Prohibited Acts",
        mnemonic: "🧠 'No KicKs' = No Kickbacks",
        facts: [
          "Section 8: Prohibits kickbacks and unearned fees",
          "Section 9: Seller cannot require use of specific title company",
          "Section 10: Limits escrow account cushion to 2 months",
          "AfBA (Affiliated Business Arrangement): Must disclose, cannot require use",
          "Penalty Section 8: Up to $10,000 fine + 1 year prison",
          "Applies to: Federally related mortgage loans (most residential loans)",
        ],
      },
      {
        title: "APR & Finance Charge",
        mnemonic: "🧠 'APR = All Prepaid Rates included'",
        facts: [
          "APR must be accurate within 1/8% (0.125%) — tolerance",
          "Finance charge INCLUDES: points, origination fees, PMI, most closing costs",
          "Finance charge EXCLUDES: appraisal, credit report, title fees (sometimes)",
          "Right of Rescission: Owner-occupied, non-purchase, refinance = 3 days",
          "Extended Rescission: If disclosures never given = 3 YEARS",
          "TILA requires: Disclosure of APR, finance charge, amount financed, total payments",
        ],
      },
    ],
  },
  {
    id: "ecoa",
    emoji: "⚖️",
    title: "Fair Lending Laws",
    color: "#3a1a3a",
    accent: "#ff4adf",
    items: [
      {
        title: "ECOA (Equal Credit Opportunity Act)",
        mnemonic: "🧠 'RACE MAN' = Protected Classes",
        facts: [
          "R – Race",
          "A – Age (if 18+, cannot be used adversely)",
          "C – Color",
          "E – Exercise of rights under Consumer Protection Act",
          "M – Marital status",
          "A – Alimony/child support (must consider if disclosed)",
          "N – National origin",
          "Also: Religion, Sex, Receipt of public assistance",
          "Adverse Action Notice: 30 days to notify of denial",
          "Recordkeeping: 25 months for applications",
        ],
      },
      {
        title: "Fair Housing Act",
        mnemonic: "🧠 '7 Classes: Race, Color, Religion, National Origin, Sex, Familial Status, Disability'",
        facts: [
          "Race, Color, Religion, National Origin",
          "Sex (gender)",
          "Familial status (families with children under 18)",
          "Handicap/Disability",
          "DOES NOT include: age, marital status (federally)",
          "Steering: Illegal to direct buyers to certain neighborhoods by race",
          "Redlining: Illegal to deny credit in certain geographic areas",
          "Blockbusting: Inducing panic selling based on protected class",
        ],
      },
      {
        title: "CRA & HMDA",
        mnemonic: "🧠 'HMDA = Home Mortgage Data Act = Data Only'",
        facts: [
          "HMDA: Requires lenders to collect/report mortgage data",
          "HMDA does NOT prohibit discrimination — just collects data",
          "CRA: Encourages banks to meet credit needs of entire community",
          "CRA ratings: Outstanding, Satisfactory, Needs to Improve, Substantial Non-Compliance",
          "HMDA Triggers: $54 million asset threshold (federally insured banks)",
          "LAR: Loan Application Register — annual submission required",
        ],
      },
      {
        title: "Types of Discrimination",
        mnemonic: "🧠 '3 D's of Discrimination'",
        facts: [
          "1. Disparate Treatment: Treating similarly situated people differently (intent)",
          "2. Disparate Impact: Neutral policy with discriminatory effect",
          "3. Redlining: Refusing to lend in certain geographic areas",
          "Reverse Redlining: Targeting minority areas with predatory loans",
          "Steering: Directing buyers/borrowers based on protected class",
          "Blockbusting: Inducing panic selling by suggesting minorities moving in",
        ],
      },
    ],
  },
  {
    id: "conventional",
    emoji: "🏠",
    title: "Loan Types & Guidelines",
    color: "#2a2a1a",
    accent: "#ffcc4a",
    items: [
      {
        title: "Conventional Loans",
        mnemonic: "🧠 '80/20/28/36' = Magic Numbers",
        facts: [
          "Conforming loan limit 2024: $766,550 (1-unit)",
          "High-cost areas: up to $1,149,825",
          "PMI required if LTV > 80% (less than 20% down)",
          "PMI cancellation: Borrower request at 80% LTV; auto cancel at 78% LTV",
          "DTI: Typically 28% front-end / 36% back-end (conventional guideline)",
          "Fannie Mae (FNMA) & Freddie Mac (FHLMC) = GSEs = buy conventional loans",
        ],
      },
      {
        title: "FHA Loans",
        mnemonic: "🧠 'FHA = 3.5% down, 580 score, MIP forever'",
        facts: [
          "Min down payment: 3.5% (credit score 580+)",
          "Min down payment: 10% (credit score 500-579)",
          "MIP Upfront: 1.75% of loan amount",
          "MIP Annual: 0.55% to 1.05% (varies by term/LTV)",
          "MIP Duration: Life of loan if down payment < 10%",
          "MIP Duration: 11 years if down payment ≥ 10%",
          "Max DTI: 43% typically",
          "FHA insured by: HUD (Dept of Housing and Urban Development)",
        ],
      },
      {
        title: "VA Loans",
        mnemonic: "🧠 'VA = Veterans get 0% down, no PMI, Funding Fee'",
        facts: [
          "Down payment: $0 (100% financing)",
          "PMI: NONE",
          "Funding fee: 2.15% (first use, no down payment) — varies",
          "Funding fee waived for: disabled veterans",
          "Certificate of Eligibility (COE): Required",
          "No loan limit if full entitlement (post 2020)",
        ],
      },
      {
        title: "USDA Loans",
        mnemonic: "🧠 'USDA = Rural + 0% down + income limits'",
        facts: [
          "Down payment: 0%",
          "Upfront guarantee fee: 1% of loan",
          "Annual fee: 0.35% of outstanding balance",
          "Income limit: 115% of area median income",
          "Property must be in: Eligible rural area",
          "Administered by: US Dept of Agriculture",
        ],
      },
    ],
  },
  {
    id: "underwriting",
    emoji: "🔢",
    title: "Underwriting & Income",
    color: "#1a2a3a",
    accent: "#4ad4ff",
    items: [
      {
        title: "The 4 C's of Credit",
        mnemonic: "🧠 'CCCC = 4 C's Every Underwriter Checks'",
        facts: [
          "1. Credit History: FICO score, payment history, derogatory marks",
          "2. Capacity: Ability to repay — income vs. debt (DTI)",
          "3. Capital: Assets, savings, reserves",
          "4. Collateral: Property value (LTV ratio)",
          "FICO range: 300-850 (higher = better)",
          "Min score conventional: 620-640 typically",
        ],
      },
      {
        title: "DTI Ratios",
        mnemonic: "🧠 'Front = Housing only, Back = All debts'",
        facts: [
          "Front-end DTI: PITI / Gross Monthly Income",
          "PITI = Principal, Interest, Taxes, Insurance",
          "Back-end DTI: (PITI + all monthly debts) / Gross Monthly Income",
          "Conventional: 28% front / 36% back (guideline)",
          "FHA: 31% front / 43% back",
          "VA: No front-end, 41% back-end guideline",
          "USDA: 29% front / 41% back",
          "QM rule: Max 43% DTI for Qualified Mortgage",
        ],
      },
      {
        title: "Income Calculations",
        mnemonic: "🧠 'Self-employed = 2 years, divide by 24'",
        facts: [
          "W-2 employee: Base salary (current pay stub + W-2)",
          "Overtime/bonus: 2-year average if consistent",
          "Self-employed: 2 years tax returns ÷ 24 months",
          "Commission: 2-year average",
          "Rental income: 75% of gross rent (vacancy factor)",
          "Social Security: Grossed up 125% (non-taxable income)",
          "Child support/alimony: 3 years continuance required",
        ],
      },
      {
        title: "LTV & CLTV",
        mnemonic: "🧠 'LTV = Loan ÷ Value, CLTV = all loans ÷ Value'",
        facts: [
          "LTV = Loan Amount / Appraised Value (or Purchase Price, whichever LOWER)",
          "CLTV = Combined LTV (1st + 2nd mortgage) / Value",
          "80% LTV = 20% equity = no PMI threshold",
          "97% LTV = 3% down (Fannie/Freddie HomeReady programs)",
          "Appraisal: Uniform Residential Appraisal Report (URAR) Form 1004",
        ],
      },
    ],
  },
  {
    id: "regulations",
    emoji: "📜",
    title: "Key Regulations & Numbers",
    color: "#2a1a1a",
    accent: "#ff7a4a",
    items: [
      {
        title: "Critical Dollar Amounts",
        mnemonic: "🧠 'Memorize these or lose points!'",
        facts: [
          "HOEPA High Cost: APR > 6.5% above APOR (1st lien)",
          "HOEPA Points & Fees: > 5% of loan amount",
          "RESPA Section 10 escrow cushion: 2 months max",
          "PMI auto-cancel: 78% LTV (22% equity)",
          "Section 8 (RESPA) penalty: Up to $10,000 + 1 year prison",
        ],
      },
      {
        title: "Qualified Mortgage (QM) Rules",
        mnemonic: "🧠 'QM = Safe Harbor, 43% DTI, No bad features'",
        facts: [
          "QM requires: Lender must verify Ability to Repay (ATR)",
          "Max DTI: 43% for standard QM",
          "Max loan term: 30 years",
          "No negative amortization",
          "No interest-only periods",
          "No balloon payments (except rural/small creditor)",
          "Points and fees: Max 3% of loan amount",
        ],
      },
      {
        title: "Dodd-Frank Key Provisions",
        mnemonic: "🧠 'Dodd-Frank 2010 = Consumer Protection'",
        facts: [
          "Signed: July 21, 2010",
          "Created: CFPB (Consumer Financial Protection Bureau)",
          "MLO compensation: Cannot be based on loan terms (Reg Z)",
          "Dual compensation: MLO cannot receive both lender and borrower compensation",
          "Steering: Cannot steer to high-cost loan if lower-cost available",
        ],
      },
      {
        title: "Privacy Laws",
        mnemonic: "🧠 'GLB = Give Borrowers their Privacy Notice'",
        facts: [
          "Gramm-Leach-Bliley (GLB): Requires annual privacy notice",
          "Right to opt out: Of sharing with non-affiliated third parties",
          "Red Flags Rule: Must have identity theft detection program",
          "FACTA: Consumers can get free annual credit report",
          "FCRA: Governs credit reporting, adverse action notices",
        ],
      },
    ],
  },
  {
    id: "mortgage_types",
    emoji: "💰",
    title: "Mortgage Products",
    color: "#1a3a3a",
    accent: "#4affee",
    items: [
      {
        title: "ARM Loans — Critical Terms",
        mnemonic: "🧠 '5/1 ARM = Fixed 5, adjusts every 1 year'",
        facts: [
          "Index: Benchmark rate (SOFR, CMT) — the base",
          "Margin: Lender's profit added to index (fixed throughout loan)",
          "Fully Indexed Rate = Index + Margin",
          "2/2/5 ARM: First adjust max 2%, each adjust max 2%, lifetime max 5%",
          "Teaser rate: Below-market initial rate",
        ],
      },
      {
        title: "Loan Features to Know",
        mnemonic: "🧠 'Neg Am = BAD, Balloon = RISKY, Prepay = COSTLY'",
        facts: [
          "Negative amortization: Payment less than interest = balance INCREASES",
          "Balloon: Large final payment (e.g., 5/25 = 5-year balloon)",
          "Prepayment penalty: Hard = any prepay; Soft = only refinance",
          "Interest-only: Pay only interest for set period, then fully amortize",
          "Buydown: 3-2-1 = rate reduced 3%, 2%, 1% for first 3 years",
        ],
      },
      {
        title: "Second Mortgages & HELOCs",
        mnemonic: "🧠 'HELOC = Credit Card secured by home'",
        facts: [
          "HELOC: Home Equity Line of Credit — revolving credit",
          "Draw period: Typically 10 years",
          "Repayment period: Typically 20 years",
          "Piggyback: 80/10/10 = 80% 1st, 10% 2nd, 10% down (avoids PMI)",
        ],
      },
      {
        title: "Reverse Mortgages",
        mnemonic: "🧠 'HECM = HUD-insured reverse mortgage for 62+'",
        facts: [
          "HECM: Home Equity Conversion Mortgage (FHA insured)",
          "Age requirement: 62 or older",
          "No monthly payment required by borrower",
          "Repayment triggered: Sale, death, moving out, non-occupancy 12 months",
          "Counseling: HUD-approved counseling REQUIRED",
          "MIP: 2% upfront + 0.5% annual",
        ],
      },
    ],
  },
  {
    id: "closing",
    emoji: "🔑",
    title: "Closing & Title",
    color: "#2a1a3a",
    accent: "#c44aff",
    items: [
      {
        title: "Title Insurance",
        mnemonic: "🧠 'Owner pays once, protects forever'",
        facts: [
          "Lender's title policy: Protects lender — required for most loans",
          "Owner's title policy: Protects buyer — optional but recommended",
          "Chain of title: History of property ownership",
          "Cloud on title: Any claim/lien that affects clear title",
          "Quiet title action: Court action to clear title dispute",
        ],
      },
      {
        title: "Deed Types",
        mnemonic: "🧠 'General = Most protection, Quitclaim = Least'",
        facts: [
          "General Warranty Deed: Warrants title against ALL claims (most protection)",
          "Special Warranty Deed: Warrants only claims during grantor's ownership",
          "Bargain and Sale Deed: No warranties (common in foreclosures)",
          "Quitclaim Deed: No warranties — conveys whatever interest grantor has",
          "Deed of Trust: 3 parties (trustor, trustee, beneficiary)",
        ],
      },
      {
        title: "Escrow & Closing Costs",
        mnemonic: "🧠 'PITI goes into escrow every month'",
        facts: [
          "Escrow account: Holds funds for taxes and insurance",
          "Initial escrow deposit: Can require up to 2 months as cushion",
          "Origination charges: Zero tolerance (cannot increase at closing)",
          "Recording fees: Zero tolerance",
          "Proration: Dividing ongoing costs between buyer/seller",
        ],
      },
    ],
  },
];

const quickFacts = [
  { q: "SAFE Act signed", a: "July 30, 2008" },
  { q: "Pre-licensing hours", a: "20 hours total" },
  { q: "CE hours annual", a: "8 hours" },
  { q: "SAFE test passing score", a: "75%" },
  { q: "Loan Estimate delivery", a: "3 business days after application" },
  { q: "Closing Disclosure delivery", a: "3 business days before closing" },
  { q: "Right of rescission", a: "3 business days (refi only)" },
  { q: "FHA min down payment", a: "3.5% (580+ score)" },
  { q: "FHA upfront MIP", a: "1.75%" },
  { q: "VA down payment", a: "0%" },
  { q: "USDA down payment", a: "0%" },
  { q: "Conforming loan limit 2024", a: "$766,550" },
  { q: "PMI auto-cancel LTV", a: "78%" },
  { q: "Max QM DTI", a: "43%" },
  { q: "RESPA escrow cushion max", a: "2 months" },
  { q: "Adverse action notice", a: "30 days" },
  { q: "ECOA recordkeeping", a: "25 months" },
  { q: "Reverse mortgage min age", a: "62 years old" },
  { q: "HECM upfront MIP", a: "2%" },
  { q: "Temporary MLO authority", a: "120 days" },
];

export default function NMLSStudyGuide() {
  const [activeSection, setActiveSection] = useState(null);
  const [revealed, setRevealed] = useState({});
  const [activeTab, setActiveTab] = useState("sections");

  const toggleReveal = (idx) => {
    setRevealed((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const revealAll = () => {
    const all = {};
    quickFacts.forEach((_, i) => { all[i] = true; });
    setRevealed(all);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", fontFamily: "Georgia, serif", color: "#e8e4d9", padding: 0 }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "40px 24px 32px",
        textAlign: "center",
        borderBottom: "2px solid #4a9eff33",
        position: "relative",
      }}>
        <div style={{ fontSize: "13px", letterSpacing: "4px", color: "#4a9eff", textTransform: "uppercase", marginBottom: "12px" }}>
          NMLS SAFE ACT EXAM
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, margin: "0 0 8px",
          background: "linear-gradient(90deg, #fff, #4a9eff, #fff)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-1px",
        }}>
          MUST-MEMORIZE GUIDE
        </h1>
        <p style={{ color: "#aaa", fontSize: "15px", margin: "0 0 24px" }}>
          시험 전날 완전 정복 — Key Facts + Memory Tricks
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          {["sections", "flashcards"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "10px 24px", borderRadius: "100px",
              border: activeTab === tab ? "2px solid #4a9eff" : "2px solid #333",
              background: activeTab === tab ? "#4a9eff22" : "transparent",
              color: activeTab === tab ? "#4a9eff" : "#888",
              fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
              cursor: "pointer", fontFamily: "Georgia, serif", transition: "all 0.2s",
            }}>
              {tab === "sections" ? "📚 Study Sections" : "⚡ Quick Flashcards"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px 100px" }}>
        {activeTab === "sections" && (
          <>
            {sections.map((section) => (
              <div key={section.id} style={{ marginBottom: "12px" }}>
                <button
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  style={{
                    width: "100%",
                    background: activeSection === section.id ? `linear-gradient(135deg, ${section.color}, #0a0a0f)` : "#111118",
                    border: `1px solid ${activeSection === section.id ? section.accent + "66" : "#222"}`,
                    borderRadius: "12px", padding: "18px 20px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "12px", textAlign: "left",
                    transition: "all 0.3s", color: "#e8e4d9",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{section.emoji}</span>
                  <span style={{ flex: 1, fontSize: "18px", fontWeight: 700, color: activeSection === section.id ? section.accent : "#ddd" }}>
                    {section.title}
                  </span>
                  <span style={{
                    fontSize: "20px", color: section.accent,
                    transform: activeSection === section.id ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s", display: "inline-block",
                  }}>›</span>
                </button>

                {activeSection === section.id && (
                  <div style={{
                    marginTop: "4px", borderRadius: "0 0 12px 12px",
                    border: `1px solid ${section.accent}33`, borderTop: "none", background: "#0d0d15",
                  }}>
                    {section.items.map((item, idx) => (
                      <div key={idx} style={{
                        padding: "20px",
                        borderBottom: idx < section.items.length - 1 ? "1px solid #1a1a25" : "none",
                      }}>
                        <h3 style={{ margin: "0 0 8px", color: section.accent, fontSize: "15px", fontWeight: 700 }}>
                          {item.title}
                        </h3>
                        <div style={{
                          background: `${section.accent}11`, border: `1px solid ${section.accent}33`,
                          borderRadius: "8px", padding: "10px 14px", marginBottom: "12px",
                          fontSize: "14px", color: section.accent, fontStyle: "italic",
                        }}>
                          {item.mnemonic}
                        </div>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                          {item.facts.map((fact, i) => (
                            <li key={i} style={{
                              padding: "4px 0", fontSize: "14px",
                              color: fact.startsWith("→") || fact.startsWith(" ") ? "#888" : "#ccc",
                              borderLeft: fact.startsWith("→") ? `2px solid ${section.accent}44` : "none",
                              paddingLeft: fact.startsWith("→") || fact.startsWith(" ") ? "10px" : "0",
                              lineHeight: "1.6",
                            }}>
                              {fact.startsWith("→") || fact.startsWith(" ") ? fact : `• ${fact}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {activeTab === "flashcards" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ margin: 0, fontSize: "20px", color: "#ccc" }}>⚡ Quick-Fire Facts</h2>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => setRevealed({})} style={{
                  padding: "8px 16px", background: "transparent", border: "1px solid #444",
                  borderRadius: "8px", color: "#888", fontSize: "13px", cursor: "pointer", fontFamily: "Georgia, serif",
                }}>Hide All</button>
                <button onClick={revealAll} style={{
                  padding: "8px 16px", background: "#4a9eff22", border: "1px solid #4a9eff66",
                  borderRadius: "8px", color: "#4a9eff", fontSize: "13px", cursor: "pointer", fontFamily: "Georgia, serif",
                }}>Reveal All</button>
              </div>
            </div>
            <div style={{ display: "grid", gap: "8px", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
              {quickFacts.map((fact, idx) => (
                <div key={idx} onClick={() => toggleReveal(idx)} style={{
                  background: "#111118", border: "1px solid #222", borderRadius: "10px",
                  padding: "16px", cursor: "pointer", userSelect: "none",
                }}>
                  <div style={{ fontSize: "13px", color: "#999", marginBottom: "8px" }}>Q: {fact.q}</div>
                  <div style={{
                    fontSize: "16px", fontWeight: 700,
                    color: revealed[idx] ? "#4aff8a" : "#333",
                    background: revealed[idx] ? "transparent" : "#1a1a1a",
                    borderRadius: "4px", padding: revealed[idx] ? "0" : "2px 8px",
                    minHeight: "24px",
                  }}>
                    {revealed[idx] ? fact.a : "tap to reveal →"}
                  </div>
                </div>
              ))}
            </div>

            {/* Critical numbers */}
            <div style={{ marginTop: "40px" }}>
              <h2 style={{ color: "#ff7a4a", fontSize: "18px", marginBottom: "16px" }}>🔥 Critical Numbers Cheat Sheet</h2>
              <div style={{ background: "#111118", border: "1px solid #ff7a4a33", borderRadius: "12px", overflow: "hidden" }}>
                {[
                  ["20 hours", "Pre-licensing education"],
                  ["8 hours", "Annual CE"],
                  ["75%", "SAFE exam passing score"],
                  ["3 business days", "Loan Estimate delivery"],
                  ["3 business days", "Closing Disclosure (before closing)"],
                  ["3.5%", "FHA min down payment (580+ score)"],
                  ["1.75%", "FHA upfront MIP"],
                  ["$766,550", "2024 conforming loan limit"],
                  ["78% LTV", "PMI auto-cancellation"],
                  ["43%", "Max QM back-end DTI"],
                  ["2 months", "Max RESPA escrow cushion"],
                  ["30 days", "ECOA adverse action notice"],
                  ["25 months", "ECOA recordkeeping"],
                  ["62 years", "Reverse mortgage minimum age"],
                  ["120 days", "Temporary MLO authority"],
                  ["$10,000 + 1 yr", "RESPA Section 8 penalty"],
                  ["3 years", "Extended right of rescission"],
                  ["2%", "HECM upfront MIP"],
                ].map(([num, desc], i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", padding: "12px 20px",
                    borderBottom: i < 17 ? "1px solid #1a1a25" : "none",
                    background: i % 2 === 0 ? "transparent" : "#ffffff04",
                  }}>
                    <span style={{ fontWeight: 800, color: "#ff7a4a", fontSize: "15px", minWidth: "150px", fontFamily: "monospace" }}>{num}</span>
                    <span style={{ color: "#bbb", fontSize: "14px" }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Last minute tips */}
            <div style={{ marginTop: "32px", background: "linear-gradient(135deg, #1a1a2e, #0f1a0f)", border: "1px solid #4aff8a44", borderRadius: "12px", padding: "24px" }}>
              <h2 style={{ color: "#4aff8a", margin: "0 0 16px", fontSize: "18px" }}>💡 Last-Minute Strategy Tips</h2>
              {[
                "🎯 TRID: LE in 3 days after app, CD 3 days BEFORE closing",
                "🎯 FHA = HUD, VA = VA Dept, USDA = Agriculture",
                "🎯 ECOA = credit decisions; Fair Housing = property transactions",
                "🎯 Loan Processor does NOT need license UNLESS independent judgment",
                "🎯 Zero tolerance = origination charges. Cannot increase. Ever.",
                "🎯 Right of rescission = REFINANCE only, NOT purchase. 3 days.",
                "🎯 Steering, Redlining, Blockbusting = ALL illegal",
                "🎯 MLO compensation cannot be based on loan terms",
                "🎯 QM = safe harbor. ATR must ALWAYS be verified.",
              ].map((tip, i) => (
                <div key={i} style={{
                  padding: "8px 0", borderBottom: i < 8 ? "1px solid #1a2a1a" : "none",
                  fontSize: "14px", color: "#ccc", lineHeight: "1.6",
                }}>{tip}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(90deg, #1a3a5c, #0f3460)",
        borderTop: "1px solid #4a9eff44", padding: "12px 24px",
        textAlign: "center", fontSize: "13px", color: "#4a9eff", letterSpacing: "2px",
      }}>
        🎓 YOU GOT THIS — GOOD LUCK ON YOUR NMLS EXAM!
      </div>
    </div>
  );
}
