export const analyzeText = (text: string) => {
    const lower = text.toLowerCase();
  
    let category = "General";
    let urgency = "Medium";
  
    if (lower.includes("food") || lower.includes("hungry")) {
      category = "Food";
      urgency = "High";
    } else if (lower.includes("hospital") || lower.includes("medical")) {
      category = "Medical";
      urgency = "High";
    } else if (lower.includes("school") || lower.includes("education")) {
      category = "Education";
      urgency = "Medium";
    }
  
    return `Category: ${category}, Urgency: ${urgency}`;
  };