// ============================================================
// Study content — Subjects → Units → Topics
// Business Intelligence (Unit 1) fully populated
// ============================================================

export const subjects = [
  {
    id: 'software-testing',
    name: 'Software Testing and Quality Assurance',
    code: 'STQA',
    color: '#0047ff',
    available: false,
  },
  {
    id: 'data-science',
    name: 'Data Science',
    code: 'DS',
    color: '#0047ff',
    available: false,
  },
  {
    id: 'web-technology',
    name: 'Web Technology',
    code: 'WT',
    color: '#0047ff',
    available: false,
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    code: 'CYS',
    color: '#0047ff',
    available: true,
    description: 'Cyber security ka完整 safar — Hinglish mein simple samjhaaya gaya',
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    code: 'BI',
    color: '#0047ff',
    available: true,
    description: 'Data se decisions tak ka safar — bilkul simple Hinglish mein',
  },
];

// ============================================================
// Units & Topics for Business Intelligence
// ============================================================
export const units = {
  'business-intelligence': [
    {
      id: 'unit-1',
      number: '1',
      name: 'Introduction to Business Intelligence',
      topics: [
        // ========================================================
        // TOPIC 1 — Introduction to Business Intelligence
        // ========================================================
        {
          id: 'intro-bi',
          number: '1.1',
          title: 'Introduction to Business Intelligence',
          subtitle: 'BI kya hai, iske components aur faayde',
          icon: 'chart',
          accent: '#0047ff',
          englishDefinition:
            'Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help corporate executives, business managers and other end users make informed business decisions. BI encompasses a wide variety of business analysis tools and methodologies that collect, integrate, analyze and present business data to support better decision making.',
          intro: 'Duniya mein har company decisions leti hai — kahan kharcha kare, kaunsa product beche, customers ko kya pasand hai. Pehle log decisions apne experience aur "gut feeling" pe lete the. Lekin ab samay badla hai. Ab koi bhi bada decision lete waqt companies data ko dekhti hain. Is data-driven approach ko hi Business Intelligence (BI) kehte hain. Aayie, samjhte hain iske basics.',
          sections: [
            {
              type: 'definition',
              title: 'BI kya hai? (Simple Words Mein)',
              kicker: 'Definition',
              body: 'Business Intelligence (BI) ek aisa process hai jisme organization apne business data ko collect karti hai, analyze karti hai, aur ek easy-to-read format (jaise chart, report, dashboard) mein convert karti hai — taaki managers aur decision makers better (acche) decisions le sake.',
              body2: 'Ek sentence mein: BI ka matlab hai "data ki madad se apne business ko samajhna aur uske hisaab se decisions banana".',
              chips: ['Data collect karna', 'Analyze karna', 'Visualize karna', 'Better decisions'],
            },
            {
              type: 'cards',
              title: 'BI ke Key Components',
              kicker: 'Important Terms',
              cards: [
                {
                  icon: 'database',
                  title: 'Data Sources',
                  body: 'BI ka pehla kadam hai data collect karna. Data kahan se aata hai? Databases, Excel sheets, ERP systems (jaise SAP), CRM software, websites aur social media se. Wahan business chal rahi hai — wahan se data collect kiya jata hai.',
                },
                {
                  icon: 'etl',
                  title: 'ETL (Extract, Transform, Load)',
                  body: 'ETL ek process hai jisme data ko teen steps mein process karte hain: Extract (source se nikalna), Transform (data ko clean karna, correct format mein badalna, duplicate hatana), Load (ek central place mein daalna).',
                },
                {
                  icon: 'warehouse',
                  title: 'Data Warehouse',
                  body: 'Ye ek central "store" hai jahan ek jagah par sabhi historical data rakha jata hai. Bilkul jaise library mein sabhi books ek saath hoti hain. Data warehouse mein data analysis ke liye ready rehta hai.',
                },
                {
                  icon: 'cube',
                  title: 'OLAP',
                  body: 'OLAP (Online Analytical Processing) data ko fastly multi-dimensional analysis karne ka technique hai. Data ko "cubes" banana hota hai — jaise sales ke liye time, region aur product ko milakar dekhna.',
                },
                {
                  icon: 'dashboard',
                  title: 'BI Tools & Dashboards',
                  body: 'Tableau, Power BI, QlikSense jaise tools raw data ko beautiful charts, graphs aur interactive dashboards mein convert karti hain. Managers dashboard dekh kar hi samajh jaate hain ki business kaha chal rahi hai.',
                },
                {
                  icon: 'bulb',
                  title: 'Decision Making',
                  body: 'Ye BI ka final output hai. Data-driven decisions — kaunsa product bechna hai, kahan stock barhana hai, kaunsa marketing campaign chalna hai. Sab data dekh kar decide hota hai.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'BI Architecture — Data ka Safar',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'biflow',
              caption:
                'Pehle data sources se data aata hai. Phir ETL process use clean karta hai aur data warehouse mein daalta hai. Wahan se OLAP use multi-dimensional analysis karta hai. Final mein BI tools use reports aur dashboards banati hain, aur managers decision lete hain. Yeh diagram exam mein demonstrate karna bhi sakta hai.',
            },
            {
              type: 'image',
              title: 'Real BI Architecture (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/warehouse-architecture.jpg', caption: 'Warehouse Architecture — Client, Source, Integration, Query & Analysis, Metadata' },
              ],
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Imagine ek bada retail store chain (jaise Big Bazaar ya Amazon). Wo daily sabhi stores se sales data collect karti hai. BI system us data ko analyze karta hai — kaunsa product kahan bik raha hai, kaunsa season mein kya chalega, inventory ka status kaisa hai. Dashboard dekh kar manager decide karta hai: kaunsa stock barhana hai, kaunsa product discount par rakhna hai, kahan naya store kholnna hai. Pehle wo aisa decision sirf experience pe leta tha — ab data pe.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'BI = Business Intelligence. Data ko actionable information mein convert karna hi BI ka kaam hai.',
                'BI ek process hai, not sirf ek tool. Agar kisi ne pucha "BI kya hai?" to answer dijiye: "Data collect, analyze aur visualize karke better decisions lane ka process".',
                'ETL = Extract (nikalna), Transform (clean aur format karna), Load (central place mein daalna). Ye BI ka heart hai.',
                'Data warehouse = central repository for historical data. Historical sabd important hai.',
                'OLAP = Online Analytical Processing. Multi-dimensional analysis ke liye.',
                'BI ke famous tools: Tableau, Power BI, QlikSense.',
                'BI reports batati hain ki "kuch kya hua" (what happened) aur "kuch ho raha hai" (what is happening).',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'BI ka matlab hai data ki madad se business ko samajhna.',
                'Data ka safar: Sources → ETL → Data Warehouse → OLAP → Dashboards → Decisions.',
                'ETL: Extract, Transform, Load.',
                'BI tools: Tableau, Power BI, Qlik.',
                'Data se decisions — ye hi BI ka goal hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Define Business Intelligence (BI). Explain the need and benefits of BI in organizations.',
              answer:
                '**Definition:** Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help decision makers make informed business decisions.\n\n**Explanation:** BI collects data from various sources (databases, ERP, CRM), processes it through ETL, stores it in a data warehouse, and presents it through dashboards and reports. It helps organizations make faster, accurate, data-driven decisions.\n\n**Benefits:** (1) Faster and better decisions, (2) Increased accuracy, (3) Competitive advantage, (4) Better customer service, (5) Cost reduction, (6) Improved efficiency.\n\n**Diagram:** Refer to the BI Architecture diagram (Data Sources → ETL → Data Warehouse → OLAP → Dashboards → Decisions) in this topic.',
            },
            {
              question: 'Describe the main components of a Business Intelligence system with a suitable diagram.',
              answer:
                '**Components of BI:**\n1. **Data Sources** — databases, Excel, ERP, CRM (raw data ka source)\n2. **ETL** — Extract, Transform, Load (data ko clean aur warehouse mein daalna)\n3. **Data Warehouse** — central store for historical data\n4. **OLAP** — Online Analytical Processing (multi-dimensional analysis)\n5. **BI Tools & Dashboards** — Tableau, Power BI (reports, charts, KPIs)\n6. **Decision Makers** — managers who use the dashboards\n\n**Diagram:** Refer to the BI Architecture flow diagram showing data flowing from sources through ETL into the warehouse, then OLAP analysis, and finally dashboards for decision making.',
            },
          ],
        },

        // ========================================================
        // TOPIC 2 — Evolution of BI and Decision Support Systems
        // ========================================================
        {
          id: 'evolution-bi',
          number: '1.2',
          title: 'Evolution of BI & Decision Support Systems',
          subtitle: 'BI kab aur kaise badla — timeline aur DSS',
          icon: 'timeline',
          accent: '#0047ff',
          englishDefinition:
            'A Decision Support System (DSS) is an interactive, computer-based information system that helps decision-makers use data and models to solve semi-structured and unstructured problems. The evolution of Business Intelligence traces the journey from MIS in the 1950s-60s, through DSS in the 1970s, EIS in the 1980s, data warehousing and OLAP in the 1990s, self-service BI in the 2000s, to modern cloud and AI-powered BI in the 2010s and beyond.',
          intro: 'Aaj ham BI ke zamana mein reh rahe hain — dashboards, real-time reports, AI-powered analytics. Lekin kya aapne socha hai ki ye sab ek din mein nahi aaya? Pehle computers sirf basic reports banate the. Phir dheere-dheere systems improve hue. Is topic mein ham dekhnge ki BI kab aur kaise develop hua, aur Decision Support Systems (DSS) kahan se start hui.',
          sections: [
            {
              type: 'definition',
              title: 'DSS kya hai?',
              kicker: 'Definition',
              body: 'DSS (Decision Support System) ek computer-based system hai jo decision makers ko data aur analysis models ki madad se better decisions lane mein help karta hai. Ye specially semi-structured aur unstructured problems ke liye banaya gaya tha.',
              body2: '1970s mein Gorry aur Scott Morton ne DSS ka concept diya tha. Ye idea tha ki kaise computer data aur models combine karke decisions mein support de sakta hai.',
              chips: ['Computer-based system', 'Data + models', 'Decision makers ki help', '1970s ka concept'],
            },
            {
              type: 'cards',
              title: 'Evolution Timeline in Simple Words',
              kicker: 'Timeline',
              cards: [
                {
                  icon: 'clock',
                  title: '1950s–60s: MIS',
                  body: 'MIS (Management Information Systems) pehla system tha. Routine, structured reports banata tha — jaise daily sales report. Decisions ekdum clear the aur fixed the. Ye operational level ke liye tha.',
                },
                {
                  icon: 'dss',
                  title: '1970s: DSS',
                  body: 'DSS (Decision Support Systems) aaya. Semi-structured problems ke liye data aur models ko combine karke decisions mein support mila. Gorry & Scott Morton (1971) ne ye framework diya.',
                },
                {
                  icon: 'executive',
                  title: '1980s: EIS',
                  body: 'EIS (Executive Information Systems) top-level executives ke liye bana. External data (market trends) aur internal data dono dikhata tha, taaki senior managers strategy bana sake.',
                },
                {
                  icon: 'warehouse',
                  title: '1990s: Data Warehouse',
                  body: 'Bill Inmon ne data warehouse concept popular kiya — unhe "father of data warehouse" kaha jata hai. Codd ne OLAP diya. 1996 mein Gartner (Howard Dresner) ne "Business Intelligence" term popular kiya.',
                },
                {
                  icon: 'dashboard',
                  title: '2000s: Self-Service BI',
                  body: 'Tableau (2003), Power BI aur Qlik aaye. Ab non-technical users khud reports aur dashboards banane lage. BI ek DBA ya IT person ki deewani rahega nai — har koi use kar sakta tha.',
                },
                {
                  icon: 'ai',
                  title: '2010s+: Modern BI',
                  body: 'Cloud BI, embedded analytics, real-time dashboards, aur AI/ML-powered BI aa gaye. Ab BI sirf reports dikhati hai — wo predictions bhi karti hai aur automatic recommendations bhi degi.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'Evolution Timeline of BI',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'timeline',
              caption:
                'Dekhiye BI ka safar: MIS (1950s-60s) → DSS (1970s) → EIS (1980s) → Data Warehouse/OLAP/BI term (1990s) → Self-Service BI (2000s) → AI & Cloud BI (2010s+). Ye timeline ek baar exam mein draw kar lijiye.',
            },
            {
              type: 'image',
              title: 'DSS Structure (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/dss-components.png', caption: 'DSS Structure — Model Management System, User Interface, Knowledge Base' },
              ],
            },
            {
              type: 'cards',
              title: 'Types of Decision Problems',
              kicker: 'Important Classification',
              cards: [
                {
                  icon: 'check',
                  title: 'Structured',
                  body: 'Problem ekdum clear hai, routine hai, rules pe based hai. Computer automatic solve kar sakta hai. Example: inventory reorder point — stock kitna rakhna hai wo rules se pata chal jata hai.',
                },
                {
                  icon: 'half',
                  title: 'Semi-Structured',
                  body: 'Kuch data hai, kuch decisions human judgment pe depend karte hain. Computer help kar sakta hai but final decision human leta hai. Example: budget planning, marketing campaign ka plan.',
                },
                {
                  icon: 'unstruct',
                  title: 'Unstructured',
                  body: 'Koi clear data nahi hai, naya problem hai. Sirf human experience, intuition aur creativity matter karti hai. Example: new market mein entry kare ya nahi, kisi competitor ka response kaisa hoga.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'DSS Ke Components',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'dss',
              caption:
                'DSS mein tin important components hain: Database Management System (data store, manage, retrieve karta hai), Model Management System (analysis models jaise forecasting, optimization), aur User Interface (user ko system se interact karne ka tarika). Tin ek saath mil kar decision makers ko support dete hain.',
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Ek bank manager loan approval ka decision leta hai. Sirf gut feeling pe nahi — wo DSS use karta hai. DSS customer ka data (income, transaction history, credit score) ek database se nikalta hai. Phir risk analysis ka model us data pe chalata hai. Aur manager ko interface (screen) par results milta hai. Ab manager data aur model ke results dekh kar final decision leta hai. Yehi data-driven decision hai.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'DSS ka full form: Decision Support System. 1970s ka concept hai.',
                'DSS teen components: Database Management, Model Management, User Interface.',
                'DSS specially semi-structured problems ke liye bana tha.',
                'Structured decisions: rules pe based, routine — ex: inventory reorder.',
                'Unstructured decisions: naya problem, data nahi — human judgment zyada matters.',
                'Father of Data Warehouse: Bill Inmon.',
                'BI term 1996 mein Gartner (Howard Dresner) ne popular kiya tha.',
                'OLAP ka concept Codd (1993) ne diya tha.',
                'Evolution: MIS → DSS → EIS → Data Warehouse/OLAP → Self-Service BI → AI/Cloud BI.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'DSS = Decision Support System. Data + models se decisions mein help.',
                '1970s: DSS aaya. 1990s: Data warehouse aur BI term.',
                'Structured → routine rules. Unstructured → human judgment.',
                'DSS components: DBMS, Model Management, User Interface.',
                'Aaj ka BI: cloud, real-time, AI-powered.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the evolution of Business Intelligence from MIS to modern BI with a timeline.',
              answer:
                '**Evolution of BI:**\n1. **1950s-60s — MIS:** Management Information Systems. Structured, routine reports (daily sales reports). Operational decisions.\n2. **1970s — DSS:** Decision Support Systems. Semi-structured problems. Data + models combine karke decision support. Gorry & Scott Morton (1971).\n3. **1980s — EIS:** Executive Information Systems. For top executives. External + internal data.\n4. **1990s — Data Warehouse & OLAP:** Bill Inmon (father of data warehouse), Codd (OLAP, 1993). Gartner ne 1996 mein "BI" term popular kiya.\n5. **2000s — Self-Service BI:** Tableau (2003), Power BI, Qlik. Non-technical users khud reports banane lage.\n6. **2010s+ — Modern BI:** Cloud BI, embedded analytics, real-time dashboards, AI/ML-powered BI.\n\n**Diagram:** Refer to the Evolution Timeline diagram showing MIS → DSS → EIS → DW/OLAP → Self-Service BI → AI/Cloud BI.',
            },
            {
              question: 'What is a Decision Support System (DSS)? Describe its components with a diagram.',
              answer:
                '**Definition:** DSS is an interactive, computer-based information system that helps decision-makers use data and models to solve semi-structured and unstructured problems.\n\n**Components of DSS:**\n1. **Database Management System (DBMS)** — data ko store, manage aur retrieve karta hai. Decision data ek centralized database se aata hai.\n2. **Model Management System** — analysis models rakhta hai (forecasting, optimization, simulation). Models data ko process karke results dete hain.\n3. **User Interface / Dialogue Management** — user ko system se interact karne ke liye interface deta hai. Query, report, aur interaction ke liye.\n\n**Diagram:** Refer to the DSS Components diagram — tin components (DBMS, Model Management, User Interface) ek saath mil kar decision makers ko support dete hain.',
            },
          ],
        },

        // ========================================================
        // TOPIC 3 — Data-driven Decision Making in Organizations
        // ========================================================
        {
          id: 'data-driven-decisions',
          number: '1.3',
          title: 'Data-driven Decision Making',
          subtitle: 'Data se decisions — cycle, analytics types aur challenges',
          icon: 'cycle',
          accent: '#0047ff',
          englishDefinition:
            'Data-driven decision making (DDDM) is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience. It involves collecting, analyzing and interpreting data to guide business strategy and operational decisions. The DIKW pyramid (Data → Information → Knowledge → Wisdom) illustrates how raw data becomes actionable wisdom, and four types of analytics — descriptive, diagnostic, predictive and prescriptive — support decisions at different levels.',
          intro: 'Aapne kabhi socha hai ki Netflix aapko aapke pasand ke shows recommend kyun karti hai? Ya Amazon aapko aapke pasand ke products dikhata hai? Ye sab data-driven decisions hain. Netflix aapki watch history (data) analyze karti hai aur aapke liye best show chunti hai. Is topic mein ham dekhnge ki organizations data ka use karke decisions leti hain — aur woh kaisa process hai.',
          sections: [
            {
              type: 'definition',
              title: 'Data-Driven Decision Making kya hai?',
              kicker: 'Definition',
              body: 'Data-driven decision making ka matlab hai decisions data (evidence) pe based karna — sirf apne gut feeling, experience ya assumptions pe nahi. Jab organization kisi decision ke liye historical data, current data aur analysis ko consider karti hai, toh woh ek data-driven decision hai.',
              body2: 'Ek famous quote hai W. Edwards Deming ka: "In God we trust, all others bring data." Matlab — haan, intuition zaror kaam aata hai, lekin koi bhi decision data ke saath kare toh trustworthy hota hai.',
              chips: ['Data pe based decisions', 'Gut feeling pe nahi', 'Evidence matters', 'Measurable results'],
            },
            {
              type: 'diagram',
              title: 'Data-Driven Decision Cycle',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cycle',
              caption:
                'Data-driven decision cycle ek circular process hai: Problem identify karo → relevant data collect karo → data ko clean & process karo → analyze karo → results interpret karo → decision lo → implement karo aur monitor karo. Phir se cycle shuru hota hai. Ek baar decision lene se kaam nahi khatam hota — results track kiye jaate hain aur process dobara chalti hai.',
            },
            {
              type: 'diagram',
              title: 'DIKW Pyramid — Data se Wisdom Tak',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'dikw',
              caption:
                'DIKW pyramid batata hai ki data se wisdom tak ka safar kaisa hota hai: Data (raw facts — "sales 1000") → Information (data + context — "sales 10% badhi") → Knowledge (patterns aur experience — "July mein sales kam hoti hai, seasonal trend hai") → Wisdom (decisions — "July mein stock kam rakho, extra campaign chalo"). Pyramid bhi exam mein draw kar sakte hain.',
            },
            {
              type: 'cards',
              title: '4 Types of Analytics (Bada important hai!)',
              kicker: 'Must Know',
              cards: [
                {
                  icon: 'chart',
                  title: 'Descriptive — "What happened?"',
                  body: 'Past data ka summary. Reports, dashboards batati hain ki kya hua. Example: pichhle month ki sales report, user growth stats. Sirf fact batati hain.',
                },
                {
                  icon: 'search',
                  title: 'Diagnostic — "Why did it happen?"',
                  body: 'Root cause analysis. Data ke andar implicit reasons dhundti hain. Example: "sales kam hui, kyun? kyunki ek competitor ne discount diya!"',
                },
                {
                  icon: 'forecast',
                  title: 'Predictive — "What will happen?"',
                  body: 'Future ka estimate. ML models aur statistics ka use karti hain. Example: "agle month sales karegi 1.2 lakh" ya "customer churn risk hai".',
                },
                {
                  icon: 'prescriptive',
                  title: 'Prescriptive — "What should we do?"',
                  body: 'Best action recommend karti hai. Optimization, simulation ka use hai. Example: "stock kitna rakho, kaunsa campaign chalo, kahan naya store kholo".',
                },
              ],
            },
            {
              type: 'image',
              title: '4 Types of Analytics (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/analytics-types.png', caption: 'Analytics Flowchart — Descriptive, Diagnostic, Predictive, Prescriptive leading to Decision & Action' },
              ],
            },
            {
              type: 'diagram',
              title: 'Analytics Ka Safar — 4 Stages',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'analytics',
              caption:
                'Analytics ka safar chaar stages mein hota hai: Descriptive (kya hua?) → Diagnostic (kyun hua?) → Predictive (kya hoga?) → Prescriptive (kahan karna?). Pehle past dekha jata hai, phir reasons, phir future, aur final mein best action.',
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Netflix aapki watch history (data) collect karti hai. Phir wo data analyze karti hai — aap kis genre ke shows dekhte hain, aap kis time dekhte hain, aapke jaise users kya dekhte hain (ye predictive/diagnostic analytics hai). Final mein aapko aapke pasand ke shows recommend kar diya jata hai (prescriptive). Amazon bhi aapke purchases aur similar customers ke purchases dekh kar products suggest karti hai. Ye sab data-driven decisions hain.',
            },
            {
              type: 'cards',
              title: 'Benefits & Challenges',
              kicker: 'Bada important — exam mein aa sakta hai',
              cards: [
                {
                  icon: 'check',
                  title: 'Benefits',
                  body: 'Decisions objectivity se hoti hain — bias kam hota hai. Risk kam ho jata hai kyunki facts pe decisions hoti hain. Results measurable hote hain. Faster decisions aur better efficiency. Competitive advantage milta hai.',
                },
                {
                  icon: 'warn',
                  title: 'Challenges',
                  body: 'Data quality ka problem — "garbage in, garbage out": kharab data se kharab decisions. Data security aur privacy ka sawal. Technology aur skilled people ka cost. Sirf data dekh kar context ko bhool jaana — sab data mein nahi hota.',
                },
              ],
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'Data-driven decision making: decisions data pe based karna, gut feeling pe nahi.',
                'Cycle ke 7 steps: Identify problem → Collect data → Clean/process → Analyze → Interpret → Decide → Implement & monitor.',
                'DIKW pyramid: Data → Information → Knowledge → Wisdom. Order yaad rakhna.',
                'Data = raw facts. Information = data + context. Knowledge = patterns. Wisdom = decisions.',
                'Descriptive analytics: "What happened?" (past).',
                'Diagnostic analytics: "Why did it happen?" (root cause).',
                'Predictive analytics: "What will happen?" (future, ML).',
                'Prescriptive analytics: "What should we do?" (recommendations).',
                'Challenge: garbage in, garbage out — data quality matter karta hai.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Data-driven decision = decisions data pe based, gut feeling pe nahi.',
                'Cycle: Problem → Collect → Clean → Analyze → Interpret → Decide → Monitor.',
                'DIKW: Data → Information → Knowledge → Wisdom.',
                'Analytics: Descriptive (kya hua) → Diagnostic (kyun) → Predictive (kya hoga) → Prescriptive (kahan karo).',
                'Garbage in, garbage out — data quality matters.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'What is data-driven decision making? Explain the DIKW pyramid with a diagram.',
              answer:
                '**Definition:** Data-driven decision making is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience.\n\n**Explanation:** Organizations collect data, analyze it, interpret results and take decisions. The process is cyclic — decisions are monitored and feedback improves future decisions.\n\n**DIKW Pyramid:**\n1. **Data** — raw facts and figures (e.g., "sales = 1000")\n2. **Information** — data + context (e.g., "sales increased 10%")\n3. **Knowledge** — patterns and understanding (e.g., "sales drop in July — seasonal trend")\n4. **Wisdom** — using knowledge for decisions (e.g., "keep lower stock in July, run extra campaign")\n\n**Diagram:** Refer to the DIKW Pyramid diagram in this topic.',
            },
            {
              question: 'Explain the four types of analytics with examples.',
              answer:
                '**Four Types of Analytics:**\n\n1. **Descriptive Analytics — "What happened?"** — Past data ka summary. Reports aur dashboards. Example: last month sales report, user growth stats.\n\n2. **Diagnostic Analytics — "Why did it happen?"** — Root cause analysis. Data ke andar reasons dhundti hai. Example: sales kam hui kyunki competitor ne discount diya.\n\n3. **Predictive Analytics — "What will happen?"** — Future ka estimate. ML models aur statistics. Example: agle month sales ka estimate, customer churn risk.\n\n4. **Prescriptive Analytics — "What should we do?"** — Best action recommend karti hai. Optimization aur simulation. Example: stock kitna rakho, kaunsa campaign chalo.\n\n**Diagram:** Refer to the Analytics Stages diagram — Descriptive → Diagnostic → Predictive → Prescriptive.',
            },
          ],
        },

        // ========================================================
        // TOPIC 4 — Components of Business Intelligence Architecture
        // ========================================================
        {
          id: 'components-bi-architecture',
          number: '1.4',
          title: 'Components of Business Intelligence Architecture',
          subtitle: 'BI architecture ke components — full structure',
          icon: 'warehouse',
          accent: '#0047ff',
          englishDefinition:
            'Business Intelligence architecture is the framework that describes how data flows from various sources to end users. Its core components are: (1) Data Sources — operational systems like ERP and CRM; (2) ETL — Extract, Transform, Load processes that prepare data; (3) Data Warehouse — central store of historical, integrated data; (4) OLAP Server — provides multi-dimensional analysis through data cubes; (5) BI Applications — dashboards, reports and analytics tools; and (6) Users — business analysts, managers and executives who consume the insights.',
          intro: 'Aapne dekha hai ki BI decisions data se leti hai. Lekin kya aap sochte hai ki ye data kahan se aata hai, kahan rakhta hai, aur kaise final dashboard tak aata hai? Is topic mein ham BI architecture ke sab components ko detail mein dekhnge — ek tarah se BI ka "blueprint" samjhnge. Exam mein ye topic bahut important hai kyunki architecture diagram ka bhi sawal aa sakta hai.',
          sections: [
            {
              type: 'definition',
              title: 'BI Architecture kya hai?',
              kicker: 'Definition',
              body: 'BI architecture ek framework hai jo batata hai ki data various sources se kaise flow karta hai aur final user tak kaise aata hai. Iske components ko mila kar ek structure bana hota hai jisse data ka safar clearly dikhai de.',
              body2: 'Architecture ka matlab hai "structure" ya "blueprint" — ye batata hai ki BI system ke different parts kahan hai aur data unke beech kaise aata-jata hai.',
              chips: ['Framework', 'Data flow structure', 'Components', 'Blueprint'],
            },
            {
              type: 'diagram',
              title: 'BI Architecture — Full Components',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'arch',
              caption:
                'BI architecture ke 6 main components hain: Data Sources (ERP, CRM, DB, Excel), ETL (Extract, Transform, Load), Data Warehouse (central historical store), OLAP Server (multi-dimensional cubes), BI Applications (dashboards, reports), aur Users (analysts, managers, executives). Data ek taraf se aata hai aur dusri taraf dashboard tak pahuchta hai.',
            },
            {
              type: 'image',
              title: 'BI Architecture (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/bi-architecture.jpg', caption: 'Multi-Tiered BI Architecture — Data Sources, ETL (Extract Transform Load), Data Warehouse, OLAP Engine, Analysis, Query, Reports, Data Marts, Metadata' },
                { src: '/images/etl-warehouse.jpg', caption: 'Data Warehouse Architecture with ETL Process — Source → ETL → Warehouse → Data Marts' },
              ],
            },
            {
              type: 'cards',
              title: 'Har Component Ki Detail',
              kicker: 'Component Detail',
              cards: [
                {
                  icon: 'database',
                  title: '1. Data Sources',
                  body: 'BI ka entry point. Data kahan se aata hai? ERP systems (SAP), CRM systems, operational databases, Excel files, external sources (market data, social media). Ye sabhi data ko collect karna part of architecture hai.',
                },
                {
                  icon: 'etl',
                  title: '2. ETL — Extract, Transform, Load',
                  body: 'Architecture ka heart. Extract = data ko sources se nikalna. Transform = data ko clean karna, format karna, de-duplicate karna, business rules apply karna. Load = data ko data warehouse mein daalna. Ye process data ko "analysis-ready" banata hai.',
                },
                {
                  icon: 'warehouse',
                  title: '3. Data Warehouse',
                  body: 'Central repository. Subject-oriented, integrated, time-variant, non-volatile historical data. Data warehouse mein data clean aur organized hota hai — analysis ke liye ready. Data marts bhi hote hain (subset for specific departments).',
                },
                {
                  icon: 'cube',
                  title: '4. OLAP Server',
                  body: 'Data warehouse se data ko multi-dimensional cubes mein organize karta hai. Drill-down, drill-up, slice, dice jaise operations allow karta hai. Fast query responses deta hai. Ye architecture ka "engine" hai.',
                },
                {
                  icon: 'dashboard',
                  title: '5. BI Applications',
                  body: 'Front-end layer. Dashboards, reports, scorecards, ad-hoc queries, analytics applications. Tools jaise Tableau, Power BI, QlikSense. Ye sab data ko visual format mein present karte hain.',
                },
                {
                  icon: 'bulb',
                  title: '6. Users',
                  body: 'Architecture ka final component. Business analysts, managers, executives — sabhi dashboards dekh kar decisions lete hain. Architecture ka goal hai user ko relevant, accurate aur timely information dena.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'ETL Process in Detail',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'etl',
              caption:
                'ETL teen stages mein kaam karta hai: Extract (sources se data nikalna) → Transform (clean karna, format karna, duplicate hatana, business rules apply karna) → Load (data warehouse mein daalna). Ye sab data ko analysis-ready banata hai.',
            },
            {
              type: 'image',
              title: 'ETL Stages (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/etl-stages.jpg', caption: 'ETL Process Stages — Extract, Transform, Load' },
              ],
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Ek bank hai. Uske lakhon customers hain, hr din transaction data aata hai (data sources). ETL process roz raat ko chalتا hai — extract karta hai sab transactions, transform karta hai (currency convert karna, duplicate entries hatana, category set karna), aur load karta hai data warehouse mein. Phir OLAP server us data ko cubes mein organize karta hai — "monthly transactions by branch". Managers Tableau dashboard par dekhte hain aur decisions lete hain: kaun sa branch kam kaam kar raha hai, kaun sa product bechna hai. Ye full BI architecture hai.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'BI architecture ek framework hai — data flow ka structure.',
                '6 components: Data Sources, ETL, Data Warehouse, OLAP Server, BI Applications, Users.',
                'ETL = Extract, Transform, Load. Architecture ka heart.',
                'Data Warehouse features: Subject-oriented, Integrated, Time-variant, Non-volatile (SITn).',
                'OLAP operations: Drill-down, Drill-up, Slice, Dice.',
                'Data marts = data warehouse ka subset for specific departments.',
                'Data flow: Sources → ETL → Warehouse → OLAP → Dashboards → Users.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'BI architecture = data flow ka structure / blueprint.',
                '6 components: Sources, ETL, Warehouse, OLAP, Apps, Users.',
                'ETL: Extract, Transform, Load — architecture ka heart.',
                'Data Warehouse: Subject-oriented, Integrated, Time-variant, Non-volatile.',
                'OLAP: Drill-down, Slice, Dice — multi-dimensional analysis.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Describe the components of Business Intelligence architecture with a diagram.',
              answer:
                '**BI Architecture Components:**\n1. **Data Sources** — ERP, CRM, operational databases, Excel, external sources. Data ka entry point.\n2. **ETL (Extract, Transform, Load)** — data ko extract karna, transform (clean, format, de-duplicate) karna, aur load (warehouse mein daalna).\n3. **Data Warehouse** — central repository. Subject-oriented, integrated, time-variant, non-volatile historical data.\n4. **OLAP Server** — multi-dimensional cubes banata hai. Drill-down, drill-up, slice, dice operations allow karta hai.\n5. **BI Applications** — dashboards, reports, scorecards. Tools: Tableau, Power BI, QlikSense.\n6. **Users** — analysts, managers, executives. Decisions lete hain.\n\n**Data Flow:** Data Sources → ETL → Data Warehouse → OLAP Server → BI Applications → Users.\n\n**Diagram:** Refer to the BI Architecture diagram in this topic.',
            },
            {
              question: 'Explain the ETL process in Business Intelligence architecture with a diagram.',
              answer:
                '**ETL Process:**\n\n1. **Extract** — Data ko source systems (ERP, CRM, databases) se nikalna. Multiple sources se data collect karna.\n\n2. **Transform** — Data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna. Data ko "analysis-ready" banana.\n\n3. **Load** — Transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna.\n\n**Why important:** ETL data quality ensure karta hai. Kharab ETL se kharab data warehouse banta hai — "garbage in, garbage out".\n\n**Diagram:** Refer to the ETL Process diagram — Extract → Transform → Load.',
            },
          ],
        },

        // ========================================================
        // TOPIC 5 — Role of databases, data warehouses and analytics in BI
        // ========================================================
        {
          id: 'role-db-warehouse-analytics',
          number: '1.5',
          title: 'Role of Databases, Data Warehouses & Analytics in BI',
          subtitle: 'Database, data warehouse aur analytics ka role',
          icon: 'cube',
          accent: '#0047ff',
          englishDefinition:
            'In Business Intelligence, three core technologies play complementary roles: (1) Databases (OLTP — Online Transaction Processing) store day-to-day operational data such as sales, inventory and customer transactions; (2) Data Warehouses (OLAP — Online Analytical Processing) integrate historical data from multiple sources for analysis; and (3) Analytics — descriptive, diagnostic, predictive and prescriptive techniques — transform this data into insights that support business decisions. Databases are the source, data warehouses are the analytical store, and analytics provides the intelligence.',
          intro: 'Aapne socha hai ki ek bade company mein data kahan rehta hai aur uska kya use hota hai? Kuch data rozana transactions mein use hota hai (jaise ek sale karna), kuch data analysis ke liye store hota hai (jaise pichhle 5 saal ki sales). Aur phir us data ko analyze karke insights nikale jaate hain. Is topic mein ham dekhnge ki database, data warehouse aur analytics — teeno ka BI mein kya role hai.',
          sections: [
            {
              type: 'definition',
              title: 'Teeno Technologies Kya Hai?',
              kicker: 'Overview',
              body: 'BI mein teeno cheezein alag kaam karti hain: (1) Database — rozana transactions ke liye (OLTP), (2) Data Warehouse — historical data analysis ke liye (OLAP), (3) Analytics — data se insights nikalne ke liye. Teeno mil kar ek ecosystem banati hain.',
              body2: 'Aasan sabd mein: Database = rozana ka kaam. Data Warehouse = purana data, analysis ke liye. Analytics = data se wisdom nikalna.',
              chips: ['Database = OLTP', 'Data Warehouse = OLAP', 'Analytics = Insights', 'Teeno ek saath'],
            },
            {
              type: 'cards',
              title: 'Database (OLTP) ka Role',
              kicker: 'Part 1',
              cards: [
                {
                  icon: 'database',
                  title: 'OLTP — Online Transaction Processing',
                  body: 'Database rozana transactions store karta hai. Jaise ek customer store mein product khareedta hai — wo transaction database mein record hoti hai. Ye real-time, row-based data hai. Fast inserts aur updates ke liye optimized hai.',
                },
                {
                  icon: 'cube',
                  title: 'Operational Data',
                  body: 'Database mein current, operational data rehta hai. Daily sales, inventory levels, customer orders, employee records. Ye data analysis ke liye directly use nahi hota — isliye BI uski extraction karke warehouse mein daalti hai.',
                },
                {
                  icon: 'check',
                  title: 'BI ka Source',
                  body: 'Database BI ka pehla source hai. ETL process database se data extract karta hai, transform karta hai aur data warehouse mein load karta hai. Database mein jo data hota hai, wo analysis ka base banta hai.',
                },
              ],
            },
            {
              type: 'cards',
              title: 'Data Warehouse (OLAP) ka Role',
              kicker: 'Part 2',
              cards: [
                {
                  icon: 'warehouse',
                  title: 'OLAP — Online Analytical Processing',
                  body: 'Data warehouse historical, integrated data store karta hai. Multi-dimensional analysis ke liye. Data cubes banata hai — jaise "sales by month, region, product". Drill-down aur slice-dice operations allow karta hai.',
                },
                {
                  icon: 'clock',
                  title: 'Historical Data',
                  body: 'Data warehouse mein pichhle years ka data rehta hai. Time-variant data — aap pichhle month, pichhle saal ki comparison kar sakte hain. Analysis aur reporting ke liye perfect hai.',
                },
                {
                  icon: 'search',
                  title: 'Analysis ka Store',
                  body: 'Data warehouse ek "analytical store" hai. BI tools (Tableau, Power BI) warehouse se data fetch karti hain aur dashboards banati hain. Warehouse data ko fast, accurate analysis ke liye ready rakhta hai.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'Database vs Data Warehouse (OLTP vs OLAP)',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'db-vs-dw',
              caption:
                'Database (OLTP) aur Data Warehouse (OLAP) alag kaam karte hain: Database rozana transactions ke liye (fast inserts/updates, current data), Data Warehouse analysis ke liye (historical, integrated, multi-dimensional). OLTP se data nikalta hai, ETL karke warehouse mein daalta hai, phir OLAP analysis karta hai.',
            },
            {
              type: 'cards',
              title: 'Analytics ka Role',
              kicker: 'Part 3',
              cards: [
                {
                  icon: 'chart',
                  title: 'Descriptive Analytics',
                  body: 'Warehouse se data lekar past ka summary banati hai. "Kya hua?" — reports, dashboards. Ye sabse basic level hai — fact present karna.',
                },
                {
                  icon: 'search',
                  title: 'Diagnostic Analytics',
                  body: 'Data ke andar reasons dhundti hai. "Kyun hua?" — root cause analysis. Warehouse ka data deep dive karke patterns nikalti hai.',
                },
                {
                  icon: 'forecast',
                  title: 'Predictive Analytics',
                  body: 'ML models ka use karke future ka estimate banati hai. "Kya hoga?" — forecasting. Data warehouse ka historical data training ke liye use hota hai.',
                },
                {
                  icon: 'prescriptive',
                  title: 'Prescriptive Analytics',
                  body: 'Best action recommend karti hai. "Kahan karna hai?" — optimization. Final output decision support hai. Analytics ka final goal yahi hai.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'Analytics Ka Safar — 4 Stages',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'analytics',
              caption:
                'Analytics ka safar chaar stages mein hota hai: Descriptive (kya hua?) → Diagnostic (kyun hua?) → Predictive (kya hoga?) → Prescriptive (kahan karna?). Database data deta hai, warehouse data organize karta hai, aur analytics us data se insights nikalti hai.',
            },
            {
              type: 'image',
              title: 'Analytics Types (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/analytics-types.png', caption: 'Analytics Flowchart — Descriptive, Diagnostic, Predictive, Prescriptive leading to Decision & Action' },
              ],
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Ek e-commerce company (Amazon jaisi). Rozana lakhon transactions hoti hain — wo sab database (OLTP) mein store hoti hain. Raat ko ETL process sab transaction data ko data warehouse (OLAP) mein daal deta hai. Phir analytics tools warehouse se data lekar descriptive analytics karti hain (monthly sales), diagnostic analytics (sales kam kaaran kya hai), predictive analytics (agle month ka estimate), aur prescriptive analytics (kaunsa product suggest karna hai). Final mein customer ko products recommend kar diya jata hai. Ye full ecosystem hai — Database, Data Warehouse aur Analytics ek saath.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'Database = OLTP (Online Transaction Processing). Rozana transactions ke liye.',
                'Data Warehouse = OLAP (Online Analytical Processing). Historical analysis ke liye.',
                'OLTP: fast inserts/updates, current data, row-based.',
                'OLAP: multi-dimensional analysis, historical data, data cubes.',
                'Data flow: Database (OLTP) → ETL → Data Warehouse (OLAP) → Analytics → Decisions.',
                'Analytics 4 types: Descriptive, Diagnostic, Predictive, Prescriptive.',
                'Database = source, Warehouse = analytical store, Analytics = intelligence.',
                'Warehouse features: Subject-oriented, Integrated, Time-variant, Non-volatile.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Database (OLTP): rozana transactions, current data.',
                'Data Warehouse (OLAP): historical data, multi-dimensional analysis.',
                'Data flow: DB → ETL → Warehouse → Analytics → Decisions.',
                'Analytics: Descriptive → Diagnostic → Predictive → Prescriptive.',
                'DB = source, Warehouse = store, Analytics = intelligence.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Differentiate between databases (OLTP) and data warehouses (OLAP) in Business Intelligence.',
              answer:
                '**Database (OLTP — Online Transaction Processing):**\n- Purpose: rozana transactions ke liye (sales, orders, inventory)\n- Data: current, operational\n- Structure: row-based, normalized\n- Operations: fast inserts aur updates\n- Users: operational staff\n\n**Data Warehouse (OLAP — Online Analytical Processing):**\n- Purpose: historical data analysis\n- Data: integrated, historical, time-variant\n- Structure: multi-dimensional cubes, denormalized\n- Operations: complex queries, drill-down, slice, dice\n- Users: analysts, managers, executives\n\n**Relationship:** Database se data extract kiya jata hai, ETL process se transform kiya jata hai, aur data warehouse mein load kiya jata hai. Phir OLAP analysis ke liye use hota hai.\n\n**Diagram:** Refer to the OLTP vs OLAP diagram in this topic.',
            },
            {
              question: 'Explain how analytics (descriptive, diagnostic, predictive, prescriptive) converts data into business decisions.',
              answer:
                '**Analytics ka safar:**\n\n1. **Descriptive — "What happened?"** — Past data ka summary. Reports, dashboards. Ye data ko present karta hai.\n\n2. **Diagnostic — "Why did it happen?"** — Root cause analysis. Data ke andar reasons dhundti hai.\n\n3. **Predictive — "What will happen?"** — Future ka estimate. ML models ka use.\n\n4. **Prescriptive — "What should we do?"** — Best action recommend karti hai. Optimization, simulation.\n\n**Ek example se samjhte hain:**\n- Descriptive: "Last month sales 10% kam hui."\n- Diagnostic: "Kyun hui? Kyunki ek competitor ne discount diya."\n- Predictive: "Agle month bhi sales kam hogi."\n- Prescriptive: "Toh competitor ke saath alag strategy lo, extra campaign chalo."\n\n**Diagram:** Refer to the Analytics Stages diagram — 4 stages of analytics.',
            },
          ],
        },

        // ========================================================
        // TOPIC 6 — Applications of BI in business domains
        // ========================================================
        {
          id: 'applications-bi',
          number: '1.6',
          title: 'Applications of BI in Business Domains',
          subtitle: 'BI ka use finance, healthcare, retail aur education mein',
          icon: 'ai',
          accent: '#0047ff',
          englishDefinition:
            'Business Intelligence is applied across diverse business domains. In **finance**, BI supports fraud detection, risk management, portfolio optimization and regulatory compliance. In **healthcare**, BI enables patient outcome analysis, resource planning, clinical operations and population health management. In **retail**, BI drives sales forecasting, inventory optimization, customer segmentation and omnichannel analytics. In **education**, BI helps student performance monitoring, enrollment analytics, institutional planning and resource allocation.',
          intro: 'Socha hai ki ek bank, ek hospital, ek shop ya ek school — sab apne tarah se data ka use karte hain? Ek hi BI technology ke different domains mein different applications hain. Is topic mein ham dekhnge ki finance, healthcare, retail aur education — 4 major domains mein BI ka kya use hota hai. Ye bahut important hai kyunki exam mein domain-based applications ka sawal aa sakta hai.',
          sections: [
            {
              type: 'definition',
              title: 'BI Domains kya hain?',
              kicker: 'Overview',
              body: 'BI ek universal technology hai — ye kisi ek field se simit nahi hai. Har business domain apne data ko analyze karke better decisions leta hai. Finance, healthcare, retail aur education — ye 4 domains sabse important hain.',
              body2: 'Aasan sabd mein: BI ka use karke har field apne problems ko data se solve karta hai — finance mein risk, healthcare mein patient care, retail mein sales, education mein student performance.',
              chips: ['Finance', 'Healthcare', 'Retail', 'Education'],
            },
            {
              type: 'cards',
              title: 'BI Applications by Domain',
              kicker: 'Domain-wise Uses',
              cards: [
                {
                  icon: 'chart',
                  title: 'Finance',
                  body: 'BI finance mein fraud detection, risk management, portfolio optimization aur regulatory compliance ke liye use hota hai. Banks real-time transaction monitoring karti hain, risk models chalti hain, aur compliance reports auto-generate hoti hain.',
                },
                {
                  icon: 'warehouse',
                  title: 'Healthcare',
                  body: 'BI healthcare mein patient outcomes ka analysis, resource planning (beds, staff), clinical operations aur population health management ke liye use hota hai. Hospitals patient data, treatment outcomes aur resource utilization ko analyze karti hain.',
                },
                {
                  icon: 'dashboard',
                  title: 'Retail',
                  body: 'BI retail mein sales forecasting, inventory optimization, customer segmentation aur omnichannel analytics ke liye use hota hai. Stores ek saath online aur offline sales dekhte hain, stock levels manage karte hain, aur customers ko segment karte hain.',
                },
                {
                  icon: 'book',
                  title: 'Education',
                  body: 'BI education mein student performance monitoring, enrollment analytics, institutional planning aur resource allocation ke liye use hota hai. Schools/universities attendance, grades, completion rates aur resource usage ko track karti hain.',
                },
              ],
            },
            {
              type: 'image',
              title: 'BI in Healthcare (Reference Image)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/bi-healthcare.png', caption: 'BI Applications in Healthcare — leveraging data for operational and financial success' },
              ],
            },
            {
              type: 'cards',
              title: 'Common BI Applications (All Domains)',
              kicker: 'General Applications',
              cards: [
                {
                  icon: 'search',
                  title: 'Customer Insights',
                  body: 'Har domain mein customer/patient/student ka data analyze hota hai. Retail mein customers, healthcare mein patients, education mein students — sabka behavior, preferences aur needs data se pata chalta hai.',
                },
                {
                  icon: 'clock',
                  title: 'Operational Efficiency',
                  body: 'Resources ka best use karna. Finance mein capital allocation, healthcare mein beds/staff, retail mein inventory, education mein classrooms/teachers — sab optimize hota hai.',
                },
                {
                  icon: 'forecast',
                  title: 'Future Planning',
                  body: 'Forecasting aur planning har domain mein important hai. Finance mein market trends, healthcare mein patient demand, retail mein sales seasonality, education mein enrollment trends — sab predict kiye jaate hain.',
                },
              ],
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Ek retail chain (jaise Walmart) BI use karti hai — stores mein cameras aur POS systems se data collect karti hai. BI analyze karta hai: kaunsa product kahan bik raha hai, kaunsa season mein kya chalega, inventory ka status kaisa hai. Phir supply chain optimize karta hai — kaun si store mein kaun sa product bhejo. Yehi BI ka retail domain application hai. Healthcare mein ek hospital BI use karta hai patient wait times, bed utilization aur treatment outcomes ka analysis karne ke liye.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'BI applications domain-wise classify hoti hain — finance, healthcare, retail, education.',
                'Finance: fraud detection, risk management, portfolio optimization, compliance.',
                'Healthcare: patient outcomes, resource planning, clinical operations.',
                'Retail: sales forecasting, inventory optimization, customer segmentation.',
                'Education: student performance, enrollment analytics, resource allocation.',
                'Common applications: customer insights, operational efficiency, future planning.',
                'BI har domain mein data-driven decisions leti hai.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Finance: fraud, risk, portfolio, compliance.',
                'Healthcare: patient outcomes, resources, clinical ops.',
                'Retail: sales forecast, inventory, customer segments.',
                'Education: student performance, enrollment, planning.',
                'BI har domain mein data se better decisions deti hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the applications of Business Intelligence in any two business domains with examples.',
              answer:
                '**BI Applications in Different Domains:**\n\n**1. Finance:**\n- **Fraud detection** — real-time transaction monitoring, anomaly detection\n- **Risk management** — credit risk, market risk analysis\n- **Portfolio optimization** — investment decisions\n- **Regulatory compliance** — automatic report generation\n\n**2. Healthcare:**\n- **Patient outcome analysis** — treatment effectiveness, recovery rates\n- **Resource planning** — beds, staff, equipment utilization\n- **Clinical operations** — workflow optimization\n- **Population health** — disease patterns, preventive care\n\n**3. Retail:**\n- **Sales forecasting** — seasonal trends, demand prediction\n- **Inventory optimization** — stock levels, replenishment\n- **Customer segmentation** — behavior, preferences, lifetime value\n- **Omnichannel analytics** — online + offline sales\n\n**4. Education:**\n- **Student performance** — grades, attendance, completion rates\n- **Enrollment analytics** — admission trends, retention\n- **Institutional planning** — resource allocation\n\n**Diagram:** Refer to BI applications by domain structure in this topic.',
            },
            {
              question: 'What are the common applications of BI across all business domains?',
              answer:
                '**Common BI Applications Across Domains:**\n\n1. **Customer Insights** — har domain mein customer/patient/student ka behavior aur preferences analyze kiye jaate hain.\n\n2. **Operational Efficiency** — resources ka best use. Finance mein capital, healthcare mein beds/staff, retail mein inventory, education mein classrooms.\n\n3. **Future Planning** — forecasting aur strategic planning. Market trends, demand prediction, seasonal patterns, enrollment trends.\n\n4. **Performance Monitoring** — KPIs track karna. Sales, patient satisfaction, student grades, financial ratios.\n\n5. **Decision Support** — data-driven decisions har level par. Strategic, tactical, operational.\n\n**Aasan sabd mein:** BI har domain mein "data se better decisions" ka kaam karta hai — chahe finance ho, healthcare, retail ya education.',
            },
          ],
        },

        // ========================================================
        // TOPIC 7 — Benefits and Challenges of BI
        // ========================================================
        {
          id: 'benefits-challenges-bi',
          number: '1.7',
          title: 'Benefits & Challenges of BI Systems',
          subtitle: 'BI implement karna — faayde aur challenges',
          icon: 'warn',
          accent: '#0047ff',
          englishDefinition:
            'Business Intelligence systems offer significant **benefits** including improved decision-making, increased operational efficiency, enhanced customer satisfaction, competitive advantage, cost reduction and revenue growth. However, implementing BI also involves **challenges** such as data quality issues, high costs of implementation, data security and privacy concerns, resistance to change, technical complexity, and the need for skilled personnel. Understanding both benefits and challenges helps organizations plan successful BI implementations.',
          intro: 'Har technology ka dukh aur sukh hota hai. BI bhi exception nahi hai — ye bade faayde deti hai, lekin implementation mein challenges bhi hai. Aaj ke time mein companies BI implement karna chahti hain, lekin kuch problems ka samna bhi hota hai. Is topic mein ham dono dekhnge — faayde (benefits) aur challenges — aur samjhnge ki successful BI implementation ka kya tarika hai.',
          sections: [
            {
              type: 'definition',
              title: 'Benefits vs Challenges — Ek Jhatka Mein',
              kicker: 'Overview',
              body: 'BI ka main goal hai better decisions dena. Iske faayde clear hain — fast decisions, accuracy, efficiency, competitive advantage. Lekin implementation ke raaste mein kuch challenges bhi hain — data quality, cost, security, aur change management.',
              body2: 'Aasan sabd mein: BI acha hai — lekin iske liye acha data, achi technology aur logon ka support chahiye. "Garbage in, garbage out" ka principle yaad rakhna.',
              chips: ['Benefits = Faayde', 'Challenges = Mushkilein', 'Both important'],
            },
            {
              type: 'cards',
              title: 'BI ke Benefits (Faayde)',
              kicker: 'Why implement BI?',
              cards: [
                {
                  icon: 'bulb',
                  title: 'Better Decision Making',
                  body: 'BI data-driven decisions deti hai — gut feeling pe nahi. Managers real-time data dekh kar decisions lete hain, jo accurate aur fast hoti hain. Ye BI ka sabse bada benefit hai.',
                },
                {
                  icon: 'clock',
                  title: 'Increased Efficiency',
                  body: 'Operations fast aur efficient hote hain. Manual reporting automatize hota hai, data analysis fast hota hai, aur processes smooth chalte hain. Time aur cost dono bachte hain.',
                },
                {
                  icon: 'chart',
                  title: 'Competitive Advantage',
                  body: 'Data-driven companies market mein aage rehti hain. Wo customers ko behtar samajhti hain, market trends ko pehle pakadti hain, aur competitors se aage nikalti hain.',
                },
                {
                  icon: 'check',
                  title: 'Cost Reduction',
                  body: 'BI waste identify karti hai — extra inventory, underperforming campaigns, inefficient processes. Isse costs kam hote hain aur ROI (Return on Investment) badhta hai.',
                },
              ],
            },
            {
              type: 'cards',
              title: 'BI ke Challenges (Mushkilein)',
              kicker: 'What can go wrong?',
              cards: [
                {
                  icon: 'database',
                  title: 'Data Quality',
                  body: 'Sabse bada challenge — "garbage in, garbage out". Kharab, incomplete ya outdated data se kharab decisions nikalti hain. Data ko clean aur maintain karna mushkil hai.',
                },
                {
                  icon: 'ai',
                  title: 'Cost & Complexity',
                  body: 'BI implement karne mein cost high hai — technology, infrastructure, tools, aur skilled people. Small organizations ke liye ye challenge ho sakta hai.',
                },
                {
                  icon: 'warn',
                  title: 'Security & Privacy',
                  body: 'Sensitive business data ka security aur privacy ka sawal hai. Data breaches, compliance (GDPR etc.), aur unauthorized access — sabse risk hai.',
                },
                {
                  icon: 'executive',
                  title: 'Resistance to Change',
                  body: 'Employees naye tools aur processes mein changes nahi chahte. Training aur change management chahiye. "People" ka factor sabse important hai.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'BI Benefits vs Challenges',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'benefits-challenges',
              caption:
                'BI implementation ke faayde (better decisions, efficiency, competitive advantage, cost reduction) aur challenges (data quality, cost, security, resistance to change) dono sides dekhna important hai. Successful implementation ke liye benefits ko maximize aur challenges ko minimize karna part of planning hai.',
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Ek mid-size company ne BI implement kiya. Pehle faayde mila — managers dashboards dekh kar fast decisions le rahe the, sales improve ho rahi thi. Lekin 6 months baad ek problem hui — data quality issue (kharab data) se kuch dashboards wrong information dikha rahe the. Phir company ne data clean karna, staff ko train karna aur security measures lagaye. Final mein BI successful ho gayi. Ye example batata hai — benefits to aayengi, lekin challenges ko address karna important hai.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'Benefits: better decisions, increased efficiency, competitive advantage, cost reduction, revenue growth, customer satisfaction.',
                'Challenges: data quality, cost, complexity, security/privacy, resistance to change, skilled personnel.',
                '"Garbage in, garbage out" — data quality sabse important challenge hai.',
                'Change management — employees ko train karna aur support dena important hai.',
                'Successful BI = benefits maximize karna + challenges minimize karna.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Benefits: better decisions, efficiency, competitive advantage, cost reduction.',
                'Challenges: data quality, cost, security, resistance to change.',
                'Garbage in, garbage out — kharab data se kharab decisions.',
                'Change management important hai.',
                'Successful BI = benefits maximize + challenges minimize.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Discuss the benefits and challenges of implementing a Business Intelligence system in an organization.',
              answer:
                '**Benefits of BI:**\n\n1. **Better Decision Making** — Data-driven decisions, real-time insights, accuracy.\n2. **Increased Efficiency** — Automated reporting, faster processes, less manual work.\n3. **Competitive Advantage** — Market trends early detection, customer understanding.\n4. **Cost Reduction** — Waste identification, inventory optimization.\n5. **Revenue Growth** — Better marketing, customer retention.\n6. **Customer Satisfaction** — Personalized experiences, better service.\n\n**Challenges of BI:**\n\n1. **Data Quality** — "Garbage in, garbage out". Incomplete, inconsistent, or outdated data.\n2. **Cost & Complexity** — High implementation cost, infrastructure, tools.\n3. **Security & Privacy** — Data breaches, compliance (GDPR), unauthorized access.\n4. **Resistance to Change** — Employees resist new tools and processes.\n5. **Technical Complexity** — Integration with existing systems, maintenance.\n6. **Skilled Personnel** — Need for data analysts, data scientists.\n\n**Conclusion:** BI benefits aur challenges dono hain — successful implementation ke liye challenges ko address karna (data quality, training, security) important hai.',
            },
            {
              question: 'What is "garbage in, garbage out" in the context of BI? Explain with an example.',
              answer:
                '**"Garbage in, garbage out" (GIGO)** — kharab (garbage) data se kharab (garbage) results nikalte hain. Ye BI ka sabse important principle hai.\n\n**Explanation:**\n- BI system sirf data ko process aur present karti hai — data ka quality BI ke results pe directly impact dalta hai.\n- Agar data kharab hai (incomplete, duplicate, outdated, incorrect), toh analysis bhi kharab hogi.\n- Kharab analysis se kharab decisions nikalti hain.\n\n**Example:**\n- Ek retail company mein inventory data mein duplicate entries hain.\n- BI dashboard batata hai "stock 100 units hai" — lekin actually stock 100 nahi hai.\n- Manager decision leta hai "order kam karo" — lekin actual stock kam hai.\n- Result: stock-out ho jata hai, sales loss hota hai.\n\n**Lesson:** Data quality sabse pehla priority hai — data ko clean, accurate aur up-to-date rakhna important hai.',
            },
          ],
        },

        // ========================================================
        // TOPIC 8 — Generative AI and LLMs in BI
        // ========================================================
        {
          id: 'genai-llm-bi',
          number: '1.8',
          title: 'Generative AI & LLMs in Business Intelligence',
          subtitle: 'GenAI aur LLMs ka BI mein use',
          icon: 'ai',
          accent: '#0047ff',
          englishDefinition:
            'Generative AI (GenAI) refers to artificial intelligence capable of generating text, images, code or other content. Large Language Models (LLMs) such as GPT-4 are a type of GenAI trained on vast amounts of text. In Business Intelligence, GenAI and LLMs are transforming how users interact with data — enabling natural language queries ("ask your data"), automated insight generation, report writing, anomaly explanations, and conversational analytics dashboards. They bridge the gap between data analysts and non-technical business users.',
          intro: 'Aapne ChatGPT use kiya hai? Ya aapne Google se normal language mein question pucha hai? Wo Generative AI hai. Ab imaginary karo ki aap apne business data se normal Hindi/English mein puch sakte ho — "Pichhle month ka sales kaisa raha?" aur system aapko answer degi. Ye GenAI aur LLMs ka BI mein use hai. Is topic mein ham dekhnge ki GenAI/LLMs kya hain, aur ye BI ko kaisa transform kar rahi hain. Ye aaj ke zamana ka sabse trending topic hai.',
          sections: [
            {
              type: 'definition',
              title: 'GenAI aur LLM kya hain?',
              kicker: 'Definition',
              body: 'Generative AI (GenAI) ek AI ka type hai jo content generate kar sakti hai — text, images, code, aur baki media. LLMs (Large Language Models) GenAI ka ek subtype hain jo text ko process aur generate karti hain.',
              body2: 'Aasan sabd mein: GenAI = "bana do" (content generate karna). LLM = "samajh lo aur likh do" (language ko samajh kar text generate karna). ChatGPT ek LLM hai.',
              chips: ['GenAI = Generate content', 'LLM = Language models', 'ChatGPT example hai', 'BI mein transform kar rahe hain'],
            },
            {
              type: 'cards',
              title: 'GenAI/LLMs ke Key Concepts',
              kicker: 'Important Terms',
              cards: [
                {
                  icon: 'ai',
                  title: 'Generative AI (GenAI)',
                  body: 'AI ka wo type jo naye content generate karti hai — text, images, code, audio, video. "Generative" ka matlab hai "banana". Ye previous patterns se naya output banati hai.',
                },
                {
                  icon: 'book',
                  title: 'Large Language Models (LLMs)',
                  body: 'GenAI ka ek subtype jo language ko samajh aur generate karti hai. LLMs par bade datasets par train kiye hote hain — text, code, aur baki content. Examples: GPT-4, Claude, Gemini, LLaMA.',
                },
                {
                  icon: 'search',
                  title: 'Natural Language Query',
                  body: '"Ask your data" — users normal language mein data se puch sakte hain. "Pichhle month ka sales?" ya "Kaunsa product top mein hai?" — ek normal conversation jaise. Ye non-technical users ke liye BI accessible banati hai.',
                },
                {
                  icon: 'bulb',
                  title: 'AI-Powered Insights',
                  body: 'BI + GenAI mil kar automatic insights generate karti hain. System data ko analyze karke automatically batati hai "kuch kya hua, kyun hua, aur kya karna hai". Ye traditional BI se aage hai.',
                },
              ],
            },
            {
              type: 'cards',
              title: 'GenAI/LLMs in BI — Applications',
              kicker: 'Use in BI',
              cards: [
                {
                  icon: 'chart',
                  title: 'Conversational Analytics',
                  body: 'Chatbots aur voice assistants data se conversation karti hain. "Show me last quarter sales" ya "Why did sales drop?" — aap normal language mein puch sakte hain, system answer degi. Ye BI ko non-technical users ke liye accessible banati hai.',
                },
                {
                  icon: 'dashboard',
                  title: 'Automated Report Generation',
                  body: 'LLMs automatic reports likh sakti hain — data ka summary automatically prepare karti hain. Excel/Power BI se ek click mein report generate ho sakti hai. Ye time bachata hai aur efficiency badhata hai.',
                },
                {
                  icon: 'forecast',
                  title: 'Anomaly Detection & Explanation',
                  body: 'GenAI data ke anomalies (unusual patterns) detect aur explain kar sakti hai. "Sales kam hui kyun?" — system batati hai possible reasons. Ye diagnostic analytics ko aur powerful banati hai.',
                },
                {
                  icon: 'prescriptive',
                  title: 'Predictive Recommendations',
                  body: 'LLMs historical data aur patterns dekh kar recommendations generate karti hain. "Kaunsa product stock karna hai?" ya "Kaunsa campaign chalana hai?" — prescriptive analytics ka advanced version.',
                },
              ],
            },
            {
              type: 'diagram',
              title: 'GenAI + BI Integration',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'genai',
              caption:
                'GenAI/LLMs BI ke saath integration kar rahi hain: Data → BI system → GenAI/LLM → Natural language output. Users normal language mein puchte hain, LLM data ko samajh kar answer generate karti hai. Ye BI ko accessible, automatic aur conversational banati hai.',
            },
            {
              type: 'image',
              title: 'GenAI in Analytics (Reference Images)',
              kicker: 'Image from the Internet',
              images: [
                { src: '/images/genai-bi.jpg', caption: 'Generative AI Analytics — Transforming Business Intelligence' },
                { src: '/images/genai-analytics.jpg', caption: 'AI Analytics Myths Demystified — GenAI and BI integration' },
              ],
            },
            {
              type: 'example',
              title: 'Real-World Example',
              kicker: 'Example',
              body: 'Imagine ek sales manager hai. Pehle wo reports ke liye IT team ko mail karta tha, 2 days wait karta tha. Ab wo ek GenAI-powered BI dashboard use karta hai — normal language mein puchta hai: "Pichhle quarter ka sales report dikhao" ya "Kaunsa product sabse jada bik raha hai?" — system instant answer deti hai. Wo aage puchta hai: "Sales kam hui kyun?" — GenAI diagnostic analysis karke batati hai possible reasons. Ye conversational analytics hai — BI + LLM ka mishran.',
            },
            {
              type: 'points',
              title: 'Exam-Focused Points',
              kicker: 'Important For Exam',
              points: [
                'GenAI = Generative AI — content generate karna (text, images, code).',
                'LLM = Large Language Model — language ko samajh aur generate karna. Examples: GPT-4, Claude, Gemini.',
                'BI mein GenAI/LLMs ka use: conversational analytics, automated reports, anomaly explanation, recommendations.',
                '"Ask your data" — natural language query karna ek important application hai.',
                'GenAI BI ko non-technical users ke liye accessible banati hai.',
                'Conversational analytics — chatbots aur voice assistants data se conversation karti hain.',
                'AI-powered insights — automatic analysis aur recommendations.',
                'ChatGPT ek LLM hai — GenAI ka sabse famous example.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'GenAI = content generate karna (text, images, code).',
                'LLM = language model — ChatGPT/GPT-4 examples.',
                'BI mein: ask your data, auto reports, anomaly explanation.',
                'Conversational analytics — normal language mein data se pucho.',
                'GenAI BI ko accessible aur automatic banati hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Define Generative AI (GenAI) and Large Language Models (LLMs). Explain their applications in Business Intelligence.',
              answer:
                '**Generative AI (GenAI):**\nGenAI ek AI ka type hai jo naye content generate karti hai — text, images, code, audio. Ye previous patterns se naya output banati hai.\n\n**Large Language Models (LLMs):**\nLLMs GenAI ka subtype hai jo language ko samajh aur generate karti hai. Ye bade datasets par train kiye hoti hain. Examples: GPT-4, Claude, Gemini, LLaMA.\n\n**Applications in BI:**\n\n1. **Conversational Analytics** — "Ask your data" — users normal language mein data se puchte hain, system answer deti hai.\n\n2. **Automated Report Generation** — reports automatic generate hoti hain, time bachta hai.\n\n3. **Anomaly Detection & Explanation** — unusual patterns detect aur explain karti hai.\n\n4. **Predictive Recommendations** — historical data se recommendations generate karti hai.\n\n**Impact:** GenAI BI ko accessible, automatic aur conversational banati hai — non-technical users bhi data se directly interact kar sakte hain.\n\n**Diagram:** Refer to GenAI + BI Integration diagram in this topic.',
            },
            {
              question: 'What is "Conversational Analytics"? How does it benefit non-technical business users?',
              answer:
                '**Conversational Analytics:**\nConversational analytics ka matlab hai data se normal language (Hinglish/English) mein conversation karna. Users complex queries likhne ya dashboards interact karne ke  instead normal language mein puchte hain.\n\n**Example:**\n- "Pichhle month ka sales kaisa raha?"\n- "Kaunsa product sabse jada bik raha hai?"\n- "Sales kam hui kyun?"\n\n**Benefits for Non-Technical Users:**\n\n1. **No technical knowledge needed** — users SQL, dashboards ya complex tools jaanne ki zaroorat nahi hai.\n\n2. **Faster decisions** — data tak direct access, reports ke liye IT team ka wait nahi karna.\n\n3. **Self-service** — non-technical users khud apna analysis kar sakte hain.\n\n4. **Accessibility** — BI har employee ke liye accessible ho jati hai — chahe wo finance ho, marketing, HR, ya operations.\n\n**Impact:** Ye BI ka reach badhati hai — ek sales manager, HR person ya marketing executive sab data se directly interact kar sakte hain. Ye "democratization of data" kehlaata hai.',
            },
          ],
        },
      ],
    },
  ],
  'cyber-security': [
    {
      id: 'unit-1',
      number: '1',
      name: 'Introduction to Cyber Security',
      topics: [
        {
          id: 'intro-cyber',
          number: '1.1',
          title: 'Introduction to Cyber Security',
          subtitle: 'Cyber security kya hai — basic concepts aur importance',
          icon: 'shield',
          accent: '#0047ff',
          englishDefinition:
            'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. Implementing effective cybersecurity measures is especially challenging today because there are more devices than people, and attackers are becoming more innovative.',
          intro: 'Aaj ki digital duniya mein, har jagah computers, smartphones aur internet hai. Har din hum online banking, shopping, social media — sab karte hain. Lekin kya aapne socha hai ki ye sab safely kaise chal raha hai? Cyber security ka matlab hai internet par safe rehna, hackers se bachna, aur apne digital data ko protect karna. Is topic mein ham samjhnge ki cyber security kya hai, kaisa kam karti hai, aur ye hamari zindagi mein kyun important hai.',
          sections: [
            {
              type: 'definition',
              title: 'Cyber Security kya hai? (Simple Words Mein)',
              kicker: 'Definition',
              body: 'Cyber security ek aisa process hai jisme ham apne computers, networks, aur digital data ko hackers, malware, aur other online threats se protect karte hain. Ye har tarike se digital attacks se bachne ka kaam karti hai — chahe wo phishing ho, virus ho, ya ransomware.',
              body2: 'Ek sentence mein: Cyber security ka matlab hai "internet par apne digital assets ko safe rakhna aur unhe attackers se protect karna".',
              chips: ['Protect systems', 'Secure networks', 'Defend data', 'Prevent attacks'],
            },
            {
              type: 'cards',
              title: 'Cyber Security Ke Key Areas',
              kicker: 'Important Concepts',
              cards: [
                { icon: 'shield', title: 'Network Security', body: 'Network security ka matlab hai apne computer network ko protect karna. Ye firewalls, intrusion detection systems (IDS), aur virtual private networks (VPNs) ka use karti hai taaki unauthorized access roka ja sake.' },
                { icon: 'database', title: 'Application Security', body: 'Application security apps aur software ko threats se protect karti hai. Ye development ke time hi security features add karti hai — input validation, authentication, encryption.' },
                { icon: 'lock', title: 'Information Security', body: 'Information security ka matlab hai sensitive data ko protect karna — chahe wo personal information ho, financial records ho, ya business secrets. Ye data ko unauthorized access se bachati hai.' },
                { icon: 'bulb', title: 'Operational Security', body: 'Operational security processes aur decisions ko protect karti hai. Ye policies, procedures, aur guidelines banati hai taaki organization ka har operation safe rahe.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Cyber Security — Overall Framework',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cyber-framework',
              caption: 'Cyber security 4 main areas par kaam karti hai: Network Security, Application Security, Information Security, aur Operational Security. Sab milkar ek complete security posture banati hai.',
            },
            {
              type: 'points',
              title: 'Cyber Security Kyon Important Hai?',
              kicker: 'Key Points',
              points: [
                'Digital transformation — aaj har business online hai, isliye security zaroori hai.',
                'Data breaches ka loss — financial aur reputational damage dono ho sakta hai.',
                'Legal compliance — government regulations data protection ko mandatory karti hain.',
                'Trust — customers sirf tabhi business se connect karte hain jab wo safe feel karte hain.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyber security = digital systems aur data ko online threats se protect karna.',
                '4 key areas: Network, Application, Information, Operational Security.',
                'Hack hone par financial loss, reputation damage, aur legal issues ho sakte hain.',
                'Security har organization ki zaroorat hai — small business bhi.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Define Cyber Security. Explain its importance in the modern digital world.',
              answer:
                '**Cyber Security Definition:**\nCyber security is the practice of protecting systems, networks, aur digital data from cyber attacks. Ye unauthorized access, data breaches, aur digital theft se bachne ka process hai.\n\n**Importance:**\n\n1. **Digital Transformation** — Aaj har business online hai. Banks, hospitals, schools — sab digital services provide karte hain. Security ke bina ye sab risky ho jata hai.\n\n2. **Data Protection** — Personal information, financial records, business secrets — sab sensitive data hackers ke target hoti hai. Security isse protect karti hai.\n\n3. **Financial Loss Prevention** — Cyber attacks ka financial loss hota hai. Ransomware attacks mein companies khud paise de deti hain. Security isse rokti hai.\n\n4. **Legal Compliance** — Government ne data protection laws banaye hain (jaise IT Act 2000). Security compliance ke liye zaroori hai.\n\n5. **Trust aur Reputation** — Customers sirf tabhi business se connect karte hain jab wo safe feel karte hain. Data breach par company ki reputation kharb hoti hai.\n\n**Diagram:** Refer to Cyber Security Framework diagram showing 4 key areas.',
            },
            {
              question: 'What are the main areas of Cyber Security? Briefly explain each.',
              answer:
                '**4 Main Areas of Cyber Security:**\n\n1. **Network Security** — Computer networks ko protect karti hai. Firewalls, IDS (Intrusion Detection Systems), VPNs (Virtual Private Networks) ka use karti hai. Network traffic monitor karti hai aur unauthorized access rokti hai.\n\n2. **Application Security** — Apps aur software ko protect karti hai. Development ke time security features add karti hai — input validation, authentication, encryption, code reviews.\n\n3. **Information Security** — Sensitive data ko protect karti hai. Data encryption, access controls, aur backup policies ka use karti hai. Personal information, financial records, business secrets sab safe rehte hain.\n\n4. **Operational Security** — Organizational processes ko protect karti hai. Security policies, procedures, aur guidelines banati hai. Employee training, incident response plans, aur risk management ka kaam karti hai.\n\n**Aasan sabd mein:** Network security traffic ko control karti hai, application security software ko safe banati hai, information security data ko protect karti hai, operational security processes ko secure rakhti hai.\n\n**Diagram:** Refer to Cyber Security Framework diagram.',
            },
          ],
        },
        {
          id: 'need-importance-cyber',
          number: '1.2',
          title: 'Need, Importance and Challenges in Cyber Security',
          subtitle: 'Cyber security kyun zaroori hai aur challenges kya hain',
          icon: 'warn',
          accent: '#0047ff',
          englishDefinition:
            'Cybersecurity is critically important because society is deeply dependent on technology. From personal communications to national infrastructure, everything is connected. The need arises from increasing cyber threats, growing attack surfaces, and the high cost of data breaches. Key challenges include keeping pace with evolving threats, securing legacy systems, addressing the skills gap, and balancing security with usability.',
          intro: 'Kya aapne socha hai ki aaj ke bina cyber security kya hoga? Banks ka server hack ho, hospital ka data leak ho, ya government websites down ho — toh kya hoga? Cyber security aaj ki zaroorat hai, nahi toh digital duniya collapse ho sakti hai. Is topic mein ham dekhnge ki cyber security ka need kahan se aata hai, ye kaise important hai, aur hamare samajh mein challenges kya hain.',
          sections: [
            {
              type: 'definition',
              title: 'Cyber Security ka Need kahan se aata hai?',
              kicker: 'Understanding the Need',
              body: 'Cyber security ka need 3 main reasons se aata hai: (1) Internet ka overuse — aaj har cheez online hai, (2) Hackers ka increase — attacks roz badh rahe hain, (3) Data ka importance — personal, financial, government data sab sensitive hai.',
              body2: 'Simple words mein: Jab aapka sabkuch online hai, toh uska protection zaroori hai. Bini security ke online system hamesha risk mein rehte hain.',
              chips: ['Internet overuse', 'Growing threats', 'Data importance'],
            },
            {
              type: 'cards',
              title: 'Cyber Security ke Challenges',
              kicker: 'Key Challenges',
              cards: [
                { icon: 'warn', title: 'Rapidly Evolving Threats', body: 'Hackers ka techniques din ba din badalte hain. Ek security measure fix hoti hai toh hackers naya bypass dhundh lete hain. Staying ahead of threats ek constant challenge hai.' },
                { icon: 'database', title: 'Legacy Systems', body: 'Bada organizations mein purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte. Old software patch nahi ho sakta, isliye vulnerable rehte hain.' },
                { icon: 'users', title: 'Skills Gap', body: 'Cyber security experts ki demand bahut high hai, supply kam hai. Qualified professionals kam hain. Ye industry ka sabse bada challenge hai — qualified security engineers nahi milte.' },
                { icon: 'bulb', title: 'Balancing Security & Usability', body: 'Zyada security strict ho toh users iske use karna band dete hain. Simple passwords require karti hai toh weak ho jata hai. Ek balance maintain karna zaroori hai — secure hone ke saath use bhi easy hona chahiye.' },
              ],
            },
            {
              type: 'points',
              title: 'Cyber Security ka Importance',
              kicker: 'Why It Matters',
              points: [
                'Infrastructure protection — power grids, transportation, healthcare systems sab online hain.',
                'Economic stability — cyber attacks economic growth ko slow kar sakte hain.',
                'National security — government data, defense systems cyber attacks ke target ho sakte hain.',
                'Individual privacy — personal information, messages, photos sab protect karna zaroori hai.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyber security ka need Internet overuse, growing threats, aur data importance se aata hai.',
                '4 key challenges: evolving threats, legacy systems, skills gap, security-usability balance.',
                'Importance: infrastructure, economy, national security, individual privacy.',
                'Security hamesha evolving rahti hai — ek solution forever nahi chalti.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Discuss the need and importance of Cyber Security in today\'s digital world.',
              answer:
                '**Need for Cyber Security:**\n\n1. **Internet ka Overuse** — Aaj har cheez online hai: banking, shopping, education, healthcare. Jitna online activity badhegi, utna attack surface badhega.\n\n2. **Growing Cyber Threats** — Hackers din ba din naye techniques dhundh rahe hain. Ransomware, phishing, DDoS attacks roz hote hain.\n\n3. **Data Importance** — Personal data, financial records, government information — sab sensitive hai. Data leak ho toh heavy loss ho sakta hai.\n\n**Importance:**\n\n1. **Infrastructure Protection** — Power grids, transportation systems, hospitals — sab online hain. Hack ho toh nation halt ho sakti hai.\n\n2. **Economic Stability** — Cyber attacks financial markets ko affect karte hain. Companies ka loss millions mein ho sakta hai.\n\n3. **National Security** — Defense systems, government databases cyber attacks ke target ho sakte hain.\n\n4. **Individual Privacy** — Har insaan ka personal data — messages, photos, bank details — sab protect hona chahiye.\n\n**Diagram:** Refer to Cyber Security Importance diagram.',
            },
            {
              question: 'What are the major challenges faced in implementing Cyber Security?',
              answer:
                '**4 Major Challenges in Cyber Security:**\n\n1. **Rapidly Evolving Threats** — Hackers ka techniques continuous badalte hain. Security measures ek time fixed hoti hai, but hackers naya bypass dhundh lete hain. Staying ahead of threats ek constant challenge hai.\n\n2. **Legacy Systems** — Purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte. Old software patch nahi ho sakta — isliye long-term vulnerable rehte hain.\n\n3. **Skills Gap** — Cyber security experts ki demand high hai, supply kam hai. Qualified professionals kam hain. Ye industry ka sabse bada challenge hai.\n\n4. **Balancing Security & Usability** — Zyada security strict ho toh users iske use karna band dete hain. Simple passwords require karti hai toh weak ho jata hai. Ek balance maintain karna zaroori hai.\n\n**Other Challenges:**\n\n5. **Cost** — Security implementation expensive hai. Small companies afford nahi kar pati.\n\n6. **Complexity** — Modern IT environments bahut complex hain. Multi-cloud, remote work, IoT devices — sab security ko difficult banate hain.\n\n**Diagram:** Refer to Cyber Security Challenges diagram.',
            },
          ],
        },
        {
          id: 'cyberspace',
          number: '1.3',
          title: 'Cyberspace',
          subtitle: 'Cyberspace kya hai — digital world ka concept',
          icon: 'globe',
          accent: '#0047ff',
          englishDefinition:
            'Cyberspace is the global domain of human activity and communication via digital networks. It encompasses the internet, cellular networks, and all connected devices and systems. Cyberspace is not a physical place but a virtual environment where information is created, stored, shared, and protected.',
          intro: '"Cyberspace" word sun ke aapke dimaag mein kya aata hai? Ek virtual duniya, internet ka wo jagah jahan hum sab online activity karte hain. Lekin cyberspace sirf internet nahi hai — ye ek broader concept hai. Is topic mein ham samjhnge ki cyberspace kya hai, iske components kya hain, aur ye hamari zindagi mein kahan tak faila hua hai.',
          sections: [
            {
              type: 'definition',
              title: 'Cyberspace kya hai?',
              kicker: 'Definition',
              body: 'Cyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.',
              body2: 'Simple words mein: Cyberspace = Internet + Mobile Networks + Connected Devices + Digital Communication. Ye aaj ki modern duniya ka sabse important virtual space hai.',
              chips: ['Virtual environment', 'Global domain', 'Digital communication', 'Connected networks'],
            },
            {
              type: 'cards',
              title: 'Cyberspace ke Components',
              kicker: 'Key Components',
              cards: [
                { icon: 'globe', title: 'Physical Infrastructure', body: 'Cyberspace ka base physical infrastructure hai — servers, routers, switches, undersea cables, satellites. Ye sab digital data ko physically transmit aur store karte hain.' },
                { icon: 'database', title: 'Logical Layer', body: 'Logical layer software, protocols, aur applications ka hai. Ye data ko process, route, aur protect karta hai. TCP/IP, HTTP, DNS — ye sab protocols logical layer ka part hain.' },
                { icon: 'users', title: 'Social Layer', body: 'Social layer users, communities, aur human activity ka hai. Social media, online transactions, digital communication — sab cyberspace ka social layer hai.' },
                { icon: 'shield', title: 'Security Layer', body: 'Security layer cyberspace ko protect karti hai. Firewalls, encryption, authentication — ye sab security mechanisms cyberspace ka integral part hain.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Cyberspace — Layered Structure',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cyberspace-layers',
              caption: 'Cyberspace 4 layers par based hai: Physical (infrastructure), Logical (software/protocols), Social (users/activity), aur Security (protection). Sab milkar digital world banate hain.',
            },
            {
              type: 'points',
              title: 'Cyberspace ka Scope aur Reach',
              kicker: 'Key Points',
              points: [
                'Global reach — cyberspace duniya bhar mein faila hua hai, borders ko cross karta hai.',
                'Always connected — 24/7 activity, din raat digital communication hoti hai.',
                'Multi-dimensional — text, audio, video, images — sab cyberspace mein exist karte hain.',
                'Economic importance — e-commerce, digital services, online banking sab cyberspace par depend hain.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyberspace = Internet + Mobile Networks + Connected Devices + Digital Communication.',
                '4 layers: Physical, Logical, Social, Security.',
                'Global reach — borders ko cross karta hai, 24/7 activity.',
                'Modern economy, society, aur national security sab cyberspace par depend hain.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Define Cyberspace. Explain its components and significance.',
              answer:
                '**Cyberspace Definition:**\nCyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.\n\n**Components:**\n\n1. **Physical Layer** — Servers, routers, switches, undersea cables, satellites. Ye digital data ko physically transmit aur store karte hain.\n\n2. **Logical Layer** — Software, protocols (TCP/IP, HTTP, DNS), aur applications. Ye data ko process, route, aur protect karta hai.\n\n3. **Social Layer** — Users, communities, aur human activity. Social media, online transactions, digital communication — sab social layer ka part hain.\n\n4. **Security Layer** — Firewalls, encryption, authentication. Ye cyberspace ko protect karti hai.\n\n**Significance:**\n- Cyberspace global reach hai — borders ko cross karta hai.\n- Modern economy, society, national security sab cyberspace par depend hain.\n- 24/7 activity — din raat digital communication hoti hai.\n\n**Diagram:** Refer to Cyberspace Layered Structure diagram.',
            },
          ],
        },
        {
          id: 'cyber-threats',
          number: '1.4',
          title: 'Cyber Threats',
          subtitle: 'Different types of cyber attacks aur threats',
          icon: 'virus',
          accent: '#0047ff',
          englishDefinition:
            'A cyber threat is any potential incident or event that could harm an organization by exploiting vulnerabilities in its systems, networks, or data. Cyber threats include malware attacks, phishing, ransomware, denial-of-service (DoS) attacks, insider threats, man-in-the-middle attacks, and zero-day exploits.',
          intro: 'Har din news mein hacking ki khabar aati hai — kisi ka bank account hack hua, kisi ki website down hui, kisi ko ransomware mila. Ye sab cyber threats hain. Is topic mein ham samjhnge ki different types of cyber threats kya hain, unka kaisa kaam karta hai, aur hum iske kaise protect ho sakte hain.',
          sections: [
            {
              type: 'definition',
              title: 'Cyber Threats kya hain?',
              kicker: 'Definition',
              body: 'Cyber threat koi bhi aisi event ya incident hai jo organization ke systems, networks, ya data ko harm kar sakti hai. Ye vulnerabilities ka exploitation karti hai. Cyber threats ka source individual hackers se lekar organized criminal groups aur nation-states tak ho sakta hai.',
              body2: 'Simple words mein: Jab koi hacker aapke digital system ko harm karna chahta hai, toh wo cyber threat hai. Ye malware, phishing, hacking, aur other attacks ka form le sakta hai.',
              chips: ['Potential harm', 'Vulnerability exploitation', 'Malicious actors', 'Attack vectors'],
            },
            {
              type: 'cards',
              title: 'Common Types of Cyber Threats',
              kicker: 'Threat Categories',
              cards: [
                { icon: 'virus', title: 'Malware', body: 'Malware ek恶意 software hai — virus, worm, trojan, ransomware. Ye aapke system ko damage karta hai, data ko corrupt karta hai, ya control le leta hai. Downloads, infected links, aur email attachments se spread hota hai.' },
                { icon: 'warn', title: 'Phishing', body: 'Phishing fraudulent emails ya messages hain jo legitimate sources jaise dikhte hain. Ye users se sensitive information (passwords, card details) capture karte hain. Clicking fake links aur login pages se personal data chura liya jata hai.' },
                { icon: 'shield', title: 'Ransomware', body: 'Ransomware system ko lock kar deta hai aur data ko encrypt karta hai. Hackers data wapas lane ke liye ransom (paise) lete hain. Ye sabse dangerous attack hai — hospitals, government offices iske target rahe hain.' },
                { icon: 'globe', title: 'DDoS Attacks', body: 'DDoS (Distributed Denial of Service) attack mein hackers multiple computers se ek website pe traffic flood kar dete hain. Website overload ho jati hai aur legitimate users ko access nahi milta. Website temporarily down ho jati hai.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Types of Cyber Threats — Overview',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cyber-threats',
              caption: 'Cyber threats multiple types mein aate hain: Malware (virus, trojan, ransomware), Phishing, DDoS, Man-in-the-Middle, Insider Threats, aur Zero-Day Exploits. Har ek ka different method aur impact hota hai.',
            },
            {
              type: 'points',
              title: 'Other Important Cyber Threats',
              kicker: 'Additional Threats',
              points: [
                'Man-in-the-Middle (MITM) — hacker communication ke beech mein aa jata hai, data intercept karta hai.',
                'Insider Threats — organisation ke own employees intentionally ya accidentally data leak karte hain.',
                'Zero-Day Exploits — security vulnerability jinka software maker ko bhi pata nahi — hackers exploit kar dete hain.',
                'SQL Injection — hackers SQL queries ko manipulate kar database se sensitive data chura lete hain.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyber threat = digital system ko harm karne wali potential event.',
                'Main threats: Malware, Phishing, Ransomware, DDoS, MITM, Insider, Zero-Day.',
                'Threat actors: individual hackers, criminal groups, nation-states.',
                'Security measures har threat ka different response demand karti hain.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the different types of cyber threats with examples.',
              answer:
                '**Types of Cyber Threats:**\n\n1. **Malware** —恶意 software including viruses, worms, trojans, aur ransomware. Ye system ko damage karta hai, data corrupt karta hai. Example: Trojan horse fake software ban ke system mein enter karta hai.\n\n2. **Phishing** — Fraudulent emails/messages legitimate sources jaise dikhte hain. Users se sensitive information capture karte hain. Example: Fake bank email bhej ke login details chura liya jata hai.\n\n3. **Ransomware** — System ko lock kar deta hai, data ko encrypt karta hai. Ransom ke liye paise demand karta hai. Hospitals aur government offices ke target rahe hain.\n\n4. **DDoS (Distributed Denial of Service)** — Multiple computers se ek website pe traffic flood kar deta hai. Website overload ho jati hai, users ko access nahi milta.\n\n5. **Man-in-the-Middle (MITM)** — Hacker communication ke beech mein aa jata hai. Data intercept aur modify karta hai.\n\n6. **Insider Threats** — Organisation ke own employees data leak karte hain — intentionally ya accidentally.\n\n7. **Zero-Day Exploits** — Security vulnerabilities jinka software maker ko bhi pata nahi. Hackers exploit kar dete hain.\n\n**Diagram:** Refer to Types of Cyber Threats diagram.',
            },
          ],
        },
        {
          id: 'cyber-warfare',
          number: '1.5',
          title: 'Cyber-warfare',
          subtitle: 'Nation-state level cyber attacks aur digital warfare',
          icon: 'zap',
          accent: '#0047ff',
          englishDefinition:
            'Cyber-warfare refers to the use of digital attacks by nation-states to disrupt, damage, or destroy another nation\'s critical infrastructure, computer systems, and networks. It is a form of warfare that takes place in cyberspace rather than on physical battlefields.',
          intro: 'War ka concept toh aap jaante hain — tanks, guns, armies. Lekin kya aap jaante hain ki war digital space mein bhi ho sakta hai? Cyber-warfare mein nation-states ek dusre ke digital infrastructure pe attack karte hain — power grids hack karte hain, defense systems disrupt karte hain, government databases steal karte hain. Is topic mein ham samjhnge ki cyber-warfare kya hai, kaise kaam karta hai, aur iske implications kya hain.',
          sections: [
            {
              type: 'definition',
              title: 'Cyber-warfare kya hai?',
              kicker: 'Definition',
              body: 'Cyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai, nahi physical battlefield pe.',
              body2: 'Simple words mein: Jab ek country dusre country ke digital systems pe attack karti hai — power grid hack karti hai, bank servers down karti hai — toh ye cyber-warfare hai.',
              chips: ['Nation-state attacks', 'Digital warfare', 'Critical infrastructure', 'State-sponsored'],
            },
            {
              type: 'cards',
              title: 'Cyber-warfare ke Levels',
              kicker: 'Different Levels',
              cards: [
                { icon: 'zap', title: 'Level 1 — Cyber Espionage', body: 'Cyber espionage mein nation-states dusre country ke sensitive information chura lete hain — defense plans, government secrets, economic data. Ye spy ka digital form hai.' },
                { icon: 'warn', title: 'Level 2 — Cyber Sabotage', body: 'Cyber sabotage mein attackers physical infrastructure ko damage karte hain — power grids hack karte hain, transportation systems disrupt karte hain. Ye country ke daily life ko affect karta hai. Stuxnet (Iran nuclear program) iska example hai.' },
                { icon: 'shield', title: 'Level 3 — Cyber Warfare (Full)', body: 'Full cyber-warfare mein attackers dusre country ke critical systems ko completely disrupt karte hain — communication networks down karte hain, financial systems collapse karte hain. Ye traditional war ka digital equivalent hai.' },
                { icon: 'globe', title: 'Advanced Persistent Threats (APT)', body: 'APT long-term, targeted attacks hain jo nation-states launch karti hain. Ye continuous surveillance aur data extraction ka kaam karti hain. Ye hard to detect aur hard to stop — years tak chalti hain.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Cyber-warfare — Levels and Types',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cyber-warfare',
              caption: 'Cyber-warfare 3 levels par kaam karta hai: Espionage (data theft), Sabotage (infrastructure damage), Full Warfare (system disruption). State-sponsored APTs long-term targeted attacks karte hain.',
            },
            {
              type: 'points',
              title: 'Cyber-warfare ka Impact',
              kicker: 'Key Impacts',
              points: [
                'Power grid attacks — country ka electricity supply disrupt ho sakta hai.',
                'Financial system disruption — banks, stock markets hack ho sakte hain.',
                'Defense systems — military communication aur weapon systems target ho sakte hain.',
                'Government disruption — elections, administration sab affect ho sakti hain.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyber-warfare = nation-states ka digital attacks dusre country pe.',
                '3 levels: Espionage (data theft), Sabotage (damage), Full Warfare (disruption).',
                'APTs — long-term, targeted, state-sponsored attacks.',
                'Targets: power grids, financial systems, defense, government.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'What is Cyber-warfare? Discuss its levels and impact on national security.',
              answer:
                '**Cyber-warfare Definition:**\nCyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai.\n\n**Levels of Cyber-warfare:**\n\n1. **Cyber Espionage** — Dusre country ke sensitive information chura lena — defense plans, government secrets, economic data. Ye spy ka digital form hai.\n\n2. **Cyber Sabotage** — Physical infrastructure ko damage karna — power grids hack karna, transportation systems disrupt karna. Stuxnet (Iran nuclear program) iska famous example hai.\n\n3. **Full Cyber-Warfare** — Critical systems ko completely disrupt karna — communication networks down karna, financial systems collapse karna. Ye traditional war ka digital equivalent hai.\n\n**Impact on National Security:**\n\n1. **Power Grid Attacks** — Country ka electricity supply disrupt ho sakta hai.\n2. **Financial System Disruption** — Banks, stock markets hack ho sakte hain.\n3. **Defense Systems** — Military communication aur weapon systems target ho sakte hain.\n4. **Government Disruption** — Elections, administration sab affect ho sakti hain.\n\n**APTs:** Advanced Persistent Threats — long-term, targeted, state-sponsored attacks. Ye years tak chalti hain, hard to detect.\n\n**Diagram:** Refer to Cyber-warfare Levels diagram.',
            },
          ],
        },
        {
          id: 'cia-triad',
          number: '1.6',
          title: 'CIA Triad',
          subtitle: 'Confidentiality, Integrity, Availability — security ka foundation',
          icon: 'lock',
          accent: '#0047ff',
          englishDefinition:
            'The CIA Triad is a foundational model for cybersecurity that consists of three core principles: Confidentiality, Integrity, and Availability. Confidentiality ensures that sensitive information is accessible only to authorized individuals. Integrity ensures that data is accurate, consistent, and has not been tampered with. Availability ensures that systems and data are accessible to authorized users when needed.',
          intro: 'Cyber security ka ek sabse important concept CIA Triad hai. Ye 3 principles hain — Confidentiality, Integrity, Availability. Ye sab security measures ka base hai. Agar aapke paas ek secure system hai, toh usme ye 3 qualities honi chahiye. Is topic mein ham samjhnge ki ye 3 principles kya hain, kaisa kaam karti hain, aur ye overall security mein kya role play karti hain.',
          sections: [
            {
              type: 'definition',
              title: 'CIA Triad kya hai?',
              kicker: 'Definition',
              body: 'CIA Triad cybersecurity ka foundational model hai jo 3 core principles pe based hai: Confidentiality (保密性), Integrity (数据完整性), aur Availability (可用性). Ye 3 principles security policies aur measures ka guide karti hain. Har secure system mein ye 3 qualities honi chahiye.',
              body2: 'Simple words mein: CIA Triad = data secret rakhna (Confidentiality), data correct rakhna (Integrity), aur data available rakhna (Availability). Ye 3 baatein mil kar ek secure system banati hain.',
              chips: ['Confidentiality', 'Integrity', 'Availability'],
            },
            {
              type: 'cards',
              title: 'CIA Triad ke 3 Principles',
              kicker: 'Core Principles',
              cards: [
                { icon: 'lock', title: 'Confidentiality (保密性)', body: 'Confidentiality ka matlab hai sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye. Encryption, passwords, access controls — ye sab confidentiality ensure karte hain. Data leak ya unauthorized access confidentiality breach hai.' },
                { icon: 'check', title: 'Integrity (数据完整性)', body: 'Integrity ka matlab hai data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain. Checksums, digital signatures, version controls — ye sab integrity ensure karte hain. Data corruption ya unauthorized modification integrity breach hai.' },
                { icon: 'globe', title: 'Availability (可用性)', body: 'Availability ka matlab hai systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye. Redundancy, backups, DDoS protection — ye sab availability ensure karte hain. System down ya service disruption availability breach hai.' },
              ],
            },
            {
              type: 'diagram',
              title: 'CIA Triad — Security Foundation',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cia-triad',
              caption: 'CIA Triad 3 principles pe based hai: Confidentiality (data secret), Integrity (data correct), Availability (data available). Ye 3 milkar ek complete security model banate hain.',
            },
            {
              type: 'example',
              title: 'CIA Triad ka Real-World Example',
              kicker: 'Example',
              body: 'Ek bank ka online system le lo. Confidentiality: aapke account details sirf aap aur bank ke authorized employees ko dekhne milna chahiye. Integrity: aapke transaction details correct hone chahiye — kisi na kisi change nahi karna chahiye. Availability: bank ka website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye. Ye 3 principles milkar ek secure banking system banate hain.',
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'CIA Triad = Confidentiality, Integrity, Availability — security ka foundation.',
                'Confidentiality: data sirf authorized users tak hi reachable.',
                'Integrity: data accurate, consistent, tamper-free.',
                'Availability: data aur systems available zaroorat ke time.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the CIA Triad in Cyber Security with examples.',
              answer:
                '**CIA Triad — 3 Core Principles:**\n\n1. **Confidentiality (保密性)** — Sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye.\n\n   - *Methods:* Encryption, passwords, access controls, biometric authentication.\n   - *Example:* Bank account details sirf account holder aur authorized bank employees ko dekhne milna chahiye.\n   - *Breach:* Data leak, unauthorized access, password cracking.\n\n2. **Integrity (数据完整性)** — Data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain.\n\n   - *Methods:* Checksums, digital signatures, version controls, hash functions.\n   - *Example:* Transaction details correct hona chahiye — kisi na kisi change nahi karna chahiye.\n   - *Breach:* Data corruption, unauthorized modification, man-in-the-middle attacks.\n\n3. **Availability (可用性)** — Systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye.\n\n   - *Methods:* Redundancy, backups, DDoS protection, failover systems.\n   - *Example:* Bank website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye.\n   - *Breach:* System down, service disruption, DDoS attacks, hardware failure.\n\n**Importance:** Ye 3 principles mil kar ek complete security model banate hain.\n\n**Diagram:** Refer to CIA Triad diagram.',
            },
          ],
        },
        {
          id: 'cyber-terrorism',
          number: '1.7',
          title: 'Cyber Terrorism',
          subtitle: 'Digital attacks se terrorism — impact aur prevention',
          icon: 'warn',
          accent: '#0047ff',
          englishDefinition:
            'Cyber terrorism is the use of computer networks and digital attacks to cause disruption, fear, or harm for political, social, or ideological goals. It involves exploiting technology to attack critical infrastructure, government systems, or public services to create panic, disrupt society, or achieve political objectives.',
          intro: 'Terrorism toh aap jaante hain — physical violence, fear create karna. Lekin kya terrorism digital space mein bhi ho sakta hai? Cyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political ya social goals ke liye. Hackers government websites down karte hain, hospitals pe ransomware attack karte hain, social media pe propaganda spread karte hain.',
          sections: [
            {
              type: 'definition',
              title: 'Cyber Terrorism kya hai?',
              kicker: 'Definition',
              body: 'Cyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political, social, ya ideological goals ke liye. Ye technology ka exploitation hai critical infrastructure, government systems, ya public services pe attack karke panic create karne ke liye.',
              body2: 'Simple words mein: Jab hackers digital attacks karke society mein fear create karte hain, government systems disrupt karte hain, ya political goals achieve karte hain — toh ye cyber terrorism hai.',
              chips: ['Political goals', 'Digital disruption', 'Fear creation', 'Critical infrastructure'],
            },
            {
              type: 'cards',
              title: 'Cyber Terrorism ke Forms',
              kicker: 'Types of Cyber Terrorism',
              cards: [
                { icon: 'globe', title: 'Infrastructure Attacks', body: 'Cyber terrorists critical infrastructure pe attack karte hain — power grids, water systems, transportation networks. Ye society ko disrupt karta hai, public mein fear create karta hai.' },
                { icon: 'warn', title: 'Government System Attacks', body: 'Government websites, defense databases, election systems — sab cyber terrorism ke target ho sakte hain. Ye government ka functioning disrupt karta hai, public trust loss create karta hai.' },
                { icon: 'shield', title: 'Social Media Propaganda', body: 'Cyber terrorists social media ka use karte hain propaganda spread karne ke liye. Fake news, hate speech, radical content — sab digitally spread hota hai. Ye social unrest create karta hai.' },
                { icon: 'virus', title: 'Ransomware on Public Services', body: 'Hospitals, schools, government offices pe ransomware attacks cyber terrorism ka part ho sakte hain. Ye public services disrupt karta hai, people ka daily life affect karta hai.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Cyber Terrorism — Attack Vectors',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cyber-terrorism',
              caption: 'Cyber terrorism multiple attack vectors use karta hai: Infrastructure attacks (power, water), Government attacks, Social media propaganda, aur Public service ransomware.',
            },
            {
              type: 'points',
              title: 'Cyber Terrorism ka Impact',
              kicker: 'Key Impacts',
              points: [
                'Public fear — cyber attacks public mein panic create karte hain.',
                'Infrastructure disruption — power, water, transport sab affect ho sakte hain.',
                'Economic damage — attacks ka financial loss hota hai.',
                'Social unrest — propaganda aur fake news social stability ko affect karte hain.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyber terrorism = digital attacks political/social goals ke liye.',
                'Forms: Infrastructure attacks, Government attacks, Propaganda, Ransomware.',
                'Impact: public fear, infrastructure disruption, economic damage, social unrest.',
                'Prevention: strong security, surveillance, international cooperation.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Define Cyber Terrorism. Discuss its forms and impact on society.',
              answer:
                '**Cyber Terrorism Definition:**\nCyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political, social, ya ideological goals ke liye. Ye technology ka exploitation hai critical infrastructure, government systems, ya public services pe attack karke panic create karne ke liye.\n\n**Forms of Cyber Terrorism:**\n\n1. **Infrastructure Attacks** — Power grids, water systems, transportation networks pe attack. Ye society ko disrupt karta hai, public mein fear create karta hai.\n\n2. **Government System Attacks** — Government websites, defense databases, election systems pe attack. Ye government ka functioning disrupt karta hai.\n\n3. **Social Media Propaganda** — Fake news, hate speech, radical content digitally spread karna. Ye social unrest create karta hai.\n\n4. **Ransomware on Public Services** — Hospitals, schools, government offices pe ransomware attacks. Ye public services disrupt karta hai.\n\n**Impact on Society:**\n\n1. **Public Fear** — Cyber attacks public mein panic create karte hain.\n2. **Infrastructure Disruption** — Power, water, transport sab affect ho sakte hain.\n3. **Economic Damage** — Financial loss hota hai.\n4. **Social Unrest** — Propaganda aur fake news social stability ko affect karte hain.\n\n**Diagram:** Refer to Cyber Terrorism Attack Vectors diagram.',
            },
          ],
        },
        {
          id: 'critical-infrastructure-cyber',
          number: '1.8',
          title: 'Cyber Security of Critical Infrastructure',
          subtitle: 'Power, water, transport — critical systems ka protection',
          icon: 'server',
          accent: '#0047ff',
          englishDefinition:
            'Critical infrastructure refers to the assets, systems, and networks essential for a society to function — including energy, water, transportation, healthcare, finance, and communication. Cyber security of critical infrastructure ensures these systems are protected from digital attacks that could cause widespread disruption, economic damage, or loss of life.',
          intro: 'Socha hai ki aapke city ka electricity kahan se aata hai? Water supply kahan se aati hai? Airports, banks, hospitals — ye sab ek dusre se connected hain. Ye sab "critical infrastructure" hain — society ka foundation. Agar hackers in systems pe attack kar de, toh society collapse ho sakti hai.',
          sections: [
            {
              type: 'definition',
              title: 'Critical Infrastructure kya hai?',
              kicker: 'Definition',
              body: 'Critical infrastructure ek society ke functioning ke liye essential assets, systems, aur networks hain — energy, water, transportation, healthcare, finance, communication. Ye systems society ka backbone hain. Agar inme koi attack ho, toh society disruption ho sakti hai, economic damage ho sakta hai, ya loss of life ho sakta hai.',
              body2: 'Simple words mein: Critical infrastructure = society ke liye zaroori systems — power grids, water supply, airports, hospitals, banks, communication networks.',
              chips: ['Essential systems', 'Society backbone', 'High impact', 'Protection priority'],
            },
            {
              type: 'cards',
              title: 'Critical Infrastructure ke Types',
              kicker: 'Categories',
              cards: [
                { icon: 'zap', title: 'Energy Sector', body: 'Power grids, oil aur gas pipelines, nuclear plants — energy sector critical infrastructure hai. Hack ho toh city ka electricity supply disrupt ho sakta hai.' },
                { icon: 'globe', title: 'Water Supply', body: 'Water treatment plants, reservoirs, distribution networks — water supply critical hai. Water contamination ya supply disruption health aur sanitation issues create karta hai.' },
                { icon: 'server', title: 'Transportation', body: 'Airports, railways, highways, shipping ports — transportation systems critical hain. Disruption ho toh logistics, travel, aur supply chain affect ho sakte hain.' },
                { icon: 'users', title: 'Healthcare', body: 'Hospitals, medical devices, pharmacy databases — healthcare infrastructure critical hai. Attack ho toh patient care disrupt ho sakta hai, sensitive medical data leak ho sakti hai.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Critical Infrastructure Sectors',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'critical-infra',
              caption: 'Critical infrastructure 6 main sectors mein aata hai: Energy (power grids), Water (supply), Transportation (airports, railways), Healthcare (hospitals), Finance (banks), aur Communication (networks).',
            },
            {
              type: 'points',
              title: 'Protecting Critical Infrastructure',
              kicker: 'Security Measures',
              points: [
                'Network segmentation — critical systems ko separate networks mein rakhna.',
                'Regular security audits — vulnerabilities time-time pe check karna.',
                'Incident response plans — attack ho toh fast response dena.',
                'Government-private cooperation — security agencies aur infrastructure owners mil kar kaam karna.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Critical infrastructure = society ke liye essential systems.',
                'Attack ho toh widespread disruption, economic damage, loss of life ho sakta hai.',
                'Protection: network segmentation, security audits, incident response, cooperation.',
                'Ye national security ka sabse important area hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'What is Critical Infrastructure? Why is its cyber security important?',
              answer:
                '**Critical Infrastructure Definition:**\nCritical infrastructure ek society ke functioning ke liye essential assets, systems, aur networks hain — energy, water, transportation, healthcare, finance, communication.\n\n**Why Cyber Security is Important:**\n\n1. **Widespread Disruption** — Attack ho toh power grids hack ho sakte hain, water supply disrupt ho sakti hai.\n\n2. **Economic Damage** — Infrastructure disruption ka financial loss heavy ho sakta hai.\n\n3. **Loss of Life** — Healthcare systems attack ho toh patient care disrupt ho sakta hai.\n\n4. **National Security** — Critical infrastructure national security ka sabse important area hai.\n\n**Critical Sectors:**\n1. Energy — Power grids, oil/gas pipelines, nuclear plants\n2. Water — Treatment plants, reservoirs, distribution\n3. Transportation — Airports, railways, highways, ports\n4. Healthcare — Hospitals, medical devices, pharmacy databases\n5. Finance — Banks, stock exchanges, payment systems\n6. Communication — Internet, telecom networks, satellites\n\n**Protection Measures:** Network segmentation, security audits, incident response, government-private cooperation.\n\n**Diagram:** Refer to Critical Infrastructure Sectors diagram.',
            },
          ],
        },
        {
          id: 'org-implications-cyber',
          number: '1.9',
          title: 'Cyber Security — Organizational Implications',
          subtitle: 'Security ka organizational impact aur business perspective',
          icon: 'users',
          accent: '#0047ff',
          englishDefinition:
            'Cyber security has profound implications for organizations across all sectors. It affects business operations, customer trust, legal compliance, financial health, and competitive advantage. Organizations must integrate security into their business strategy, not just treat it as a technical issue.',
          intro: 'Socha hai ki ek company pe cyber attack ho, toh kya hoga? Sirf technical issue nahi hai — business ka pura structure affected ho sakta hai. Customer trust kharb ho sakta hai, legal penalties ho sakte hain, financial loss ho sakta hai. Cyber security sirf IT department ka kaam nahi hai — ye pura organization ka matter hai.',
          sections: [
            {
              type: 'definition',
              title: 'Organizational Implications kya hain?',
              kicker: 'Definition',
              body: 'Cyber security ka organizational impact bahut deep hai — business operations, customer trust, legal compliance, financial health, aur competitive advantage sab affect ho sakte hain. Security sirf technical issue nahi hai — ye business strategy ka part hona chahiye.',
              body2: 'Simple words mein: Jab company pe cyber attack ho, toh sirf systems down nahi hote — customer trust kharb hota hai, legal issues aate hain, financial loss hota hai.',
              chips: ['Business impact', 'Customer trust', 'Legal compliance', 'Financial health'],
            },
            {
              type: 'cards',
              title: 'Security ka Business Impact',
              kicker: 'Key Implications',
              cards: [
                { icon: 'users', title: 'Customer Trust aur Reputation', body: 'Customers sirf tabhi company se business karte hain jab wo safe feel karte hain. Data breach par company ki reputation permanently damage ho sakti hai.' },
                { icon: 'warn', title: 'Legal Compliance', body: 'Government ne data protection laws banaye hain (IT Act 2000, GDPR). Agar company security compliance nahi karti, toh heavy fines aur legal penalties ho sakte hain.' },
                { icon: 'chart', title: 'Financial Impact', body: 'Cyber attacks ka direct financial loss hota hai — ransom payments, recovery costs, legal fees, aur lost business. Small companies iska impact explain nahi kar sakti.' },
                { icon: 'clock', title: 'Operational Disruption', body: 'Attacks business operations ko disrupt karte hain — systems down, production halt, services disrupt. Daily operations affected ho sakte hain.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Organizational Security — Business Impact',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'org-security',
              caption: 'Cyber security ka organizational impact 4 areas mein faila hua hai: Customer Trust (reputation), Legal Compliance (penalties), Financial Health (loss), Operational Efficiency (disruption).',
            },
            {
              type: 'points',
              title: 'Building Security-Aware Culture',
              kicker: 'Organizational Steps',
              points: [
                'Security training — employees ko regular cyber security awareness dena.',
                'Policy enforcement — security policies ko strict implement karna.',
                'Incident response team — attack ho toh fast response dena.',
                'Continuous monitoring — security incidents continuous monitor karna.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Security organizational impact: customer trust, legal compliance, financial health, operations.',
                'Security sirf IT issue nahi — business strategy ka part hai.',
                'Compliance mandatory hai — fines aur penalties ho sakte hain.',
                'Security-aware culture banana zaroori hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Discuss the organizational implications of cyber security.',
              answer:
                '**Organizational Implications of Cyber Security:**\n\n1. **Customer Trust aur Reputation** — Customers sirf tabhi company se business karte hain jab wo safe feel karte hain. Data breach par reputation permanently damage ho sakti hai.\n\n2. **Legal Compliance** — Government ne data protection laws banaye hain (IT Act 2000, GDPR). Security compliance mandatory hai. Non-compliance par heavy fines aur legal penalties ho sakte hain.\n\n3. **Financial Impact** — Cyber attacks ka direct financial loss: ransom payments, recovery costs, legal fees, lost business.\n\n4. **Operational Disruption** — Attacks business operations ko disrupt karte hain: systems down, production halt, services disrupt.\n\n**Building Security-Aware Culture:**\n- Security training for employees\n- Strict policy enforcement\n- Incident response team\n- Continuous monitoring\n\n**Key Point:** Security sirf IT department ka kaam nahi hai — ye pura organization ka matter hai.\n\n**Diagram:** Refer to Organizational Security diagram.',
            },
          ],
        },
        {
          id: 'cyber-policy-governance',
          number: '1.10',
          title: 'Need for a Comprehensive Cyber Security Policy and Governance',
          subtitle: 'Security policy aur governance ka need',
          icon: 'file',
          accent: '#0047ff',
          englishDefinition:
            'A comprehensive cyber security policy is a documented set of guidelines, rules, and practices that govern an organization\'s security posture. It defines how to protect information assets, who is responsible for security, and how to respond to incidents. Security governance provides the framework for implementing and maintaining these policies.',
          intro: 'Socha hai ki ek company ka security policy kaisa hota hai? Sirf IT department ke paas ek document hai? Nahi — security policy pura organization ka framework hai. Ye define karta hai ki information assets kaise protect honge, kaun responsible hai, aur attack ho toh kya response dena hai.',
          sections: [
            {
              type: 'definition',
              title: 'Security Policy aur Governance kya hai?',
              kicker: 'Definition',
              body: 'Cyber security policy ek documented guidelines, rules, aur practices hai jo organization ka security posture govern karti hai. Ye information assets ka protection, roles aur responsibilities, aur incident response define karti hai. Security governance policies ko implement aur maintain ka framework provide karti hai.',
              body2: 'Simple words mein: Security policy = organization ka security rulebook. Governance = iske follow karne ka system.',
              chips: ['Guidelines', 'Rules', 'Responsibilities', 'Accountability'],
            },
            {
              type: 'cards',
              title: 'Security Policy ke Components',
              kicker: 'Policy Structure',
              cards: [
                { icon: 'file', title: 'Acceptable Use Policy', body: 'Employees ka acceptable aur unacceptable behavior define karta hai. Internet use, email use, device use — sabka rules batata hai.' },
                { icon: 'lock', title: 'Access Control Policy', body: 'Data access ko control karta hai. Kaun kya dekh sakta hai, kaun kya modify kar sakta hai — sab define karta hai.' },
                { icon: 'warn', title: 'Incident Response Policy', body: 'Security incidents ka response plan provide karta hai. Attack ho toh kaun response dega, kya steps hain, kahan report karna hai — sab batata hai.' },
                { icon: 'check', title: 'Compliance Policy', body: 'Legal aur regulatory requirements ko address karta hai. IT Act 2000, GDPR — sab compliance ensure karta hai.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Security Policy Framework',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'policy-framework',
              caption: 'Security policy framework 4 main components pe based hai: Acceptable Use, Access Control, Incident Response, aur Compliance. Governance policies ko implement, monitor, aur improve ka framework provide karti hai.',
            },
            {
              type: 'points',
              title: 'Security Governance ke Elements',
              kicker: 'Governance Framework',
              points: [
                'Clear roles — kaun security ka responsible hai.',
                'Accountability — security failures ka responsibility clear.',
                'Continuous improvement — policies time-time pe update karna.',
                'Leadership commitment — top management security ko priority dena.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Security policy = organization ka security rulebook.',
                '4 components: Acceptable Use, Access Control, Incident Response, Compliance.',
                'Governance = policies ko implement aur maintain ka framework.',
                'Ye organization ko systematically secure rakhta hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the need for a Comprehensive Cyber Security Policy and Governance.',
              answer:
                '**Need for Cyber Security Policy and Governance:**\n\n1. **Clear Guidelines** — Security policy organization ke liye clear guidelines provide karti hai.\n\n2. **Accountability** — Governance clear roles aur responsibilities set karti hai.\n\n3. **Compliance** — Legal requirements (IT Act 2000, GDPR) ko address karta hai.\n\n4. **Incident Response** — Attack ho toh kya response dena hai — sab plan mein hota hai.\n\n5. **Continuous Improvement** — Policies time-time pe update hoti hain.\n\n**Security Policy Components:**\n1. Acceptable Use Policy — Employees ka acceptable behavior\n2. Access Control Policy — Data access ko control\n3. Incident Response Policy — Security incidents ka response plan\n4. Compliance Policy — Legal aur regulatory requirements\n\n**Governance Framework:**\n- Clear roles and responsibilities\n- Accountability mechanisms\n- Leadership commitment\n- Continuous monitoring and improvement\n\n**Diagram:** Refer to Security Policy Framework diagram.',
            },
          ],
        },
        {
          id: 'nodal-authority-cyber',
          number: '1.11',
          title: 'Need for a Nodal Authority',
          subtitle: 'Cyber security ke liye ek central authority ka need',
          icon: 'users',
          accent: '#0047ff',
          englishDefinition:
            'A nodal authority is a centralized organization or agency responsible for coordinating, managing, and responding to cyber security incidents at a national level. It serves as the primary point of contact for cyber threat intelligence, incident response, and policy implementation. India\'s nodal authority is CERT-In (Computer Emergency Response Team - India).',
          intro: 'Socha hai ki country ka pura cyber security kaun manage karta hai? Har company khud? Nahi — ek central authority zaroori hai jo pura country ka cyber security coordinate karti hai. Ye "nodal authority" hai. India ka nodal authority CERT-In hai.',
          sections: [
            {
              type: 'definition',
              title: 'Nodal Authority kya hai?',
              kicker: 'Definition',
              body: 'Nodal authority ek centralized organization hai jo national level pe cyber security incidents coordinate, manage, aur respond karti hai. Ye cyber threat intelligence, incident response, aur policy implementation ka primary point of contact hai.',
              body2: 'Simple words mein: Nodal authority = country ka cyber security central hub.',
              chips: ['Central authority', 'Coordination', 'Incident response', 'Threat intelligence'],
            },
            {
              type: 'cards',
              title: 'Nodal Authority ke Functions',
              kicker: 'Key Functions',
              cards: [
                { icon: 'warn', title: 'Incident Response', body: 'Country mein kisi bhi cyber incident ka response dena. Attack ho toh nodal authority fast response degi.' },
                { icon: 'globe', title: 'Threat Intelligence', body: 'Cyber threat intelligence collect, analyze, aur share karna. New attacks, vulnerabilities, hacker groups — sabki information collect karke alert karna.' },
                { icon: 'shield', title: 'Policy Coordination', body: 'Government policies implement karna, agencies coordinate karna. Security guidelines issue karna, compliance monitor karna.' },
                { icon: 'users', title: 'International Cooperation', body: 'Other countries ke nodal authorities ke saath cooperation karna. Cross-border cyber attacks ka joint response dena.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Nodal Authority — Structure aur Role',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'nodal-authority',
              caption: 'Nodal authority country ka cyber security hub hai. 4 main functions: Incident Response, Threat Intelligence, Policy Coordination, aur International Cooperation. India ka nodal authority CERT-In hai.',
            },
            {
              type: 'points',
              title: 'CERT-In — India ka Nodal Authority',
              kicker: 'India\'s Nodal Authority',
              points: [
                'CERT-In — Computer Emergency Response Team - India.',
                'Cyber incidents report karna, alerts issue karna.',
                'Government, banks, critical infrastructure — sabke saath coordination.',
                'International cooperation — other countries ke CERTs ke saath.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Nodal authority = country ka cyber security central hub.',
                '4 functions: Incident Response, Threat Intelligence, Policy, International Cooperation.',
                'India ka nodal authority: CERT-In.',
                'Central coordination zaroori hai.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'What is a Nodal Authority in Cyber Security? Explain its functions and CERT-In\'s role.',
              answer:
                '**Nodal Authority Definition:**\nNodal authority ek centralized organization hai jo national level pe cyber security incidents coordinate, manage, aur respond karti hai.\n\n**Functions:**\n\n1. **Incident Response** — Country mein kisi bhi cyber incident ka response dena.\n\n2. **Threat Intelligence** — Cyber threat intelligence collect, analyze, aur share karna.\n\n3. **Policy Coordination** — Government policies implement karna, agencies coordinate karna.\n\n4. **International Cooperation** — Other countries ke nodal authorities ke saath cooperation.\n\n**CERT-In — India\'s Nodal Authority:**\n- Full form: Computer Emergency Response Team - India\n- Functions: Cyber incidents report, alerts issue, coordination\n- Role: India ka primary cyber security coordination center\n\n**Diagram:** Refer to Nodal Authority Structure diagram.',
            },
          ],
        },
        {
          id: 'international-convention-cyber',
          number: '1.12',
          title: 'Need for an International Convention on Cyberspace',
          subtitle: 'Cyberspace governance ka international framework',
          icon: 'globe',
          accent: '#0047ff',
          englishDefinition:
            'An international convention on cyberspace is a global treaty or agreement that governs how nations interact, cooperate, and regulate cyber activities. It establishes norms for cyber behavior, defines rules for cross-border cyber operations, and creates mechanisms for international cooperation on cyber security. The Budapest Convention on Cybercrime is an example.',
          intro: 'Socha hai ki internet ek country ka hai? Nahi — internet global hai, borders ko cross karta hai. Hackers ek country se attack kar sakte hain, dusre country ke systems ko target kar sakte hain. Isliye international cooperation zaroori hai.',
          sections: [
            {
              type: 'definition',
              title: 'International Convention on Cyberspace kya hai?',
              kicker: 'Definition',
              body: 'International convention on cyberspace ek global treaty hai jo nations ke beech cyber activities ka regulation karegi. Ye cyber behavior ka norms, cross-border operations ka rules, aur international cooperation ka mechanisms banati hai.',
              body2: 'Simple words mein: Jaise countries ke beech physical borders ke rules hote hain, waise hi cyberspace ke global rules zaroori hain.',
              chips: ['Global treaty', 'Norms', 'Cross-border rules', 'Cooperation'],
            },
            {
              type: 'cards',
              title: 'Why International Convention Zaroori Hai?',
              kicker: 'Key Reasons',
              cards: [
                { icon: 'globe', title: 'Cyberspace Global Hai', body: 'Internet ek country ka nahi hai — global hai. Attacks borders ko cross karte hain. Ek country khud security ensure nahi kar sakti — international cooperation zaroori hai.' },
                { icon: 'warn', title: 'Cross-Border Cybercrime', body: 'Hackers ek country se attack kar sakte hain, dusre country ke systems target kar sakte hain. Legal jurisdiction complex hai.' },
                { icon: 'shield', title: 'Shared Threat Intelligence', body: 'Threat intelligence countries ke beech share karna zaroori hai. Ek country attack detect kare toh dusri countries ko bhi alert karna.' },
                { icon: 'users', title: 'Standardized Rules', body: 'Har country ka different cyber laws hain. International convention standardized rules banati hai.' },
              ],
            },
            {
              type: 'diagram',
              title: 'International Cyberspace Governance',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'international-cyber',
              caption: 'International convention on cyberspace 4 areas address karta hai: Global nature, Cross-border crime, Shared intelligence, aur Standardized rules. Budapest Convention on Cybercrime iska famous example hai.',
            },
            {
              type: 'points',
              title: 'Budapest Convention on Cybercrime',
              kicker: 'Existing Convention',
              points: [
                'Budapest Convention — first international treaty on cybercrime.',
                'Cybercrime investigation aur cooperation ka framework.',
                'Signatory countries cybercrime laws align karti hain.',
                'Cross-border evidence collection, extradition rules.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'International convention = cyberspace ka global governance framework.',
                'Zaroori kyun: cyberspace global hai, attacks cross borders.',
                'Budapest Convention on Cybercrime — famous example.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Why is an International Convention on Cyberspace needed?',
              answer:
                '**Need for International Convention:**\n\n1. **Cyberspace is Global** — Internet ek country ka nahi hai. Attacks borders ko cross karte hain. Ek country khud security ensure nahi kar sakti.\n\n2. **Cross-Border Cybercrime** — Hackers ek country se attack kar sakte hain, dusre country ke systems target kar sakte hain. Legal jurisdiction complex hai.\n\n3. **Shared Threat Intelligence** — Threat intelligence countries ke beech share karna zaroori hai.\n\n4. **Standardized Rules** — Har country ka different cyber laws hain. International convention standardized rules banati hai.\n\n**Budapest Convention:**\n- First international treaty on cybercrime\n- Cybercrime investigation aur cooperation ka framework\n- Signatory countries cybercrime laws align karti hain\n\n**Diagram:** Refer to International Cyberspace Governance diagram.',
            },
          ],
        },
        {
          id: 'intro-cyber-laws',
          number: '1.13',
          title: 'Introduction to Cyber Laws',
          subtitle: 'Cyber laws ka concept, scope aur importance',
          icon: 'file',
          accent: '#0047ff',
          englishDefinition:
            'Cyber laws are legal rules and regulations that govern online activities, digital transactions, internet usage, and cyber crimes. They define what is legal and illegal in cyberspace, establish penalties for cyber crimes, and protect digital rights.',
          intro: 'Socha hai ki internet par koi bhi cheez kar sakte hain? Nahi — internet par bhi rules hain. Cyber laws online activities govern karte hain.',
          sections: [
            {
              type: 'definition',
              title: 'Cyber Laws kya hain?',
              kicker: 'Definition',
              body: 'Cyber laws legal rules hain jo online activities, digital transactions, internet usage, aur cyber crimes govern karte hain. Ye define karte hain ki cyberspace mein kya legal hai, kya illegal hai.',
              body2: 'Simple words mein: Cyber laws = internet par rules.',
              chips: ['Legal rules', 'Online activities', 'Cyber crimes', 'Digital rights'],
            },
            {
              type: 'cards',
              title: 'Cyber Laws ke Areas',
              kicker: 'Scope',
              cards: [
                { icon: 'lock', title: 'Data Protection aur Privacy', body: 'Personal data ko protect karna. Data collection, storage, processing — sabka rules.' },
                { icon: 'chart', title: 'E-Commerce aur Digital Transactions', body: 'Online transactions, e-commerce ka rules. Payment security, consumer protection, digital contracts.' },
                { icon: 'warn', title: 'Cyber Crimes aur Penalties', body: 'Hacking, phishing, fraud, malware — sab cyber crimes hain. Cyber laws inki penalties define karte hain.' },
                { icon: 'shield', title: 'Intellectual Property', body: 'Digital content ka intellectual property rights. Copyright, trademark, patent.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Cyber Laws — Scope aur Coverage',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'cyber-laws',
              caption: 'Cyber laws 4 main areas cover karte hain: Data Protection, E-Commerce, Cyber Crimes, aur Intellectual Property.',
            },
            {
              type: 'points',
              title: 'Cyber Laws ka Importance',
              kicker: 'Why It Matters',
              points: [
                'Legal protection — digital rights ka legal protection milta hai.',
                'Crime prevention — cyber crimes ka penalties deterrent ka kaam karte hain.',
                'Fair play — online businesses aur users dono ka rights protect hote hain.',
                'International alignment — countries international cyber laws ko align karti hain.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Cyber laws = internet par rules.',
                '4 areas: Data Protection, E-Commerce, Cyber Crimes, IP.',
                'Importance: legal protection, crime prevention, fair play.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Define Cyber Laws. Explain their scope and importance.',
              answer:
                '**Cyber Laws Definition:**\nCyber laws legal rules hain jo online activities, digital transactions, internet usage, aur cyber crimes govern karte hain.\n\n**Scope:**\n1. **Data Protection aur Privacy** — Personal data ko protect karna.\n2. **E-Commerce aur Digital Transactions** — Online transactions ka rules.\n3. **Cyber Crimes aur Penalties** — Hacking, phishing, fraud — penalties.\n4. **Intellectual Property** — Digital content ka IP rights.\n\n**Importance:**\n1. Legal Protection — digital rights ka legal protection\n2. Crime Prevention — cyber crimes ka penalties deterrent\n3. Fair Play — online businesses aur users dono ka rights protect\n4. International Alignment — countries international cyber laws align\n\n**Diagram:** Refer to Cyber Laws Scope diagram.',
            },
          ],
        },
        {
          id: 'key-principles-cyber',
          number: '1.14',
          title: 'Key Principles of Cyber Laws',
          subtitle: 'Cyber law ka fundamental principles',
          icon: 'check',
          accent: '#0047ff',
          englishDefinition:
            'Key principles of cyber law are the foundational concepts that guide the interpretation and application of digital regulations. These include jurisdiction, sovereignty, proportionality, and due process.',
          intro: 'Har law ka kuch principles hote hain jo uska foundation banate hain. Cyber laws bhi iske apne key principles hain.',
          sections: [
            {
              type: 'definition',
              title: 'Key Principles kya hain?',
              kicker: 'Definition',
              body: 'Cyber law key principles fundamental concepts hain jo digital regulations ka interpretation aur application guide karte hain.',
              body2: 'Simple words mein: Key principles = cyber law ka rulebook.',
              chips: ['Jurisdiction', 'Sovereignty', 'Proportionality', 'Due process'],
            },
            {
              type: 'cards',
              title: 'Cyber Law ke Key Principles',
              kicker: 'Core Principles',
              cards: [
                { icon: 'globe', title: 'Jurisdiction', body: 'Jurisdiction decide karta hai ki kaun country ka laws apply hoga. Cyberspace global hai, isliye jurisdiction complex hai.' },
                { icon: 'shield', title: 'Sovereignty', body: 'Sovereignty ka matlab hai ek nation apne cyberspace pe authority rakhti hai. Har country apne digital borders ka rules bana sakti hai.' },
                { icon: 'warn', title: 'Proportionality', body: 'Proportionality principle batata hai ki penalties crime ka severity ke saath match karna chahiye. Chhoti crime — chhoti penalty.' },
                { icon: 'check', title: 'Due Process', body: 'Due process principle batata hai ki legal procedures fair hona chahiye. Accused ko fair trial milna chahiye.' },
              ],
            },
            {
              type: 'diagram',
              title: 'Cyber Law Principles — Framework',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'law-principles',
              caption: 'Cyber law 4 key principles: Jurisdiction, Sovereignty, Proportionality, Due Process. Ye fundamental principles cyber law ka application guide karte hain.',
            },
            {
              type: 'points',
              title: 'Other Important Principles',
              kicker: 'Additional',
              points: [
                'Data sovereignty — data ek country ke laws ke under ho.',
                'Cross-border liability — attackers cross borders, liability complex.',
                'Security-freedom balance — security aur individual freedom dono protect.',
                'Technology neutrality — laws technology pe based nahi, behavior pe.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                '4 key principles: Jurisdiction, Sovereignty, Proportionality, Due Process.',
                'Jurisdiction: kaun country ka law apply hoga.',
                'Sovereignty: nation apne cyberspace pe authority.',
                'Proportionality: penalty crime severity ke saath match.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the Key Principles of Cyber Law.',
              answer:
                '**Key Principles of Cyber Law:**\n\n1. **Jurisdiction** — Kaun country ka laws apply hoga. Cyberspace global hai, isliye jurisdiction complex hai.\n\n2. **Sovereignty** — Ek nation apne cyberspace pe authority rakhti hai. Har country apne digital borders ka rules bana sakti hai.\n\n3. **Proportionality** — Penalties crime ka severity ke saath match karna chahiye.\n\n4. **Due Process** — Legal procedures fair hona chahiye. Accused ko fair trial milna chahiye.\n\n**Other Principles:**\n5. Data Sovereignty — Data ek country ke laws ke under ho.\n6. Cross-Border Liability — Attackers cross borders, liability complex.\n7. Security-Freedom Balance — Security aur individual freedom dono protect.\n8. Technology Neutrality — Laws technology pe based nahi, behavior pe.\n\n**Diagram:** Refer to Cyber Law Principles diagram.',
            },
          ],
        },
        {
          id: 'it-act-2000',
          number: '1.15',
          title: 'Information Technology Act 2000',
          subtitle: 'India ka cyber law — IT Act 2000 ka overview',
          icon: 'file',
          accent: '#0047ff',
          englishDefinition:
            'The Information Technology Act 2000 is India\'s primary cyber law, enacted to provide legal recognition to electronic transactions and facilitate e-filing of documents. It defines cyber crimes, establishes penalties, and creates mechanisms for digital signatures.',
          intro: 'India ka sabse important cyber law IT Act 2000 hai. Ye act 2000 mein banaya gaya tha. Ye electronic transactions ka legal recognition provide karti hai, cyber crimes define karti hai, aur penalties set karti hai.',
          sections: [
            {
              type: 'definition',
              title: 'IT Act 2000 kya hai?',
              kicker: 'Definition',
              body: 'IT Act 2000 India ka primary cyber law hai. Ye electronic transactions ka legal recognition provide karti hai, cyber crimes define karti hai, penalties establish karti hai.',
              body2: 'Simple words mein: IT Act 2000 = India ka internet law.',
              chips: ['Primary cyber law', 'Legal framework', 'Electronic transactions', 'Cyber crimes'],
            },
            {
              type: 'cards',
              title: 'IT Act 2000 ke Objectives',
              kicker: 'Key Objectives',
              cards: [
                { icon: 'file', title: 'Legal Recognition', body: 'Electronic transactions ka legal recognition dena. Digital signatures, electronic records — sab legal honge.' },
                { icon: 'shield', title: 'Cyber Crimes Prevention', body: 'Cyber crimes define karna aur penalties set karna. Hacking, phishing, fraud — sabke liye punishments hain.' },
                { icon: 'check', title: 'Digital Infrastructure', body: 'Cyber Security Council establish karna. Digital signatures ka framework.' },
                { icon: 'users', title: 'Consumer Protection', body: 'Online consumers ka protection. Digital transactions ka rules.' },
              ],
            },
            {
              type: 'diagram',
              title: 'IT Act 2000 — Structure',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'it-act-2000',
              caption: 'IT Act 2000 India ka primary cyber law hai. Ye 4 main areas cover karta hai: Legal Recognition, Cyber Crimes, Digital Infrastructure, aur Consumer Protection.',
            },
            {
              type: 'points',
              title: 'IT Act 2000 ka Scope',
              kicker: 'Coverage',
              points: [
                'Electronic transactions ka legal validity.',
                'Digital signatures ka recognition.',
                'Cyber crimes ka definition aur penalties.',
                'Data protection aur privacy ka framework.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'IT Act 2000 = India ka primary cyber law.',
                'Objectives: legal recognition, cyber crime prevention, digital infrastructure, consumer protection.',
                '2008 mein amendments kiye gaye.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Describe the Information Technology Act 2000 and its key objectives.',
              answer:
                '**IT Act 2000 — Overview:**\nIT Act 2000 India ka primary cyber law hai. Ye 2000 mein enact hua tha.\n\n**Key Objectives:**\n\n1. **Legal Recognition** — Electronic transactions ka legal recognition. Digital signatures, electronic records legally valid.\n\n2. **Cyber Crimes Prevention** — Cyber crimes define karna aur penalties set karna. Hacking, phishing, fraud — sabke punishments hain.\n\n3. **Digital Infrastructure** — Cyber Security Council establish karna. Digital signatures ka framework.\n\n4. **Consumer Protection** — Online consumers ka protection. Digital transactions ka rules.\n\n**Coverage:**\n- Electronic transactions ka legal validity\n- Digital signatures ka recognition\n- Cyber crimes ka definition aur penalties\n- Data protection aur privacy ka framework\n\n**Diagram:** Refer to IT Act 2000 Structure diagram.',
            },
          ],
        },
        {
          id: 'it-act-provisions',
          number: '1.16',
          title: 'IT Act 2000 — Overview and Provisions',
          subtitle: 'IT Act 2000 ke important provisions aur sections',
          icon: 'file',
          accent: '#0047ff',
          englishDefinition:
            'The IT Act 2000 contains specific provisions for various cyber offenses and digital regulations. Key provisions include Section 65 (tampering with computer source code), Section 66 (computer-related offenses), Section 72 (penalty for breach of privacy), and provisions for digital signatures.',
          intro: 'IT Act 2000 mein specific provisions hain jo different cyber offenses aur digital regulations ka rules batate hain. Kaun si section kaun sa crime cover karta hai, kaun si penalty hai — sab specific hai.',
          sections: [
            {
              type: 'definition',
              title: 'IT Act 2000 ke Important Provisions',
              kicker: 'Key Sections',
              body: 'IT Act 2000 mein specific provisions hain jo cyber offenses aur digital regulations ka rules batate hain. Key sections include Section 65 (tampering with source code), Section 66 (computer-related offenses), Section 72 (breach of privacy penalty).',
              body2: 'Simple words mein: IT Act ke sections — kaun sa section kaun sa crime cover karta hai.',
              chips: ['Section 65', 'Section 66', 'Section 72', 'Digital signatures'],
            },
            {
              type: 'cards',
              title: 'IT Act 2000 ke Key Sections',
              kicker: 'Important Provisions',
              cards: [
                { icon: 'file', title: 'Section 65 — Source Code Tampering', body: 'Computer source code tampering ka penalty. Original source code ko modify, conceal, aur destroy karna illegal hai. Fine lakhon tak ho sakta hai.' },
                { icon: 'warn', title: 'Section 66 — Computer Offenses', body: 'Computer-related offenses ka penalty. Hacking, unauthorized access, data theft — sab Section 66 ke under aate hain. Jail aur fine dono ho sakta hai.' },
                { icon: 'lock', title: 'Section 72 — Privacy Breach', body: 'Breach of privacy penalty. Sensitive information leak karna illegal hai. Digital records without consent disclose karna.' },
                { icon: 'check', title: 'Digital Signatures ka Recognition', body: 'Digital signatures ka legal recognition. Section 10A — electronic records ka validity.' },
              ],
            },
            {
              type: 'diagram',
              title: 'IT Act 2000 — Key Provisions',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'it-act-provisions',
              caption: 'IT Act 2000 ke 4 key provisions: Section 65 (source code tampering), Section 66 (computer offenses), Section 72 (privacy breach), aur Digital Signatures (Section 10A).',
            },
            {
              type: 'points',
              title: 'Penalties ka Overview',
              kicker: 'Penalty Structure',
              points: [
                'Fine — amount varies by offense.',
                'Imprisonment — jail terms vary.',
                'Both — fine aur jail dono ho sakte hain.',
                'Severity — serious offenses heavy penalties.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                'Section 65 — source code tampering.',
                'Section 66 — computer offenses (hacking, unauthorized access).',
                'Section 72 — privacy breach penalty.',
                'Digital signatures — Section 10A, legal recognition.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Explain the key provisions and penalties under the IT Act 2000.',
              answer:
                '**IT Act 2000 — Key Provisions:**\n\n1. **Section 65 — Source Code Tampering** — Computer source code tampering ka penalty. Original source code modify, conceal, destroy karna illegal hai. Fine lakhon tak ho sakta hai.\n\n2. **Section 66 — Computer-Related Offenses** — Computer-related offenses ka penalty. Hacking, unauthorized access, data theft — sab Section 66 ke under. Jail aur fine dono ho sakta hai.\n\n3. **Section 72 — Breach of Privacy** — Breach of privacy penalty. Sensitive information leak karna illegal hai. Jail aur fine ho sakta hai.\n\n4. **Section 10A — Digital Signatures** — Digital signatures ka legal recognition. Electronic records ka validity.\n\n**Penalty Structure:**\n- Fine — amount varies by offense\n- Imprisonment — jail terms vary\n- Both — fine aur jail dono\n- Severity — serious offenses heavy penalties\n\n**Diagram:** Refer to IT Act Provisions diagram.',
            },
          ],
        },
        {
          id: 'it-act-amendments',
          number: '1.17',
          title: 'Amendments to IT Act 2000',
          subtitle: 'IT Act 2008 amendments — key changes aur updates',
          icon: 'check',
          accent: '#0047ff',
          englishDefinition:
            'The IT Act 2000 was significantly amended in 2008 to address new cyber threats and align with international standards. Key amendments include the introduction of new cyber crimes (phishing, identity theft, voyeurism), expansion of penalties, addition of Section 66A (offensive messages), stricter data protection rules, and provisions for intermediary liability.',
          intro: 'IT Act 2000 ke original version mein kuch limitations the. Naye cyber crimes aate gaye, naye threats develop ho gaye. Isliye 2008 mein IT Act ke significant amendments kiye gaye.',
          sections: [
            {
              type: 'definition',
              title: 'IT Act 2008 Amendments kya hain?',
              kicker: 'Definition',
              body: 'IT Act 2000 ke 2008 amendments significant changes hain jo naye cyber threats address karte hain. Ye naye cyber crimes add karte hain, penalties expand karte hain, aur Act ko international standards se align karte hain.',
              body2: 'Simple words mein: 2008 amendments = IT Act ke upgrade.',
              chips: ['2008 amendments', 'New crimes', 'Expanded penalties', 'Global alignment'],
            },
            {
              type: 'cards',
              title: '2008 Amendments ke Key Changes',
              kicker: 'Major Amendments',
              cards: [
                { icon: 'warn', title: 'New Cyber Crimes Add', body: 'Naye cyber crimes add kiye gaye — phishing, identity theft, voyeurism. Ye crimes original IT Act mein nahi the.' },
                { icon: 'chart', title: 'Penalties Expanded', body: 'Existing penalties aur fines expand kiye gaye. Serious crimes ke liye heavy penalties. Jail terms bhi increase kiye gaye.' },
                { icon: 'globe', title: 'Intermediary Liability', body: 'Intermediaries (social media, ISPs) ka liability define kiya. Section 79 amendment — safe harbor provide.' },
                { icon: 'lock', title: 'Data Protection Framework', body: 'Data protection provisions expand kiye gaye. Sensitive personal data ka protection.' },
              ],
            },
            {
              type: 'diagram',
              title: 'IT Act 2008 Amendments — Changes',
              kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
              diagram: 'it-act-amendments',
              caption: 'IT Act 2008 amendments 4 key changes laye: New Cyber Crimes, Expanded Penalties, Intermediary Liability, aur Data Protection Framework.',
            },
            {
              type: 'points',
              title: 'Other Important Amendments',
              kicker: 'Additional Changes',
              points: [
                'Section 66A — offensive messages ka provision (2015 Supreme Court invalid).',
                'Section 66B — impugning meaning of images.',
                'Section 66C — identity theft penalty.',
                'Section 66D — cheating by impersonation.',
              ],
            },
            {
              type: 'recap',
              title: 'Quick Recap',
              kicker: '5 Seconds Mein Yaad Karo',
              points: [
                '2008 amendments = IT Act ke upgrade.',
                '4 key changes: New crimes, Expanded penalties, Intermediary liability, Data protection.',
                'Naye crimes: phishing, identity theft, voyeurism.',
                'Supreme Court 2015 — Section 66A invalid kiya.',
              ],
            },
          ],
          examQuestions: [
            {
              question: 'Discuss the key amendments made to the IT Act 2000 in 2008.',
              answer:
                '**IT Act 2008 Amendments — Key Changes:**\n\n1. **New Cyber Crimes Add** — Naye cyber crimes add kiye gaye: phishing, identity theft, voyeurism.\n\n2. **Penalties Expanded** — Existing penalties aur fines expand kiye gaye. Serious crimes ke liye heavy penalties. Jail terms increase kiye gaye.\n\n3. **Intermediary Liability** — Section 79 amendment. Intermediaries ka liability define kiya. Safe harbor provide.\n\n4. **Data Protection Framework** — Data protection provisions expand kiye gaye. Sensitive personal data ka protection.\n\n**Other Amendments:**\n- Section 66A — Offensive messages (2015 Supreme Court invalid)\n- Section 66B — Impugn meaning of images\n- Section 66C — Identity theft penalty\n- Section 66D — Cheating by impersonation\n\n**Impact:** 2008 amendments IT Act ko modernize kiya. Ye international standards se align hui.\n\n**Diagram:** Refer to IT Act Amendments diagram.',
            },
          ],
        },
      ],
    },
  ],
};
