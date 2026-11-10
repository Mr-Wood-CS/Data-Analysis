from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

ranked = df.sort_values(["score", "player_id"], ascending=[False, True])
print(ranked[["player_id", "score"]].head(5))
print("Maximum without ranking", df["score"].max())
