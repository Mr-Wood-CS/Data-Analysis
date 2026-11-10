from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

print(df.head())
print("Rows", len(df), "Unique IDs", df["robot_id"].nunique())
print(df.isna().sum())
print(df["status"].value_counts())
print(df["area"].value_counts())
