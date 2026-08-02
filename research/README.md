# Pump house research — index

Six parallel research passes (Aug 2026) investigating how water is actually lifted and distributed
across Telangana's major lift-irrigation schemes: who runs the pumps, what they're called, and how
much capacity they carry. Findings have been folded into `chains.json` / `reservoirs.json` and are now
surfaced on the 2D/3D maps (hover a lift connector line, open a reservoir's detail drawer, or check the
Krishna lift-schemes panel under the elevation-profile tab).

| Report | Scope |
|---|---|
| [kaleshwaram-stage1-pumphouses.md](kaleshwaram-stage1-pumphouses.md) | Medigadda → Annaram → Sundilla → Yellampally (Kaleshwaram Link-1) |
| [kaleshwaram-stage2-pumphouses.md](kaleshwaram-stage2-pumphouses.md) | Yellampally → Mid Manair → Ananthagiri → Ranganayaka Sagar → Mallannasagar → Kondapochamma Sagar, + Gouravelli branch (Kaleshwaram Link-2/3/4) |
| [klis-pumphouses.md](klis-pumphouses.md) | Kalwakurthy Lift Irrigation Scheme (Krishna basin, Srisailam-fed) |
| [prlis-pumphouses.md](prlis-pumphouses.md) | Palamuru-Rangareddy Lift Irrigation Scheme (Srisailam-fed) |
| [dindi-pumphouses.md](dindi-pumphouses.md) | Dindi Lift Irrigation Scheme (Srisailam/PRLIS-linked) |
| [bheema-nettempadu-pumphouses.md](bheema-nettempadu-pumphouses.md) | Rajiv Bheema LIS + Jawahar Nettempadu LIS (Jurala-fed) |

Each report follows the same structure: a summary, a per-pump-house breakdown (location, unit count,
unit MW, total MW, lift, discharge, status), and a "data conflicts / uncertainty" section that flags
where press/government sources disagree rather than silently picking a number. Treat pump-level figures
as cross-checked estimates, not official records — see each report's conflicts section for specifics.

## Key corrections this research made to the app's prior data

The app's `chains.json`/`reservoirs.json` had several inherited assumptions that turned out to be wrong
or incomplete. All of these are now fixed in the data files and reflected on the map:

1. **No separate "Yellampally pump house" exists.** Kaleshwaram Link-1 has exactly three pump houses —
   Lakshmi (Medigadda), Saraswathi (Annaram), Parvathi (Sundilla). Parvathi's discharge is what fills
   Yellampally reservoir; there's no fourth facility. Combined: 43 units / 1,720 MW.
2. **"Ramadugu · Kannepalli · Gandhari" was a naming error.** The real pump houses lifting Yellampally
   water into Mid Manair Dam are **Nandi** (Nandimedaram, 7×~124.5 MW) and **Gayatri** (Ramadugu/Lakshmipur,
   7×139 MW — marketed as the world's largest underground pump house). "Kannepalli" is a genuine KLIS
   pump house but sits on the separate Link-1 chain; no "Gandhari" pump house could be confirmed anywhere.
   This Yellampally→Mid Manair lift (1,844 MW) previously had **no connector line at all** on the map —
   it's now drawn.
3. **A previously-missing pump house (Markook, 6×34 MW = 204 MW)** sits between Akkaram and Kondapochamma
   Sagar — the ~61 m final lift is a two-stage sequence, not the single "Akkaram (6×27 MW)" the app modeled.
4. **Udandapur Reservoir is PRLIS Stage IV, not "Nettempadu LIS."** The app's `jurala → udandapur` map
   connection was mislabeled; Udandapur is fed from Srisailam via PRLIS's Kurumurthyraya reservoir, not
   from Jurala. The connector has been corrected to `anjanagiri → udandapur`.
5. **Dindi Lift Irrigation Scheme has no pump house of its own.** Despite the name, DLIS's own works
   (Ulpara Barrage onward) are a gravity cascade through 9 reservoirs (not 12, per the Irrigation
   Dept.'s own 2024 figures). The actual ~175 m lift from Srisailam is performed entirely by PRLIS's
   Yedula-reservoir pump houses. The map connector's flow type was changed from "lift" to "gravity."
6. **Nettempadu LIS is Jurala-sourced, not Srisailam-sourced** — the app's `reservoirs.json` incorrectly
   grouped it with the Srisailam-fed schemes (KLIS/PRLIS/Dindi). It's now a standalone entry in
   `chains.json`, sourced from the Jurala foreshore near Upperu village.

## What's still uncertain

Every report has open questions — mismatched pump/unit counts across sources, lift heights that don't
arithmetically reconcile with elevation deltas, and (for PRLIS Stage V, Rajiv Bheema, and Nettempadu)
large gaps where official per-pump-house figures simply aren't public. These are documented per-report
rather than papered over; several primary sources (KRMB project pages, CAG audit PDFs, Telangana
Irrigation Dept. project PDFs) could not be fetched directly during this research and were relied on via
search-engine snippets, which is noted where it applies.
