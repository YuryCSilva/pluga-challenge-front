export function normalizedText(value: string) {
  if (!value || value == '') return value;
  return value.toLowerCase();
}
