from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming_dirty.csv")

print("Missing by field")
print(df.isna().sum())
print("Repeated rows", df.duplicated().sum())
scores = pd.to_numeric(df["score"], errors="coerce")
print("Unusable scores", scores.isna().sum())
print(df[df["minutes"] < 0])
print(df["game"].unique())
