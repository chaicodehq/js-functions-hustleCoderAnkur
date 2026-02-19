/**
 * 🎨 Holi Color Mixer - Pure Functions
 *
 * Holi ka festival hai! Rang mix karne hain. Lekin PURE FUNCTIONS use
 * karne hain — matlab:
 *   1. Input ko KABHI modify mat karo (no mutation)
 *   2. Same input pe HAMESHA same output aaye
 *   3. Koi side effects nahi (no console.log, no external state changes)
 *
 * Har color object: { name: string, r: number, g: number, b: number }
 *   where r, g, b are 0-255 (RGB values)
 *
 * Functions:
 *
 *   1. mixColors(color1, color2)
 *      - Mix two colors by averaging their RGB values
 *      - New name: `${color1.name}-${color2.name}`
 *      - Round RGB values to integers
 *      - MUST NOT modify color1 or color2
 *      - Agar either color null/invalid, return null
 *
 *   2. adjustBrightness(color, factor)
 *      - Multiply each RGB by factor, clamp to 0-255 range
 *      - Round to integers using Math.round
 *      - Name stays same
 *      - MUST NOT modify original color
 *      - Agar color null or factor not number, return null
 *
 *   3. addToPalette(palette, color)
 *      - Return NEW array with color added at end
 *      - MUST NOT modify original palette array
 *      - Agar palette not array, return [color]
 *      - Agar color null/invalid, return copy of palette
 *
 *   4. removeFromPalette(palette, colorName)
 *      - Return NEW array without the color with that name
 *      - MUST NOT modify original palette
 *      - Agar palette not array, return []
 *
 *   5. mergePalettes(palette1, palette2)
 *      - Merge two palettes into NEW array
 *      - No duplicate names (keep first occurrence)
 *      - MUST NOT modify either original palette
 *      - Agar either not array, treat as empty array
 *
 * Hint: Use spread operator [...arr], Object spread {...obj} to create
 *   copies. NEVER use push, splice, or direct property assignment on inputs.
 *
 * @example
 *   const red = { name: "red", r: 255, g: 0, b: 0 };
 *   const blue = { name: "blue", r: 0, g: 0, b: 255 };
 *   mixColors(red, blue)
 *   // => { name: "red-blue", r: 128, g: 0, b: 128 }
 *   // red and blue objects are UNCHANGED
 */
export function mixColors(color1, color2) {

  if (typeof color1 === "undefined" || typeof color2 === "undefined" || color1 === null || color2 === null || !color1 || !color2 ) {
    return null
  }
  
  const newName = `${color1.name}-${color2.name}`
  const r = Math.ceil((color1.r + color2.r)/2)  
  const g = Math.ceil((color1.g + color2.g)/2)  
  const b = Math.ceil((color1.b + color2.b)/2)  
    
return {name:newName,r:r, g:g, b:b}

}

export function adjustBrightness(color, factor) {

if (!color || typeof color === null || typeof factor !== 'number') {
  return null
  }
  
  const clamp = (value) => Math.min(255, Math.max(0, Math.round(value))) 

  const r = clamp(color.r * factor)
  const g = clamp(color.g * factor)
  const b = clamp(color.b * factor)
  
  return { name:color.name, r:r,g:g,b:b } 

}

export function addToPalette(palette, color) {

  if (!Array.isArray(palette)) {
    return [color];
  }

  const copy = [...palette];

  if (!color) {
    return copy;
  }

  return [...copy, color];
}

export function removeFromPalette(palette, colorName) {

  if (!Array.isArray(palette)) {
    return [];
  }

  const copy = [...palette];

  if (!colorName) {
    return copy;
  }

  const filtered = copy.filter(color => color.name !== colorName);

  return filtered;
}

export function mergePalettes(palette1, palette2) {

  const p1 = Array.isArray(palette1) ? palette1 : [];
  const p2 = Array.isArray(palette2) ? palette2 : [];

  const combined = [...p1, ...p2];

  const seen = new Set();
  const result = [];

  for (const color of combined) {
    if (color && !seen.has(color.name)) {
      seen.add(color.name);
      result.push(color);
    }
  }

  return result;
}
