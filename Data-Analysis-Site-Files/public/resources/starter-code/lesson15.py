from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

df["is_flagged"] = df["status"] == "flagged"
summary = df.groupby("visited_arcade")["is_flagged"].agg(["sum", "count", "mean"])
summary["percent"] = summary["mean"] * 100
print(summary)
print(pd.crosstab(df["area"], df["status"]))
summary.to_csv(OUT / "lesson15_rates.csv")

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Calculate flagged count and total for arcade yes and no, then calculate percentages.
# 2. Compare flagged counts by area with percentages by area. Explain why the counts alone overstate the difference.
# 3. Write one supported association and one statement the table cannot justify. Keep the denominators in your evidence.
