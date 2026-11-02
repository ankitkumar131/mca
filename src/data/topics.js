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
    available: false,
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
};
