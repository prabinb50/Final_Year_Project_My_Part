/**
 * Dummy waste detection utility that simulates AI model responses
 * This can be replaced with actual API calls to your ML model in the future
 */
export const detectWaste = async () => {
  // Simulate API delay (1-2 seconds)
  const delay = Math.floor(Math.random() * 1000) + 1000;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Use only bio/non-bio waste types 
  const wasteTypes = ['Biodegradable', 'Non-Biodegradable'];
  const wasteType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
  
  // THIS IS THE KEY PART - COMPLETELY RANDOM BIN STATUS
  const binStatus = Math.random() > 0.5 ? 'Inside' : 'Outside';
  
  // Calculate points (5 if waste is inside bin)
  const points = binStatus === 'Inside' ? 5 : 0;
  
  return {
    wasteType,
    binStatus,
    points,
    success: binStatus === 'Inside',
    timestamp: new Date().toISOString(),
  };
};