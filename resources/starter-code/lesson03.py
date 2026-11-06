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

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Predict whether a score of exactly 80 is selected, then test your explanation against the table.
# 2. Select players scoring at least 80. Display player_id and score.
# 3. Select the records for Block Quest. Count them and explain the comparison operator.
