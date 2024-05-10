function formatTagId(id) {
    const tagMappings = {
        selfUnderstanding: 'self-understanding',
        // Add more mappings here as needed
    };
    // Return the human-readable name or the original ID if not mapped
    return tagMappings[id] || id;
}

export default formatTagId