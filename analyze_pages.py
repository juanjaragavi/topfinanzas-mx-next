import os
import re
import json

files = [
    "app/soluciones-financieras/prestamos-lime/page.tsx",
    "app/soluciones-financieras/prestamos-personales/page.tsx",
    "app/soluciones-financieras/prestamos-personales-credilikeme/page.tsx",
    "app/soluciones-financieras/prestamos-personales-rapidos-creditea/page.tsx",
    "app/soluciones-financieras/prestamos-prestadero/page.tsx",
    "app/soluciones-financieras/prestamos-soy-claire/page.tsx",
    "app/soluciones-financieras/prestamos-tala/page.tsx",
    "app/soluciones-financieras/prestamos-vivus-mexico/page.tsx",
    "app/soluciones-financieras/requisitos-de-la-tarjeta-vexi-american-express/page.tsx",
    "app/soluciones-financieras/requisitos-gold-card-american-express-aeromexico/page.tsx"
]

keywords = [
    "cashback",
    "sin anualidad",
    "historial crediticio",
    "score crediticio",
    "CAT",
    "deuda",
    "presupuesto",
    "fondo de emergencia",
    "interés compuesto"
]

# Regex for detecting links around a position
# Heuristics for links in TSX/Next.js
link_patterns = [
    r'<Link\s+[^>]*>.*?</Link>',    # <Link ...>...</Link>
    r'<a\s+[^>]*>.*?</a>',          # <a ...>...</a>
    r'\[.*?\]\(.*?\)'               # [text](url)
]

def is_inside_link(content, start_index, end_index):
    # Search for links and see if ranges overlap
    # We scan the whole file for links which might be overkill but safe
    # Limited scan window could be better but regex needs context
    for pattern in link_patterns:
        # DOTALL allows dot to match newlines (multiline links)
        for match in re.finditer(pattern, content, re.DOTALL | re.IGNORECASE):
            if match.start() <= start_index and match.end() >= end_index:
                return True
    return False

results = {}

for filepath in files:
    full_path = os.path.join(os.getcwd(), filepath)
    if not os.path.exists(full_path):
        results[filepath] = {"error": "File not found"}
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Try to find the start of the component to skip imports and metadata
    start_search_idx = 0
    match_component = re.search(r'export\s+default\s+function', content)
    if match_component:
        # Start searching from the beginning of the component definition
        # Metadata usually resides before this.
        start_search_idx = match_component.start()
        
    page_results = []
    
    # Check each keyword
    for keyword in keywords:
        # Keyword pattern
        if keyword == "CAT":
             # Case sensitive for CAT to avoid "cat" animal or just substr
             pattern = r'\bCAT\b'
             flags = 0
        else:
             pattern = r'\b' + re.escape(keyword) + r'\b'
             flags = re.IGNORECASE
             
        for match in re.finditer(pattern, content, flags):
            if match.start() < start_search_idx:
                continue
                
            if is_inside_link(content, match.start(), match.end()):
                continue
                
            # Get line number
            line_num = content.count('\n', 0, match.start()) + 1
            
            # Get context (line content)
            # Find start of line
            line_start = content.rfind('\n', 0, match.start()) + 1
            if line_start == -1: line_start = 0
            
            # Find end of line
            line_end = content.find('\n', match.end())
            if line_end == -1: line_end = len(content)
            
            line_content = content[line_start:line_end].strip()
            
            # Basic Comment filtering
            if line_content.startswith('//') or line_content.startswith('/*') or line_content.startswith('*'):
                continue
            
            # Add to results
            page_results.append({
                "keyword": keyword,
                "line": line_num,
                "context": line_content
            })
            
    # Sort results by line number
    page_results.sort(key=lambda x: x['line'])
    results[filepath] = page_results

# Save to a file so we can read it, or print it. 
# Printing might be truncated if too large, but for 10 files it should be okay.
# Better save to a json file.
with open('analysis_report.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Analysis complete. Saved to analysis_report.json")
