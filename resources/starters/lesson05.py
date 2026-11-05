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

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Predict which game is most common, then check all records rather than head().
# 2. Report the count and percentage for each game. State that the denominator is 30 players.
# 3. A poster says: Scotland’s favourite game is Sky Sprint. Rewrite the claim using only evidence in this table.
