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
print(df.sort_values(["points_per_match", "team_id"], ascending=[False, True]).head(3))
print(df.groupby("region")["points_per_match"].agg(["count", "mean"]))
print(df[(df["points_per_match"] >= 2) & (df["training_hours"] <= 5)])
means = df.groupby("region")["points_per_match"].mean()
ax = means.plot.bar(rot=0)
ax.set(title="Fictional teams: mean points per match", xlabel="Region", ylabel="Mean points per match")
ax.set_ylim(bottom=0)
plt.tight_layout()
plt.savefig(OUT / "lesson12_sports.png")
plt.close()

# Interpretation / indicative answer:
# Top teams are T04 (2.8), T08 (2.7), T12 (2.6). T03, T07, T08, T16 and T24 meet both filter
# conditions. Regional mean points per match: East 1.525, North 1.475, West 1.5; each region has
# 8 teams. All teams played 10 matches, so totals and per-match ranking agree.
