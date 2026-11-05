from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

mask = df["score"] > 80
print(mask.head())
selected = df[mask]
print(selected[["player_id", "score"]])
print("Records", len(selected))

print(df[df["score"] >= 80][["player_id", "score"]])
print(df[df["game"] == "Block Quest"])
print("Below 20 minutes", len(df[df["minutes"] < 20]))

# Interpretation / indicative answer:
# score > 80 selects 10 records; >= 80 selects 11. Block Quest has 10 records. minutes < 20
# selects 9.
