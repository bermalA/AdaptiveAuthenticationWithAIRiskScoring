const handleUserData = (userId) => {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomFloat = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(6));
  const randomBool = () => Math.random() < 0.5;
  const randomStringFromArray = (array) => array[randomInt(0, array.length - 1)];
  const generateTimestamp = () => new Date().toISOString();

  return {
    "User ID": userId,
    "Round-Trip Time [ms]": randomInt(200, 1000),
    "IP Address": `${randomInt(1, 255)}.${randomInt(0, 255)}.${randomInt(0, 255)}.${randomInt(0, 255)}`,
    "Country": randomStringFromArray(["US", "NO", "IN", "DE", "FR"]),
    "ASN": randomInt(1000, 65000),
    "OS Name and Version": randomStringFromArray(["Windows 10", "Mac OS X 10.15", "iOS 14.1", "Android 11"]),
    "Device Type": randomStringFromArray(["Desktop", "Mac", "iPhone", "iPad", "Android"]),
    "Login Successful": randomBool(),
    "Is Attack IP": randomBool(),
    "Is Account Takeover": randomBool(),
    "Day": randomInt(1, 31),
    "Hour": randomInt(0, 23),
    "Weekday": randomInt(1, 7),
    "Peak Hours": randomInt(0, 1),
    "Parsed Browser": `Browser ${randomInt(1, 50)}`, // Adjusted to match dataset strings
    "City Change": randomInt(0, 1),
    "Region Change": randomInt(0, 1),
    "City Frequency": randomInt(1, 10000),
    "Region Frequency": randomInt(1, 10000),
    "RTT Normalization": randomFloat(0.001, 0.02),
    "Login Success Ratio": randomFloat(0.8, 1),
    "Timestamp": generateTimestamp(),
    "Failed Attempts (10min)": randomFloat(0, 10),
    "Time Delta": randomFloat(0, 10000),
    "Unusual Device": randomInt(0, 1),
  };
};

export { handleUserData };
