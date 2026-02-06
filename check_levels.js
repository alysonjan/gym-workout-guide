import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { routine } from './src/data/routine.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/exercises.json'), 'utf8'));

// Extract all IDs from the routine
const routineIds = [];
Object.values(routine).forEach(day => {
    day.exercises.forEach(ex => routineIds.push(ex.id));
});

console.log("Checking difficulty levels for current routine:");

routineIds.forEach(id => {
    const match = data.find(e => e.id === id);
    if (match) {
        console.log(`[${match.level}] ${match.name} (${id})`);
    } else {
        console.log(`[UNKNOWN] ID not found: ${id}`);
    }
});
