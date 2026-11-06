# Lesson 14: The robot outbreak begins

**Time:** 45 minutes · **Skills:** New information model, questions and investigation planning

## Learning intention

Plan a testable investigation of a fictional robot fault.

**Success criteria:** I can define the unit of observation, frame a question and record a plan before testing it.

## Get ready

[Starter Python](resources/starter-code/lesson14.py) · [CSV](resources/datasets/outbreak.csv) · [Data dictionary](reference/data-dictionary.md)

Open the starter in your extracted pack. Save your own copy in the same starter-code folder with your initials in the filename. Run it using your editor, or `python resources/starter-code/lesson14.py` from the pack folder. Printed results appear in the terminal; saved files go to `resources/generated/`. See [setup](setup.md) if Python cannot find Pandas. Do not edit the raw CSV.

## Lesson route

| Minutes | Activity | What to do |
| --- | --- | --- |
| 0–5 | Retrieve and predict | What should you inspect before trusting a dataset? |
| 5–13 | Model and explain | Story: a fictional island robot club has reports of a harmless display glitch, labelled flagged. Each robot appears once. This is a convenience sample with no population totals. day is the report day, not the day a fault started. visited_arcade records a reported visit, not a measured cause. The activity is a mystery about robots, not health advice. |
| 13–23 | Guided practice | Trace the model code, predict one output, then run it. Discuss the hinge question before progressing. |
| 23–38 | Apply independently | Complete the three core tasks. Save code and evidence; use support or stretch as appropriate. |
| 38–43 | Explain and review | Compare one result with a partner and justify a method or limitation. |
| 43–45 | Exit check | State a question the file can answer and one it cannot. |

## Key idea

Story: a fictional island robot club has reports of a harmless display glitch, labelled flagged. Each robot appears once. This is a convenience sample with no population totals. day is the report day, not the day a fault started. visited_arcade records a reported visit, not a measured cause. The activity is a mystery about robots, not health advice.

## Worked model

The starter has already loaded `outbreak.csv` as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starter scripts also import `plt`.

```python
print(df.head())
print("Rows", len(df), "Unique IDs", df["robot_id"].nunique())
print(df.isna().sum())
print(df["status"].value_counts())
print(df["area"].value_counts())
```

Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.

## Your investigation

1. Use the data dictionary to describe one record and the meaning of flagged.

2. Audit identifiers, missing values and category labels. Record what the file does not tell you.

3. Complete the investigation planner with a question comparing status and arcade visits, a proposed calculation, and a limitation. Predict a result before calculating.

## Support

Offer: In this sample, is the proportion flagged different for robots that ___? Pair a reader and a code driver.

## Stretch

Plan an area-by-area comparison and explain why it could change the overall interpretation.

## Stop and check

Does day record when the glitch started? How do you know?

## Save your evidence

Save your edited script and a short Markdown note containing your question, one result with units or denominator, an explanation of a key line, and any help used. For charts, include the PNG and a text description. Keep numerical results in your note rather than relying only on a screenshot.

## Exit ticket

State a question the file can answer and one it cannot.

