import re

# Read the entire file
with open('ap1-practice-exam-mcq-pool-1.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match jpegDiagram: ` followed by SVG and closing `
pattern = r'jpegDiagram:\s*`\s*<svg\b.*?</svg>\s*`'

# Find all matches first to count them
matches = re.findall(pattern, content, re.DOTALL)
print(f"Found {len(matches)} matches to replace")

# Replace with counter
counter = [0]
def replacer(match):
    counter[0] += 1
    return f'jpegDiagram: `<img src="./images/mcq-diagram-{counter[0]}.jpg" alt="MCQ Diagram {counter[0]}" style="display:block; margin:auto; max-width:300px; height:auto;" />`'

# Do the replacement
new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

# Check if anything changed
if len(new_content) != len(content):
    print(f"Content changed. Replaced {counter[0]} blocks. Saving file...")
    with open('ap1-practice-exam-mcq-pool-1.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("File saved successfully")
else:
    print("No changes made - pattern did not match")
    
# Verify by counting <svg in new file
svg_count = new_content.count('<svg')
print(f"SVG count in result: {svg_count}")
