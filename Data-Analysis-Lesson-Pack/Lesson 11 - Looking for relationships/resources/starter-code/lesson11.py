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
