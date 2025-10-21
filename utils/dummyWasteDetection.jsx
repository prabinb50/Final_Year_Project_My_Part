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
  
  // Random bin status (inside/outside)
  const binStatus = Math.random() > 0.5 ? 'Inside' : 'Outside';
  
  // awards 100 points for successful detection 
  const points = binStatus === 'Inside' ? 100 : 0;
  
  return {
    wasteType,
    binStatus,
    points,
    success: binStatus === 'Inside',
    timestamp: new Date().toISOString(),
  };
};