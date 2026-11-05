from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming_dirty.csv")

clean = df.drop_duplicates().copy()
clean["game"] = clean["game"].str.strip().str.title()
for field in ["score", "minutes", "sessions", "practice_minutes"]:
    clean[field] = pd.to_numeric(clean[field], errors="coerce")
clean.loc[clean["minutes"] < 0, "minutes"] = float("nan")
clean.to_csv(OUT / "gaming_cleaned.csv", index=False)
print(clean.isna().sum())
print("Rows", len(clean))
print("Known-score mean", clean["score"].mean())
print("Mean after median fill", clean["score"].fillna(clean["score"].median()).mean())

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Implement the stated policy and save a cleaning log with before/after counts.
# 2. Compare the mean using known scores with the mean after median filling. Explain why neither restores the missing observations.
# 3. Try dropna(subset=["score"]) on a copy. Report how many rows remain and which questions that copy could still answer.
