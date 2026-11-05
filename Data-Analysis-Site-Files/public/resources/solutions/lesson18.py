from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

print("Evidence check: raw dataset loaded", len(df), "records")
print("Use the checklist to rerun your own lesson 17 investigation.")

# Interpretation / indicative answer:
# Open task. Teacher checks code explanation, reproducibility, correct units/denominators and a
# specific reflection. No universal conclusion is required.
