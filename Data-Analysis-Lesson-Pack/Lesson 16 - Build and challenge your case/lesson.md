# Lesson 16: Build and challenge your case

**Time:** 45 minutes · **Skills:** Reproducible analysis and sensitivity checks

## Learning intention

Test whether a conclusion survives a relevant alternative analysis.

**Success criteria:** I can reproduce a result, compare it within areas and revise my claim.

## Get ready

[Starter Python](resources/starters/lesson16.py) · [CSV](resources/datasets/outbreak.csv) · [Data dictionary](reference/data-dictionary.md)

Open the starter in your extracted pack. Save your own copy in the same starters folder with your initials in the filename. Run it using your editor, or `python resources/starters/lesson16.py` from the pack folder. Printed results appear in the terminal; saved files go to `resources/generated/`. See [setup](setup.md) if Python cannot find Pandas. Do not edit the raw CSV.

## Lesson route

| Minutes | Activity | What to do |
| --- | --- | --- |
| 0–5 | Retrieve and predict | State the numerator and denominator for the arcade-yes rate. |
| 5–13 | Model and explain | A good investigation tries to disprove its first idea. Compare within areas and consider unequal sampling. Record choices, keep inconvenient results and restart the script from raw data. A second analysis is useful when it challenges a limitation, not just when it makes another graph. |
| 13–23 | Guided practice | Trace the model code, predict one output, then run it. Discuss the hinge question before progressing. |
| 23–38 | Apply independently | Complete the three core tasks. Save code and evidence; use support or stretch as appropriate. |
| 38–43 | Explain and review | Compare one result with a partner and justify a method or limitation. |
| 43–45 | Exit check | State what evidence would make you change your mind. |

## Key idea

A good investigation tries to disprove its first idea. Compare within areas and consider unequal sampling. Record choices, keep inconvenient results and restart the script from raw data. A second analysis is useful when it challenges a limitation, not just when it makes another graph.

## Worked model

The starter has already loaded `outbreak.csv` as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starters also import `plt`.

```python
df["is_flagged"] = df["status"] == "flagged"
rates = df.groupby(["area", "visited_arcade"])["is_flagged"].agg(["sum", "count", "mean"])
rates["percent"] = rates["mean"] * 100
print(rates)
rates.to_csv(OUT / "lesson16_within_area.csv")
```

Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.

## Your investigation

1. Compare the arcade association separately in Harbour and Hill. Retain counts and totals.

2. Create one chart or table that answers your planned question. Add a plain-language description.

3. Use the evidence log to record a result that supports your claim and one limitation or alternative explanation. Revise the claim to match the evidence.

## Support

Provide a four-row area/exposure table and conference with the pupil about one clear claim.

## Stretch

Explain why even within-area comparisons cannot rule out unmeasured differences. Suggest an ethical additional data collection plan using fictional machines.

## Stop and check

If a pattern appears in both areas, have we proved the arcade caused the glitch?

## Save your evidence

Save your edited script and a short Markdown note containing your question, one result with units or denominator, an explanation of a key line, and any help used. For charts, include the PNG and a text description. Keep numerical results in your note rather than relying only on a screenshot.

## Exit ticket

State what evidence would make you change your mind.

