from pathlib import Path
import pandas as pd

# Resolve paths from this file, so the script works from any working directory.
RESOURCES = Path(__file__).resolve().parents[1]
OUT = RESOURCES / "generated"
OUT.mkdir(exist_ok=True)
df = pd.read_csv(RESOURCES / "datasets" / "outbreak.csv")

print("Evidence check: raw dataset loaded", len(df), "records")
print("Use the checklist to rerun your own lesson 17 investigation.")

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Rerun your investigation from the raw file and compare one output with your report.
# 2. Give a two-minute paired explanation and answer one question about your code. Use the peer review sheet to give specific feedback.
# 3. Make one justified revision, submit the final files and complete the reflection. State a skill to practise next.
