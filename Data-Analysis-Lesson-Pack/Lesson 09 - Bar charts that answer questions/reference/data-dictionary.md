# Data dictionary

The CSVs are fictional teaching datasets. Field descriptions below follow the lesson wording and field names. Use the lesson prompts to consider what each field can and cannot establish.

## gaming.csv and gaming_dirty.csv

| Field | Description |
| --- | --- |
| `player_id` | Identifier for a fictional player record. |
| `game` | Game category recorded for the player. |
| `score` | Recorded score. |
| `minutes` | Recorded time in minutes. |
| `sessions` | Number of sessions recorded. |
| `practice_minutes` | Recorded practice time in minutes. |

`gaming_dirty.csv` is deliberately imperfect and is intended for auditing and cleaning practice.

## club_visits.csv

| Field | Description |
| --- | --- |
| `week` | Week for the observation. |
| `visits` | Number of visits recorded for that week. |

## sports.csv

| Field | Description |
| --- | --- |
| `team_id` | Identifier for a fictional team record. |
| `region` | Region category for the team. |
| `played` | Number of games played. |
| `points` | Points recorded. |
| `goals` | Goals recorded. |
| `training_hours` | Recorded training time in hours. |

## outbreak.csv

| Field | Description |
| --- | --- |
| `robot_id` | Identifier for a fictional robot record. |
| `area` | Area category. |
| `visited_arcade` | Whether an arcade visit is recorded. |
| `status` | Recorded robot status, including the `flagged` category used in the lessons. |
| `day` | Day value recorded for the observation. |
| `temperature_c` | Recorded temperature in degrees Celsius. |
| `model` | Robot model category. |
