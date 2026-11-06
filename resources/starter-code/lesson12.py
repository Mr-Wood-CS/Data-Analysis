from pathlib import Path
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "sports.csv")

df["points_per_match"] = df["points"] / df["played"]
print(df[["team_id", "points_per_match"]].head())

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Find the top three teams by points per match with a documented tie rule.
# 2. Compare mean points per match by region and show group sizes.
# 3. Select teams with points_per_match >= 2 and training_hours <= 5. Produce one labelled chart and a two-sentence conclusion with a limitation.
