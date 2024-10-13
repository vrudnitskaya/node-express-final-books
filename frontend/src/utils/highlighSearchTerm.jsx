export const highlightSearchTerm = (text, searchTerm, isSearchSubmitted) => {
    if(!isSearchSubmitted || !searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const textParts = text.split(regex);

    return textParts.map((part, index) => regex.test(part) ? <mark key={index} className="bg-mustard">{part}</mark> : part);
};