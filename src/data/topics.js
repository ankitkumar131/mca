// ============================================================
// Business Intelligence — Unit 1 (Hinglish study content)
// ============================================================

export const subjects = [
  {
    name: 'Business Intelligence',
    code: 'BI',
    color: '#0047ff',
    description: 'Data se decisions tak ka safar — bilkul simple Hinglish mein',
  },
];

export const topics = [
  // ========================================================
  // TOPIC 1 — Introduction to Business Intelligence
  // ========================================================
  {
    id: 'intro-bi',
    number: '01',
    title: 'Introduction to Business Intelligence',
    subtitle: 'BI kya hai, iske components aur faayde',
    icon: 'chart',
    accent: '#0047ff',
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
    quiz: [
      {
        question: '"BI" ka full form kya hai?',
        options: ['Business Intelligence', 'Big Information', 'Business Interface', 'Basic Internet'],
        answer: 0,
        explain: 'BI ka matlab hai Business Intelligence — data ki madad se business ko samajhna.',
      },
      {
        question: 'ETL process mein "T" ka matlab kya hai?',
        options: ['Transform', 'Transfer', 'Technology', 'Test'],
        answer: 0,
        explain: 'ETL = Extract (nikalna), Transform (clean karna), Load (daalna).',
      },
      {
        question: 'Data warehouse kis tarah ka repository hai?',
        options: [
          'Central store for historical data',
          'Small local Excel file',
          'Temporary data ka trash can',
          'Only current week ka data',
        ],
        answer: 0,
        explain: 'Data warehouse ek central place hai jahan historical (purane) data store hota hai.',
      },
      {
        question: 'Niche diye gaye mein BI tools hai?',
        options: ['Tableau, Power BI, QlikSense', 'Photoshop, Illustrator', 'Notepad, Calculator', 'Chrome, Firefox'],
        answer: 0,
        explain: 'Tableau, Power BI aur QlikSense famous BI tools hain jo data ko dashboards mein badalti hain.',
      },
      {
        question: 'OLAP ka full form kya hai?',
        options: [
          'Online Analytical Processing',
          'Office Logic And Processing',
          'Online Actual Lab Processing',
          'Open Layer Access Protocol',
        ],
        answer: 0,
        explain: 'OLAP = Online Analytical Processing. Data ko multi-dimensional analysis karne ke liye use hota hai.',
      },
    ],
  },

  // ========================================================
  // TOPIC 2 — Evolution of BI and Decision Support Systems
  // ========================================================
  {
    id: 'evolution-bi',
    number: '02',
    title: 'Evolution of BI & Decision Support Systems',
    subtitle: 'BI kab aur kaise badla — timeline aur DSS',
    icon: 'timeline',
    accent: '#0047ff',
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
    quiz: [
      {
        question: 'DSS ka full form kya hai?',
        options: ['Decision Support System', 'Data Security System', 'Distributed Server System', 'Database Service System'],
        answer: 0,
        explain: 'DSS = Decision Support System. Ye decision makers ko data aur models se help karta hai.',
      },
      {
        question: 'DSS ka concept kab aaya?',
        options: ['1970s', '1950s', '1990s', '2010s'],
        answer: 0,
        explain: 'DSS ka concept 1970s mein aaya tha. Gorry aur Scott Morton ne 1971 mein DSS ka framework diya tha.',
      },
      {
        question: '"Father of Data Warehouse" kaun hai?',
        options: ['Bill Inmon', 'Tim Berners-Lee', 'Alan Turing', 'Larry Page'],
        answer: 0,
        explain: 'Bill Inmon ko "father of data warehouse" kaha jata hai. Unhein data warehouse concept popular kiya.',
      },
      {
        question: '"Business Intelligence" term kis ne popular kiya?',
        options: ['Gartner (Howard Dresner), 1996', 'Microsoft, 2001', 'Google, 2010', 'Facebook, 2012'],
        answer: 0,
        explain: '1996 mein Gartner (Howard Dresner) ne "Business Intelligence" term popular kiya tha.',
      },
      {
        question: 'Kaunsa ek structured decision ka example hai?',
        options: [
          'Inventory reorder point nirnay',
          'Naya product ka naam sochna',
          'Company ka naya vision banana',
          'Team ke liye naya office ka design',
        ],
        answer: 0,
        explain: 'Inventory reorder point ek structured decision hai — rules pe based hai, routine hai.',
      },
    ],
  },

  // ========================================================
  // TOPIC 3 — Data-driven Decision Making in Organizations
  // ========================================================
  {
    id: 'data-driven-decisions',
    number: '03',
    title: 'Data-driven Decision Making',
    subtitle: 'Data se decisions — cycle, analytics types aur challenges',
    icon: 'cycle',
    accent: '#0047ff',
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
    quiz: [
      {
        question: 'Data-driven decision making ka matlab hai?',
        options: [
          'Decisions data pe based karna',
          'Sirf gut feeling pe decisions lena',
          'Random decisions roz lena',
          'Manager sirf experience se decisions lena',
        ],
        answer: 0,
        explain: 'Data-driven decision making ka matlab hai decisions data pe based karna, sirf gut feeling pe nahi.',
      },
      {
        question: 'DIKW pyramid mein "Wisdom" kahan hai?',
        options: ['Top (niche ki taraf)', 'Bottom', 'Middle', 'Pyramid hi nahi hai'],
        answer: 0,
        explain: 'DIKW pyramid ka order hai: Data (bottom) → Information → Knowledge → Wisdom (top).',
      },
      {
        question: '"What happened?" ka answer kaunsa analytics type hai?',
        options: ['Descriptive analytics', 'Predictive analytics', 'Prescriptive analytics', 'Diagnostic analytics'],
        answer: 0,
        explain: 'Descriptive analytics "What happened?" ka jawab deti hai — past data ka summary.',
      },
      {
        question: '"Garbage in, garbage out" ka matlab hai?',
        options: [
          'Kharab data se kharab decisions/results',
          'Data ko delete karna',
          'Data ke liye kharab tools',
          'Data ko bina dekhe use karna',
        ],
        answer: 0,
        explain: 'Garbage in, garbage out — kharab (garbage) data se kharab (garbage) results nikalte hain. Data quality matter karta hai.',
      },
      {
        question: 'Predictive analytics ka kaam kya hai?',
        options: [
          'Future ka estimate banana ("What will happen?")',
          'Past ka summary banana',
          'Root cause dhundna',
          'Recommendations dena',
        ],
        answer: 0,
        explain: 'Predictive analytics "What will happen?" ka jawab deti hai — future ka estimate (forecasting) ML ke saath.',
      },
    ],
  },
];
