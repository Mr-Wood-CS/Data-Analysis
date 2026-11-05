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

print(df[df.duplicated(keep=False)])
print(df[scores.isna()])

# Interpretation / indicative answer:
# 31 rows, 1 repeated row (P07). P02 missing score; P05 score oops; P03 minutes -5; P06 missing
# practice; P01/P04 inconsistent game case or spacing.
