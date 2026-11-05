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

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Use the data dictionary to describe one record and the meaning of flagged.
# 2. Audit identifiers, missing values and category labels. Record what the file does not tell you.
# 3. Complete the investigation planner with a question comparing status and arcade visits, a proposed calculation, and a limitation. Predict a result before calculating.
