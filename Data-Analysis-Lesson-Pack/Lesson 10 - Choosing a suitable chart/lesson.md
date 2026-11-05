# Lesson 10: Choosing a suitable chart

**Time:** 45 minutes · **Skills:** Line charts, ordered data and chart selection

## Learning intention

Choose a chart that matches the structure and question.

**Success criteria:** I can explain why ordered weeks suit a line chart and unordered categories usually suit bars.

## Get ready

[Starter Python](resources/starters/lesson10.py) · [CSV](resources/datasets/club_visits.csv) · [Data dictionary](reference/data-dictionary.md)

Open the starter in your extracted pack. Save your own copy in the same starters folder with your initials in the filename. Run it using your editor, or `python resources/starters/lesson10.py` from the pack folder. Printed results appear in the terminal; saved files go to `resources/generated/`. See [setup](setup.md) if Python cannot find Pandas. Do not edit the raw CSV.

## Lesson route

| Minutes | Activity | What to do |
| --- | --- | --- |
| 0–5 | Retrieve and predict | What makes a bar chart label useful? |
| 5–13 | Model and explain | A line suggests an ordered progression. Week is an ordered measurement in this dataset. A pie chart is only a possible choice for mutually exclusive parts of one whole; several similar slices are hard to compare. Use bars for game counts, lines for visits across weeks and scatter for two numeric measurements. |
| 13–23 | Guided practice | Trace the model code, predict one output, then run it. Discuss the hinge question before progressing. |
| 23–38 | Apply independently | Complete the three core tasks. Save code and evidence; use support or stretch as appropriate. |
| 38–43 | Explain and review | Compare one result with a partner and justify a method or limitation. |
| 43–45 | Exit check | Give one reason to use a line chart and one reason to avoid it. |

## Key idea

A line suggests an ordered progression. Week is an ordered measurement in this dataset. A pie chart is only a possible choice for mutually exclusive parts of one whole; several similar slices are hard to compare. Use bars for game counts, lines for visits across weeks and scatter for two numeric measurements.

## Worked model

The starter has already loaded `club_visits.csv` as `df`, imported Pandas as `pd`, and defined the output folder `OUT`. Chart starters also import `plt`.

```python
ordered = df.sort_values("week")
ax = ordered.plot(x="week", y="visits", kind="line", marker="o", legend=False)
ax.set(title="Fictional club visits by week", xlabel="Week number", ylabel="Visits (count)")
ax.set_xticks(ordered["week"])
ax.set_ylim(bottom=0)
plt.tight_layout()
plt.savefig(OUT / "lesson10_visits.png")
plt.close()
print(ordered)
```

Before running: predict one output. After running: explain one line to your partner. Python field names and game labels must match exactly.

## Your investigation

1. Choose chart types for game counts, weekly visits and practice versus score. Justify each choice.

2. Plot visits in week order and describe the overall pattern and one decrease.

3. Explain why drawing a line between game categories could mislead. Discuss whether a pie would improve the game-count comparison.

## Support

Supply three labelled chart sketches and ask pupils to match them to questions.

## Stretch

Calculate each weekly change with diff(). Explain why the first change is missing.

## Stop and check

If CSV rows arrive in reverse order, should we plot them in that order?

## Save your evidence

Save your edited script and a short Markdown note containing your question, one result with units or denominator, an explanation of a key line, and any help used. For charts, include the PNG and a text description. Keep numerical results in your note rather than relying only on a screenshot.

## Exit ticket

Give one reason to use a line chart and one reason to avoid it.

