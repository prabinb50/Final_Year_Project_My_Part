// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PointsContext = createContext();

// // starting value matches the hardcoded amount
// const INITIAL_POINTS = 1576;

// export function PointsProvider({ children }) {
//     const [points, setPoints] = useState(INITIAL_POINTS);

//     // Load saved points on app start
//     useEffect(() => {
//         const loadPoints = async () => {
//             try {
//                 const savedPoints = await AsyncStorage.getItem('userPoints');
//                 if (savedPoints !== null) {
//                     setPoints(parseInt(savedPoints, 10));
//                 }
//             } catch (error) {
//                 console.error('Failed to load points:', error);
//             }
//         };

//         loadPoints();
//     }, []);

//     // Save points whenever they change
//     useEffect(() => {
//         const savePoints = async () => {
//             try {
//                 await AsyncStorage.setItem('userPoints', points.toString());
//             } catch (error) {
//                 console.error('Failed to save points:', error);
//             }
//         };

//         savePoints();
//     }, [points]);

//     // Function to add points
//     const addPoints = (amount) => {
//         setPoints(current => current + amount);
//     };

//     return (
//         <PointsContext.Provider value={{ points, addPoints }}>
//             {children}
//         </PointsContext.Provider>
//     );
// }

// // Custom hook to use the points context
// export function usePoints() {
//     const context = useContext(PointsContext);
//     if (context === undefined) {
//         throw new Error('usePoints must be used within a PointsProvider');
//     }
//     return context;
// }






import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PointsContext = createContext();

// Starting value changed to 0 (previously 1576)
const INITIAL_POINTS = 0;

export function PointsProvider({ children }) {
    const [points, setPoints] = useState(INITIAL_POINTS);

    // Load saved points on app start
    useEffect(() => {
        const loadPoints = async () => {
            try {
                const savedPoints = await AsyncStorage.getItem('userPoints');
                if (savedPoints !== null) {
                    setPoints(parseInt(savedPoints, 10));
                }
            } catch (error) {
                console.error('Failed to load points:', error);
            }
        };

        loadPoints();
    }, []);

    // Save points whenever they change
    useEffect(() => {
        const savePoints = async () => {
            try {
                await AsyncStorage.setItem('userPoints', points.toString());
            } catch (error) {
                console.error('Failed to save points:', error);
            }
        };

        savePoints();
    }, [points]);

    // Function to add points
    const addPoints = (amount) => {
        setPoints(current => current + amount);
    };

    // New function to reset points to zero
    const resetPoints = async () => {
        setPoints(0);
        try {
            await AsyncStorage.setItem('userPoints', '0');
        } catch (error) {
            console.error('Failed to reset points:', error);
        }
    };

    return (
        <PointsContext.Provider value={{ points, addPoints, resetPoints }}>
            {children}
        </PointsContext.Provider>
    );
}

// Custom hook to use the points context
export function usePoints() {
    const context = useContext(PointsContext);
    if (context === undefined) {
        throw new Error('usePoints must be used within a PointsProvider');
    }
    return context;
}