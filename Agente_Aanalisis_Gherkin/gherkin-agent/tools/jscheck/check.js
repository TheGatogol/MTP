// Valida la sintaxis de un archivo JS del framework (ES modules + decorators). Lee el código por stdin.
// Salida: {"ok": true} o {"ok": false, "line": N, "message": "..."}
import {parse} from '@babel/parser';

let code = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { code += chunk; });
process.stdin.on('end', () => {
    try {
        parse(code, {sourceType: 'module', plugins: ['decorators-legacy', 'classProperties', 'optionalChaining', 'nullishCoalescingOperator']});
        process.stdout.write(JSON.stringify({ok: true}));
    } catch (e) {
        process.stdout.write(JSON.stringify({ok: false, line: e.loc ? e.loc.line : null, message: String(e.message).slice(0, 200)}));
    }
});
