from pathlib import Path
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

df["is_flagged"] = df["status"] == "flagged"
table = df.groupby("visited_arcade")["is_flagged"].agg(["sum", "count", "mean"])
table["percent"] = table["mean"] * 100
print(table)
table.to_csv(OUT / "lesson17_evidence.csv")
ax = table["percent"].plot.bar(rot=0)
ax.set(title="Fictional robot sample: flagged by arcade visit", xlabel="Reported arcade visit", ylabel="Flagged robots (%)", ylim=(0, 100))
plt.tight_layout()
plt.savefig(OUT / "lesson17_investigation.png")
plt.close()
print("Sample association only; convenience sampling and other factors limit interpretation.")

# Interpretation / indicative answer:
# Open task: use the rubric rather than a single answer. The exemplar compares reported arcade
# visits (52% versus about 23.3%) and explicitly limits the claim to the sample.
