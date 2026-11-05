# Lesson 7: Auditing dirty data

**Time:** 45 minutes · **Skills:** isna, duplicated and to_numeric

## Learning intention

Identify quality problems before changing data.

**Success criteria:** I can distinguish a missing value, duplicate record, invalid type and implausible value.

## Get ready

[Starter Python](resources/starters/lesson07.py) · [CSV](resources/datasets/gaming_dirty.csv) · [Data dictionary](reference/data-dictionary.md)

Open the starter in your extracted pack. Save your own copy in the same starters folder with your initials in the filename. Run it using your editor, or `python resources/starters/lesson07.py` from the pack folder. Printed results appear in the terminal; saved files go to `resources/generated/`. See [setup](setup.md) if Python cannot find Pandas. Do not edit the raw CSV.

## Lesson route

| Minutes | Activity | What to do |
| --- | --- | --- |
| 0–5 | Retrieve and predict | Why does an identifier help detect duplicates? |
| 5–13 | Model and explain | Preserve the raw file. isna detects missing values; duplicated detects repeats. A nonnumeric word may make an entire numeric column load as text. to_numeric(errors="coerce") creates missing values for entries it cannot parse. A negative duration can be numeric but invalid for this context. |
| 13–23 | Guided practice | Trace the model code, predict one output, then run it. Discuss the hinge question before progressing. |
| 23–38 | Apply independently | Complete the three core tasks. Save code and evidence; use support or stretch as appropriate. |
| 38–43 | Explain and review | Compare one result with a partner and justify a method or limitation. |
| 43–45 | Exit check | Name one validation rule that depends on the meaning of a field. |

## Key idea

Preserve the raw file. isna detects missing values; duplicated detects repeats. A nonnumeric word may make an entire numeric column load as text. to_numeric(errors="coerce") creates missing values for entries it cannot parse. A negative duration can be numeric but invalid for this context.

## Worked model

The starter has already loaded `gaming_dirty.csv` as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starters also import `plt`.

```python
print("Missing by field")
print(df.isna().sum())
print("Repeated rows", df.duplicated().sum())
scores = pd.to_numeric(df["score"], errors="coerce")
print("Unusable scores", scores.isna().sum())
print(df[df["minutes"] < 0])
print(df["game"].unique())
```

Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.

## Your investigation

1. Create an audit table with problem, affected identifier, evidence and proposed action.

2. Find repeated rows and missing values. Do not count a duplicated identifier as a new player.

3. Find the text score, negative duration and inconsistent game labels. Explain which problems isna() alone misses.

## Support

Provide problem labels and ask pupils to match them to P01–P07. Keep the raw and proposed values side by side.

## Stretch

Explain why two records with the same ID but different values require investigation rather than automatic removal.

## Stop and check

Will isna() flag the word oops as missing before conversion?

## Save your evidence

Save your edited script and a short Markdown note containing your question, one result with units or denominator, an explanation of a key line, and any help used. For charts, include the PNG and a text description. Keep numerical results in your note rather than relying only on a screenshot.

## Exit ticket

Name one validation rule that depends on the meaning of a field.

