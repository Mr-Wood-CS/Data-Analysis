from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

counts = df["game"].value_counts()
print(counts)
print("Percent", df["game"].value_counts(normalize=True).mul(100).round(1))

print(df[df["score"] >= 80]["game"].value_counts())

# Interpretation / indicative answer:
# Each game has 10 players, one third of the 30 records (33.3% rounded). No game is uniquely most
# common.
