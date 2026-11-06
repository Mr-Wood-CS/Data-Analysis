# Python setup

Extract the ZIP before running a lesson. Each lesson folder includes its own student starter and the CSV files it uses.

You need Python 3 and the Pandas library. Lessons that make charts also use Matplotlib. Install both with:

```text
py -m pip install pandas matplotlib
```

On macOS or Linux, use `python3 -m pip install pandas matplotlib` if `python` is not available. From the lesson folder, run its starter, for example:

```text
py resources/starter-code/lesson01.py
```

The starter reads its CSV from that lesson's `resources/datasets` folder and writes any output to `resources/generated`. Keep the folder structure together. Do not edit the original CSVs.
