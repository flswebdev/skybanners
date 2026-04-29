// Bot protection utilities for form submissions

function isGibberishWord(word: string): boolean {
  if (!word || word.length < 6) return false;

  const consonantPattern = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{6,}/;
  if (consonantPattern.test(word)) return true;

  let caseChanges = 0;
  for (let i = 1; i < word.length; i++) {
    const prevIsUpper = word[i - 1] === word[i - 1].toUpperCase() && word[i - 1] !== word[i - 1].toLowerCase();
    const currIsUpper = word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase();
    if (prevIsUpper !== currIsUpper) caseChanges++;
  }
  if (word.length > 10 && caseChanges / word.length > 0.5) return true;

  const vowels = (word.match(/[aeiouAEIOU]/g) || []).length;
  const letters = (word.match(/[a-zA-Z]/g) || []).length;
  if (letters > 12) {
    const vowelRatio = vowels / letters;
    if (vowelRatio < 0.1) return true;
  }

  return false;
}

export function isGibberish(text: string): boolean {
  if (!text || text.length < 8) return false;

  const words = text.split(/\s+/);
  let gibberishCount = 0;
  for (const word of words) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '');
    if (isGibberishWord(cleanWord)) gibberishCount++;
  }

  if (words.length > 0 && gibberishCount / words.length > 0.5) return true;

  const noSpaces = text.replace(/\s+/g, '');
  if (words.length <= 2 && noSpaces.length > 15) {
    return isGibberishWord(noSpaces);
  }

  return false;
}

export function isSpamContent(name: string, message: string): { isSpam: boolean; reason: string } {
  if (isGibberish(name)) {
    return { isSpam: true, reason: 'Invalid name format' };
  }
  if (isGibberish(message)) {
    return { isSpam: true, reason: 'Message appears to be spam' };
  }
  if (message.length < 20 && /^[a-zA-Z]+$/.test(message.replace(/\s/g, ''))) {
    if (isGibberish(message)) {
      return { isSpam: true, reason: 'Message appears to be spam' };
    }
  }
  return { isSpam: false, reason: '' };
}

export function isHoneypotFilled(value: string | undefined | null): boolean {
  return Boolean(value && String(value).trim() !== '');
}

export function isSubmittedTooQuickly(timing: number | undefined | null, minTimeMs = 3000): boolean {
  if (timing === undefined || timing === null) return false;
  return typeof timing === 'number' && timing < minTimeMs;
}
