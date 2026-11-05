from pathlib import Path
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

counts = df["game"].value_counts().sort_index()
ax = counts.plot.bar(color="steelblue", rot=15)
ax.set(title="Games in the fictional club sample", xlabel="Game", ylabel="Players (count)")
ax.set_ylim(bottom=0)
plt.tight_layout()
plt.savefig(OUT / "lesson09_games.png")
plt.close()
print(counts)

# Interpretation / indicative answer:
# All three bars have height 10. The chart shows sample category frequency, not Scottish
# popularity or game quality.
