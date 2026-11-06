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

ax = df.plot.scatter(x="practice_minutes", y="score", color="darkgreen")
ax.set(title="Practice and score: fictional players", xlabel="Practice (minutes)", ylabel="Score (points)")
plt.tight_layout()
plt.savefig(OUT / "lesson11_scatter.png")
plt.close()
print(df[["practice_minutes", "score"]].head())

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Plot practice_minutes versus score with units.
# 2. Describe direction, spread and unusual points. Use appears rather than proves.
# 3. Suggest two unrecorded factors that might affect a real score. Explain why increasing practice cannot be guaranteed to increase score from this table.
