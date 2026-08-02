# Rajiv Bheema & Nettempadu Lift Irrigation Schemes — Pump House Research

## Rajiv Bheema LIS

### Summary
- **Source**: Krishna water lifted at two separate points — Lift-I from the Jurala (PJP) backwaters near Panchadevpad village, Atmakur mandal (foreshore intake), and Lift-II from the Ookachettivagu project pondage near Ramanpad ([Wikipedia](https://en.wikipedia.org/wiki/Bheema_lift_irrigation_project)). This confirms the `chains.json` source description ("Jurala backwaters, Panchdev Pahad") is accurate for **Lift-I only**; Lift-II draws from a different, smaller source (Ookachettivagu), not from Jurala directly.
- **Destination**: Command area plus balancing reservoirs, including **Shankarasamudram tank** near Kanayapally village, Kothakota mandal (converted into a balancing reservoir for Lift-II) ([Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Rajiv_Bheema_Lift_irrigation_Project), [search-derived](https://krmb.gov.in/html/project3.html)). No single named "destination reservoir" at 385.5 m elevation was independently corroborated — the `chains.json` destElevation_m (385.5) could not be matched to a specific named reservoir in available sources.
- **Total lift**: **67 m**, matching `chains.json`'s `liftReported_m: 67` ([multiple sources](https://en.wikipedia.org/wiki/Bheema_lift_irrigation_project), [search snippets citing 67 m](https://krmb.gov.in/html/project3.html)).
- **Water allocation**: **20 TMC** is the figure most consistently repeated for the full scheme (matches `chains.json`'s `tmc: 20`) ([IIG/search](https://indiainvestmentgrid.gov.in/opportunities/nip-project/701406), multiple search results). However, the Wikipedia article states a much smaller **6.00 TMC** total allocation (5.63 TMC irrigation + 0.10 TMC drinking + 0.27 TMC industrial), irrigating only 24,292 Ha — see Data Conflicts.
- **Command area**: **203,000 acres** is corroborated — reported as 111,000 acres under Lift-I + 92,000 acres under Lift-II ([Wikipedia](https://en.wikipedia.org/wiki/Bheema_lift_irrigation_project); search-derived figures also give "0.82 Lakh Ha + 0.45 Lakh Ha" ≈ 0.82L+0.45L Ha, roughly consistent in order of magnitude though not an exact acre-for-hectare match). Districts: Wanaparthy, Narayanpet and Nagarkurnool (post-2016 district reorganization); older sources describe undivided Mahabubnagar District, mandals Makthal, Maganur/Magnur, Narva, Atmakur, Chinnachintakunta, Wanaparthy, Peddamandadi, Pebbair, Pangal, Veepanagandla, Kollapur, Kothakota, Devarakadra.
- **Power requirement**: **119 MW** total, repeated consistently across multiple independent search results ([search results citing 67 m lift + 119 MW](https://krmb.gov.in/html/project3.html), [scribd doc](https://www.scribd.com/document/887311322/Rajiv-Bhima-Lift-Irrigation-Scheme)).
- **Status overview**: Described in one source as targeting a September 2007 completion date, implying long-running delays typical of Krishna-basin lift schemes; IIG lists project timeline through March 2026 with status "Notice to Proceed." No definitive commissioning/inauguration date was found. Administrative sanction: **Rs. 2,158.40 crore** ([scribd doc](https://www.scribd.com/document/887311322/Rajiv-Bhima-Lift-Irrigation-Scheme)).

### Pump Houses

#### Lift-I Pump House — Panchadevpad
- **Location**: Near Panchadevpad village, Atmakur mandal, Narayanpet district (Jurala/PJP foreshore intake).
- **Number of pumping units**: Not found in available sources (project reportedly comprises 13 EPC packages covering pumps, motors, tunnel, cistern and pump house works — no per-stage unit count located).
- **Unit capacity (MW)**: Not found in available sources.
- **Total installed capacity (MW)**: Not isolated for this stage alone; scheme-wide total is 119 MW (see Summary) — split between Lift-I and Lift-II not found.
- **Lift (m)**: Not isolated per stage; scheme total is 67 m.
- **Discharge capacity**: Not found in available sources.
- **Commissioned / status**: Not found in available sources. Tender references to "digital static excitation systems" for the Panchadevpad lifting station indicate at least electro-mechanical works were under procurement/execution at some point.
- **Sources**: [Wikipedia](https://en.wikipedia.org/wiki/Bheema_lift_irrigation_project); [Wikimedia Commons category](https://commons.wikimedia.org/wiki/Category:Rajiv_Bheema_Lift_irrigation_Project) (photo: "Bheema Project Stage-1 Lift, Panchadevpad.jpg")

#### Lift-II Pump House(s) — Ramanpad / Thirumalayapalli / Kothakota
- **Location**: Ookachettivagu project pondage near Ramanpad; a search-derived reference also describes "Stage-I and Stage-II pumping stations of Lift-II at Thirumalayapalli & Kothakota mandal," suggesting Lift-II itself is sub-divided into two pumping stages feeding toward Shankarasamudram tank (Kanayapally village, Kothakota mandal).
- **Number of pumping units**: Not found in available sources.
- **Unit capacity (MW)**: Not found in available sources.
- **Total installed capacity (MW)**: Not found in available sources.
- **Lift (m)**: Not found in available sources (isolated from the 67 m scheme total).
- **Discharge capacity**: Not found in available sources.
- **Commissioned / status**: Not found in available sources; Shankarasamudram tank ayacut stabilization figure of 863.6 Ha (2,134 acres) suggests at least partial functionality.
- **Sources**: search-derived summaries of [krmb.gov.in/html/project3.html](https://krmb.gov.in/html/project3.html) and related tender/PPT material (KRMB site itself was unreachable directly during this research — see note below).

## Nettempadu LIS

### Summary
- **Source — CLARIFIED**: Nettempadu (officially "Jawahar Nettempadu Lift Irrigation Scheme," JNLIS) draws **21.425 TMC from the foreshore of the Priyadarshini Jurala Project (PJP) Reservoir**, near Upperu village, Dharur mandal, Jogulamba Gadwal district — **not** from Srisailam foreshore ([irrigation.telangana.gov.in PDF, via search snippet](https://irrigation.telangana.gov.in/img/projectspdf/jnlis.pdf); [kpiasacademy.com](https://kpiasacademy.com/jawahar-nettempadu-lift-irrigation-scheme/); [Deccan Chronicle](https://www.deccanchronicle.com/nation/in-other-news/020721/nettempadu-lift-to-operationalize-two-more-pumps-to-draw-more-krishna.html), which explicitly states the lift "draws from the Jurala project"). The `reservoirs.json` note grouping Nettempadu with KLIS/PRLIS/Dindi as fed from "Srisailam foreshore" **appears to be an error** — Nettempadu's intake is at Jurala, not Srisailam. (KLIS draws from the Godavari at Kaleshwaram; PRLIS and the Handri-Neeva-style Kalwakurthy/Dindi schemes are the ones actually tied to Srisailam backwaters — Nettempadu should not be grouped with them by source.)
- **Destination**: Two named balancing reservoirs — **Gudemdoddi Balancing Reservoir (2.00 TMC)** and **Relampadu Balancing Reservoir (2.3 TMC)**, both fed via the two-stage lift structure, ultimately distributing to canal/distributary network (e.g., 99th/100th/106th distributor canals; Tatikunta Link Canal) ([search-derived](https://irrigation.telangana.gov.in/img/projectspdf/jnlis.pdf); [thehansindia.com](https://www.thehansindia.com/telangana/alampur-mla-vijayudu-urges-timely-completion-of-nettempadu-project-to-benefit-farmers-934900)).
  - **Udandapur Reservoir is NOT part of Nettempadu LIS.** Independent research (see this project's own `research/prlis-pumphouses.md`, and confirmed again here) establishes Udandapur Reservoir (FRL +629 m, ~15.91–16.03 TMC) as **Stage IV of the Palamuru-Rangareddy Lift Irrigation Scheme (PRLIS)**, fed from the Kurumurthyraya/Karvena reservoir (itself filled from Srisailam via Anjanagiri → Veeranjaneya → Venkatadri/Kurumurthyraya), located near Udandapur village, Jadcherla mandal, Mahbubnagar district. **This strongly suggests the app's `jurala -> udandapur` connection labeled "Nettempadu LIS" is a data error** and should either be removed or relabeled as part of the PRLIS chain (fed ultimately from Srisailam, not Jurala).
- **Total lift**: Not confirmed as a single figure. One search-aggregated result cited "17 MW each" per pump house and, separately, a possibly-conflated "119 MW" total power figure that is identical to Rajiv Bheema's figure — this 119 MW value for Nettempadu is **not independently corroborated** and may be a search-engine cross-contamination artifact (see Data Conflicts).
- **Command area**: **2.00 lakh acres (0.81 lakh Ha)** in the "drought prone upland areas of Gadwal and Alampur constituencies," covering **148 villages in 8 mandals**, with drinking-water provision en route ([kpiasacademy.com](https://kpiasacademy.com/jawahar-nettempadu-lift-irrigation-scheme/); [irrigation.telangana.gov.in PDF](https://irrigation.telangana.gov.in/img/projectspdf/jnlis.pdf)). District: Jogulamba Gadwal (Mahabubnagar-region, per older undivided-district framing). Estimated cost: **Rs 2,731.47 crore** (per one 2015-era source) / a 2025 government order references revised funding of **Rs 2,739 crore**.
- **Status overview**: Foundation laid 2015; project structured in two phases (Phase 1 at Upperu village, Phase 2 at Marla Veedu/Marlabeedu village, Dharur mandal). As of July 2021, only 2 of a planned 4 pumps were operational, drawing ~1,789 cusecs against a target of 2,250 cusecs with all four running. As of a 2025 government order, canal/distributor completion work (99th/100th/106th distributor canals, Tatikunta Link Canal) was still ongoing, targeting ~32,000–35,000 additional acres — indicating the scheme remains **partially complete** even though pumping has been operational in some form since at least 2021.

### Pump Houses

#### Stage I Pump House — Upperu
- **Location**: Near Upperu village, Dharur mandal, Jogulamba Gadwal district (Jurala/PJP foreshore intake).
- **Number of pumping units**: Reported as 4 planned pumps at this stage as of 2021 reporting, with only 2 operational at that time ([Deccan Chronicle](https://www.deccanchronicle.com/nation/in-other-news/020721/nettempadu-lift-to-operationalize-two-more-pumps-to-draw-more-krishna.html)). Not confirmed whether all 4 are Stage-I only or split across stages.
- **Unit capacity (MW)**: One aggregated search result cites **17 MW per pump/pump-house** — not independently confirmed against a primary document.
- **Total installed capacity (MW)**: Not found in available sources as a confirmed total.
- **Lift (m)**: Not found in available sources.
- **Discharge capacity**: Target ~2,250 cusecs at full 4-pump operation; ~1,789 cusecs achieved with 2 pumps (July 2021) ([Deccan Chronicle](https://www.deccanchronicle.com/nation/in-other-news/020721/nettempadu-lift-to-operationalize-two-more-pumps-to-draw-more-krishna.html)).
- **Commissioned / status**: Operational (partially) since at least 2021; irrigating roughly 10,000 acres as of the most recent search-derived figures.
- **Sources**: [Deccan Chronicle](https://www.deccanchronicle.com/nation/in-other-news/020721/nettempadu-lift-to-operationalize-two-more-pumps-to-draw-more-krishna.html); [irrigation.telangana.gov.in PDF](https://irrigation.telangana.gov.in/img/projectspdf/jnlis.pdf) (accessible only via search snippets — direct fetch failed, see note below)

#### Stage II Pump House — Relampadu / Marlabeedu (near Dharur)
- **Location**: Near Marla Veedu (Marlabeedu) village, Dharur mandal, Jogulamba Gadwal district; feeds the Relampadu Balancing Reservoir (2.3 TMC). A tender reference names "Unit 3 of JNLIS Stage-II pumping station near Relampadu village."
- **Number of pumping units**: At least 3 (tender references "Unit 3"); total unit count not confirmed.
- **Unit capacity (MW)**: Not found in available sources.
- **Total installed capacity (MW)**: Not found in available sources.
- **Lift (m)**: Not found in available sources.
- **Discharge capacity**: Not found in available sources (isolated from the scheme-wide figures above).
- **Commissioned / status**: Irrigating an additional ~40,000 acres per one search-derived source; overall described as "in-progress" as of the most recent (2025) government order on funding.
- **Sources**: [tendershark.com tender listing](https://www.tendershark.com/details/telangana-tender/information-technology-electronics-and-communication-department/aeeb2225-7edc-4b34-be39-b80aff8c575f); [thehansindia.com](https://www.thehansindia.com/telangana/alampur-mla-vijayudu-urges-timely-completion-of-nettempadu-project-to-benefit-farmers-934900); [telanganatribune.com](https://www.telanganatribune.com/government-approves-%E2%82%B92739-crore-for-jawahar-nettempadu-irrigation-alampur-farmers-celebrate/)

## Data conflicts / uncertainty

1. **Udandapur Reservoir misattribution (high confidence error)**: The app's `chains.json`/connections data labels a `jurala -> udandapur` edge as "Nettempadu LIS," but every source found ties Udandapur Reservoir to **PRLIS Stage IV** (fed from Kurumurthyraya, itself ultimately sourced from Srisailam), not to Nettempadu. Nettempadu's actual destinations are the Gudemdoddi and Relampadu balancing reservoirs. Recommend correcting or removing this edge/label.
2. **Nettempadu source vs. `reservoirs.json` note**: The existing note that Srisailam feeds "four major lift schemes (KLIS, PRLIS, Dindi, Nettempadu)" appears to incorrectly include Nettempadu. All primary sources found for Nettempadu describe its intake as the Jurala/PJP foreshore, consistent with `chains.json`'s general framing of Jurala feeding "the Bheema and Nettempadu lift schemes."
3. **Rajiv Bheema water allocation discrepancy**: Wikipedia states a much smaller original allocation (6.00 TMC total, 24,292 Ha CCA) than the widely-repeated 20 TMC / 203,000-acre figures used elsewhere (including `chains.json`). This likely reflects the Wikipedia article describing an earlier/smaller AIBP-era sub-component of the scheme rather than the full, later-expanded 20 TMC project. The 20 TMC / 203,000-acre figures are corroborated by more sources and match the existing `chains.json` `tmc: 20` value, so they are more likely current/correct.
4. **Nettempadu "119 MW" figure**: A search-engine-aggregated result attributed a 119 MW total power figure to Nettempadu — identical to Rajiv Bheema's well-corroborated 119 MW figure. This is very likely a cross-contamination/summarization artifact rather than an independently verified fact for Nettempadu, and should not be trusted without a primary-source citation.
5. **Per-stage MW/unit counts largely undocumented**: For both schemes, authoritative primary documents (KRMB project pages, the Telangana Irrigation Department's JNLIS PDF) could not be fetched directly during this research (see technical note below), so granular per-pump-house unit counts and MW ratings are mostly "not found in available sources" rather than confirmed numbers, aside from the single unconfirmed "17 MW per pump" data point for Nettempadu.
6. **Command area unit conversion**: Sources mix acres and hectares inconsistently (e.g., Bheema's "0.82 Lakh Ha + 0.45 Lakh Ha" vs. "111,000 + 92,000 acres" don't convert cleanly 1:1), suggesting at least one of these figures is an approximation or reflects a revised design ayacut rather than an exact unit conversion of the other.

### Technical note on source access
Several authoritative primary sources could not be fetched directly during this research: `krmb.gov.in` (Krishna River Management Board project pages for both schemes) returned connection errors (ECONNREFUSED) on every attempt, and `irrigation.telangana.gov.in/img/projectspdf/jnlis.pdf` (the official JNLIS scheme PDF) returned HTTP 404 on direct fetch and via a reader-proxy retry, despite being indexed and quoted in search snippets. All data attributed to these two sources above is therefore sourced from search-engine snippets/summaries of that content rather than a direct read of the primary document, and should be treated as somewhat less reliable than directly-fetched sources.

## Sources
- https://en.wikipedia.org/wiki/Bheema_lift_irrigation_project
- https://commons.wikimedia.org/wiki/Category:Rajiv_Bheema_Lift_irrigation_Project
- https://www.scribd.com/document/887311322/Rajiv-Bhima-Lift-Irrigation-Scheme
- https://www.scribd.com/presentation/228538058/Rajivlift-Irrigation-Scheme-Bhima
- https://indiainvestmentgrid.gov.in/opportunities/nip-project/701406
- https://krmb.gov.in/html/project3.html (indexed/quoted via search; direct fetch failed — ECONNREFUSED)
- https://krmb.gov.in/html/project2.html (indexed/quoted via search; direct fetch failed — ECONNREFUSED)
- https://irrigation.telangana.gov.in/img/projectspdf/jnlis.pdf (indexed/quoted via search; direct fetch failed — HTTP 404)
- https://kpiasacademy.com/jawahar-nettempadu-lift-irrigation-scheme/
- https://kpiasacademy.com/krishna-river-basin-irrigation-projects/
- https://www.deccanchronicle.com/nation/in-other-news/020721/nettempadu-lift-to-operationalize-two-more-pumps-to-draw-more-krishna.html
- https://www.thehansindia.com/telangana/alampur-mla-vijayudu-urges-timely-completion-of-nettempadu-project-to-benefit-farmers-934900
- https://www.telanganatribune.com/government-approves-%E2%82%B92739-crore-for-jawahar-nettempadu-irrigation-alampur-farmers-celebrate/
- https://www.tendershark.com/details/telangana-tender/information-technology-electronics-and-communication-department/aeeb2225-7edc-4b34-be39-b80aff8c575f
- https://www.telangana360.com/2025/10/irrigation-projects-in-telangana.html
- https://en.wikipedia.org/wiki/Palamuru-Rangareddy_Lift_Irrigation_Scheme
- https://en.wikipedia.org/wiki/Jurala_Project
- water-levels/research/prlis-pumphouses.md (this project's own prior research, cross-referenced to confirm Udandapur = PRLIS Stage IV, not Nettempadu)
