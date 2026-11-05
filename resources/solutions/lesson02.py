from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

print(df[["player_id", "score"]].head())
print("Minimum", df["score"].min())
print("Maximum", df["score"].max())
print("Mean", df["score"].mean())

print(df[["player_id", "minutes"]].head())
print("Mean minutes", df["minutes"].mean())

# Interpretation / indicative answer:
# Score minimum 23, maximum 110, mean 66.5 points; mean minutes 24.5. The maximum operation
# returns a value, not a row.
