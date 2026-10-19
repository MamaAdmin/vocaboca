"""Re-port the figure drawing code from the game into src/art/character.ts (1:1 copy)."""
import re
game = open(r'C:\dev\REA\vokaboka\vokaboka.html', encoding='utf-8').read().split('\n')
start = next(i for i, l in enumerate(game) if l.startswith('const OUT="#2B2233"'))
end = next(i for i, l in enumerate(game) if l.startswith('function charSVG('))
# charSVG ends at the first line that is exactly "}" after it
stop = next(i for i in range(end, len(game)) if game[i] == '}')
body = game[start:stop + 1]
out = []
for l in body:
    l = re.sub(r'^const (OUT|SKIN|HAIRC|CLOTH)=', r'export const \1=', l)
    l = re.sub(r'^function charSVG\(', 'export function charSVG(', l)
    out.append(l)
head = ['// @ts-nocheck',
        '// Paper-doll character art, ported 1:1 from the Vokaboka game (re-run .design-sync/port_character.py after game changes).',
        'const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",\'"\':"&quot;"}[c]));']
open(r'C:\dev\REA\vokaboka-ds\src\art\character.ts', 'w', encoding='utf-8').write('\n'.join(head + out + ['export { Ci, esc };', '']))
print('ported', len(out), 'lines')
