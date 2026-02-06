import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

console.log("Starting search...");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, 'src/data/exercises.json');

try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    console.log(`Loaded ${data.length} exercises.`);

    const targets = [
        "Air Squat", "Bodyweight Squat", "Squat", "Lunge", "Step Up",
        "Glute Bridge", "Bridge", "Calf Raise", "Chair Squat"
    ];

    const results = {};

    targets.forEach(target => {
        // Find first match that contains the target string
        const match = data.find(e => e.name.toLowerCase().includes(target.toLowerCase()));
        if (match) {
            results[target] = match.id;
        } else {
            results[target] = "NOT_FOUND";
        }
    });

    console.log(JSON.stringify(results, null, 2));

} catch (error) {
    console.error("Error:", error);
}
