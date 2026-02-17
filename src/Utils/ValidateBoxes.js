function validateBoxes(selectedBoxes) {
  if (selectedBoxes.length > 4) {
    return {
      valid: false,
      message: "You can select maximum 4 boxes"
    };
  }

  // Check if boxes in same line
  const lines = selectedBoxes.map(b => b.line);
  const sameLine = lines.every(l => l === lines[0]);

  if (!sameLine) {
    return {
      valid: false,
      message: "Boxes must be in the same line"
    };
  }

  return { valid: true };
}

module.exports = validateBoxes;
