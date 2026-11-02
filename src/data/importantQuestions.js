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
];
