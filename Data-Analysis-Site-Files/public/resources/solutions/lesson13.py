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

example = pd.Series([10, 11, 12, 13, 100])
print("Mean", example.mean(), "Median", example.median())
means = df.groupby("region")["points"].mean()
fig, axes = plt.subplots(1, 2, figsize=(9, 4))
for ax in axes:
    means.plot.bar(ax=ax, rot=0)
    ax.set(xlabel="Region", ylabel="Mean points")
axes[0].set(title="Zero baseline", ylim=(0, 18))
axes[1].set(title="Truncated baseline", ylim=(12, 16))
fig.suptitle("Same fictional team data, different axes")
fig.tight_layout()
fig.savefig(OUT / "lesson13_axes.png")
plt.close(fig)
print(means)

print("Alternative list mean", pd.Series([10, 11, 12, 13, 14]).mean())

# Interpretation / indicative answer:
# Mean 29.2; median 12. Regional mean points are East 15.25, North 14.75, West 15.0. Same values
# appear in both charts; truncated bars exaggerate apparent differences.
