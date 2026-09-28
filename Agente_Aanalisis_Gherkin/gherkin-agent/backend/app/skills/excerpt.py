"""Recorta archivos grandes para mandar a la IA solo lo relevante (con números de línea reales)."""


def merge_ranges(ranges: list[tuple[int, int]]) -> list[tuple[int, int]]:
    out: list[tuple[int, int]] = []
    for a, b in sorted(ranges):
        if out and a <= out[-1][1] + 2:
            out[-1] = (out[-1][0], max(out[-1][1], b))
        else:
            out.append((a, b))
    return out


def excerpt(text: str, ranges: list[tuple[int, int]] | None = None, max_lines: int = 320,
            numbered: bool = True) -> tuple[str, bool]:
    """Devuelve (texto, recortado). Sin ranges o si el archivo cabe, se envía completo."""
    lines = text.split("\n")
    n = len(lines)
    if not ranges or n <= max_lines:
        if n <= max_lines:
            ranges = [(1, n)]
        else:
            ranges = [(1, max_lines)]
    merged = merge_ranges([(max(1, a), min(n, b)) for a, b in ranges])
    out, budget, shown, last = [], max_lines, 0, 0
    for a, b in merged:
        if budget <= 0:
            break
        b = min(b, a + budget - 1)
        if a > last + 1:
            out.append("   …" if numbered else "// …")
        for i in range(a, b + 1):
            out.append(f"{i:>4}| {lines[i - 1]}" if numbered else lines[i - 1])
        shown += b - a + 1
        budget -= b - a + 1
        last = b
    if last < n:
        out.append("   …" if numbered else "// …")
    return "\n".join(out), shown < n


def around(lines: list[int], radius: int = 12) -> list[tuple[int, int]]:
    return [(max(1, l - radius), l + radius) for l in lines if l]
