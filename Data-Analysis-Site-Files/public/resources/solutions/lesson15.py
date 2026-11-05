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

print(df.groupby("area")["is_flagged"].agg(["sum", "count", "mean"]))

# Interpretation / indicative answer:
# Arcade yes: 26/50 = 52%; no: 7/30 ≈ 23.3%. Harbour: 30/60 = 50%; Hill: 3/20 = 15%. These are
# sample associations, not causal estimates.
