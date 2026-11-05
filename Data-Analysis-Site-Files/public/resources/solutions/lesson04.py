from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "gaming.csv")

both = df[(df["score"] >= 80) & (df["minutes"] <= 25)]
either = df[(df["score"] >= 80) | (df["minutes"] <= 25)]
print("AND", len(both))
print(both)
print("OR", len(either))

print(df[(df["game"] == "Sky Sprint") & (df["score"] > 60)])
print(df[(df["game"] == "Sky Sprint") | (df["score"] > 60)])

# Interpretation / indicative answer:
# The demonstrated AND selects 7 records; OR selects 22. Use the printed IDs to test membership,
# not only the counts.
