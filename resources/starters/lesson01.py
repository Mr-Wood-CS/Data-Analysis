from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

print(df.head())
print(df.shape)
print(df.columns.tolist())

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Predict what head() will show, then run the starter. Identify the first player and the first game.
# 2. Find the number of records and fields using shape. Explain why the header is not a player record.
# 3. Write two questions the table could answer and one it cannot answer. Name the fields needed for each answerable question.
