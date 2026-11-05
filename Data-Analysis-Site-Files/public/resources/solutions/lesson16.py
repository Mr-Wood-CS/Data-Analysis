from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

df["is_flagged"] = df["status"] == "flagged"
rates = df.groupby(["area", "visited_arcade"])["is_flagged"].agg(["sum", "count", "mean"])
rates["percent"] = rates["mean"] * 100
print(rates)
rates.to_csv(OUT / "lesson16_within_area.csv")

# Interpretation / indicative answer:
# Harbour yes 24/40 = 60%, no 6/20 = 30%; Hill yes 2/10 = 20%, no 1/10 = 10%. Pattern persists
# but sample design and other factors prevent causal conclusions.
