from pathlib import Path
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "club_visits.csv")

ordered = df.sort_values("week")
ax = ordered.plot(x="week", y="visits", kind="line", marker="o", legend=False)
ax.set(title="Fictional club visits by week", xlabel="Week number", ylabel="Visits (count)")
ax.set_xticks(ordered["week"])
ax.set_ylim(bottom=0)
plt.tight_layout()
plt.savefig(OUT / "lesson10_visits.png")
plt.close()
print(ordered)

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Choose chart types for game counts, weekly visits and practice versus score. Justify each choice.
# 2. Plot visits in week order and describe the overall pattern and one decrease.
# 3. Explain why drawing a line between game categories could mislead. Discuss whether a pie would improve the game-count comparison.
