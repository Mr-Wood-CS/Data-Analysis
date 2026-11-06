from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

both = df[(df["score"] >= 80) & (df["minutes"] <= 25)]
either = df[(df["score"] >= 80) | (df["minutes"] <= 25)]
print("AND", len(both))
print(both)
print("OR", len(either))

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Draw a four-case truth table for score >= 80 and minutes <= 25.
# 2. Run both filters. Explain why every AND result must appear in the OR result.
# 3. Find Sky Sprint records with score above 60, then change the condition to OR and explain the extra rows.
