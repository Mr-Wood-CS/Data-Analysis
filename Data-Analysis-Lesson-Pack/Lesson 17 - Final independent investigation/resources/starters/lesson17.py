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

print(df.head(3))
print("Choose a question; replace this preview with your analysis.")

# YOUR TASKS: add your analysis below. The preview above is deliberately runnable.
# 1. Use the final brief and planner to define a question and identify required fields.
# 2. Adapt your starter to create two relevant calculations, one filter or comparison, and a labelled chart. Check a result manually.
# 3. Draft the report using the template. Explain a limitation and record any help. Keep files ready for a fresh run next lesson.
