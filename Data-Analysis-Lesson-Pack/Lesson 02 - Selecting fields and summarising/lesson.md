# Lesson 2: Selecting fields and summarising

**Time:** 45 minutes · **Skills:** Series, column selection, min, max and mean

## Learning intention

Select numeric fields and calculate a summary with its unit.

**Success criteria:** I can calculate minimum, maximum and mean score, then explain the difference between a score and a player.

## Get ready

[Starter Python](resources/starters/lesson02.py) · [CSV](resources/datasets/gaming.csv) · [Data dictionary](reference/data-dictionary.md)

Open the starter in your extracted pack. Save your own copy in the same starters folder with your initials in the filename. Run it using your editor, or `python resources/starters/lesson02.py` from the pack folder. Printed results appear in the terminal; saved files go to `resources/generated/`. See [setup](setup.md) if Python cannot find Pandas. Do not edit the raw CSV.

## Lesson route

| Minutes | Activity | What to do |
| --- | --- | --- |
| 0–5 | Retrieve and predict | What does a record represent? Why might the first five records be unrepresentative? |
| 5–13 | Model and explain | df["score"] selects a Series. df[["player_id", "score"]] selects a smaller table. Model brackets and quoted field names. A mean is the sum divided by the number of non-missing values. A maximum score is a number; it does not identify its owner. |
| 13–23 | Guided practice | Trace the model code, predict one output, then run it. Discuss the hinge question before progressing. |
| 23–38 | Apply independently | Complete the three core tasks. Save code and evidence; use support or stretch as appropriate. |
| 38–43 | Explain and review | Compare one result with a partner and justify a method or limitation. |
| 43–45 | Exit check | Explain one difference between selecting a column and summarising it. |

## Key idea

df["score"] selects a Series. df[["player_id", "score"]] selects a smaller table. Model brackets and quoted field names. A mean is the sum divided by the number of non-missing values. A maximum score is a number; it does not identify its owner.

## Worked model

The starter has already loaded `gaming.csv` as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starters also import `plt`.

```python
print(df[["player_id", "score"]].head())
print("Minimum", df["score"].min())
print("Maximum", df["score"].max())
print("Mean", df["score"].mean())
```

Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.

## Your investigation

1. Display player_id and minutes only.

2. Calculate minimum, maximum and mean score. Label the results as points.

3. Calculate mean minutes and write a sentence explaining what the average describes. Explain why a typical player might differ from the mean.

## Support

Supply a field-name bank and model df["minutes"].mean(). Calculate a three-number mean on paper first.

## Stretch

Calculate the median score and compare it with the mean. Explain why neither gives the player identifier.

## Stop and check

Will df["score"].max() tell us which player has that score? Justify.

## Save your evidence

Save your edited script and a short Markdown note containing your question, one result with units or denominator, an explanation of a key line, and any help used. For charts, include the PNG and a text description. Keep numerical results in your note rather than relying only on a screenshot.

## Exit ticket

Explain one difference between selecting a column and summarising it.

