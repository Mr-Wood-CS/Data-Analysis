from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

df["is_flagged"] = df["status"] == "flagged"
rates = df.groupby(["area", "visited_arcade"])["is_flagged"].agg(["sum", "count", "mean"])
rates["percent"] = rates["mean"] * 100
print(rates)
rates.to_csv(OUT / "lesson16_within_area.csv")

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Compare the arcade association separately in Harbour and Hill. Retain counts and totals.
# 2. Create one chart or table that answers your planned question. Add a plain-language description.
# 3. Use the evidence log to record a result that supports your claim and one limitation or alternative explanation. Revise the claim to match the evidence.
