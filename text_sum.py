import re
from collections import Counter

def summarize(text, n=2):
    text = re.sub(r'\s+', ' ', text)
    
    sentences = re.split(r'(?<=[.!?]) +', text)
    
    words = re.findall(r'\w+', text.lower())
    freq = Counter(words)

    sentence_scores = {}
    for sentence in sentences:
        for word in re.findall(r'\w+', sentence.lower()):
            if word in freq:
                sentence_scores[sentence] = sentence_scores.get(sentence, 0) + freq[word
    summary = sorted(sentence_scores, key=sentence_scores.get, reverse=True)[:n]
    
    return ' '.join(summary)

text = """Python is a powerful programming language. It is widely used in AI, data science, and web development. 
It is easy to learn and has a large community. Many developers prefer Python because of its simplicity."""

print("Summary:")
print(summarize(text))
