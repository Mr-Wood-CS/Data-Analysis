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

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Produce the top five scores and retain identifiers.
# 2. Rank by fewest minutes first. Explain why the largest score is not necessarily the best result for every question.
# 3. On paper, count comparisons for finding a maximum in five scores by a single scan. Explain what a full ranking provides that a maximum alone does not.
