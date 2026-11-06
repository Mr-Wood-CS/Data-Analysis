# Lesson 11: Looking for relationships

**Time:** 45 minutes · **Skills:** Scatter charts and cautious interpretation

## Learning intention

Describe an association without claiming a cause.

**Success criteria:** I can plot paired numeric values, describe the visible pattern and suggest another explanation.

## Get ready

[Starter Python](resources/starter-code/lesson11.py) · [CSV](resources/datasets/gaming.csv) · [Data dictionary](reference/data-dictionary.md)

Open the starter in your extracted pack. Save your own copy in the same starter-code folder with your initials in the filename. Run it using your editor, or `python resources/starter-code/lesson11.py` from the pack folder. Printed results appear in the terminal; saved files go to `resources/generated/`. See [setup](setup.md) if Python cannot find Pandas. Do not edit the raw CSV.

## Lesson route

| Minutes | Activity | What to do |
| --- | --- | --- |
| 0–5 | Retrieve and predict | Which chart suits two numeric fields from the same records? |
| 5–13 | Model and explain | Each scatter point uses the practice_minutes and score from one record. Do not sort each column separately because that destroys the pairing. A visible association is not proof that one variable causes another. These scores are synthetic and should not support claims about real gaming or learners. |
| 13–23 | Guided practice | Trace the model code, predict one output, then run it. Discuss the hinge question before progressing. |
| 23–38 | Apply independently | Complete the three core tasks. Save code and evidence; use support or stretch as appropriate. |
| 38–43 | Explain and review | Compare one result with a partner and justify a method or limitation. |
| 43–45 | Exit check | Rewrite: This graph proves practice causes high scores. |

## Key idea

Each scatter point uses the practice_minutes and score from one record. Do not sort each column separately because that destroys the pairing. A visible association is not proof that one variable causes another. These scores are synthetic and should not support claims about real gaming or learners.

## Worked model

The starter has already loaded `gaming.csv` as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starter scripts also import `plt`.

```python
ax = df.plot.scatter(x="practice_minutes", y="score", color="darkgreen")
ax.set(title="Practice and score: fictional players", xlabel="Practice (minutes)", ylabel="Score (points)")
plt.tight_layout()
plt.savefig(OUT / "lesson11_scatter.png")
plt.close()
print(df[["practice_minutes", "score"]].head())
```

Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.

## Your investigation

1. Plot practice_minutes versus score with units.

2. Describe direction, spread and unusual points. Use appears rather than proves.

3. Suggest two unrecorded factors that might affect a real score. Explain why increasing practice cannot be guaranteed to increase score from this table.

## Support

Use three paired paper records to place points. Supply a sentence frame for pattern, evidence and limitation.

## Stretch

Compare the chart within one game category. Explain whether a numerical correlation would settle causation (it would not).

## Stop and check

Can you shuffle the score column independently and keep the same evidence?

## Save your evidence

Save your edited script and a short Markdown note containing your question, one result with units or denominator, an explanation of a key line, and any help used. For charts, include the PNG and a text description. Keep numerical results in your note rather than relying only on a screenshot.

## Exit ticket

Rewrite: This graph proves practice causes high scores.

