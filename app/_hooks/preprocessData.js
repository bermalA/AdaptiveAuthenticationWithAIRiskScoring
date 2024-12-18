import hashlib from 'crypto';

// IP Adresini Sayıya Çevir
const convertIpToInt = (ipAddress) => {
    return ipAddress
        .split('.')
        .reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
};

// User ID'yi Hashleyerek Benzersiz Sayıya Dönüştür
const hashUserId = (userId) => {
    const hash = hashlib.createHash('md5').update(userId).digest('hex');
    return parseInt(hash, 16) % 10 ** 10; // 10 basamaklı sayı
};

// Kategorik Verileri Encode Et
const categoryMapping = {
    Country: ["US", "NO", "IN", "DE", "FR"],
    OS: ["Windows 10", "Mac OS X 10.15", "iOS 14.1", "Android 11"],
    Device: ["Desktop", "Mac", "iPhone", "iPad", "Android"],
    Browser: Array.from({ length: 50 }, (_, i) => `Browser ${i + 1}`)
};

const encodeCategory = (value, category) => {
    return categoryMapping[category]?.indexOf(value) ?? 0;
};

// Ana Preprocessing Fonksiyonu
export const preprocessData = (rawData) => {
    return {
        "User ID": hashUserId(rawData["User ID"]),
        "Round-Trip Time [ms]": rawData["Round-Trip Time [ms]"],
        "IP Address": convertIpToInt(rawData["IP Address"]),
        "Country": encodeCategory(rawData["Country"], "Country"),
        "ASN": rawData["ASN"],
        "OS Name and Version": encodeCategory(rawData["OS Name and Version"], "OS"),
        "Device Type": encodeCategory(rawData["Device Type"], "Device"),
        "Login Successful": rawData["Login Successful"] ? 1 : 0,
        "Is Attack IP": rawData["Is Attack IP"] ? 1 : 0,
        "Is Account Takeover": rawData["Is Account Takeover"] ? 1 : 0,
        "Day": rawData["Day"],
        "Hour": rawData["Hour"],
        "Weekday": rawData["Weekday"],
        "Peak Hours": rawData["Peak Hours"],
        "Parsed Browser": encodeCategory(rawData["Parsed Browser"], "Browser"),
        "City Change": rawData["City Change"],
        "Region Change": rawData["Region Change"],
        "City Frequency": rawData["City Frequency"],
        "Region Frequency": rawData["Region Frequency"],
        "RTT Normalization": rawData["RTT Normalization"],
        "Login Success Ratio": rawData["Login Success Ratio"],
        "Failed Attempts (10min)": rawData["Failed Attempts (10min)"],
        "Time Delta": rawData["Time Delta"],
        "Unusual Device": rawData["Unusual Device"],
    };
};
