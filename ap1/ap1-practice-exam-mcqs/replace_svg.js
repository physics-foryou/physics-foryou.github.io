const fs = require('fs');

const filePath = 'ap1-practice-exam-mcq-pool-1.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Pattern to match jpegDiagram: ` followed by SVG and closing `
const pattern = /jpegDiagram:\s*`\s*<svg\b[\s\S]*?<\/svg>\s*`/g;

let counter = 0;
const newContent = content.replace(pattern, (match) => {
    counter++;
    return `jpegDiagram: \`<img src="./images/mcq-diagram-${counter}.jpg" alt="MCQ Diagram ${counter}" style="display:block; margin:auto; max-width:300px; height:auto;" />\``;
});

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log(`Replaced ${counter} SVG blocks`);

// Verify
const svgCount = newContent.match(/<svg/g);
console.log(`Remaining SVG tags: ${svgCount ? svgCount.length : 0}`);
