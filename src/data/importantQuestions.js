// ============================================================
// Important 6-Mark Exam Questions for Unit 1 (BI)
// Curated most important questions across all 8 topics
// Each with complete answer + diagram reference
// ============================================================

export const importantQuestions = [
  {
    id: 'q1',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Business Intelligence',
    question: 'Define Business Intelligence (BI). Explain the components of BI with a suitable diagram.',
    answer: `**Definition:**
Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help decision makers make informed business decisions.

**Components of BI:**
1. **Data Sources** — ERP, CRM, databases, Excel, external sources
2. **ETL (Extract, Transform, Load)** — data ko extract karna, transform (clean, format) karna, aur warehouse mein load karna
3. **Data Warehouse** — central store for historical, integrated data (Subject-oriented, Time-variant, Non-volatile)
4. **OLAP Server** — multi-dimensional analysis through data cubes (Drill-down, Slice, Dice)
5. **BI Applications** — Dashboards, reports, scorecards (Tableau, Power BI, QlikSense)
6. **Users** — Analysts, managers, executives who consume the insights

**Data Flow:** Data Sources → ETL → Data Warehouse → OLAP → BI Applications → Users

**Diagram:** Refer to the BI Architecture Flow diagram showing data flowing from sources through ETL into the warehouse, then OLAP analysis, and finally dashboards for decision making.`,
    diagram: 'biflow',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q2',
    topicNumber: '1.2',
    topicTitle: 'Evolution of BI & Decision Support Systems',
    question: 'Explain the evolution of Business Intelligence from MIS to modern BI with a timeline. Also describe the components of a Decision Support System (DSS).',
    answer: `**Evolution of BI:**
1. **1950s–60s — MIS** (Management Information Systems): Structured, routine reports. Operational decisions.
2. **1970s — DSS** (Decision Support Systems): Semi-structured problems. Data + models. Gorry & Scott Morton (1971).
3. **1980s — EIS** (Executive Information Systems): For top executives. External + internal data.
4. **1990s — Data Warehouse & OLAP**: Bill Inmon (father of data warehouse). Codd (OLAP, 1993). Gartner ne 1996 mein "BI" term popular kiya.
5. **2000s — Self-Service BI**: Tableau (2003), Power BI, Qlik. Non-technical users khud reports banane lage.
6. **2010s+ — Modern BI**: Cloud BI, embedded analytics, real-time dashboards, AI/ML-powered BI.

**Components of DSS:**
1. **Database Management System (DBMS)** — data ko store, manage aur retrieve karta hai
2. **Model Management System** — analysis models (forecasting, optimization, simulation)
3. **User Interface / Dialogue Management** — user interaction, query, reports

**Diagram:** Refer to the Evolution Timeline diagram (MIS → DSS → EIS → DW/OLAP → Self-Service → Modern BI) and the DSS Components diagram.`,
    diagram: 'timeline',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q3',
    topicNumber: '1.3',
    topicTitle: 'Data-driven Decision Making',
    question: 'What is data-driven decision making? Explain the DIKW pyramid and the four types of analytics with examples.',
    answer: `**Definition:**
Data-driven decision making is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience.

**DIKW Pyramid:**
1. **Data** — raw facts and figures (e.g., "sales = 1000")
2. **Information** — data + context (e.g., "sales increased 10%")
3. **Knowledge** — patterns and understanding (e.g., "sales drop in July — seasonal trend")
4. **Wisdom** — using knowledge for decisions (e.g., "keep lower stock in July")

**Four Types of Analytics:**
1. **Descriptive — "What happened?"** — Past data summary. Example: last month sales report.
2. **Diagnostic — "Why did it happen?"** — Root cause analysis. Example: sales drop kyunki competitor ne discount diya.
3. **Predictive — "What will happen?"** — Future estimate with ML. Example: agle month sales ka estimate.
4. **Prescriptive — "What should we do?"** — Best action recommendations. Example: stock kitna rakho, kaunsa campaign chalo.

**Diagram:** Refer to the DIKW Pyramid diagram and the Analytics Stages diagram (Descriptive → Diagnostic → Predictive → Prescriptive).`,
    diagram: 'dikw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q4',
    topicNumber: '1.4',
    topicTitle: 'Components of BI Architecture',
    question: 'Describe the components of Business Intelligence architecture. Explain the ETL process in detail.',
    answer: `**BI Architecture Components:**
1. **Data Sources** — ERP, CRM, operational databases, Excel, external sources
2. **ETL (Extract, Transform, Load)** — data preparation ka heart
3. **Data Warehouse** — central repository. Features: Subject-oriented, Integrated, Time-variant, Non-volatile
4. **OLAP Server** — data cubes, drill-down, slice, dice operations
5. **BI Applications** — dashboards, reports, scorecards
6. **Users** — analysts, managers, executives

**ETL Process in Detail:**
1. **Extract** — data ko source systems se nikalna. Multiple sources se collect karna.
2. **Transform** — data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna.
3. **Load** — transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna.

**Importance:** ETL data quality ensure karta hai. Kharab ETL se kharab data warehouse banta hai — "garbage in, garbage out".

**Diagram:** Refer to the Full BI Architecture diagram (6 layers) and the ETL Process diagram (Extract → Transform → Load).`,
    diagram: 'etl',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q5',
    topicNumber: '1.5',
    topicTitle: 'Role of Databases, Data Warehouses & Analytics in BI',
    question: 'Differentiate between databases (OLTP) and data warehouses (OLAP). Explain how analytics converts data into business decisions.',
    answer: `**Database (OLTP — Online Transaction Processing):**
- Purpose: Daily transactions (sales, orders, inventory)
- Data: Current, operational
- Structure: Row-based, normalized
- Operations: Fast inserts & updates
- Users: Operational staff
- Example: ATM transactions

**Data Warehouse (OLAP — Online Analytical Processing):**
- Purpose: Historical data analysis
- Data: Integrated, historical, time-variant
- Structure: Multi-dimensional cubes, denormalized
- Operations: Complex queries, drill-down, slice, dice
- Users: Analysts, managers, executives
- Features: Subject-oriented, Integrated, Time-variant, Non-volatile

**How Analytics Converts Data into Decisions:**
1. **Descriptive** — "What happened?" (past summary)
2. **Diagnostic** — "Why did it happen?" (root cause)
3. **Predictive** — "What will happen?" (forecasting)
4. **Prescriptive** — "What should we do?" (recommendations)

**Example:** Descriptive: "Sales 10% kam hui." Diagnostic: "Kyun? Competitor discount." Predictive: "Agle month bhi kam hogi." Prescriptive: "Extra campaign chalo."

**Diagram:** Refer to the OLTP vs OLAP comparison diagram and the Analytics Stages diagram.`,
    diagram: 'db-vs-dw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q6',
    topicNumber: '1.6',
    topicTitle: 'Applications of BI in Business Domains',
    question: 'Explain the applications of Business Intelligence in finance and healthcare domains with examples.',
    answer: `**BI Applications in Finance:**
1. **Fraud Detection** — real-time transaction monitoring, anomaly detection
2. **Risk Management** — credit risk, market risk analysis
3. **Portfolio Optimization** — investment decisions, asset allocation
4. **Regulatory Compliance** — automatic report generation (Basel, SOX)

**BI Applications in Healthcare:**
1. **Patient Outcome Analysis** — treatment effectiveness, recovery rates, mortality analysis
2. **Resource Planning** — beds, staff, equipment utilization optimization
3. **Clinical Operations** — workflow optimization, waiting time analysis
4. **Population Health Management** — disease patterns, preventive care, health trends

**Example:** A hospital uses BI to analyze patient admission patterns, optimize bed allocation during peak seasons, and predict patient demand for different departments. A bank uses BI for real-time fraud detection across millions of transactions.

**Diagram:** Refer to the BI Applications reference image in this topic showing BI applications across domains.`,
    diagram: null,
    image: '/images/bi-healthcare.png',
    importance: '⭐⭐⭐',
  },
  {
    id: 'q7',
    topicNumber: '1.7',
    topicTitle: 'Benefits & Challenges of BI Systems',
    question: 'Discuss the benefits and challenges of implementing a Business Intelligence system in an organization.',
    answer: `**Benefits of BI:**
1. **Better Decision Making** — Data-driven decisions, real-time insights, accuracy
2. **Increased Efficiency** — Automated reporting, faster processes, less manual work
3. **Competitive Advantage** — Market trends early detection, customer understanding
4. **Cost Reduction** — Waste identification, inventory optimization
5. **Revenue Growth** — Better marketing, customer retention
6. **Customer Satisfaction** — Personalized experiences, better service

**Challenges of BI:**
1. **Data Quality** — "Garbage in, garbage out". Incomplete, inconsistent, or outdated data.
2. **Cost & Complexity** — High implementation cost, infrastructure, tools, skilled personnel.
3. **Security & Privacy** — Data breaches, compliance (GDPR), unauthorized access.
4. **Resistance to Change** — Employees resist new tools and processes. Change management chahiye.
5. **Technical Complexity** — Integration with existing systems, maintenance.
6. **Skilled Personnel** — Need for data analysts, data scientists, IT support.

**Conclusion:** BI benefits aur challenges dono hain. Successful implementation ke liye challenges ko address karna (data quality, training, security) important hai. Benefits ko maximize karna aur challenges ko minimize karna part of planning hai.

**Diagram:** Refer to the Benefits vs Challenges diagram showing both sides of BI implementation.`,
    diagram: 'benefits-challenges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q8',
    topicNumber: '1.8',
    topicTitle: 'Generative AI & LLMs in Business Intelligence',
    question: 'Define Generative AI and Large Language Models (LLMs). Explain how they are transforming Business Intelligence with examples.',
    answer: `**Generative AI (GenAI):**
GenAI ek AI ka type hai jo naye content generate karti hai — text, images, code, audio, video. Ye previous patterns se naya output banati hai.

**Large Language Models (LLMs):**
LLMs GenAI ka subtype hai jo language ko samajh aur generate karti hai. Ye bade datasets par train kiye hoti hain. Examples: GPT-4, Claude, Gemini, LLaMA.

**How LLMs are Transforming BI:**

1. **Conversational Analytics** — "Ask your data" — users normal language mein data se puchte hain. "Show me last quarter sales" ya "Why did sales drop?" — system answer degi. Ye non-technical users ke liye BI accessible banati hai.

2. **Automated Report Generation** — LLMs automatic reports likh sakti hain. Data ka summary automatically prepare karti hain. Ye time bachata hai aur efficiency badhata hai.

3. **Anomaly Detection & Explanation** — GenAI unusual patterns detect aur explain karti hai. "Sales kam hui kyun?" — system batati hai possible reasons.

4. **Predictive Recommendations** — LLMs historical data aur patterns dekh kar recommendations generate karti hain. "Kaunsa product stock karna hai?" — prescriptive analytics ka advanced version.

**Example:** Ek sales manager normal language mein puchta hai: "Pichhle quarter ka sales report dikhao" ya "Kaunsa product sabse jada bik raha hai?" — GenAI-powered BI dashboard instant answer deti hai. Ye conversational analytics hai — BI + LLM ka mishran.

**Impact:** GenAI BI ko accessible, automatic aur conversational banati hai. Ye "democratization of data" kehlaata hai.

**Diagram:** Refer to the GenAI + BI Integration diagram showing data flow: Business Data → BI System → GenAI/LLM → Natural Language Outputs.`,
    diagram: 'genai',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q9',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Business Intelligence',
    question: 'What is ETL? Explain the three stages of ETL with a diagram. Why is ETL important in BI?',
    answer: `**ETL (Extract, Transform, Load):**

1. **Extract** — Data ko source systems (ERP, CRM, databases) se nikalna. Multiple sources se data collect karna. Extraction methods: full extraction, incremental extraction, change data capture.

2. **Transform** — Data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna. Data ko "analysis-ready" banana. Transformation types: cleansing, formatting, aggregation, enrichment, deduplication.

3. **Load** — Transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna. Loading strategies: full refresh, incremental load.

**Why ETL Important in BI:**
- Data quality ensure karta hai
- Data ko analysis-ready banata hai
- Kharab ETL se kharab data warehouse banta hai
- "Garbage in, garbage out" principle — ETL ka quality BI results pe directly impact dalta hai
- Different sources se data ko integrate karta hai

**Diagram:** Refer to the ETL Process diagram (Extract → Transform → Load).`,
    diagram: 'etl',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'q10',
    topicNumber: '1.3',
    topicTitle: 'Data-driven Decision Making',
    question: 'Explain the data-driven decision cycle with a diagram. What are the challenges of data-driven decision making?',
    answer: `**Data-Driven Decision Cycle:**
1. **Identify Problem** — kaunsa decision lena hai? Objective set karo.
2. **Collect Data** — relevant data collect karo (sales, customer, market data)
3. **Clean & Process Data** — remove errors, fill missing values ("garbage in, garbage out")
4. **Analyze** — descriptive/diagnostic/predictive/prescriptive analytics use karo
5. **Interpret** — results ko interpret karo, insights nikalo
6. **Decide** — decision lo, best option chuno
7. **Implement & Monitor** — decision apply karo, results track karo → phir se cycle shuru

**Circular process** — ek baar decision lene se kaam nahi khatam hota. Results monitor kiye jaate hain aur feedback se cycle repeat hoti hai.

**Challenges:**
1. **Data Quality** — kharab data se kharab decisions
2. **Data Security & Privacy** — sensitive data ka security
3. **Cost** — technology aur skilled people ka cost
4. **Over-reliance on Data** — data sabse nahi batata, human judgment bhi important hai
5. **Skills Gap** — data analysis ki skills ki kami
6. **Resistance to Change** — decisions change nahi chahte

**Diagram:** Refer to the Data-Driven Decision Cycle diagram (circular 7-step process).`,
    diagram: 'cycle',
    image: null,
    importance: '⭐⭐',
  },
  // ============================================================
  // Cyber Security Unit 1 — 17 Most Important 6-Mark Questions
  // ============================================================
  {
    id: 'cq1',
    subjectId: 'cyber-security',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Cyber Security',
    question: 'Define Cyber Security. Explain its 4 key areas with a suitable diagram.',
    answer: `**Definition:**
Cyber security is the practice of protecting systems, networks, and programs from digital attacks. Ye internet par apne digital assets ko hackers, malware aur online threats se protect karti hai.

**4 Key Areas of Cyber Security:**
1. **Network Security** — computer networks ko protect karti hai. Firewalls, IDS (Intrusion Detection Systems), VPNs ka use karti hai. Network traffic monitor karti hai aur unauthorized access rokti hai.
2. **Application Security** — apps aur software ko protect karti hai. Development ke time security features add karti hai — input validation, authentication, encryption, code reviews.
3. **Information Security** — sensitive data ko protect karti hai. Data encryption, access controls, backup policies ka use karti hai.
4. **Operational Security** — organizational processes ko protect karti hai. Security policies, procedures, guidelines banati hai. Employee training, incident response plans, risk management.

**Diagram:** Refer to the Cyber Security Framework diagram showing 4 key areas — Network, Application, Information, Operational Security — all working together.`,
    diagram: 'cyber-framework',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq2',
    subjectId: 'cyber-security',
    topicNumber: '1.2',
    topicTitle: 'Need, Importance and Challenges in Cyber Security',
    question: 'Why is cyber security important? Explain the major challenges faced in implementing cyber security.',
    answer: `**Importance of Cyber Security:**
1. **Infrastructure Protection** — power grids, transportation, hospitals sab online hain. Hack ho toh nation halt ho sakti hai.
2. **Economic Stability** — cyber attacks financial markets ko affect karte hain. Companies ka loss millions mein ho sakta hai.
3. **National Security** — defense systems, government databases cyber attacks ke target ho sakte hain.
4. **Individual Privacy** — personal data, bank details, messages sab protect hona chahiye.

**Major Challenges:**
1. **Rapidly Evolving Threats** — hackers ka techniques continuous badalte hain. Security measures ek time fixed hoti hai, but hackers naya bypass dhundh lete hain.
2. **Legacy Systems** — purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte.
3. **Skills Gap** — cyber security experts ki demand high hai, supply kam hai.
4. **Balancing Security & Usability** — zyada security strict ho toh users iske use karna band dete hain. Ek balance maintain karna zaroori hai.

**Diagram:** Refer to the Cyber Security Framework diagram and the Importance/Challenges content.`,
    diagram: 'cyber-framework',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq3',
    subjectId: 'cyber-security',
    topicNumber: '1.3',
    topicTitle: 'Cyberspace',
    question: 'Define Cyberspace. Explain its layered structure with a diagram.',
    answer: `**Definition:**
Cyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.

**Layers of Cyberspace:**
1. **Physical Layer** — servers, routers, switches, undersea cables, satellites. Ye digital data ko physically transmit aur store karte hain.
2. **Logical Layer** — software, protocols (TCP/IP, HTTP, DNS), applications. Ye data ko process, route, aur protect karta hai.
3. **Social Layer** — users, communities, human activity. Social media, online transactions, digital communication.
4. **Security Layer** — firewalls, encryption, authentication. Ye cyberspace ko protect karti hai.

**Significance:** Cyberspace global reach hai — borders ko cross karta hai. Modern economy, society, national security sab cyberspace par depend hain.

**Diagram:** Refer to the Cyberspace Layered Structure diagram — 4 layers (Physical → Logical → Security → Social).`,
    diagram: 'cyberspace-layers',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq4',
    subjectId: 'cyber-security',
    topicNumber: '1.4',
    topicTitle: 'Cyber Threats',
    question: 'Describe the different types of cyber threats with examples. Add a diagram.',
    answer: `**Types of Cyber Threats:**
1. **Malware** — malicious software including viruses, worms, trojans, ransomware. Ye system ko damage karta hai, data corrupt karta hai. Example: Trojan horse fake software ban ke system mein enter karta hai.
2. **Phishing** — fraudulent emails/messages legitimate sources jaise dikhte hain. Users se sensitive information capture karte hain.
3. **Ransomware** — system ko lock kar deta hai, data ko encrypt karta hai. Ransom ke liye paise demand karta hai.
4. **DDoS (Distributed Denial of Service)** — multiple computers se ek website pe traffic flood kar deta hai. Website overload ho jati hai, users ko access nahi milta.
5. **Man-in-the-Middle (MITM)** — hacker communication ke beech mein aa jata hai. Data intercept aur modify karta hai.
6. **Insider Threats** — organisation ke own employees data leak karte hain.
7. **Zero-Day Exploits** — security vulnerabilities jinka software maker ko bhi pata nahi. Hackers exploit kar dete hain.

**Diagram:** Refer to the Types of Cyber Threats diagram showing 6 major categories — Malware, Phishing, Ransomware, DDoS, MITM, Zero-Day.`,
    diagram: 'cyber-threats',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq5',
    subjectId: 'cyber-security',
    topicNumber: '1.5',
    topicTitle: 'Cyber-warfare',
    question: 'What is cyber-warfare? Explain its three levels with examples. Add a diagram.',
    answer: `**Definition:**
Cyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai.

**Three Levels of Cyber-warfare:**
1. **Cyber Espionage** — dusre country ke sensitive information chura lena — defense plans, government secrets, economic data. Ye spy ka digital form hai.
2. **Cyber Sabotage** — physical infrastructure ko damage karna — power grids hack karna, transportation systems disrupt karna. Stuxnet (Iran nuclear program) iska famous example hai.
3. **Full Cyber-Warfare** — critical systems ko completely disrupt karna — communication networks down karna, financial systems collapse karna.

**Impact on National Security:**
1. Power grid attacks — electricity supply disrupt ho sakta hai.
2. Financial system disruption — banks, stock markets hack ho sakte hain.
3. Defense systems — military communication aur weapon systems target ho sakte hain.

**APTs:** Advanced Persistent Threats — long-term, targeted, state-sponsored attacks. Ye years tak chalti hain, hard to detect.

**Diagram:** Refer to the Cyber-warfare Levels diagram — Espionage → Sabotage → Full War (escalating severity).`,
    diagram: 'cyber-warfare',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq6',
    subjectId: 'cyber-security',
    topicNumber: '1.6',
    topicTitle: 'CIA Triad',
    question: 'Explain the CIA Triad — Confidentiality, Integrity, and Availability — with examples. Add a diagram.',
    answer: `**CIA Triad — 3 Core Security Principles:**
1. **Confidentiality** — sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye.
   - *Methods:* Encryption, passwords, access controls, biometric authentication.
   - *Example:* Bank account details sirf account holder aur authorized bank employees ko dekhne milna chahiye.
   - *Breach:* Data leak, unauthorized access, password cracking.

2. **Integrity** — data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain.
   - *Methods:* Checksums, digital signatures, version controls, hash functions.
   - *Example:* Transaction details correct hona chahiye — kisi na kisi change nahi karna chahiye.
   - *Breach:* Data corruption, unauthorized modification, man-in-the-middle attacks.

3. **Availability** — systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye.
   - *Methods:* Redundancy, backups, DDoS protection, failover systems.
   - *Example:* Bank website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye.
   - *Breach:* System down, service disruption, DDoS attacks, hardware failure.

**Importance:** Ye 3 principles mil kar ek complete security model banate hain. Har security measure inme ek ya zyada principles ensure karti hai.

**Diagram:** Refer to the CIA Triad diagram — 3 circles (C-I-A) around a central security model.`,
    diagram: 'cia-triad',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq7',
    subjectId: 'cyber-security',
    topicNumber: '1.7',
    topicTitle: 'Cyber Terrorism',
    question: 'Define Cyber Terrorism. Describe its forms and impact with a diagram.',
    answer: `**Definition:**
Cyber terrorism ka matlab hai terrorism ko digital form mein use karna — hackers critical infrastructure, government systems, aur public services ko attack karte hain taaki mass disruption, fear, aur panic paida ho. Ye digital attacks se physical world mein damage karti hai.

**Forms of Cyber Terrorism:**
1. **Infrastructure Attacks** — power grids, water supply, transportation systems hack karna.
2. **Government System Attacks** — official websites hack karna, citizen data leak karna, election systems disrupt karna.
3. **Social Media Propaganda** — fake news, hate speech spread karna, public fear paida karna.
4. **Ransomware on Public Services** — hospitals, municipal services ko lock karke ransom demand karna.

**Impact:**
1. **Public Fear & Panic** — citizens feel unsafe digitally.
2. **Economic Disruption** — businesses stop, services halt.
3. **Loss of Life (indirect)** — hospital systems down, emergency services affected.
4. **National Security Threat** — critical infrastructure affected.

**Diagram:** Refer to the Cyber Terrorism diagram — Motive → Attack → Targets → Impact cycle.`,
    diagram: 'cyber-terrorism',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq8',
    subjectId: 'cyber-security',
    topicNumber: '1.8',
    topicTitle: 'Cyber Security of Critical Infrastructure',
    question: 'What is critical infrastructure? Explain the sectors that need protection with a diagram.',
    answer: `**Definition:**
Critical infrastructure wo physical aur digital systems hain jin par nation ka survival depend karta hai — power, water, transport, healthcare, finance, telecom. Hack ho toh country ek dam halt ho sakti hai.

**Critical Infrastructure Sectors:**
1. **Energy Sector** — power grids, oil refineries, nuclear plants.
2. **Water Supply** — treatment plants, reservoirs, distribution systems.
3. **Transportation** — railways, airports, shipping ports, traffic systems.
4. **Healthcare** — hospitals, patient records, medical devices.
5. **Finance** — banks, stock exchanges, payment systems.
6. **Telecom** — communication networks, internet backbone.

**Why Protection Zaroori Hai:**
- Attack on any one sector cascading effect daal sakta hai — power down toh sab systems down.
- 24/7 dependency — nation ka har kaam in systems par depend karta hai.
- Interconnected systems — ek hack se multiple sectors affect ho sakte hain.

**Diagram:** Refer to the Critical Infrastructure diagram — 6 sectors connected to a central "Nation" hub.`,
    diagram: 'critical-infra',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq9',
    subjectId: 'cyber-security',
    topicNumber: '1.9',
    topicTitle: 'Cyber Security — Organizational Implications',
    question: 'Explain the organizational implications of cyber security attacks with a diagram.',
    answer: `**Organizational Implications of Cyber Security:**
1. **Data Loss** — customer information, financial records, trade secrets chur jaate hain.
2. **Financial Loss** — ransom payments, revenue loss, legal fines.
3. **Reputation Damage** — customer trust lost, brand damage, market value down.
4. **Operational Disruption** — systems down, employees blocked, work halted.
5. **Legal Compliance** — IT Act violations, fines, lawsuits.
6. **National Impact** — critical infrastructure affected, economy hit.

**Business Impact:**
- Customer trust aur reputation sabse important hai.
- Legal compliance mandatory hai — IT Act violations heavy fines leta hai.
- Operational disruption se productivity down jata hai.

**Building Security-Aware Culture:**
- Employee training zaroori hai.
- Security policies clear aur enforced honi chahiye.
- Incident response plans hone chahiye.

**Diagram:** Refer to the Organizational Security Implications diagram — 6 areas of impact (Data Loss, Financial, Reputation, Operational, Legal, National).`,
    diagram: 'org-security',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq10',
    subjectId: 'cyber-security',
    topicNumber: '1.10',
    topicTitle: 'Need for a Comprehensive Cyber Security Policy and Governance',
    question: 'Why is a cyber security policy important? Explain the components of a security policy framework with a diagram.',
    answer: `**Definition:**
Security policy ek documented rules aur guidelines hai jo organization apne digital assets ko protect karne ke liye follow karti hai. Governance ka matlab hai policy ko implement aur monitor karne ka process.

**Components of Security Policy:**
1. **Acceptable Use Policy** — employees ko bataya jata hai ki system ka use kaise karna hai.
2. **Access Control Policy** — kis ko kin resources ka access hai — authentication, authorization.
3. **Incident Response Policy** — attack ho toh kya karna hai — steps, reporting, escalation.
4. **Compliance Policy** — legal aur regulatory requirements follow karne ka policy.

**Governance Elements:**
1. **National Layer** — IT Act, National Policy, Cyber Crime Laws, Standards (BIS).
2. **Organizational Layer** — Security Policy, Risk Management, Incident Response Plan, Audit & Compliance.
3. **Individual Layer** — Password hygiene, Phishing awareness, Safe browsing, Personal data care.

**Why Zaroori Hai:**
- Ek clear policy se sab employees ko pata chalta hai ki kya allowed hai aur kya nahi.
- Compliance mandatory hai — IT Act violations heavy fines leta hai.
- Governance se security measures monitored aur improved hoti hain.

**Diagram:** Refer to the Policy & Governance Framework diagram — 3 layers (National → Organizational → Individual).`,
    diagram: 'policy-framework',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq11',
    subjectId: 'cyber-security',
    topicNumber: '1.11',
    topicTitle: 'Need for a Nodal Authority',
    question: 'What is a nodal authority? Explain the functions of CERT-In with a diagram.',
    answer: `**Definition:**
Nodal authority ek central organization hai jo cyber security incidents ko handle, coordinate, aur respond karti hai. India mein CERT-In (Computer Emergency Response Team — India) national nodal agency hai.

**Functions of CERT-In:**
1. **Incident Response** — cyber attacks report kare toh CERT-In immediate response provide karta hai. Ye attacks ko contain, eradicate, aur recover karta hai.
2. **Threat Intelligence** — CERT-In new threats, vulnerabilities, aur attack patterns monitor karta hai. Ye alerts issue karta hai taaki organizations prepare reh sakein.
3. **Policy Coordination** — government, organizations, aur individuals ke beech coordination karta hai. Security guidelines aur best practices share karta hai.

**Why Zaroori Hai:**
- Ek central authority se incident response fast aur organized hota hai.
- Threat intelligence shared karne se sab organizations ek saath prepare reh sakte hain.
- International cooperation ke liye national focal point hota hai.

**Structure:**
- Government (ministries, central agencies) → report incidents
- Organizations (banks, ISPs, companies) → report incidents
- Individuals (citizens) → report incidents
- CERT-In → coordinates, responds, issues alerts

**Diagram:** Refer to the Nodal Authority diagram — CERT-In at top, government, organizations, individuals reporting to it.`,
    diagram: 'nodal-authority',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq12',
    subjectId: 'cyber-security',
    topicNumber: '1.12',
    topicTitle: 'Need for an International Convention on Cyberspace',
    question: 'Why is an international convention on cyberspace needed? Explain the Budapest Convention with a diagram.',
    answer: `**Why International Convention Zaroori Hai:**
1. **Cyberspace Global Hai** — cyberspace borders ko cross karta hai. Ek country ke rules dusre country ke users pe apply nahi hote.
2. **Cross-Border Cybercrime** — hackers ek country se dusre country ke systems attack karte hain. International cooperation zaroori hai.
3. **Shared Threat Intelligence** — ek country ko threats ka pata hai toh dusre countries ko bhi batana chahiye.
4. **Standardized Rules** — sab countries ke liye common rules hone se confusion kam hoga.

**Budapest Convention on Cybercrime:**
- 2001 mein bane — pehla international treaty specifically cybercrime ke liye.
- 38 countries ne sign kiya — Europe, Americas, aur kuch Asian countries.
- Cybercrime ke liye common definitions aur rules provide karta hai.
- Cross-border investigation aur cooperation easy banata hai.
- Human rights, democracy, aur rule of law ko respect karta hai.

**India's Position:**
- India Budapest Convention ka signatory nahi hai.
- India apne IT Act 2000 aur amendments par kaam karta hai.
- But international cooperation ke liye UN aur other forums mein support karta hai.

**Diagram:** Refer to the International Cyber Conventions diagram — UN, Buenos Aires, Tallinn, Madrid initiatives.`,
    diagram: 'international-cyber',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq13',
    subjectId: 'cyber-security',
    topicNumber: '1.13',
    topicTitle: 'Introduction to Cyber Laws',
    question: 'Define Cyber Laws. Explain the scope and areas covered by cyber laws with a diagram.',
    answer: `**Definition:**
Cyber laws wo laws hain jo cyberspace, internet, aur digital technology se related hain. Ye cybercrime, data protection, e-commerce, digital signatures, aur internet governance ko cover karti hain. India mein IT Act 2000 (amended 2008) sabse important cyber law hai.

**Scope of Cyber Laws:**
1. **Data Protection aur Privacy** — personal data ko protect karna. Consent ke bina data collect nahi karna.
2. **E-Commerce aur Digital Transactions** — online transactions ki validity, digital contracts, payment systems.
3. **Cyber Crimes aur Penalties** — hacking, phishing, identity theft, ransomware, obscenity.
4. **Intellectual Property** — digital piracy, software copyright, patents.

**Why Zaroori Hai:**
- Digital world grow kar raha hai — rules chahiye taaki safe environment ho.
- Users ko protection chahiye — personal data, financial transactions.
- Cybercrimes rokne ke liye penalties zaroori hain.
- Trust aur confidence digital economy ke liye zaroori hai.

**Diagram:** Refer to the Cyber Laws diagram — 4 pillars (Definition, Scope, Purpose, Enforcement).`,
    diagram: 'cyber-laws',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq14',
    subjectId: 'cyber-security',
    topicNumber: '1.14',
    topicTitle: 'Key Principles of Cyber Laws',
    question: 'Explain the key principles of cyber laws with examples. Add a diagram.',
    answer: `**Key Principles of Cyber Laws:**
1. **Legality** — all digital activity laws ke under aana chahiye. Rules clear aur enforceable hone chahiye.
2. **Proportionality** — response threat level ke hisaab se hona chahiye. Ek choti attack pe heavy penalty nahi dena chahiye.
3. **Data Protection** — personal data protect hona chahiye. Consent ke bina data collect nahi karna.
4. **Cooperation** — cross-border enforcement zaroori hai. Cybercrime international problem hai.
5. **Accountability** — violators ko legal action face karna chahiye. Laws bina enforcement bekaar hain.
6. **Transparency** — laws aur policies public honi chahiye. Users ko pata hona chahiye ki rules kya hain.

**Examples:**
- IT Act 2000 — India ka pehla cyber law. Digital signatures, e-commerce validity, cybercrime penalties.
- GDPR — Europe ka data protection law. Personal data consent aur protection.
- Budapest Convention — international cybercrime cooperation.

**Diagram:** Refer to the Key Principles of Cyber Law diagram — 6 principles in circles (Legality, Proportionality, Data Protection, Cooperation, Accountability, Transparency).`,
    diagram: 'law-principles',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq15',
    subjectId: 'cyber-security',
    topicNumber: '1.15',
    topicTitle: 'Overview of IT Act 2000',
    question: 'Describe the IT Act 2000 — its key provisions and importance. Add a diagram.',
    answer: `**IT Act 2000 — Overview:**
- India ka pehla cyber law — 9 June 2000 pass hua, 17 October 2000 effective hua.
- Computer aur digital transactions ko legal recognition diya.
- Cybercrime ke liye penalties banaye.

**Key Provisions:**
1. **Digital Signatures** — Section 3 aur 5: Digital signatures ki legal validity di. Secure digital transactions ka base bana.
2. **E-Commerce** — Section 4: Electronic records aur digital contracts ki legal validity di. Paper ki zaroorat nahi.
3. **Cyber Crimes** — Sections 65, 66, 72, 74: Hacking, fraud, obscenity ke liye penalties.
   - Section 65: Tampering with source code — 3 years jail + ₹20,000 fine.
   - Section 66: Computer-related offences — 3 years jail + ₹500,000 fine.
   - Section 72: Breach of confidentiality — 2 years jail + ₹100,000 fine.
   - Section 67: Publishing obscene material — 5 years jail + ₹1,00,000 fine.

**Importance:**
- Digital transactions ko legal backing di.
- Users ko cybercrime se protection di.
- Digital economy ke liye trust paida kiya.

**Diagram:** Refer to the IT Act 2000 Overview diagram — 3 pillars (Validity, Security, Governance) and key sections.`,
    diagram: 'it-act-2000',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq16',
    subjectId: 'cyber-security',
    topicNumber: '1.16',
    topicTitle: 'IT Act 2000 — Key Provisions',
    question: 'Explain the important provisions of IT Act 2000 with their penalties. Add a diagram.',
    answer: `**IT Act 2000 — Key Provisions:**

**Section 65 — Tampering with Source Code:**
- Computer source code ko intentionally alter ya destroy karna.
- Penalty: Imprisonment up to 3 years + Fine up to ₹20,000.

**Section 66 — Computer-Related Offences:**
- Hacking, unauthorized access, data theft, computer-related fraud.
- Penalty: Imprisonment up to 3 years + Fine up to ₹500,000.

**Section 72 — Breach of Confidentiality:**
- Confidential information leak karna — unauthorized access se.
- Penalty: Imprisonment up to 2 years + Fine up to ₹100,000.

**Section 10A — Validity of E-Transactions:**
- Electronic records aur digital contracts ki legal validity di.
- No paper needed — digital transactions legally valid.

**Section 43A — Compensation for Data Breach:**
- Organization negligently sensitive personal data protect nahi karti toh compensation dena padega.

**Section 67 — Publishing Obscene Material:**
- Obscene material publish karna electronic form mein.
- Penalty: Imprisonment up to 5 years + Fine up to ₹1,00,000 (pehli conviction).

**Diagram:** Refer to the IT Act Provisions diagram — 6 key sections with penalties (red = criminal, blue = legal validity, purple = civil).`,
    diagram: 'it-act-provisions',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq17',
    subjectId: 'cyber-security',
    topicNumber: '1.17',
    topicTitle: 'IT Act 2008 Amendments',
    question: 'Explain the key amendments made to the IT Act in 2008 with a diagram.',
    answer: `**IT Act 2008 Amendments — Key Changes:**

**1. Data Protection:**
- Personal data ko legal protection diya.
- Consent required for data collection.
- Sensitive personal data define kara — Section 43A.

**2. Cyber Crime:**
- Naye offences add kiye — identity theft, phishing, child pornography, cyber stalking.
- Penalties increase karke strict banaye.

**3. Borderless Offence:**
- Act apply karta hai even if offence India se bahar committed hua hai, agar target India ke device ya system hai.

**4. Enforcement:**
- Police ko stronger powers di — cyber cells, investigation tools.
- Cyber forensics ka legal recognition.

**5. Compensation:**
- Section 43A — data breach ka compensation.
- Organizations negligently data protect nahi karti toh damages dena padega.

**6. Sensitive Data:**
- Section 43A — sensitive personal data define kara — medical records, financial data, biometric data.

**Why Important:**
- 2008 amendment IT Act 2000 ko modern cyber threats ke liye update kiya.
- Data protection ko legal status diya.
- Borderless offences ko cover kiya.
- Enforcement aur compensation mechanisms strong banaye.

**Diagram:** Refer to the IT Act 2008 Amendments diagram — 6 key changes (Data Protection, Cyber Crime, Borderless, Enforcement, Compensation, Sensitive Data).`,
    diagram: 'it-act-amendments',
    image: null,
    importance: '⭐⭐⭐',
  },
];
