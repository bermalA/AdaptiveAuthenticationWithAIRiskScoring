import * as tf from '@tensorflow/tfjs';
import { preprocessData } from './preprocessData';
import { fetchUserData } from './fetchData';

// Ana tahmin fonksiyonu
export const predict = async (userId) => {
    try {
        if (!userId) {
            throw new Error("User ID is required");
        }

        // Firestore'dan veriyi çek
        const rawInput = await fetchUserData(userId);

        if (!rawInput) {
            throw new Error("No data found for the given User ID");
        }

        console.log("Fetched Raw Data:", rawInput);

        // Modeli yükle
        const modelPath = '/model.json'; // Public klasöründen modeli yükle
        const model = await tf.loadGraphModel(modelPath);

        // Veriyi preprocess et
        const processedData = preprocessData(rawInput);
        console.log("Processed Data:", processedData);

        // Tensor oluştur ve tahmin yap
        const inputTensor = tf.tensor2d([Object.values(processedData)], [1, 24]);
        const predictionsTensor = model.predict(inputTensor);

        // Sonuçları diziye çevir
        const predictionsArray = await predictionsTensor.array();

        const rndmVal = randomMultiplier()

        console.log("Prediction Result:", predictionsArray);

        return predictionsArray[0]*rndmVal; 
    } catch (error) {
        console.error("Prediction Error:", error.message);
        throw error; 
    }
};


function randomMultiplier(){
    return (Math.random()*(1.1804 -0.1592)+0.1592).toFixed(4)
}
